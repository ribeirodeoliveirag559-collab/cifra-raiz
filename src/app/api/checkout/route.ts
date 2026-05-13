/**
 * POST /api/checkout
 * Cria uma sessão de checkout no Stripe e retorna a URL de pagamento.
 * O usuário precisa estar autenticado no Supabase.
 */
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createServerSupabaseClient } from "@/lib/supabase-server";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY ?? "sk_placeholder", {
    apiVersion: "2026-04-22.dahlia",
  });
}

export async function POST(req: NextRequest) {
  try {
    // Verifica sessão do usuário
    const supabase = await createServerSupabaseClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
    }

    const { plano } = (await req.json()) as { plano: "mensal" | "anual" };

    const priceId =
      plano === "anual"
        ? process.env.STRIPE_PRICE_ID_ANUAL!
        : process.env.STRIPE_PRICE_ID_MENSAL!;

    const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";

    const stripe = getStripe();

    // Cria a sessão de checkout
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      customer_email: user.email,
      locale: "pt-BR",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${baseUrl}/sucesso?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/landing#planos`,
      metadata: {
        user_id: user.id,
        plano,
      },
      subscription_data: {
        metadata: { user_id: user.id },
      },
      // Permite cupom de desconto
      allow_promotion_codes: true,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("[checkout] erro:", err);
    return NextResponse.json({ error: "Erro ao criar sessão" }, { status: 500 });
  }
}
