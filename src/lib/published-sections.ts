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
