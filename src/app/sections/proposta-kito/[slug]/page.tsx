import type { Metadata } from "next"
import { notFound } from "next/navigation"
import {
  PROPOSTA_KITO_PUBLISHED_SECTION_BY_SLUG,
  PROPOSTA_KITO_PUBLISHED_SECTIONS,
  type PropostaKitoPublishedSectionSlug,
} from "@/lib/published-sections"
import {
  PropostaKitoPublishedSectionPage,
} from "@/components/published-sections/proposta-kito"

export async function generateStaticParams() {
  return PROPOSTA_KITO_PUBLISHED_SECTIONS.map(({ slug }) => ({ slug }))
}

export async function generateMetadata(
  props: PageProps<"/sections/proposta-kito/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params

  if (!(slug in PROPOSTA_KITO_PUBLISHED_SECTION_BY_SLUG)) {
    return {}
  }

  const entry =
    PROPOSTA_KITO_PUBLISHED_SECTION_BY_SLUG[
      slug as PropostaKitoPublishedSectionSlug
    ]

  return {
    title: entry.title,
    description: entry.description,
  }
}

export default async function PropostaKitoPublishedSectionRoute(
  props: PageProps<"/sections/proposta-kito/[slug]">
) {
  const { slug } = await props.params

  if (!(slug in PROPOSTA_KITO_PUBLISHED_SECTION_BY_SLUG)) {
    notFound()
  }

  return (
    <PropostaKitoPublishedSectionPage
      slug={slug as PropostaKitoPublishedSectionSlug}
    />
  )
}
