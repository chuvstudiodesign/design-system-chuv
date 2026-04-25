export const VERCEL_PRODUCTION_BASE_URL = "https://design-system-chuv.vercel.app"

export interface PublishedSectionLink {
  name: string
  slug: string
  href: string
  title: string
  description: string
}

export const PROPOSTA_SIGO_PUBLISHED_SECTIONS = [
  {
    name: "Nossas áreas de atuação",
    slug: "nossas-areas-de-atuacao",
    href: "/sections/proposta-sigo/nossas-areas-de-atuacao",
    title: "Nossas Áreas de Atuação",
    description: "Section isolada da proposta comercial da Sigo publicada como página independente.",
  },
  {
    name: "Nossas áreas de atuação · centered",
    slug: "nossas-areas-de-atuacao-centered",
    href: "/sections/proposta-sigo/nossas-areas-de-atuacao-centered",
    title: "Nossas Áreas de Atuação · Centered",
    description: "Versão centered da section de áreas de atuação da proposta comercial da Sigo.",
  },
  {
    name: "O que queremos construir juntos",
    slug: "o-que-queremos-construir-juntos",
    href: "/sections/proposta-sigo/o-que-queremos-construir-juntos",
    title: "O Que Queremos Construir Juntos",
    description: "Section isolada de objetivos da proposta comercial da Sigo.",
  },
  {
    name: "Escopo mensal de entregas",
    slug: "escopo-mensal-de-entregas",
    href: "/sections/proposta-sigo/escopo-mensal-de-entregas",
    title: "Escopo Mensal de Entregas",
    description: "Section isolada de escopo mensal da proposta comercial da Sigo.",
  },
  {
    name: "Bônus estratégico",
    slug: "bonus-estrategico",
    href: "/sections/proposta-sigo/bonus-estrategico",
    title: "Bônus Estratégico",
    description: "Section isolada de bônus estratégico da proposta comercial da Sigo.",
  },
  {
    name: "Resumo do volume mensal",
    slug: "resumo-do-volume-mensal",
    href: "/sections/proposta-sigo/resumo-do-volume-mensal",
    title: "Resumo do Volume Mensal",
    description: "Section isolada de resumo do volume mensal da proposta comercial da Sigo.",
  },
  {
    name: "Seis razões para escolher a Chuv Studio",
    slug: "seis-razoes-para-escolher-a-chuv-studio",
    href: "/sections/proposta-sigo/seis-razoes-para-escolher-a-chuv-studio",
    title: "Seis Razões para Escolher a Chuv Studio",
    description: "Section isolada de motivos para contratar a Chuv Studio na proposta comercial da Sigo.",
  },
  {
    name: "Condições gerais e investimento",
    slug: "condicoes-gerais-e-investimento",
    href: "/sections/proposta-sigo/condicoes-gerais-e-investimento",
    title: "Condições Gerais e Investimento",
    description: "Section isolada de condições gerais e investimento da proposta comercial da Sigo.",
  },
] as const satisfies readonly PublishedSectionLink[]

export type PropostaSigoPublishedSectionSlug =
  (typeof PROPOSTA_SIGO_PUBLISHED_SECTIONS)[number]["slug"]

export const PROPOSTA_SIGO_PUBLISHED_SECTION_BY_SLUG = Object.fromEntries(
  PROPOSTA_SIGO_PUBLISHED_SECTIONS.map((section) => [section.slug, section])
) as Record<PropostaSigoPublishedSectionSlug, (typeof PROPOSTA_SIGO_PUBLISHED_SECTIONS)[number]>

export function getPublishedSectionVercelUrl(href: string) {
  return `${VERCEL_PRODUCTION_BASE_URL}${href}`
}
