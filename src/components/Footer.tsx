import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto !bg-[#FFFCF7]">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display text-lg font-bold mb-3 text-[#4A2810]">
            Cifra <span className="text-[#D4900A]">Raiz</span>
          </h3>
          <p className="text-sm text-[#B5865A] leading-relaxed">
            A plataforma do sertanejo de verdade. Cifras, cursos e afinador para quem ama o interior.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-[#D4900A]">Plataforma</h4>
          <ul className="space-y-2 text-sm text-[#B5865A]">
            <li><Link href="/cifras" className="hover:text-[#4A2810] transition-colors">Cifras</Link></li>
            <li><Link href="/cursos" className="hover:text-[#4A2810] transition-colors">Cursos</Link></li>
            <li><Link href="/afinador" className="hover:text-[#4A2810] transition-colors">Afinador</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-[#D4900A]">Suporte</h4>
          <ul className="space-y-2 text-sm text-[#B5865A]">
            <li><Link href="/dashboard" className="hover:text-[#4A2810] transition-colors">Dashboard</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#E8DFD0] text-center py-4 text-xs text-[#B5865A]">
        © {new Date().getFullYear()} Cifra Raiz · Feito com amor no coração do Brasil
      </div>
    </footer>
  );
}
