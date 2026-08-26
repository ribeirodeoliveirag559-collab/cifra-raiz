/**
 * Helpers para disparar eventos do Meta Pixel programaticamente.
 * Uso: import { trackInitiateCheckout } from "@/lib/fbpixel"
 */
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function fbTrack(event: string, params?: Record<string, unknown>) {
  // Nunca deixa um erro de tracking (pixel bloqueado, script de terceiro
  // quebrado, etc.) impedir a navegação do usuário — só registra e segue.
  try {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", event, params);
    }
  } catch (err) {
    console.error("[fbpixel] tracking falhou (ignorado):", err);
  }
}

/** Clicou em um CTA que leva ao checkout */
export function trackInitiateCheckout(value = 29.5) {
  fbTrack("InitiateCheckout", { value, currency: "BRL" });
}

/** Cliente criou conta pela primeira vez (primeiro acesso) */
export function trackCompleteRegistration() {
  fbTrack("CompleteRegistration");
}

/** Cliente fez login (visitante recorrente engajado) */
export function trackLead() {
  fbTrack("Lead");
}
