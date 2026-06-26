import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import { Providers } from "@/components/Providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cifra Raiz — Sertanejo, Modão & Raiz",
  description: "A plataforma de cifras e ensino musical focada no sertanejo, modão e música raiz. Aprenda a tocar violão com as melhores cifras do interior.",
};

// Pixel da Utmify (captura e atribuição de conversões)
const UTMIFY_PIXEL_ID = "6a3de0c384db20cfec9804fb";
const UTMIFY_PIXEL_SCRIPT = `window.pixelId = "${UTMIFY_PIXEL_ID}";
var a = document.createElement("script");
a.setAttribute("async", "");
a.setAttribute("defer", "");
a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
document.head.appendChild(a);`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} h-full`}>
      <head>
        {/* Utmify — captura de UTMs (mantém a atribuição da campanha até o checkout) */}
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck=""
          data-utmify-prevent-subids=""
          async
          defer
        />
        {/* Utmify — pixel de tracking */}
        <script
          dangerouslySetInnerHTML={{ __html: UTMIFY_PIXEL_SCRIPT }}
        />
      </head>
      <body className="min-h-full flex flex-col pb-16 md:pb-0">
        <Providers>
          {children}
          <BottomNav />
        </Providers>
      </body>
    </html>
  );
}
