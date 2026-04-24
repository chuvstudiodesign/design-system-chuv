import { GitBranch, ImageIcon, LayoutTemplate, Workflow } from "lucide-react"

import { Badge } from "@/components/badge"
import { Typography } from "@/components/typography"
import { VisualPostCreationDeck, VisualPostCreationDeck45 } from "@/components/social-media/visual-post-creation"
import type { ApprovedCopy, ApprovedImage } from "@/components/social-media/visual-post-creation"
import { Separator } from "@/components/ui/separator"

function Section({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle?: string
  children: React.ReactNode
}) {
  return (
    <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
      <div className="mb-5">
        <h2 className="ds-section-title">{title}</h2>
        {subtitle ? <p className="ds-section-subtitle">{subtitle}</p> : null}
      </div>
      <Separator className="mb-8 bg-black/10" />
      {children}
    </section>
  )
}

export type SocialPostPageData = {
  title: string
  description: string
  approvedTopic: string
  copy: ApprovedCopy
  images: ApprovedImage[]
  contentMapping: Array<{
    page: string
    title: string
    body: string
  }>
  imageRules: [string, string, string]
  imageSources: string[]
  practicalDemoSubtitle: string
  adaptationNotes?: string
}

export function SocialPostPageTemplate({
  title,
  description,
  approvedTopic,
  copy,
  images,
  contentMapping,
  imageRules,
  imageSources,
  practicalDemoSubtitle,
  adaptationNotes,
}: SocialPostPageData) {
  return (
    <div className="ds-page">
      <div className="ds-page-header">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
          03 — SOCIAL MEDIA
        </p>
        <h1 className="ds-page-title">{title}</h1>
        <p className="ds-page-description">{description}</p>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-foreground">
          Tema aprovado: <strong>{approvedTopic}</strong>
        </p>
      </div>

      <Section
        title="Workflow Fit"
        subtitle="Executado apenas depois da curadoria, copy, fact check, imagens e revisão rápida"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Workflow,
              title: "Batch Ready",
              body: "Este post faz parte de um lote de 5, sem quebrar o fluxo passo a passo.",
            },
            {
              icon: GitBranch,
              title: "Own Page",
              body: "Criado em rota própria para não sobrescrever demos anteriores.",
            },
            {
              icon: LayoutTemplate,
              title: "Existing Pattern",
              body: "Segue a estrutura real de section, card system e deck vertical já usados no styleguide.",
            },
          ].map(({ icon: Icon, title: itemTitle, body }) => (
            <div
              key={itemTitle}
              className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]"
            >
              <Icon className="size-5 text-primary" />
              <Typography variant="h4" className="mt-5">
                {itemTitle}
              </Typography>
              <Typography variant="body-s" className="mt-3 text-muted-foreground">
                {body}
              </Typography>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Content Mapping" subtitle="Mapeamento direto da copy aprovada, sem reescrita">
        <div className="grid gap-4 xl:grid-cols-5">
          {contentMapping.map((item) => (
            <div
              key={item.page}
              className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]"
            >
              <Badge variant="outline">Page {item.page}</Badge>
              <Typography variant="h4" className="mt-5">
                {item.title}
              </Typography>
              <Typography variant="body-s" className="mt-3 text-muted-foreground">
                {item.body}
              </Typography>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
          <div className="flex items-center gap-3">
            <ImageIcon className="size-5 text-primary" />
            <Typography variant="h4">Image Slot Rules</Typography>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {imageRules.map((rule) => (
              <Typography key={rule} variant="body-s" className="text-muted-foreground">
                {rule}
              </Typography>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Practical Demo" subtitle={practicalDemoSubtitle}>
        <VisualPostCreationDeck copy={copy} images={images} />

        <div className="mt-6 rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
          <Typography variant="label-m" className="text-primary">
            Image Sources
          </Typography>
          <div className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
            {imageSources.map((source) => (
              <p key={source}>{source}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section
        title="Practical Demo · 4:5"
        subtitle="O mesmo post adaptado para o formato 4:5"
      >
        <VisualPostCreationDeck45 copy={copy} images={images} />

        {adaptationNotes ? (
          <div className="mt-6 rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <Typography variant="label-m" className="text-primary">
              Adaptation Notes · 4:5
            </Typography>
            <Typography variant="body-s" className="mt-4 text-muted-foreground">
              {adaptationNotes}
            </Typography>
          </div>
        ) : null}
      </Section>
    </div>
  )
}
