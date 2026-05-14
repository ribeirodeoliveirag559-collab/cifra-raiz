/**
 * POST /api/webhooks/ggcheckout
 *
 * Recebe eventos do GGCheckout e:
 *  1. Cria a conta no Supabase automaticamente (se não existir)
 *  2. Ativa o plano PRO
 *  3. Envia e-mail de acesso via Supabase (invite link)
 */
import { NextRequest, NextResponse } from "next/server";
import { createHmac } from "crypto";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://placeholder.supabase.co",
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? "placeholder"
);

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const signature = req.headers.get("x-webhook-signature") ?? "";
  const eventType = req.headers.get("x-ggcheckout-event") ?? "";

  // ── Verificação de assinatura ─────────────────────────────────────────────
  const secret = process.env.GGCHECKOUT_WEBHOOK_SECRET;
  if (secret) {
    const expected =
      "sha256=" + createHmac("sha256", secret).update(rawBody).digest("hex");
    if (signature !== expected) {
      console.error("[webhook] assinatura inválida");
      return NextResponse.json({ error: "Assinatura inválida" }, { status: 401 });
    }
  }

  // ── Só processa pagamentos confirmados ────────────────────────────────────
  if (eventType !== "payment.paid" && eventType !== "pix.paid" && eventType !== "card.paid") {
    return NextResponse.json({ received: true });
  }

  let payload: any;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Payload inválido" }, { status: 400 });
  }

  const email: string | undefined = payload?.payment?.email;
  const paymentId: string | undefined = payload?.payment?.id;
  const nome: string | undefined = payload?.payment?.name;

  if (!email) {
    console.error("[webhook] e-mail ausente no payload");
    return NextResponse.json({ error: "E-mail ausente" }, { status: 400 });
  }

  const baseUrl = process.env.NEXT_PUBLIC_URL ?? "https://cifra-raiz.vercel.app";

  // ── Verifica se usuário já existe ─────────────────────────────────────────
  const { data: usersData } = await supabaseAdmin.auth.admin.listUsers();
  const existingUser = usersData?.users?.find(
    (u) => u.email?.toLowerCase() === email.toLowerCase()
  );

  let userId: string;

  if (existingUser) {
    // Usuário já existe — só atualiza o plano
    userId = existingUser.id;
    console.log(`[webhook] usuário já existe: ${email}`);
  } else {
    // ── Cria conta nova e envia e-mail de acesso ──────────────────────────
    const { data: inviteData, error: inviteError } =
      await supabaseAdmin.auth.admin.inviteUserByEmail(email, {
        redirectTo: `${baseUrl}/login`,
        data: { nome: nome ?? email.split("@")[0] },
      });

    if (inviteError || !inviteData?.user) {
      console.error("[webhook] erro ao criar usuário:", inviteError?.message);
      return NextResponse.json({ error: "Erro ao criar usuário" }, { status: 500 });
    }

    userId = inviteData.user.id;
    console.log(`[webhook] novo usuário criado e convite enviado: ${email}`);
  }

  // ── Ativa plano PRO no perfil ─────────────────────────────────────────────
  const { error: upsertError } = await supabaseAdmin
    .from("profiles")
    .upsert({
      id: userId,
      nome: nome ?? email.split("@")[0],
      plano: "pro",
      plano_expira_em: null,
      stripe_customer_id: paymentId ?? null,
    });

  if (upsertError) {
    console.error("[webhook] erro ao salvar perfil:", upsertError.message);
    return NextResponse.json({ error: "Erro ao salvar perfil" }, { status: 500 });
  }

  console.log(`✅ Acesso VITALÍCIO ativado para ${email} (user ${userId})`);
  return NextResponse.json({ received: true });
}
