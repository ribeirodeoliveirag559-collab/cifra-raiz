/**
 * POST /api/primeiro-acesso
 *
 * Permite que o cliente defina a senha dele no primeiro acesso.
 * Só funciona se:
 *  - O e-mail existe no Supabase (foi criado pelo webhook após pagamento)
 *  - O plano do usuário é "pro"
 *  - O usuário ainda nunca fez login (last_sign_in_at === null)
 *
 * Isso garante que só o cliente legítimo possa definir a senha (uma única vez).
 */
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://placeholder.supabase.co",
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? "placeholder"
);

export async function POST(req: NextRequest) {
  let body: { email?: string; password?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Payload inválido" }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();
  const password = body.password;

  if (!email || !password) {
    return NextResponse.json({ error: "E-mail e senha são obrigatórios" }, { status: 400 });
  }

  if (password.length < 6) {
    return NextResponse.json({ error: "Senha precisa ter no mínimo 6 caracteres" }, { status: 400 });
  }

  // ── Busca usuário ────────────────────────────────────────────────
  const { data: usersData, error: listError } = await supabaseAdmin.auth.admin.listUsers();
  if (listError) {
    console.error("[primeiro-acesso] erro ao listar usuários:", listError.message);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }

  const user = usersData?.users?.find((u) => u.email?.toLowerCase() === email);

  if (!user) {
    return NextResponse.json(
      { error: "Este e-mail não tem acesso ao Cifra Raiz. Verifique se digitou correto." },
      { status: 404 }
    );
  }

  // ── Verifica plano PRO ────────────────────────────────────────────
  const { data: profile, error: profileError } = await supabaseAdmin
    .from("profiles")
    .select("plano")
    .eq("id", user.id)
    .single();

  if (profileError || !profile || profile.plano !== "pro") {
    return NextResponse.json(
      { error: "Este e-mail não tem acesso PRO ativo." },
      { status: 403 }
    );
  }

  // ── Só permite definir senha se for o PRIMEIRO acesso ─────────────
  if (user.last_sign_in_at) {
    return NextResponse.json(
      { error: "Já existe senha definida para essa conta. Tente entrar com a senha que você criou." },
      { status: 409 }
    );
  }

  // ── Atualiza a senha ──────────────────────────────────────────────
  const { error: updateError } = await supabaseAdmin.auth.admin.updateUserById(user.id, {
    password,
  });

  if (updateError) {
    console.error("[primeiro-acesso] erro ao atualizar senha:", updateError.message);
    return NextResponse.json({ error: "Erro ao definir senha. Tente novamente." }, { status: 500 });
  }

  console.log(`[primeiro-acesso] senha definida para ${email}`);
  return NextResponse.json({ ok: true });
}
