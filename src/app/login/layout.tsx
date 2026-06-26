// Força a página /login a ser SEMPRE renderizada do zero, sem cache de CDN.
// Evita JS antigo em cache no navegador depois de updates do código de login.
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
