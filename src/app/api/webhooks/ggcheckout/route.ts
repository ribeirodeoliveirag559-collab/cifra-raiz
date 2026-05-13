/**
 * POST /api/webhooks/ggcheckout
 *
 * Recebe eventos do GGCheckout e ativa o plano PRO no Supabase.
 *
 * Evento tratado:
 *  - payment.paid → busca usuário pelo e-mail → plano = 'pro'
 *
 * Verificação de assinatura via HMAC-SHA256:
 *  Header: X-Webhook-Signature: sha256=<hash>
 */
import { NextRequest, NextResponse } from "next/server";
import { createHmac } from "crypto";
import { createClient } from "@supabase/supabase-js";

// Service role ignora RLS — necessário para atualizar qualquer perfil
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://placeholder.supabase.co",
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? "placeholder"
);

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const signature = req.headers.get("x-webhook-signature") ?? "";
  const eventType = req.headers.get("x-ggcheckout-event") ?? "";

  // ── Verificação de assinatura ────────────────────────────────────────────
  const secret = process.env.GGCHECKOUT_WEBHOOK_SECRET;
  if (secret) {
    const expected =
      "sha256=" +
      createHmac("sha256", secret).update(rawBody).digest("hex");

    if (signature !== expected) {
      console.error("[ggcheckout webhook] assinatura inválida");
      return NextResponse.json({ error: "Assinatura inválida" }, { status: 401 });
    }
  }

  // ── Só processa pagamentos confirmados ───────────────────────────────────
  if (eventType !== "payment.paid") {
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

  if (!email) {
    console.error("[ggcheckout webhook] e-mail ausente no payload");
    return NextResponse.json({ error: "E-mail ausente" }, { status: 400 });
  }

  // ── Busca o usuário pelo e-mail na tabela auth.users ─────────────────────
  const { data: usersData, error: userError } =
    await supabaseAdmin.auth.admin.listUsers();

  if (userError) {
    console.error("[ggcheckout webhook] erro ao listar usuários:", userError.message);
    return NextResponse.json({ error: "Erro ao buscar usuário" }, { status: 500 });
  }

  const user = usersData?.users?.find(
    (u) => u.email?.toLowerCase() === email.toLowerCase()
  );

  if (!user) {
    // Pode ser que o cliente pagou sem ter conta — criamos perfil quando ele se cadastrar
    console.warn(`[ggcheckout webhook] usuário não encontrado para e-mail: ${email}`);
    return NextResponse.json({ received: true });
  }

  // ── Atualiza o plano para PRO ─────────────────────────────────────────────
  const { error: updateError } = await supabaseAdmin
    .from("profiles")
    .update({
      plano:              "pro",
      plano_expira_em:    null,          // null = vitalício, nunca expira
      stripe_customer_id: paymentId,     // reutilizamos o campo para guardar o ID do pagamento
    })
    .eq("id", user.id);

  if (updateError) {
    console.error("[ggcheckout webhook] erro ao atualizar perfil:", updateError.message);
    return NextResponse.json({ error: "Erro ao salvar perfil" }, { status: 500 });
  }

  console.log(`✅ Acesso VITALÍCIO ativado para ${email} (user ${user.id})`);
  return NextResponse.json({ received: true });
}
