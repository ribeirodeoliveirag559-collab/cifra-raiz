"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  {
    label: "Início",
    href: "/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
  },
  {
    label: "Cifras",
    href: "/cifras",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
  {
    label: "Cursos",
    href: "/cursos",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    ),
  },
  {
    label: "Afinador",
    href: "/afinador",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#4A2810] border-t border-[#7A4520] safe-area-bottom">
      <div className="flex items-center justify-around h-16">
        {/* Início e Cifras */}
        {NAV.slice(0, 2).map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-0.5 flex-1 h-full transition-colors ${
                active ? "text-[#D4900A]" : "text-[#B5865A] hover:text-[#FAF7F2]"
              }`}
            >
              <div className={`relative ${active ? "scale-110" : ""} transition-transform`}>
                {item.icon}
                {active && (
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#D4900A] rounded-full" />
                )}
              </div>
              <span className={`text-[10px] font-medium leading-none ${active ? "text-[#D4900A]" : ""}`}>
                {item.label}
              </span>
            </Link>
          );
        })}

        {/* Logo central — apenas estética, sem navegação */}
        <div className="flex flex-col items-center justify-center flex-1 h-full">
          <img src="/logo.jpg" alt="Cifra Raiz" className="w-10 h-10 object-contain rounded-lg" />
        </div>

        {/* Cursos e Afinador */}
        {NAV.slice(2).map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-0.5 flex-1 h-full transition-colors ${
                active ? "text-[#D4900A]" : "text-[#B5865A] hover:text-[#FAF7F2]"
              }`}
            >
              <div className={`relative ${active ? "scale-110" : ""} transition-transform`}>
                {item.icon}
                {active && (
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#D4900A] rounded-full" />
                )}
              </div>
              <span className={`text-[10px] font-medium leading-none ${active ? "text-[#D4900A]" : ""}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
