import type { Metadata } from "next"
import { notFound } from "next/navigation"
import {
  PORTFOLIO_MIDIA_PUBLISHED_SECTION_BY_SLUG,
  PORTFOLIO_MIDIA_PUBLISHED_SECTIONS,
  type PortfolioMidiaPublishedSectionSlug,
} from "@/lib/published-sections"
import { PortfolioMidiaPublishedSectionPage } from "@/components/published-sections/portfolio-midia"

export async function generateStaticParams() {
  return PORTFOLIO_MIDIA_PUBLISHED_SECTIONS.map(({ slug }) => ({ slug }))
}

export async function generateMetadata(
  props: PageProps<"/sections/portfolio-midia/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params

  if (!(slug in PORTFOLIO_MIDIA_PUBLISHED_SECTION_BY_SLUG)) {
    return {}
  }

  const entry = PORTFOLIO_MIDIA_PUBLISHED_SECTION_BY_SLUG[slug as PortfolioMidiaPublishedSectionSlug]

  return {
    title: entry.title,
    description: entry.description,
  }
}

export default async function PortfolioMidiaPublishedSectionRoute(
  props: PageProps<"/sections/portfolio-midia/[slug]">
) {
  const { slug } = await props.params

  if (!(slug in PORTFOLIO_MIDIA_PUBLISHED_SECTION_BY_SLUG)) {
    notFound()
  }

  return (
    <PortfolioMidiaPublishedSectionPage
      slug={slug as PortfolioMidiaPublishedSectionSlug}
    />
  )
}
