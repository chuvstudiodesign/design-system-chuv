import type { Metadata } from "next"
import { notFound } from "next/navigation"
import {
  PROPOSTA_SOUZA_E_SOUZA_PUBLISHED_SECTION_BY_SLUG,
  PROPOSTA_SOUZA_E_SOUZA_PUBLISHED_SECTIONS,
  type PropostaSouzaESouzaPublishedSectionSlug,
} from "@/lib/published-sections"
import { PropostaSouzaESouzaPublishedSectionPage } from "@/components/published-sections/proposta-souza-e-souza"

export async function generateStaticParams() {
  return PROPOSTA_SOUZA_E_SOUZA_PUBLISHED_SECTIONS.map(({ slug }) => ({ slug }))
}

export async function generateMetadata(
  props: PageProps<"/sections/proposta-souza-e-souza/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params

  if (!(slug in PROPOSTA_SOUZA_E_SOUZA_PUBLISHED_SECTION_BY_SLUG)) {
    return {}
  }

  const entry =
    PROPOSTA_SOUZA_E_SOUZA_PUBLISHED_SECTION_BY_SLUG[
      slug as PropostaSouzaESouzaPublishedSectionSlug
    ]

  return {
    title: entry.title,
    description: entry.description,
  }
}

export default async function PropostaSouzaESouzaPublishedSectionRoute(
  props: PageProps<"/sections/proposta-souza-e-souza/[slug]">
) {
  const { slug } = await props.params

  if (!(slug in PROPOSTA_SOUZA_E_SOUZA_PUBLISHED_SECTION_BY_SLUG)) {
    notFound()
  }

  return (
    <PropostaSouzaESouzaPublishedSectionPage
      slug={slug as PropostaSouzaESouzaPublishedSectionSlug}
    />
  )
}
