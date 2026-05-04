"use client"

import { PropostaSouzaESouzaContent } from "@/components/site-sections/proposta-souza-e-souza-shared"
import type { PropostaSouzaESouzaPublishedSectionSlug } from "@/lib/published-sections"

export function PropostaSouzaESouzaPublishedSectionPage({
  slug,
}: {
  slug: PropostaSouzaESouzaPublishedSectionSlug
}) {
  return <PropostaSouzaESouzaContent mode="published" slug={slug} />
}
