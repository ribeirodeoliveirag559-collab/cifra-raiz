/**
 * Helpers para disparar eventos do Meta Pixel programaticamente.
 * Uso: import { trackInitiateCheckout } from "@/lib/fbpixel"
 */
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function fbTrack(event: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", event, params);
  }
}

/** Clicou em um CTA que leva ao checkout */
export function trackInitiateCheckout(value = 17.9) {
  fbTrack("InitiateCheckout", { value, currency: "BRL" });
}

/** Cliente criou conta pela primeira vez (primeiro acesso) */
export function trackCompleteRegistration() {
  fbTrack("CompleteRegistration");
}

/** Cliente fez login (visitante recorrente engajado) */
export function trackLead() {
  fbTrack("Lead");
}
