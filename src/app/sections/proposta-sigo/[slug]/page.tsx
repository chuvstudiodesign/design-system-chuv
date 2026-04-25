import type { Metadata } from "next"
import { notFound } from "next/navigation"
import {
  PROPOSTA_SIGO_PUBLISHED_SECTION_BY_SLUG,
  PROPOSTA_SIGO_PUBLISHED_SECTIONS,
  type PropostaSigoPublishedSectionSlug,
} from "@/lib/published-sections"
import {
  PropostaSigoPublishedSectionPage,
} from "@/components/published-sections/proposta-sigo"

export async function generateStaticParams() {
  return PROPOSTA_SIGO_PUBLISHED_SECTIONS.map(({ slug }) => ({ slug }))
}

export async function generateMetadata(
  props: PageProps<"/sections/proposta-sigo/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params

  if (!(slug in PROPOSTA_SIGO_PUBLISHED_SECTION_BY_SLUG)) {
    return {}
  }

  const entry =
    PROPOSTA_SIGO_PUBLISHED_SECTION_BY_SLUG[
      slug as PropostaSigoPublishedSectionSlug
    ]

  return {
    title: entry.title,
    description: entry.description,
  }
}

export default async function PropostaSigoPublishedSectionRoute(
  props: PageProps<"/sections/proposta-sigo/[slug]">
) {
  const { slug } = await props.params

  if (!(slug in PROPOSTA_SIGO_PUBLISHED_SECTION_BY_SLUG)) {
    notFound()
  }

  return (
    <PropostaSigoPublishedSectionPage
      slug={slug as PropostaSigoPublishedSectionSlug}
    />
  )
}
