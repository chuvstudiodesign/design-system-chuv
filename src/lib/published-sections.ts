export const VERCEL_PRODUCTION_BASE_URL = "https://design-system-chuv.vercel.app"

export interface PublishedSectionLink {
  name: string
  slug: string
  href: string
  title: string
  description: string
}

function toEmbedId(value: string) {
  return value
    .replace(/^\/+/, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase()
}

export const PROPOSTA_WEBSITE_SIGO_PUBLISHED_SECTIONS = [
  {
    name: "Nossas áreas de atuação",
    slug: "nossas-areas-de-atuacao",
    href: "/sections/proposta-website-sigo/nossas-areas-de-atuacao",
    title: "Nossas Áreas de Atuação",
    description: "Section de áreas de atuação da Chuv Studio na proposta de website da Sigo.",
  },
  {
    name: "Objetivos do projeto",
    slug: "objetivos-do-projeto",
    href: "/sections/proposta-website-sigo/objetivos-do-projeto",
    title: "Objetivos do Projeto",
    description: "Section de objetivos do projeto de website da Sigo.",
  },
  {
    name: "Escopo do projeto",
    slug: "escopo-do-projeto",
    href: "/sections/proposta-website-sigo/escopo-do-projeto",
    title: "Escopo do Projeto",
    description: "Section de escopo do projeto de website da Sigo.",
  },
  {
    name: "Resumo do pacote",
    slug: "resumo-do-pacote",
    href: "/sections/proposta-website-sigo/resumo-do-pacote",
    title: "Resumo do Pacote",
    description: "Section de resumo do pacote Start Web da Sigo.",
  },
  {
    name: "Condições gerais e investimento",
    slug: "condicoes-gerais-e-investimento",
    href: "/sections/proposta-website-sigo/condicoes-gerais-e-investimento",
    title: "Condições Gerais e Investimento",
    description: "Section de condições gerais e investimento da proposta de website da Sigo.",
  },
] as const satisfies readonly PublishedSectionLink[]

export type PropostaWebsiteSigoPublishedSectionSlug =
  (typeof PROPOSTA_WEBSITE_SIGO_PUBLISHED_SECTIONS)[number]["slug"]

export const PROPOSTA_WEBSITE_SIGO_PUBLISHED_SECTION_BY_SLUG = Object.fromEntries(
  PROPOSTA_WEBSITE_SIGO_PUBLISHED_SECTIONS.map((section) => [section.slug, section])
) as Record<PropostaWebsiteSigoPublishedSectionSlug, (typeof PROPOSTA_WEBSITE_SIGO_PUBLISHED_SECTIONS)[number]>

export const PROPOSTA_WEBSITE_BLACKBELLS_PUBLISHED_SECTIONS = [
  {
    name: "Nossas áreas de atuação",
    slug: "nossas-areas-de-atuacao",
    href: "/sections/proposta-website-blackbells/nossas-areas-de-atuacao",
    title: "Nossas Áreas de Atuação",
    description: "Section de áreas de atuação da Chuv Studio na proposta de website da Black Bells.",
  },
  {
    name: "Objetivos do projeto",
    slug: "objetivos-do-projeto",
    href: "/sections/proposta-website-blackbells/objetivos-do-projeto",
    title: "Objetivos do Projeto",
    description: "Section de objetivos do projeto de website da Black Bells.",
  },
  {
    name: "Escopo do projeto",
    slug: "escopo-do-projeto",
    href: "/sections/proposta-website-blackbells/escopo-do-projeto",
    title: "Escopo do Projeto",
    description: "Section de escopo do projeto de website da Black Bells.",
  },
  {
    name: "Resumo do pacote",
    slug: "resumo-do-pacote",
    href: "/sections/proposta-website-blackbells/resumo-do-pacote",
    title: "Resumo do Pacote",
    description: "Section de resumo do pacote Start Web da Black Bells.",
  },
  {
    name: "Condições gerais e investimento",
    slug: "condicoes-gerais-e-investimento",
    href: "/sections/proposta-website-blackbells/condicoes-gerais-e-investimento",
    title: "Condições Gerais e Investimento",
    description: "Section de condições gerais e investimento da proposta de website da Black Bells.",
  },
] as const satisfies readonly PublishedSectionLink[]

export type PropostaWebsiteBlackBellsPublishedSectionSlug =
  (typeof PROPOSTA_WEBSITE_BLACKBELLS_PUBLISHED_SECTIONS)[number]["slug"]

export const PROPOSTA_WEBSITE_BLACKBELLS_PUBLISHED_SECTION_BY_SLUG = Object.fromEntries(
  PROPOSTA_WEBSITE_BLACKBELLS_PUBLISHED_SECTIONS.map((section) => [section.slug, section])
) as Record<PropostaWebsiteBlackBellsPublishedSectionSlug, (typeof PROPOSTA_WEBSITE_BLACKBELLS_PUBLISHED_SECTIONS)[number]>

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

export const PROPOSTA_KITO_PUBLISHED_SECTIONS = [
  {
    name: "Sobre a proposta",
    slug: "sobre-a-proposta",
    href: "/sections/proposta-kito/sobre-a-proposta",
    title: "Sobre a Proposta",
    description: "Section de abertura da proposta comercial do Kito.",
  },
  {
    name: "Contexto e objetivos do projeto",
    slug: "contexto-e-objetivos-do-projeto",
    href: "/sections/proposta-kito/contexto-e-objetivos-do-projeto",
    title: "Contexto e Objetivos do Projeto",
    description: "Section de contexto e públicos da proposta comercial do Kito.",
  },
  {
    name: "Como trabalhamos",
    slug: "como-trabalhamos",
    href: "/sections/proposta-kito/como-trabalhamos",
    title: "Como Trabalhamos",
    description: "Section de áreas de atuação do estúdio na proposta comercial do Kito.",
  },
  {
    name: "Frente 1: Análise e melhoria do aplicativo",
    slug: "frente-1-analise-e-melhoria-do-aplicativo",
    href: "/sections/proposta-kito/frente-1-analise-e-melhoria-do-aplicativo",
    title: "Frente 1: Análise e Melhoria do Aplicativo",
    description: "Section da frente de análise e melhoria do aplicativo do Kito.",
  },
  {
    name: "Frente 2: Desenvolvimento e evolução do aplicativo",
    slug: "frente-2-desenvolvimento-e-evolucao-do-aplicativo",
    href: "/sections/proposta-kito/frente-2-desenvolvimento-e-evolucao-do-aplicativo",
    title: "Frente 2: Desenvolvimento e Evolução do Aplicativo",
    description: "Section da frente de desenvolvimento e evolução do aplicativo do Kito.",
  },
  {
    name: "Frente 3: Desenvolvimento para iOS",
    slug: "frente-3-desenvolvimento-para-ios",
    href: "/sections/proposta-kito/frente-3-desenvolvimento-para-ios",
    title: "Frente 3: Desenvolvimento para iOS",
    description: "Section da frente de desenvolvimento para iOS do Kito.",
  },
  {
    name: "Frente 4: Atualização de marca e Brand System",
    slug: "frente-4-atualizacao-de-marca-e-brand-system",
    href: "/sections/proposta-kito/frente-4-atualizacao-de-marca-e-brand-system",
    title: "Frente 4: Atualização de Marca e Brand System",
    description: "Section da frente de atualização de marca e Brand System do Kito.",
  },
  {
    name: "Frente 5: Design System",
    slug: "frente-5-design-system",
    href: "/sections/proposta-kito/frente-5-design-system",
    title: "Frente 5: Design System",
    description: "Section da frente de Design System do Kito.",
  },
  {
    name: "Frente 6: Website e landing pages",
    slug: "frente-6-website-e-landing-pages",
    href: "/sections/proposta-kito/frente-6-website-e-landing-pages",
    title: "Frente 6: Website e Landing Pages",
    description: "Section da frente de website e landing pages do Kito.",
  },
  {
    name: "Frente 7: Mídia, Instagram e peças publicitárias",
    slug: "frente-7-midia-instagram-e-pecas-publicitarias",
    href: "/sections/proposta-kito/frente-7-midia-instagram-e-pecas-publicitarias",
    title: "Frente 7: Mídia, Instagram e Peças Publicitárias",
    description: "Section da frente de mídia, Instagram e peças publicitárias do Kito.",
  },
  {
    name: "Estrutura por níveis",
    slug: "estrutura-por-niveis",
    href: "/sections/proposta-kito/estrutura-por-niveis",
    title: "Estrutura por Níveis",
    description: "Section da estrutura por níveis da proposta comercial do Kito.",
  },
  {
    name: "Pacote Start",
    slug: "pacote-start",
    href: "/sections/proposta-kito/pacote-start",
    title: "Pacote Start",
    description: "Section do pacote Start da proposta comercial do Kito.",
  },
  {
    name: "Pacote Pro",
    slug: "pacote-pro",
    href: "/sections/proposta-kito/pacote-pro",
    title: "Pacote Pro",
    description: "Section do pacote Pro da proposta comercial do Kito.",
  },
  {
    name: "Pacote Insane",
    slug: "pacote-insane",
    href: "/sections/proposta-kito/pacote-insane",
    title: "Pacote Insane",
    description: "Section do pacote Insane da proposta comercial do Kito.",
  },
  {
    name: "Comparativo dos pacotes",
    slug: "comparativo-dos-pacotes",
    href: "/sections/proposta-kito/comparativo-dos-pacotes",
    title: "Comparativo dos Pacotes",
    description: "Section de comparativo entre os pacotes Start, Pro e Insane do Kito.",
  },
] as const satisfies readonly PublishedSectionLink[]

export type PropostaKitoPublishedSectionSlug =
  (typeof PROPOSTA_KITO_PUBLISHED_SECTIONS)[number]["slug"]

export const PROPOSTA_KITO_PUBLISHED_SECTION_BY_SLUG = Object.fromEntries(
  PROPOSTA_KITO_PUBLISHED_SECTIONS.map((section) => [section.slug, section])
) as Record<PropostaKitoPublishedSectionSlug, (typeof PROPOSTA_KITO_PUBLISHED_SECTIONS)[number]>

export function getPublishedSectionVercelUrl(href: string) {
  return `${VERCEL_PRODUCTION_BASE_URL}${href}`
}

export function getPublishedSectionEmbedCode({
  href,
  title,
  iframeId = toEmbedId(href),
}: {
  href: string
  title: string
  iframeId?: string
}) {
  const src = getPublishedSectionVercelUrl(href)

  return `<div style="width:100%;">
  <iframe
    id="${iframeId}"
    src="${src}"
    title="${title}"
    style="width:100%;height:10px;border:0;display:block;overflow:hidden;background:transparent;"
    scrolling="no"
  ></iframe>
</div>
<script>
(function () {
  const iframe = document.getElementById("${iframeId}");
  const expectedPath = "${href}";

  window.addEventListener("message", function (event) {
    const data = event.data;
    if (!data || data.type !== "chuv:embed-resize" || data.path !== expectedPath) return;
    if (typeof data.height === "number" && data.height > 0) {
      iframe.style.height = data.height + "px";
    }
  });
})();
</script>`
}
