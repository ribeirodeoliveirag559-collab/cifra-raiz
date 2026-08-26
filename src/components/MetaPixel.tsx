"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const PIXEL_ID = "994611726827692";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Dispara PageView nas mudanças de rota (Next.js SPA).
 * O script principal do Pixel está injetado no <head> do layout.tsx
 * pra carregar o mais cedo possível.
 */
export default function MetaPixelRouteTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "PageView");
    }
  }, [pathname]);

  // O componente em si é invisível — só roda o efeito
  return (
    <noscript>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  );
}
