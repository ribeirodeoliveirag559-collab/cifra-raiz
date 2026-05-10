"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();
  const router = useRouter();

  function handleLogout() {
    logout();
    router.push("/");
  }

  return (
    <header className="bg-[#4A2810] text-[#FAF7F2] shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-14 md:h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/logo.jpg" alt="Cifra Raiz" className="h-10 w-auto rounded-lg" />
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/cifras" className="hover:text-[#D4900A] transition-colors">Cifras</Link>
          <Link href="/cursos" className="hover:text-[#D4900A] transition-colors">Cursos</Link>
          <Link href="/afinador" className="hover:text-[#D4900A] transition-colors">Afinador</Link>
          <Link href="/dashboard" className="hover:text-[#D4900A] transition-colors">Dashboard</Link>

          {user && (
            <div className="flex items-center gap-3">
              <span className="text-[#B5865A] text-sm">
                Olá, <span className="text-[#FAF7F2] font-semibold">{user.nome.split(" ")[0]}</span>
              </span>
              <button
                onClick={handleLogout}
                className="text-xs text-[#B5865A] hover:text-[#D4900A] transition-colors border border-[#7A4520] px-3 py-1.5 rounded-full"
              >
                Sair
              </button>
            </div>
          )}
        </nav>

        {/* Mobile: usuário logado */}
        {user && (
          <div className="md:hidden flex items-center gap-3">
            <span className="text-sm text-[#FAF7F2] font-semibold">
              {user.nome.split(" ")[0]}
            </span>
            <button
              onClick={handleLogout}
              className="text-xs text-[#B5865A] hover:text-[#D4900A] border border-[#7A4520] px-3 py-1.5 rounded-full transition-colors"
            >
              Sair
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

