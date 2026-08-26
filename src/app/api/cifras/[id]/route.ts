/**
 * GET /api/cifras/[id]
 *
 * Retorna UMA cifra completa (com texto/acordes) pelo id.
 * O dataset completo (dados.ts, 14MB) só é importado aqui — SERVIDOR —
 * nunca é enviado ao navegador. O cliente usa CIFRAS_INDEX (leve) para
 * listar/buscar, e só chama esta rota ao abrir uma música específica.
 */
import { NextRequest, NextResponse } from "next/server";
import { CIFRAS } from "@/lib/dados";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const cifra = CIFRAS.find((c) => c.id === id);

  if (!cifra) {
    return NextResponse.json({ error: "Cifra não encontrada" }, { status: 404 });
  }

  return NextResponse.json(cifra, {
    headers: { "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400" },
  });
}
