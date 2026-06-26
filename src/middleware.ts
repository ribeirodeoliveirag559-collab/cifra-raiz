import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

// ─── Rotas públicas — qualquer pessoa pode acessar ────────────────────────────
const ROTAS_PUBLICAS = [
  "/landing",
  "/login",
  "/cadastro",
  "/sucesso",
  "/checkout",
  "/api/webhooks",
  "/api/checkout",
  "/api/primeiro-acesso",
];

function isRotaPublica(pathname: string) {
  return ROTAS_PUBLICAS.some((rota) => pathname.startsWith(rota));
}

function isRotaEstatica(pathname: string) {
  return (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/logo") ||
    pathname.startsWith("/icons") ||
    /\.(?:svg|png|jpg|jpeg|gif|webp|ico|js|css|woff|woff2)$/.test(pathname)
  );
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Arquivos estáticos — passa direto
  if (isRotaEstatica(pathname)) {
    return NextResponse.next();
  }

  // Rotas públicas — passa direto
  if (isRotaPublica(pathname)) {
    const res = NextResponse.next();
    // Força navegador e CDN a NÃO cachearem /login (evita HTML/JS desatualizado
    // que causa loops de "credenciais inválidas")
    if (pathname.startsWith("/login")) {
      res.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0");
      res.headers.set("CDN-Cache-Control", "no-store");
      res.headers.set("Vercel-CDN-Cache-Control", "no-store");
    }
    return res;
  }

  // Rota raiz "/" → redireciona para /landing (tratada depois de verificar auth)

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Sem credenciais configuradas → redireciona para /landing
  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.redirect(new URL("/landing", request.url));
  }

  let response = NextResponse.next({ request });

  const supabase = createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) =>
          request.cookies.set(name, value)
        );
        response = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) =>
          response.cookies.set(name, value, options)
        );
      },
    },
  });

  // ── Verifica autenticação ─────────────────────────────────────────────────
  const { data: { user } } = await supabase.auth.getUser();

  // Não está logado → redireciona para /login (ou /landing se for a raiz)
  if (!user) {
    if (pathname === "/") {
      return NextResponse.redirect(new URL("/landing", request.url));
    }
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // ── Verifica plano PRO no Supabase ────────────────────────────────────────
  const { data: perfil } = await supabase
    .from("profiles")
    .select("plano")
    .eq("id", user.id)
    .single();

  // Não tem plano PRO → redireciona para /landing
  if (!perfil || perfil.plano !== "pro") {
    return NextResponse.redirect(new URL("/landing#planos", request.url));
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
