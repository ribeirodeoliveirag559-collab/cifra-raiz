/**
 * POST /api/webhooks/stripe
 *
 * Recebe eventos do Stripe e atualiza o plano do usuário no Supabase.
 *
 * Eventos tratados:
 *  - checkout.session.completed       → ativa plano PRO
 *  - customer.subscription.deleted    → volta para FREE
 *  - customer.subscription.updated    → atualiza data de expiração
 */
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "sk_placeholder", {
  apiVersion: "2026-04-22.dahlia",
});

// Service role ignora RLS — necessário para webhook atualizar qualquer perfil
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://placeholder.supabase.co",
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? "placeholder"
);

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig  = req.headers.get("stripe-signature") ?? "";

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("[webhook] assinatura inválida:", err);
    return NextResponse.json({ error: "Assinatura inválida" }, { status: 400 });
  }

  // ── Pagamento único concluído → ativa acesso VITALÍCIO ───────────────
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    // Só processa pagamentos concluídos (não assinaturas)
    if (session.payment_status !== "paid") {
      return NextResponse.json({ received: true });
    }

    const userId = session.metadata?.user_id;

    if (!userId) {
      console.error("[webhook] user_id ausente nos metadados");
      return NextResponse.json({ error: "user_id ausente" }, { status: 400 });
    }

    const { error } = await supabaseAdmin
      .from("profiles")
      .update({
        plano:              "pro",        // acesso vitalício
        stripe_customer_id: session.customer as string,
        plano_expira_em:    null,         // null = nunca expira (vitalício)
      })
      .eq("id", userId);

    if (error) {
      console.error("[webhook] erro ao atualizar perfil:", error.message);
      return NextResponse.json({ error: "Erro ao salvar perfil" }, { status: 500 });
    }

    console.log(`✅ Acesso VITALÍCIO ativado para user ${userId}`);
  }

  return NextResponse.json({ received: true });
}
