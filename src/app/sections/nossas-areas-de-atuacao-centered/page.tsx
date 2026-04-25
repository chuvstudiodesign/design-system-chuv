import type { Metadata } from "next"
import { NossasAreasDeAtuacaoCentered } from "@/components/published-sections/nossas-areas-de-atuacao-centered"

export const metadata: Metadata = {
  title: "Nossas Áreas de Atuação",
  description: "Section isolada da proposta comercial da Sigo publicada como página independente.",
}

export default function NossasAreasDeAtuacaoCenteredPage() {
  return (
    <main className="bg-[#efefef] p-3 sm:p-4">
      <NossasAreasDeAtuacaoCentered />
    </main>
  )
}
