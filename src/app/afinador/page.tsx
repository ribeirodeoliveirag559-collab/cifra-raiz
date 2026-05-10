"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Header from "@/components/Header";
import { IconCheck, IconStop } from "@/components/Icons";

/* ═══════════════════════════════════════════
   DADOS DAS CORDAS (afinação padrão)
═══════════════════════════════════════════ */
const CORDAS = [
  { idx: 0, nota: "E", oitava: 2, freq: 82.41,  nome: "Mi"  },
  { idx: 1, nota: "A", oitava: 2, freq: 110.0,  nome: "Lá"  },
  { idx: 2, nota: "D", oitava: 3, freq: 146.83, nome: "Ré"  },
  { idx: 3, nota: "G", oitava: 3, freq: 196.0,  nome: "Sol" },
  { idx: 4, nota: "B", oitava: 3, freq: 246.94, nome: "Si"  },
  { idx: 5, nota: "E", oitava: 4, freq: 329.63, nome: "Mi"  },
] as const;

/* ═══════════════════════════════════════════
   ALGORITMO YIN
   ─ De Cheveigné & Kawahara (2002)
   Padrão-ouro para detecção monofônica.

   Etapas:
   1. Função diferença d(τ) = Σ(x[j] − x[j+τ])²
   2. CMND: d'(τ) = d(τ) · τ / Σd(k) k=1..τ
   3. Threshold absoluto (procura primeiro vale < limiar)
   4. Interpolação parabólica para sub-sample accuracy

   Otimização: como sabemos a corda alvo, limitamos
   a busca a uma faixa de ±35 % em torno dela.
═══════════════════════════════════════════ */
function detectarPitchYIN(buffer: Float32Array, sampleRate: number, targetFreq: number): number | null {
  // RMS — descarta silêncio
  let rms = 0;
  for (let i = 0; i < buffer.length; i++) rms += buffer[i] * buffer[i];
  rms = Math.sqrt(rms / buffer.length);
  if (rms < 0.006) return null;

  // Faixa de busca centrada na corda alvo (±35 %)
  const minFreq = targetFreq * 0.65;
  const maxFreq = targetFreq * 1.35;
  const tauMin  = Math.max(2, Math.floor(sampleRate / maxFreq));
  const tauMax  = Math.min(buffer.length >> 1, Math.ceil(sampleRate / minFreq));
  if (tauMax <= tauMin) return null;

  const W = buffer.length >> 1; // janela de análise
  const d = new Float32Array(tauMax + 1);

  // Etapas 1 + 2: diferença + CMND com soma cumulativa
  let cumulSum = 0;
  d[0] = 1;
  for (let tau = 1; tau <= tauMax; tau++) {
    let sum = 0;
    for (let i = 0; i < W; i++) {
      const delta = buffer[i] - buffer[i + tau];
      sum += delta * delta;
    }
    cumulSum += sum;
    d[tau] = cumulSum > 0 ? (sum * tau) / cumulSum : 1;
  }

  // Etapa 3: primeiro mínimo abaixo do threshold dentro da faixa
  const THRESHOLD = 0.15;
  let tau = -1;
  for (let t = tauMin; t <= tauMax; t++) {
    if (d[t] < THRESHOLD) {
      // refina até o vale local
      while (t + 1 <= tauMax && d[t + 1] < d[t]) t++;
      tau = t;
      break;
    }
  }

  // Fallback: se nada cruzou o threshold, pega o menor valor
  if (tau === -1) {
    let min = Infinity;
    for (let t = tauMin; t <= tauMax; t++) {
      if (d[t] < min) { min = d[t]; tau = t; }
    }
    if (min > 0.5) return null; // sinal ruim
  }

  // Etapa 4: interpolação parabólica
  let tauRef = tau;
  if (tau > tauMin && tau < tauMax) {
    const s0 = d[tau - 1], s1 = d[tau], s2 = d[tau + 1];
    const denom = 2 * (2 * s1 - s0 - s2);
    if (Math.abs(denom) > 1e-6) tauRef = tau + (s2 - s0) / denom;
  }

  return sampleRate / tauRef;
}

/* Mediana móvel para suavizar oscilações de pitch */
function medianaPequena(arr: number[]): number {
  const sorted = [...arr].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
}

/* ═══════════════════════════════════════════
   COMPONENTE
═══════════════════════════════════════════ */
export default function AfinadorPage() {
  const [sel,   setSel]   = useState<number | null>(null);
  const [micOn, setMicOn] = useState(false);
  const [cents, setCents] = useState<number | null>(null);
  const [hz,    setHz]    = useState<number | null>(null);
  const [erro,  setErro]  = useState<string | null>(null);
  const [pulse, setPulse] = useState(false);

  const ctxRef          = useRef<AudioContext | null>(null);
  const analyserRef     = useRef<AnalyserNode  | null>(null);
  const streamRef       = useRef<MediaStream   | null>(null);
  const frameRef        = useRef<number        | null>(null);
  const selRef          = useRef<number | null>(null);
  const okRef           = useRef(false);
  const histRef         = useRef<number[]>([]);      // mediana móvel
  const lastValidTime   = useRef<number>(0);         // timestamp da última leitura válida
  const lastValidCents  = useRef<number | null>(null); // último cents válido
  const lastValidHz     = useRef<number | null>(null);  // último hz válido
  const smoothCents     = useRef<number | null>(null);  // cents suavizado (lerp)
  const holdTimerRef    = useRef<ReturnType<typeof setTimeout> | null>(null);

  const HOLD_MS   = 2000;  // mantém leitura por 2s após silêncio
  const LERP      = 0.25;  // suavização do ponteiro (0 = parado, 1 = instantâneo)

  useEffect(() => { selRef.current = sel; }, [sel]);

  /* loop principal */
  const analisar = useCallback(() => {
    const analyser = analyserRef.current;
    const ctx      = ctxRef.current;
    if (!analyser || !ctx || ctx.state === "closed") return;

    if (selRef.current === null) {
      frameRef.current = requestAnimationFrame(analisar);
      return;
    }

    const buf = new Float32Array(analyser.fftSize);
    analyser.getFloatTimeDomainData(buf);

    const alvo = CORDAS[selRef.current];
    const freq = detectarPitchYIN(buf, ctx.sampleRate, alvo.freq);

    const now = performance.now();

    if (freq !== null && freq > 0) {
      // ─ Som detectado ─
      histRef.current.push(freq);
      if (histRef.current.length > 7) histRef.current.shift();
      const f = medianaPequena(histRef.current);
      const c = 1200 * Math.log2(f / alvo.freq);

      // Suaviza o ponteiro com lerp (evita tremida)
      smoothCents.current = smoothCents.current === null
        ? c
        : smoothCents.current + (c - smoothCents.current) * LERP;

      const smoothed = Math.round(smoothCents.current * 10) / 10;

      // Registra hold
      lastValidTime.current  = now;
      lastValidCents.current = smoothed;
      lastValidHz.current    = Math.round(f * 100) / 100;

      // Cancela qualquer timer de clear pendente
      if (holdTimerRef.current) {
        clearTimeout(holdTimerRef.current);
        holdTimerRef.current = null;
      }

      setHz(lastValidHz.current);
      setCents(smoothed);

      if (Math.abs(c) < 5 && !okRef.current) {
        okRef.current = true;
        setPulse(true);
        if (navigator.vibrate) navigator.vibrate(120);
        setTimeout(() => setPulse(false), 800);
      } else if (Math.abs(c) >= 5) {
        okRef.current = false;
      }

    } else {
      // ─ Silêncio detectado ─
      const elapsed = now - lastValidTime.current;

      if (elapsed < HOLD_MS && lastValidCents.current !== null) {
        // Dentro do hold: mantém última leitura visível
        // (não faz nada — estado já está setado)
      } else if (elapsed >= HOLD_MS) {
        // Passou do hold: agenda clear uma única vez
        if (!holdTimerRef.current && lastValidCents.current !== null) {
          holdTimerRef.current = setTimeout(() => {
            setCents(null);
            setHz(null);
            lastValidCents.current = null;
            lastValidHz.current    = null;
            smoothCents.current    = null;
            histRef.current        = [];
            okRef.current          = false;
            holdTimerRef.current   = null;
          }, 0);
        }
      }
    }

    frameRef.current = requestAnimationFrame(analisar);
  }, []);

  /* iniciar microfone */
  async function iniciarMic(): Promise<boolean> {
    if (micOn) return true;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: false,
          noiseSuppression: false,
          autoGainControl:  false,
          channelCount:     1,
        },
        video: false,
      });
      const ctx      = new AudioContext({ sampleRate: 44100 });
      const analyser = ctx.createAnalyser();
      analyser.fftSize               = 4096;
      analyser.smoothingTimeConstant = 0;
      ctx.createMediaStreamSource(stream).connect(analyser);
      streamRef.current   = stream;
      ctxRef.current      = ctx;
      analyserRef.current = analyser;
      setMicOn(true);
      setErro(null);
      return true;
    } catch {
      setErro("Sem acesso ao microfone. Verifique as permissões.");
      return false;
    }
  }

  function resetarLeitura() {
    if (holdTimerRef.current) { clearTimeout(holdTimerRef.current); holdTimerRef.current = null; }
    histRef.current       = [];
    lastValidCents.current = null;
    lastValidHz.current   = null;
    lastValidTime.current = 0;
    smoothCents.current   = null;
    okRef.current         = false;
    setCents(null);
    setHz(null);
  }

  async function selecionar(idx: number) {
    if (sel === idx) {
      setSel(null);
      selRef.current = null;
      resetarLeitura();
      return;
    }
    const ok = await iniciarMic();
    if (!ok) return;
    resetarLeitura();
    setSel(idx);
    selRef.current = idx;
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(analisar);
  }

  function parar() {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    streamRef.current?.getTracks().forEach((t) => t.stop());
    if (ctxRef.current?.state !== "closed") ctxRef.current?.close();
    ctxRef.current = analyserRef.current = streamRef.current = null;
    setMicOn(false); setSel(null); selRef.current = null;
    resetarLeitura();
  }

  useEffect(() => () => parar(), []);

  /* ──────────── derivados ──────────── */
  const corda    = sel !== null ? CORDAS[sel] : null;
  const afinado  = cents !== null && Math.abs(cents) < 5;
  const apertar  = cents !== null && cents < -5;
  const afrouxar = cents !== null && cents > 5;

  // posição do ponteiro (clamp em ±50 cents para visualização)
  const pct = cents !== null
    ? 50 + Math.max(-48, Math.min(48, cents))
    : 50;

  // Cor do ponteiro segundo distância
  const corPonteiro = afinado
    ? "#22c55e"
    : cents !== null && Math.abs(cents) < 15
    ? "#eab308"
    : "#ef4444";

  return (
    <>
      <Header />
      <main
        className="flex-1 flex flex-col"
        style={{
          minHeight:  "100svh",
          background: "radial-gradient(ellipse at top, #1a1612 0%, #0a0807 60%)",
        }}
      >
        {/* ═════════════════════════════════════
            PAINEL SUPERIOR — DISPLAY
        ═════════════════════════════════════ */}
        <section className="flex-shrink-0 px-6 pt-10 pb-6 flex flex-col items-center" style={{ minHeight: 320 }}>

          {corda ? (
            <>
              {/* Frequência detectada (sub-display) */}
              <div
                className="font-mono text-xs mb-1"
                style={{
                  color:        "#3a342e",
                  letterSpacing: 4,
                  height:        14,
                }}
              >
                {hz !== null ? `${hz.toFixed(2)} Hz` : "── Hz"}
              </div>

              {/* Nota grande */}
              <div className="relative" style={{ height: 130 }}>
                <div
                  className="font-display font-black"
                  style={{
                    fontSize:      120,
                    lineHeight:    1,
                    color:         afinado ? "#22c55e" : "#fbf6ee",
                    transform:     pulse ? "scale(1.06)" : "scale(1)",
                    transition:    "color .2s, transform .25s ease-out",
                    letterSpacing: -4,
                    textShadow:    afinado ? "0 0 40px rgba(34,197,94,0.4)" : "none",
                  }}
                >
                  {corda.nota}
                  <span
                    style={{
                      fontSize:    44,
                      fontWeight:  700,
                      verticalAlign: "super",
                      opacity:     0.55,
                      marginLeft:  4,
                    }}
                  >
                    {corda.oitava}
                  </span>
                </div>
              </div>

              {/* Nome em PT + freq de referência */}
              <p
                className="text-[11px] font-semibold mb-7 mt-1"
                style={{ color: "#5a4f44", letterSpacing: 5 }}
              >
                {corda.nome.toUpperCase()}  ·  {corda.freq.toFixed(2)} HZ
              </p>

              {/* ── MEDIDOR ── */}
              <div className="w-full" style={{ maxWidth: 320 }}>
                {/* Régua de cents (-50 a +50) */}
                <div className="flex justify-between mb-2 font-mono text-[10px]" style={{ color: "#3a342e" }}>
                  <span>−50</span>
                  <span>−25</span>
                  <span style={{ color: afinado ? "#22c55e" : "#5a4f44" }}>0</span>
                  <span>+25</span>
                  <span>+50</span>
                </div>

                {/* Barra principal */}
                <div
                  className="relative rounded-full overflow-visible"
                  style={{
                    height:     6,
                    background: "linear-gradient(90deg, rgba(239,68,68,0.15) 0%, rgba(234,179,8,0.15) 30%, rgba(34,197,94,0.25) 50%, rgba(234,179,8,0.15) 70%, rgba(239,68,68,0.15) 100%)",
                    boxShadow:  "inset 0 1px 3px rgba(0,0,0,0.6)",
                  }}
                >
                  {/* Marcadores de tick */}
                  {[10, 25, 40, 60, 75, 90].map((p) => (
                    <span
                      key={p}
                      className="absolute top-0 bottom-0"
                      style={{ left: `${p}%`, width: 1, background: "rgba(255,255,255,0.04)" }}
                    />
                  ))}
                  {/* Linha central */}
                  <div
                    className="absolute -top-1 -bottom-1"
                    style={{
                      left:       "50%",
                      width:      2,
                      background: afinado ? "#22c55e" : "rgba(255,255,255,0.25)",
                      boxShadow:  afinado ? "0 0 8px #22c55e" : "none",
                      transition: "all .2s",
                    }}
                  />

                  {/* Ponteiro */}
                  {cents !== null && (
                    <div
                      className="absolute"
                      style={{
                        top:        "50%",
                        left:       `${pct}%`,
                        width:      18,
                        height:     18,
                        marginTop:  -9,
                        marginLeft: -9,
                        borderRadius: "50%",
                        background: `radial-gradient(circle at 35% 35%, ${corPonteiro}, ${afinado ? "#16a34a" : Math.abs(cents) < 15 ? "#a16207" : "#991b1b"})`,
                        boxShadow:  `0 0 12px ${corPonteiro}99, 0 2px 4px rgba(0,0,0,0.5)`,
                        transition: "left .1s ease-out, background .15s",
                      }}
                    />
                  )}
                </div>

                {/* Valor de cents abaixo */}
                <div className="text-center mt-5" style={{ minHeight: 28 }}>
                  {cents === null ? (
                    <span
                      className="text-xs font-medium animate-pulse"
                      style={{ color: "#3a342e", letterSpacing: 3 }}
                    >
                      TOQUE A CORDA {corda.nome.toUpperCase()}
                    </span>
                  ) : afinado ? (
                    <span
                      className="text-base font-bold flex items-center justify-center gap-1.5"
                      style={{ color: "#22c55e", letterSpacing: 2 }}
                    >
                      <IconCheck size={16} /> AFINADO
                    </span>
                  ) : (
                    <span
                      className="text-sm font-semibold flex items-center justify-center gap-1"
                      style={{
                        color:         apertar ? "#f87171" : "#60a5fa",
                        letterSpacing: 1,
                      }}
                    >
                      {apertar
                        ? <><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg> APERTAR</>
                        : <><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg> AFROUXAR</>
                      }
                      <span
                        className="ml-2 font-mono"
                        style={{ color: "#5a4f44", fontSize: 12 }}
                      >
                        {Math.abs(Math.round(cents))} cents
                      </span>
                    </span>
                  )}
                </div>
              </div>
            </>
          ) : (
            /* Estado vazio */
            <div className="flex flex-col items-center justify-center pt-8">
              <div
                className="mb-5 flex items-center justify-center"
                style={{
                  width:         96,
                  height:        96,
                  borderRadius:  "50%",
                  background:    "radial-gradient(circle, rgba(212,144,10,0.08), transparent)",
                  border:        "1px dashed #2a241e",
                }}
              >
                <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#3a342e" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
              </div>
              <p
                className="font-semibold text-xs mb-2"
                style={{ color: "#5a4f44", letterSpacing: 4 }}
              >
                ESCOLHA UMA CORDA
              </p>
              <p className="text-[11px]" style={{ color: "#3a342e" }}>
                Toque no botão de qualquer corda para começar
              </p>
              {erro && (
                <p
                  className="mt-6 text-xs text-center px-6 py-2 rounded-full"
                  style={{
                    color:      "#fca5a5",
                    background: "rgba(127,29,29,0.2)",
                    border:     "1px solid rgba(127,29,29,0.3)",
                  }}
                >
                  {erro}
                </p>
              )}
            </div>
          )}
        </section>

        {/* ═════════════════════════════════════
            DIVISOR
        ═════════════════════════════════════ */}
        <div className="mx-6" style={{ height: 1, background: "linear-gradient(90deg, transparent, #2a241e, transparent)" }} />

        {/* ═════════════════════════════════════
            PAINEL INFERIOR — CORDAS
        ═════════════════════════════════════ */}
        <section className="flex-1 flex flex-col items-center justify-end pt-6 pb-10 px-4">

          <div
            className="flex items-end justify-center w-full"
            style={{ maxWidth: 360, height: 280, gap: 4 }}
          >
            {CORDAS.map((c) => {
              const active   = sel === c.idx;
              const ok       = active && afinado;
              const lblCor   = ok ? "#22c55e" : active ? "#D4900A" : "#3a342e";
              const cordaCor = ok ? "#22c55e" : active ? "#D4900A" : "#2a241e";
              // espessura realista das cordas
              const espessuras = [4, 3.5, 3, 2.5, 2, 1.5];
              const thick      = espessuras[c.idx];

              return (
                <button
                  key={c.idx}
                  onClick={() => selecionar(c.idx)}
                  className="flex flex-col items-center focus:outline-none active:scale-95"
                  style={{
                    flex:       1,
                    height:     "100%",
                    maxWidth:   58,
                    transition: "transform .1s",
                  }}
                  aria-label={`Afinar corda ${c.nome}`}
                >
                  {/* Corda — linha vertical com gradiente realista */}
                  <div className="flex-1 flex justify-center w-full" style={{ position: "relative" }}>
                    <div
                      style={{
                        width:        active ? thick + 1 : thick,
                        height:       "100%",
                        background:   active
                          ? `linear-gradient(180deg, transparent 0%, ${cordaCor}33 8%, ${cordaCor} 25%, ${cordaCor} 100%)`
                          : `linear-gradient(180deg, transparent 0%, ${cordaCor}66 12%, ${cordaCor} 30%, ${cordaCor} 100%)`,
                        borderRadius: 4,
                        boxShadow:    active
                          ? `0 0 14px ${cordaCor}99, inset 0 0 1px rgba(255,255,255,0.3)`
                          : "inset 0 0 1px rgba(255,255,255,0.1)",
                        transition:   "all .25s",
                        opacity:      active ? 1 : 0.5,
                      }}
                    />
                  </div>

                  {/* Pêndulo (gota) */}
                  <div
                    style={{
                      width:        52,
                      height:       66,
                      borderRadius: "50% 50% 48% 48% / 38% 38% 62% 62%",
                      background:   ok
                        ? "linear-gradient(160deg, #4ade80 0%, #16a34a 50%, #15803d 100%)"
                        : active
                        ? "linear-gradient(160deg, #fbbf24 0%, #d4900a 50%, #92400e 100%)"
                        : "linear-gradient(160deg, #1c1814 0%, #100d0a 100%)",
                      border:       active
                        ? `1.5px solid ${ok ? "#86efac" : "#fcd34d"}`
                        : "1px solid #2a241e",
                      boxShadow:    active
                        ? `0 6px 24px ${cordaCor}66, inset 0 1px 1px rgba(255,255,255,0.2), inset 0 -2px 4px rgba(0,0,0,0.3)`
                        : "0 2px 8px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.04)",
                      display:      "flex",
                      alignItems:   "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      marginTop:    -2,
                      transition:   "all .25s",
                      position:     "relative",
                    }}
                  >
                    {/* Reflexo superior */}
                    {active && (
                      <span
                        style={{
                          position:  "absolute",
                          top:       6,
                          left:      "30%",
                          width:     "30%",
                          height:    8,
                          borderRadius: "50%",
                          background: "rgba(255,255,255,0.25)",
                          filter:    "blur(2px)",
                          pointerEvents: "none",
                        }}
                      />
                    )}
                    <span
                      style={{
                        fontSize:   16,
                        fontWeight: 800,
                        lineHeight: 1,
                        color:      active ? "#fff" : "#3a342e",
                        textShadow: active ? "0 1px 2px rgba(0,0,0,0.3)" : "none",
                      }}
                    >
                      {c.nota}
                    </span>
                    <span
                      style={{
                        fontSize:   10,
                        fontWeight: 700,
                        color:      active ? "rgba(255,255,255,0.7)" : "#2a241e",
                        marginTop:  1,
                      }}
                    >
                      {c.oitava}
                    </span>
                  </div>

                  {/* Nome em PT */}
                  <span
                    className="mt-3 font-bold uppercase"
                    style={{
                      fontSize:      10,
                      color:         lblCor,
                      letterSpacing: 2,
                      transition:    "color .25s",
                    }}
                  >
                    {c.nome}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Info inferior */}
          <p className="mt-8 text-[10px] font-mono" style={{ color: "#3a342e", letterSpacing: 2 }}>
            EADGBE  ·  AFINAÇÃO PADRÃO
          </p>
        </section>

        {/* Botão parar */}
        {micOn && (
          <div className="flex justify-center pb-24 md:pb-8">
            <button
              onClick={parar}
              className="flex items-center gap-2 px-5 py-2 rounded-full text-[10px] font-bold uppercase transition-colors"
              style={{
                color:         "#fca5a5",
                background:    "rgba(127,29,29,0.15)",
                border:        "1px solid rgba(127,29,29,0.3)",
                letterSpacing: 2,
              }}
            >
              <IconStop size={10} /> Parar microfone
            </button>
          </div>
        )}
      </main>
    </>
  );
}
