/**
 * POST /api/webhooks/ggcheckout
 *
 * Recebe eventos do GGCheckout e:
 *  1. Cria a conta no Supabase (sem enviar e-mail, com email já confirmado)
 *  2. Ativa o plano PRO
 *
 * O cliente cria a senha ele mesmo no /login (primeiro acesso).
 */
import { NextRequest, NextResponse } from "next/server";
import { createHmac, randomBytes } from "crypto";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://placeholder.supabase.co",
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? "placeholder"
);

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const signature = req.headers.get("x-webhook-signature") ?? "";
  const eventType = req.headers.get("x-ggcheckout-event") ?? "";

  // ── Verificação de assinatura ──────────────────────────────────────
  const secret = process.env.GGCHECKOUT_WEBHOOK_SECRET;
  if (secret) {
    const expected =
      "sha256=" + createHmac("sha256", secret).update(rawBody).digest("hex");
    if (signature !== expected) {
      console.error("[webhook] assinatura inválida");
      return NextResponse.json({ error: "Assinatura inválida" }, { status: 401 });
    }
  }

  // Só processa pagamentos confirmados
  if (eventType !== "payment.paid" && eventType !== "pix.paid" && eventType !== "card.paid") {
    return NextResponse.json({ received: true });
  }

  let payload: unknown;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Payload inválido" }, { status: 400 });
  }

  const p = (payload as { payment?: { email?: string; id?: string; name?: string } }).payment;
  const email = p?.email;
  const paymentId = p?.id;
  const nome = p?.name;

  if (!email) {
    console.error("[webhook] e-mail ausente no payload");
    return NextResponse.json({ error: "E-mail ausente" }, { status: 400 });
  }

  // ── Verifica se usuário já existe ──────────────────────────────────
  const { data: usersData } = await supabaseAdmin.auth.admin.listUsers();
  const existingUser = usersData?.users?.find(
    (u) => u.email?.toLowerCase() === email.toLowerCase()
  );

  let userId: string;

  if (existingUser) {
    userId = existingUser.id;
    console.log(`[webhook] usuário já existe: ${email}`);
  } else {
    // Cria conta nova SEM enviar e-mail e com senha aleatória (cliente vai definir a sua no /login)
    const randomPassword = randomBytes(32).toString("hex");
    const { data: createData, error: createError } =
      await supabaseAdmin.auth.admin.createUser({
        email,
        password: randomPassword,
        email_confirm: true,
        user_metadata: { nome: nome ?? email.split("@")[0] },
      });

    if (createError || !createData?.user) {
      console.error("[webhook] erro ao criar usuário:", createError?.message);
      return NextResponse.json({ error: "Erro ao criar usuário" }, { status: 500 });
    }

    userId = createData.user.id;
    console.log(`[webhook] novo usuário criado: ${email}`);
  }

  // ── Ativa plano PRO ────────────────────────────────────────────────
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
