"use client"

import type { CSSProperties, ReactNode } from "react"
import { useEffect, useRef, useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Badge } from "@/components/badge"
import { Typography } from "@/components/typography"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import content from "@/app/styleguide/site-sections/proposta-website-sigo/content.json"
import {
  ICON_COLOR,
  ICON_LIBRARY_BY_ID,
} from "@/lib/site-sections/icon-library"
import type { PropostaWebsiteSigoPublishedSectionSlug } from "@/lib/published-sections"
import { AutoHeightReporter } from "@/components/published-sections/auto-height-reporter"
import { PropostaSigoAreasSection } from "@/components/published-sections/proposta-sigo"

// ── Dados ────────────────────────────────────────────────────────────────────

const OBJECTIVES = [
  { id: "obj1", iconKey: "s2.obj1.icon", titleKey: "s2.obj1.title", bodyKey: "s2.obj1.body" },
  { id: "obj2", iconKey: "s2.obj2.icon", titleKey: "s2.obj2.title", bodyKey: "s2.obj2.body" },
  { id: "obj3", iconKey: "s2.obj3.icon", titleKey: "s2.obj3.title", bodyKey: "s2.obj3.body" },
  { id: "obj4", iconKey: "s2.obj4.icon", titleKey: "s2.obj4.title", bodyKey: "s2.obj4.body" },
  { id: "obj5", iconKey: "s2.obj5.icon", titleKey: "s2.obj5.title", bodyKey: "s2.obj5.body" },
] as const

const ESCOPO_ITEMS = [
  {
    value: "design",
    iconKey: "s3.design.icon",
    labelKey: "s3.design.label",
    badgeKey: "s3.design.badge",
    bodyKey: "s3.design.body",
  },
  {
    value: "paginas",
    iconKey: "s3.paginas.icon",
    labelKey: "s3.paginas.label",
    badgeKey: "s3.paginas.badge",
    bodyKey: "s3.paginas.body",
  },
  {
    value: "responsividade",
    iconKey: "s3.responsividade.icon",
    labelKey: "s3.responsividade.label",
    badgeKey: "s3.responsividade.badge",
    bodyKey: "s3.responsividade.body",
  },
  {
    value: "publicacao",
    iconKey: "s3.publicacao.icon",
    labelKey: "s3.publicacao.label",
    badgeKey: "s3.publicacao.badge",
    bodyKey: "s3.publicacao.body",
  },
] as const

const RESUMO_ITEMS: Array<{
  numberKey?: ContentKey
  iconKey?: ContentKey
  labelKey: ContentKey
  subKey: ContentKey
}> = [
  { numberKey: "s4.paginas.number",     labelKey: "s4.paginas.label",     subKey: "s4.paginas.sub"     },
  { numberKey: "s4.dobras.number",      labelKey: "s4.dobras.label",      subKey: "s4.dobras.sub"      },
  { numberKey: "s4.plataformas.number", labelKey: "s4.plataformas.label", subKey: "s4.plataformas.sub" },
  { numberKey: "s4.suporte.number",     labelKey: "s4.suporte.label",     subKey: "s4.suporte.sub"     },
  { iconKey: "s4.alteracoes.icon",      labelKey: "s4.alteracoes.label",  subKey: "s4.alteracoes.sub"  },
]

const CONDICOES_ITEMS = [
  {
    titleKey: "s5.fluxo.title",
    itemKeys: ["s5.fluxo.item1", "s5.fluxo.item2", "s5.fluxo.item3"] as const,
  },
  {
    titleKey: "s5.prazo.title",
    itemKeys: ["s5.prazo.item1", "s5.prazo.item2"] as const,
  },
  {
    titleKey: "s5.vigencia.title",
    itemKeys: ["s5.vigencia.item1", "s5.vigencia.item2"] as const,
  },
] as const

// ── Helpers ──────────────────────────────────────────────────────────────────

function Accent({ children }: { children: ReactNode }) {
  return <span className="text-primary">{children}</span>
}

type ContentKey = keyof typeof content

function c(key: ContentKey) {
  return content[key]
}

const FIGMA_FRAME_HEIGHT = 410

function getIconById(iconId: string) {
  return ICON_LIBRARY_BY_ID[iconId] ?? ICON_LIBRARY_BY_ID[Object.keys(ICON_LIBRARY_BY_ID)[0]]
}

function getFrameHeightIconDisplay(iconId: string, targetHeight: number) {
  const icon = getIconById(iconId)
  return {
    icon,
    width: Math.round((icon.fw / FIGMA_FRAME_HEIGHT) * targetHeight),
    height: Math.round((icon.fh / FIGMA_FRAME_HEIGHT) * targetHeight),
  }
}

function getScaledIconDisplay(iconId: string, scale: number) {
  const icon = getIconById(iconId)
  return {
    icon,
    width: Math.round(icon.fw * scale),
    height: Math.round(icon.fh * scale),
  }
}

function StaticIcon({
  iconId,
  alt,
  width,
  height,
  className,
}: {
  iconId: string
  alt: string
  width: number
  height: number
  className?: string
}) {
  const icon = getIconById(iconId)
  return (
    <div
      role="img"
      aria-label={alt}
      className={className}
      style={{
        width,
        height,
        flexShrink: 0,
        backgroundColor: ICON_COLOR,
        maskImage: `url(${icon.src})`,
        WebkitMaskImage: `url(${icon.src})`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    />
  )
}

function PublishedSectionShell({ children }: { children: ReactNode }) {
  return (
    <main className="bg-[#efefef] p-3 sm:p-4">
      <AutoHeightReporter />
      <div data-published-section-root>{children}</div>
    </main>
  )
}

function PublishedSectionHeader({
  title,
  subtitle,
}: {
  title: ReactNode
  subtitle: string
}) {
  return (
    <div className="mb-[45px] flex flex-col items-center text-center">
      <Typography variant="h1" className="max-w-3xl">
        {title}
      </Typography>
      <Typography variant="body-m" className="mt-3 max-w-2xl text-muted-foreground">
        {subtitle}
      </Typography>
    </div>
  )
}

function useEnterOnce() {
  const ref = useRef<HTMLElement | null>(null)
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    const node = ref.current

    if (!node || entered) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        setEntered(true)
        observer.disconnect()
      },
      { threshold: 0.25 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [entered])

  return { ref, entered }
}

// ── Sections ─────────────────────────────────────────────────────────────────

export function PropostaWebsiteSigoObjectivesSection() {
  return (
    <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
      <PublishedSectionHeader
        title={<>{c("s2.title.prefix")}<Accent>{c("s2.title.accent")}</Accent></>}
        subtitle={content["s2.subtitle"]}
      />

      <div className="px-10">
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent>
            {OBJECTIVES.map(({ id, iconKey, titleKey, bodyKey }) => {
              const iconDisplay = getFrameHeightIconDisplay(c(iconKey as ContentKey), 74)
              return (
                <CarouselItem key={id} className="basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="aspect-square rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col justify-between">
                    <StaticIcon
                      iconId={c(iconKey as ContentKey)}
                      alt={c(titleKey as ContentKey)}
                      width={iconDisplay.width}
                      height={iconDisplay.height}
                    />
                    <div className="flex flex-col gap-3">
                      <Typography variant="h1" className="leading-tight">
                        {c(titleKey as ContentKey)}
                      </Typography>
                      <Typography variant="body-m" className="text-muted-foreground leading-relaxed">
                        {c(bodyKey as ContentKey)}
                      </Typography>
                    </div>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

export function PropostaWebsiteSigoScopeSection() {
  return (
    <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
      <PublishedSectionHeader
        title={<><Accent>{c("s3.title.accent")}</Accent>{c("s3.title.suffix")}</>}
        subtitle={content["s3.subtitle"]}
      />

      <Accordion<string> type="multiple" defaultValue={[]} className="flex flex-col gap-4">
        {ESCOPO_ITEMS.map(({ value, iconKey, labelKey, badgeKey, bodyKey }) => {
          const iconDisplay = getScaledIconDisplay(c(iconKey as ContentKey), ((37 * 0.75 * 0.85) / 374.1) * 1.1)

          return (
            <AccordionItem
              key={value}
              value={value}
              className="rounded-none border border-white bg-[#f9f9f9] px-[var(--card-padding)] py-[var(--card-padding)]"
            >
              <AccordionTrigger className="py-0 hover:no-underline [&_[data-slot=accordion-trigger-icon]]:hidden">
                <div className="flex w-full items-center gap-4 pr-2">
                  <StaticIcon
                    iconId={c(iconKey as ContentKey)}
                    alt={c(labelKey as ContentKey)}
                    width={iconDisplay.width}
                    height={iconDisplay.height}
                  />
                  <div className="flex min-w-0 flex-1 items-center justify-between gap-4">
                    <span className="text-left text-lg font-semibold tracking-tight">
                      {c(labelKey as ContentKey)}
                    </span>
                    <div className="flex shrink-0 items-center gap-3">
                      <Badge variant="service" size="sm" className="shrink-0">
                        {c(badgeKey as ContentKey)}
                      </Badge>
                      <span className="flex h-10 w-10 items-center justify-center rounded-none border border-white bg-white text-foreground/70">
                        <ChevronDown className="size-4 shrink-0 group-aria-expanded/accordion-trigger:hidden" />
                        <ChevronUp className="hidden size-4 shrink-0 group-aria-expanded/accordion-trigger:block" />
                      </span>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Typography variant="body-s" className="max-w-2xl pt-4 pb-0 text-muted-foreground">
                  {c(bodyKey as ContentKey)}
                </Typography>
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </section>
  )
}

export function PropostaWebsiteSigoSummarySection() {
  return (
    <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
      <PublishedSectionHeader
        title={<>{c("s4.title.prefix")}<Accent>{c("s4.title.accent")}</Accent></>}
        subtitle={content["s4.subtitle"]}
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
        {RESUMO_ITEMS.map(({ numberKey, iconKey, labelKey, subKey }) => {
          const iconDisplay = iconKey ? getScaledIconDisplay(c(iconKey), 0.18) : null
          return (
            <div
              key={labelKey}
              className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col justify-between min-h-[200px]"
            >
              {iconKey && iconDisplay ? (
                <StaticIcon
                  iconId={c(iconKey)}
                  alt={c(labelKey)}
                  width={iconDisplay.width}
                  height={iconDisplay.height}
                />
              ) : (
                <Typography variant="display-l" className="text-primary leading-none -translate-y-[9px]">
                  {c(numberKey!)}
                </Typography>
              )}
              <div className="flex flex-col gap-1">
                <Typography variant="h4" className="leading-tight">
                  {c(labelKey)}
                </Typography>
                <Typography variant="body-s" className="text-muted-foreground">
                  {c(subKey)}
                </Typography>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export function PropostaWebsiteSigoInvestmentSection() {
  return (
    <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
      <PublishedSectionHeader
        title={<>{c("s5.title.prefix")}<Accent>{c("s5.title.accent")}</Accent></>}
        subtitle={content["s5.subtitle"]}
      />

      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CONDICOES_ITEMS.map(({ titleKey, itemKeys }) => (
            <div
              key={titleKey}
              className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-5"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                {c(titleKey as ContentKey)}
              </p>
              <ul className="flex flex-col gap-2.5">
                {itemKeys.map((itemKey) => (
                  <li key={itemKey} className="flex items-start gap-3">
                    <span className="mt-[7px] h-1 w-1 shrink-0 bg-primary" />
                    <Typography variant="body-s" className="text-muted-foreground">
                      {c(itemKey as ContentKey)}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col gap-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                {c("s5.investimento-label")}
              </p>
              <div className="flex flex-wrap items-end gap-3">
                <Typography variant="display-xl" className="text-primary leading-none">
                  {content["s5.valor"]}
                </Typography>
                <Typography variant="h3" className="text-muted-foreground pb-1">
                  {c("s5.mes-suffix")}
                </Typography>
              </div>
              <Typography variant="body-s" className="max-w-lg text-muted-foreground">
                {content["s5.descricao"]}
              </Typography>
            </div>

            <div className="flex flex-col gap-3 lg:items-end">
              <Badge variant="success" size="sm" className="font-bold">
                {c("s5.badge-pacote")}
              </Badge>
              <div className="flex flex-col gap-1 lg:text-right">
                <Typography variant="caption" className="text-muted-foreground">
                  {c("s5.caption1")}
                </Typography>
                <Typography variant="caption" className="text-muted-foreground">
                  {c("s5.caption2")}
                </Typography>
              </div>
            </div>
          </div>
        </div>

        <Typography variant="caption" className="text-muted-foreground px-1">
          {content["s5.footnote"]}
        </Typography>
      </div>
    </section>
  )
}

// ── Published section registry ────────────────────────────────────────────────

const PUBLISHED_SECTION_COMPONENTS: Record<
  PropostaWebsiteSigoPublishedSectionSlug,
  {
    title: string
    description: string
    render: () => ReactNode
  }
> = {
  "nossas-areas-de-atuacao": {
    title: "Nossas Áreas de Atuação",
    description: "Section de áreas de atuação da Chuv Studio na proposta de website da Sigo.",
    render: () => <PropostaSigoAreasSection />,
  },
  "objetivos-do-projeto": {
    title: "Objetivos do Projeto",
    description: "Section de objetivos do projeto de website da Sigo.",
    render: () => <PropostaWebsiteSigoObjectivesSection />,
  },
  "escopo-do-projeto": {
    title: "Escopo do Projeto",
    description: "Section de escopo do projeto de website da Sigo.",
    render: () => <PropostaWebsiteSigoScopeSection />,
  },
  "resumo-do-pacote": {
    title: "Resumo do Pacote",
    description: "Section de resumo do pacote Start Web da Sigo.",
    render: () => <PropostaWebsiteSigoSummarySection />,
  },
  "condicoes-gerais-e-investimento": {
    title: "Condições Gerais e Investimento",
    description: "Section de condições gerais e investimento da proposta de website da Sigo.",
    render: () => <PropostaWebsiteSigoInvestmentSection />,
  },
}

export function getPropostaWebsiteSigoPublishedSectionEntry(
  slug: PropostaWebsiteSigoPublishedSectionSlug
) {
  return PUBLISHED_SECTION_COMPONENTS[slug]
}

export function PropostaWebsiteSigoPublishedSectionPage({
  slug,
}: {
  slug: PropostaWebsiteSigoPublishedSectionSlug
}) {
  const entry = getPropostaWebsiteSigoPublishedSectionEntry(slug)
  return <PublishedSectionShell>{entry.render()}</PublishedSectionShell>
}
