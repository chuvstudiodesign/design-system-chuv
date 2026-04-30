import type { Metadata } from "next"
import { notFound } from "next/navigation"
import {
  PORTFOLIO_MIDIA_MOBILE_PUBLISHED_SECTION_BY_SLUG,
  PORTFOLIO_MIDIA_MOBILE_PUBLISHED_SECTIONS,
  type PortfolioMidiaMobilePublishedSectionSlug,
} from "@/lib/published-sections"
import { PortfolioMidiaMobilePublishedSectionPage } from "@/components/published-sections/portfolio-midia-mobile"

export async function generateStaticParams() {
  return PORTFOLIO_MIDIA_MOBILE_PUBLISHED_SECTIONS.map(({ slug }) => ({ slug }))
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params

  if (!(slug in PORTFOLIO_MIDIA_MOBILE_PUBLISHED_SECTION_BY_SLUG)) {
    return {}
  }

  const entry = PORTFOLIO_MIDIA_MOBILE_PUBLISHED_SECTION_BY_SLUG[slug as PortfolioMidiaMobilePublishedSectionSlug]

  return {
    title: entry.title,
    description: entry.description,
  }
}

export default async function PortfolioMidiaMobilePublishedSectionRoute(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params

  if (!(slug in PORTFOLIO_MIDIA_MOBILE_PUBLISHED_SECTION_BY_SLUG)) {
    notFound()
  }

  return (
    <PortfolioMidiaMobilePublishedSectionPage
      slug={slug as PortfolioMidiaMobilePublishedSectionSlug}
    />
  )
}
