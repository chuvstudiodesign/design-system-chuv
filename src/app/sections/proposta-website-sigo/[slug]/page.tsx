import type { Metadata } from "next"
import { notFound } from "next/navigation"
import {
  PROPOSTA_WEBSITE_SIGO_PUBLISHED_SECTION_BY_SLUG,
  PROPOSTA_WEBSITE_SIGO_PUBLISHED_SECTIONS,
  type PropostaWebsiteSigoPublishedSectionSlug,
} from "@/lib/published-sections"
import {
  PropostaWebsiteSigoPublishedSectionPage,
} from "@/components/published-sections/proposta-website-sigo"

export async function generateStaticParams() {
  return PROPOSTA_WEBSITE_SIGO_PUBLISHED_SECTIONS.map(({ slug }) => ({ slug }))
}

export async function generateMetadata(
  props: PageProps<"/sections/proposta-website-sigo/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params

  if (!(slug in PROPOSTA_WEBSITE_SIGO_PUBLISHED_SECTION_BY_SLUG)) {
    return {}
  }

  const entry =
    PROPOSTA_WEBSITE_SIGO_PUBLISHED_SECTION_BY_SLUG[
      slug as PropostaWebsiteSigoPublishedSectionSlug
    ]

  return {
    title: entry.title,
    description: entry.description,
  }
}

export default async function PropostaWebsiteSigoPublishedSectionRoute(
  props: PageProps<"/sections/proposta-website-sigo/[slug]">
) {
  const { slug } = await props.params

  if (!(slug in PROPOSTA_WEBSITE_SIGO_PUBLISHED_SECTION_BY_SLUG)) {
    notFound()
  }

  return (
    <PropostaWebsiteSigoPublishedSectionPage
      slug={slug as PropostaWebsiteSigoPublishedSectionSlug}
    />
  )
}
