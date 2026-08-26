import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import MetaPixelRouteTracker from "@/components/MetaPixel";
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

// Meta Pixel (Facebook Ads)
const META_PIXEL_ID = "994611726827692";
const META_PIXEL_SCRIPT = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} h-full`}>
      <head>
        {/* Meta Pixel Code — injetado direto no head pra carregar o mais cedo possivel */}
        <script
          dangerouslySetInnerHTML={{ __html: META_PIXEL_SCRIPT }}
        />
      </head>
      <body className="min-h-full flex flex-col pb-16 md:pb-0">
        <MetaPixelRouteTracker />
        <Providers>
          {children}
          <BottomNav />
        </Providers>
      </body>
    </html>
  );
}
