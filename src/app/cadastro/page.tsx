import { redirect } from "next/navigation";

// Auto-cadastro desativado. Acesso somente via convite após pagamento.
export default function CadastroPage() {
  redirect("/landing");
}
