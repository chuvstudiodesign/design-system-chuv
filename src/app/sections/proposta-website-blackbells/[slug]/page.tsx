import type { Metadata } from "next"
import { notFound } from "next/navigation"
import {
  PROPOSTA_WEBSITE_BLACKBELLS_PUBLISHED_SECTION_BY_SLUG,
  PROPOSTA_WEBSITE_BLACKBELLS_PUBLISHED_SECTIONS,
  type PropostaWebsiteBlackBellsPublishedSectionSlug,
} from "@/lib/published-sections"
import {
  PropostaWebsiteBlackBellsPublishedSectionPage,
} from "@/components/published-sections/proposta-website-blackbells"

export async function generateStaticParams() {
  return PROPOSTA_WEBSITE_BLACKBELLS_PUBLISHED_SECTIONS.map(({ slug }) => ({ slug }))
}

export async function generateMetadata(
  props: PageProps<"/sections/proposta-website-blackbells/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params

  if (!(slug in PROPOSTA_WEBSITE_BLACKBELLS_PUBLISHED_SECTION_BY_SLUG)) {
    return {}
  }

  const entry =
    PROPOSTA_WEBSITE_BLACKBELLS_PUBLISHED_SECTION_BY_SLUG[
      slug as PropostaWebsiteBlackBellsPublishedSectionSlug
    ]

  return {
    title: entry.title,
    description: entry.description,
  }
}

export default async function PropostaWebsiteBlackBellsPublishedSectionRoute(
  props: PageProps<"/sections/proposta-website-blackbells/[slug]">
) {
  const { slug } = await props.params

  if (!(slug in PROPOSTA_WEBSITE_BLACKBELLS_PUBLISHED_SECTION_BY_SLUG)) {
    notFound()
  }

  return (
    <PropostaWebsiteBlackBellsPublishedSectionPage
      slug={slug as PropostaWebsiteBlackBellsPublishedSectionSlug}
    />
  )
}
