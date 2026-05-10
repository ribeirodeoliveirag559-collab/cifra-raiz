// Biblioteca de ícones SVG — tema Cifra Raiz
// Todos usam currentColor para herdar a cor do pai

type IconProps = { className?: string; size?: number };
const d = (size = 20) => ({ width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const });

export function IconGuitar({ className, size = 20 }: IconProps) {
  return (
    <svg {...d(size)} className={className}>
      <path d="M9 3 C9 3 6 3.5 5 6 C4 8.5 5.5 10.5 5.5 10.5 L3.5 12.5 C3.5 12.5 2 14 2 16 C2 18.5 3.5 20 5.5 20.5 C7.5 21 9.5 20 10.5 18.5 C11.5 17 11 15 11 15 L13 13 C13 13 15 14.5 17.5 13.5 C20 12.5 21 9.5 21 9.5" />
      <circle cx="7" cy="17" r="2" />
      <line x1="14" y1="4" x2="20" y2="10" />
      <line x1="16" y1="4" x2="20" y2="8" />
    </svg>
  );
}

export function IconMusic({ className, size = 20 }: IconProps) {
  return (
    <svg {...d(size)} className={className}>
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

export function IconNote({ className, size = 20 }: IconProps) {
  return (
    <svg {...d(size)} className={className}>
      <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3z" />
    </svg>
  );
}

export function IconFire({ className, size = 20 }: IconProps) {
  return (
    <svg {...d(size)} className={className}>
      <path d="M12 2C12 2 8 7 8 12a4 4 0 0 0 8 0c0-2-1-3.5-1-3.5S17 10.5 17 13a5 5 0 0 1-10 0C7 8 12 2 12 2z" />
      <path d="M12 12c0 0-1 1.5-1 2.5a1 1 0 0 0 2 0C13 13.5 12 12 12 12z" />
    </svg>
  );
}

export function IconClock({ className, size = 20 }: IconProps) {
  return (
    <svg {...d(size)} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

export function IconPlay({ className, size = 20 }: IconProps) {
  return (
    <svg {...d(size)} className={className} fill="currentColor" stroke="none">
      <polygon points="6,4 20,12 6,20" />
    </svg>
  );
}

export function IconPlayCircle({ className, size = 20 }: IconProps) {
  return (
    <svg {...d(size)} className={className}>
      <circle cx="12" cy="12" r="10" />
      <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconCheck({ className, size = 20 }: IconProps) {
  return (
    <svg {...d(size)} className={className}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function IconCheckCircle({ className, size = 20 }: IconProps) {
  return (
    <svg {...d(size)} className={className}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

export function IconX({ className, size = 20 }: IconProps) {
  return (
    <svg {...d(size)} className={className}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function IconVideo({ className, size = 20 }: IconProps) {
  return (
    <svg {...d(size)} className={className}>
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" />
    </svg>
  );
}

export function IconTimer({ className, size = 20 }: IconProps) {
  return (
    <svg {...d(size)} className={className}>
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2 2" />
      <path d="M9 3h6" />
      <path d="M12 3v2" />
    </svg>
  );
}

export function IconBook({ className, size = 20 }: IconProps) {
  return (
    <svg {...d(size)} className={className}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

export function IconTrophy({ className, size = 20 }: IconProps) {
  return (
    <svg {...d(size)} className={className}>
      <path d="M6 9H3V4h18v5h-3" />
      <path d="M6 4v5a6 6 0 0 0 12 0V4" />
      <path d="M12 15v4" />
      <path d="M8 19h8" />
    </svg>
  );
}

export function IconChat({ className, size = 20 }: IconProps) {
  return (
    <svg {...d(size)} className={className}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export function IconTarget({ className, size = 20 }: IconProps) {
  return (
    <svg {...d(size)} className={className}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

export function IconStar({ className, size = 20 }: IconProps) {
  return (
    <svg {...d(size)} className={className}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export function IconChevronDown({ className, size = 20 }: IconProps) {
  return (
    <svg {...d(size)} className={className}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function IconArrowUp({ className, size = 20 }: IconProps) {
  return (
    <svg {...d(size)} className={className}>
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  );
}

export function IconArrowDown({ className, size = 20 }: IconProps) {
  return (
    <svg {...d(size)} className={className}>
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  );
}

export function IconStop({ className, size = 20 }: IconProps) {
  return (
    <svg {...d(size)} className={className} fill="currentColor" stroke="none">
      <rect x="4" y="4" width="16" height="16" rx="2" />
    </svg>
  );
}

export function IconFilm({ className, size = 20 }: IconProps) {
  return (
    <svg {...d(size)} className={className}>
      <rect x="2" y="2" width="20" height="20" rx="2.18" />
      <line x1="7" y1="2" x2="7" y2="22" />
      <line x1="17" y1="2" x2="17" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="2" y1="7" x2="7" y2="7" />
      <line x1="2" y1="17" x2="7" y2="17" />
      <line x1="17" y1="17" x2="22" y2="17" />
      <line x1="17" y1="7" x2="22" y2="7" />
    </svg>
  );
}

export function IconLock({ className, size = 20 }: IconProps) {
  return (
    <svg {...d(size)} className={className}>
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

export function IconPlaylist({ className, size = 20 }: IconProps) {
  return (
    <svg {...d(size)} className={className}>
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <path d="M3 6h.01M3 12h.01M3 18h.01" strokeWidth={2.5} />
    </svg>
  );
}

export function IconMic({ className, size = 20 }: IconProps) {
  return (
    <svg {...d(size)} className={className}>
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  );
}

export function IconUser({ className, size = 20 }: IconProps) {
  return (
    <svg {...d(size)} className={className}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export function IconSearch({ className, size = 20 }: IconProps) {
  return (
    <svg {...d(size)} className={className}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export function IconEmpty({ className, size = 20 }: IconProps) {
  return (
    <svg {...d(size)} className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8" />
    </svg>
  );
}

export function IconPause({ className, size = 20 }: IconProps) {
  return (
    <svg {...d(size)} className={className} fill="currentColor" stroke="none">
      <rect x="6" y="4" width="4" height="16" rx="1" />
      <rect x="14" y="4" width="4" height="16" rx="1" />
    </svg>
  );
}
