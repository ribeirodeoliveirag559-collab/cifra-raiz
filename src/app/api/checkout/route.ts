/**
 * POST /api/checkout
 * Redireciona o usuário autenticado para o checkout do GGCheckout.
 * A URL do produto é configurada via variável de ambiente.
 */
import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase-server";

export async function POST(req: NextRequest) {
  try {
    const supabase = await createServerSupabaseClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
    }

    const checkoutUrl = process.env.GGCHECKOUT_URL;

    if (!checkoutUrl) {
      console.error("[checkout] GGCHECKOUT_URL não configurada");
      return NextResponse.json({ error: "Checkout não configurado" }, { status: 500 });
    }

    // Passa o e-mail como parâmetro para pré-preencher o campo no GGCheckout
    const url = new URL(checkoutUrl);
    url.searchParams.set("email", user.email ?? "");

    return NextResponse.json({ url: url.toString() });
  } catch (err) {
    console.error("[checkout] erro:", err);
    return NextResponse.json({ error: "Erro ao iniciar checkout" }, { status: 500 });
  }
}
