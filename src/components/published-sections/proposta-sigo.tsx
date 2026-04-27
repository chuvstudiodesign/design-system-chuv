"use client"

import type { CSSProperties, ReactNode } from "react"

function Accent({ children }: { children: ReactNode }) {
  return <span className="text-primary">{children}</span>
}
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
import content from "@/app/styleguide/site-sections/proposta-sigo/content.json"
import {
  ICON_COLOR,
  ICON_LIBRARY_BY_ID,
} from "@/lib/site-sections/icon-library"
import type { PropostaSigoPublishedSectionSlug } from "@/lib/published-sections"
import { AutoHeightReporter } from "@/components/published-sections/auto-height-reporter"

function SplineViewer({ url }: { url: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (!document.querySelector("[data-spline-loader]")) {
      const s = document.createElement("script")
      s.type = "module"
      s.src = "https://unpkg.com/@splinetool/viewer@1.12.88/build/spline-viewer.js"
      s.dataset.splineLoader = "1"
      document.head.appendChild(s)
    }

    const viewer = document.createElement("spline-viewer")
    viewer.setAttribute("url", url)
    viewer.style.cssText = "display:block;width:100%;height:100%"
    el.appendChild(viewer)

    return () => { el.innerHTML = "" }
  }, [url])

  return <div ref={ref} style={{ width: "100%", height: "100%" }} />
}

const AREAS = [
  { key: "s1.design-grafico", iconKey: "s1.design-grafico.icon" },
  { key: "s1.identidade-visual", iconKey: "s1.identidade-visual.icon" },
  { key: "s1.type-design", iconKey: "s1.type-design.icon" },
  { key: "s1.motion-3d", iconKey: "s1.motion-3d.icon" },
  { key: "s1.motion-2d", iconKey: "s1.motion-2d.icon" },
  { key: "s1.edicao-video", iconKey: "s1.edicao-video.icon" },
  { key: "s1.web-design", iconKey: "s1.web-design.icon" },
  { key: "s1.development", iconKey: "s1.development.icon" },
  { key: "s1.ia-aplicada", iconKey: "s1.ia-aplicada.icon" },
] as const

const OBJECTIVES = [
  {
    id: "marca",
    iconKey: "s2.marca.icon",
    titleKey: "s2.marca.title",
    bodyKey: "s2.marca.body",
  },
  {
    id: "posicionamento",
    iconKey: "s2.posicionamento.icon",
    titleKey: "s2.posicionamento.title",
    bodyKey: "s2.posicionamento.body",
  },
  {
    id: "linkedin",
    iconKey: "s2.linkedin.icon",
    titleKey: "s2.linkedin.title",
    bodyKey: "s2.linkedin.body",
  },
  {
    id: "apresentacoes",
    iconKey: "s2.apresentacoes.icon",
    titleKey: "s2.apresentacoes.title",
    bodyKey: "s2.apresentacoes.body",
  },
  {
    id: "materiais",
    iconKey: "s2.materiais.icon",
    titleKey: "s2.materiais.title",
    bodyKey: "s2.materiais.body",
  },
] as const

const ESCOPO_ITEMS = [
  {
    value: "posts",
    iconKey: "s3.posts.icon",
    labelKey: "s3.posts.label",
    badgeKey: "s3.posts.badge",
    bodyKey: "s3.posts.body",
  },
  {
    value: "carroseis",
    iconKey: "s3.carroseis.icon",
    labelKey: "s3.carroseis.label",
    badgeKey: "s3.carroseis.badge",
    bodyKey: "s3.carroseis.body",
  },
  {
    value: "stories",
    iconKey: "s3.stories.icon",
    labelKey: "s3.stories.label",
    badgeKey: "s3.stories.badge",
    bodyKey: "s3.stories.body",
  },
  {
    value: "video",
    iconKey: "s3.video.icon",
    labelKey: "s3.video.label",
    badgeKey: "s3.video.badge",
    bodyKey: "s3.video.body",
  },
  {
    value: "apresentacao",
    iconKey: "s3.apresentacao.icon",
    labelKey: "s3.apresentacao.label",
    badgeKey: "s3.apresentacao.badge",
    bodyKey: "s3.apresentacao.body",
  },
  {
    value: "extras",
    iconKey: "s3.extras.icon",
    labelKey: "s3.extras.label",
    badgeKey: "s3.extras.badge",
    bodyKey: "s3.extras.body",
  },
] as const

const BONUS_CARDS = [
  {
    id: "linguagem",
    badgeKey: "s5.linguagem.badge",
    titleKey: "s5.linguagem.title",
    bodyKey: "s5.linguagem.body",
  },
  {
    id: "analise",
    badgeKey: "s5.analise.badge",
    titleKey: "s5.analise.title",
    bodyKey: "s5.analise.body",
  },
  {
    id: "design-system",
    badgeKey: "s5.sistema.badge",
    titleKey: "s5.sistema.title",
    bodyKey: "s5.sistema.body",
  },
  {
    id: "destaques",
    badgeKey: "s5.destaques.badge",
    titleKey: "s5.destaques.title",
    bodyKey: "s5.destaques.body",
  },
  {
    id: "carroseis",
    badgeKey: "s5.carroseis.badge",
    titleKey: "s5.carroseis.title",
    bodyKey: "s5.carroseis.body",
  },
] as const

const BONUS_ORDINALS = ["s5.ord.1", "s5.ord.2", "s5.ord.3", "s5.ord.4", "s5.ord.5"] as const

const VOLUME_ITEMS = {
  deliverables: [
    { numberKey: "s4.posts.number", labelKey: "s4.posts.label", subKey: "s4.posts.sub" },
    { numberKey: "s4.stories.number", labelKey: "s4.stories.label", subKey: "s4.stories.sub" },
    { numberKey: "s4.video.number", labelKey: "s4.video.label", subKey: "s4.video.sub" },
    { numberKey: "s4.apresentacoes.number", labelKey: "s4.apresentacoes.label", subKey: "s4.apresentacoes.sub" },
    { numberKey: "s4.extras.number", labelKey: "s4.extras.label", subKey: "s4.extras.sub" },
  ],
  bonus: [
    { numberKey: null, labelKey: "s4.bonus-linguagem.label", subKey: "s4.bonus-linguagem.sub", showBonusBadge: true },
    { numberKey: null, labelKey: "s4.bonus-analise.label", subKey: "s4.bonus-analise.sub", showBonusBadge: true },
    { numberKey: null, labelKey: "s4.bonus-sistema.label", subKey: "s4.bonus-sistema.sub", showBonusBadge: true },
    { numberKey: null, labelKey: "s4.bonus-destaques.label", subKey: "s4.bonus-destaques.sub", showBonusBadge: true },
    { numberKey: "s4.bonus-carroseis.number", labelKey: "s4.bonus-carroseis.label", subKey: "s4.bonus-carroseis.sub", showBonusBadge: true },
  ],
} as const

const POR_QUE_ITEMS = [
  { titleKey: "s6.design-inteligente.title", bodyKey: "s6.design-inteligente.body" },
  { titleKey: "s6.consistencia.title", bodyKey: "s6.consistencia.body" },
  { titleKey: "s6.inovacao.title", bodyKey: "s6.inovacao.body" },
  { titleKey: "s6.multidisciplinar.title", bodyKey: "s6.multidisciplinar.body" },
  { titleKey: "s6.prazo.title", bodyKey: "s6.prazo.body" },
  { titleKey: "s6.biblioteca.title", bodyKey: "s6.biblioteca.body" },
] as const

const POR_QUE_ORDINALS = ["s6.ord.1", "s6.ord.2", "s6.ord.3", "s6.ord.4", "s6.ord.5", "s6.ord.6"] as const

const CONDICOES_ITEMS = [
  {
    titleKey: "s7.fluxo.title",
    itemKeys: ["s7.fluxo.item1", "s7.fluxo.item2", "s7.fluxo.item3"] as const,
  },
  {
    titleKey: "s7.prazos.title",
    itemKeys: ["s7.prazos.item1", "s7.prazos.item2"] as const,
  },
  {
    titleKey: "s7.contrato.title",
    itemKeys: ["s7.contrato.item1", "s7.contrato.item2"] as const,
  },
  {
    titleKey: "s7.pagamento.title",
    itemKeys: ["s7.pagamento.item1", "s7.pagamento.item2"] as const,
  },
] as const

const SECTION_FADE_DURATION_MS = 500
const SECTION_STAGGER_MS = 250
const FIGMA_FRAME_HEIGHT = 410

type ContentKey = keyof typeof content

function c(key: ContentKey) {
  return content[key]
}

function getFadeStyle(index: number, hasEntered: boolean) {
  return {
    opacity: hasEntered ? 1 : 0,
    transform: hasEntered ? "scale(1)" : "scale(1.1)",
    transformOrigin: "center center",
    willChange: "opacity, transform",
    transitionProperty: "opacity, transform",
    transitionDuration: `${SECTION_FADE_DURATION_MS}ms`,
    transitionTimingFunction: "ease",
    transitionDelay: hasEntered ? `${index * SECTION_STAGGER_MS}ms` : "0ms",
  } satisfies CSSProperties
}

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
        if (!entry?.isIntersecting) {
          return
        }

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

export function PropostaSigoAreasSection() {
  const { ref, entered } = useEnterOnce()

  return (
    <section ref={ref} className="ds-section flex flex-col" style={{ backgroundColor: "#efefef" }}>
      <PublishedSectionHeader title={content["s1.title"]} subtitle={content["s1.subtitle"]} />

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:col-span-3 xl:grid-cols-3">
          {AREAS.map(({ key, iconKey }, index) => {
            const iconId = c(iconKey)
            const iconDisplay = getFrameHeightIconDisplay(iconId, 47.0448)

            return (
              <div
                key={`${key}-published-default`}
                className="aspect-[5/3] rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col justify-between"
                style={getFadeStyle(index, entered)}
              >
                <StaticIcon
                  iconId={iconId}
                  alt={c(key)}
                  width={iconDisplay.width}
                  height={iconDisplay.height}
                />
                <Typography variant="h4" className="leading-snug">
                  {c(key)}
                </Typography>
              </div>
            )
          })}
        </div>

        <div
          className="rounded-none border border-white bg-[#f9f9f9] p-[3px] xl:col-span-1 overflow-hidden"
          style={getFadeStyle(AREAS.length, entered)}
        >
          <SplineViewer url="https://prod.spline.design/S-9NtNJpkF44Kli3/scene.splinecode" />
        </div>
      </div>
    </section>
  )
}

export function PropostaSigoAreasCenteredSection() {
  const { ref, entered } = useEnterOnce()

  return (
    <section ref={ref} className="ds-section flex flex-col" style={{ backgroundColor: "#efefef" }}>
      <PublishedSectionHeader title={content["s1.title"]} subtitle={content["s1.subtitle"]} />

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:col-span-3 xl:grid-cols-3">
          {AREAS.map(({ key, iconKey }, index) => {
            const iconId = c(iconKey)
            const iconDisplay = getFrameHeightIconDisplay(iconId, 70.5672)

            return (
              <div
                key={`${key}-published-centered`}
                className="aspect-[5/3] rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]"
                style={getFadeStyle(index, entered)}
              >
                <div className="flex h-full flex-col text-center">
                  <div className="flex flex-1 items-center justify-center">
                    <StaticIcon
                      iconId={iconId}
                      alt={c(key)}
                      width={iconDisplay.width}
                      height={iconDisplay.height}
                    />
                  </div>
                  <Typography variant="h4" className="leading-snug text-center">
                    {c(key)}
                  </Typography>
                </div>
              </div>
            )
          })}
        </div>

        <div
          className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] xl:col-span-1"
          style={getFadeStyle(AREAS.length, entered)}
        />
      </div>
    </section>
  )
}

export function PropostaSigoObjectivesSection() {
  return (
    <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
      <PublishedSectionHeader title={<>{c("s2.title.prefix")}<Accent>{c("s2.title.accent")}</Accent></>} subtitle={content["s2.subtitle"]} />

      <div className="px-10">
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent>
            {OBJECTIVES.map(({ id, iconKey, titleKey, bodyKey }) => {
              const iconDisplay = getFrameHeightIconDisplay(c(iconKey), 74)

              return (
                <CarouselItem key={id} className="basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="aspect-square rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col justify-between">
                    <StaticIcon
                      iconId={c(iconKey)}
                      alt={c(titleKey)}
                      width={iconDisplay.width}
                      height={iconDisplay.height}
                    />
                    <div className="flex flex-col gap-3">
                      <Typography variant="h1" className="leading-tight">
                        {c(titleKey)}
                      </Typography>
                      <Typography variant="body-m" className="text-muted-foreground leading-relaxed">
                        {c(bodyKey)}
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

export function PropostaSigoScopeSection() {
  return (
    <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
      <PublishedSectionHeader title={<><Accent>{c("s3.title.accent")}</Accent>{c("s3.title.suffix")}</>} subtitle={content["s3.subtitle"]} />

      <Accordion<string> type="multiple" defaultValue={[]} className="flex flex-col gap-4">
        {ESCOPO_ITEMS.map(({ value, iconKey, labelKey, badgeKey, bodyKey }) => {
          const iconDisplay = getScaledIconDisplay(c(iconKey), ((37 * 0.75 * 0.85) / 374.1) * 1.1)

          return (
            <AccordionItem
              key={value}
              value={value}
              className="rounded-none border border-white bg-[#f9f9f9] px-[var(--card-padding)] py-[var(--card-padding)]"
            >
              <AccordionTrigger className="py-0 hover:no-underline [&_[data-slot=accordion-trigger-icon]]:hidden">
                <div className="flex w-full items-center gap-4 pr-2">
                  <StaticIcon
                    iconId={c(iconKey)}
                    alt={c(labelKey)}
                    width={iconDisplay.width}
                    height={iconDisplay.height}
                  />
                  <div className="flex min-w-0 flex-1 items-center justify-between gap-4">
                    <span className="text-left text-lg font-semibold tracking-tight">
                      {c(labelKey)}
                    </span>
                    <div className="flex shrink-0 items-center gap-3">
                      <Badge variant="service" size="sm" className="shrink-0">
                        {c(badgeKey)}
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
                  {c(bodyKey)}
                </Typography>
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </section>
  )
}

export function PropostaSigoBonusSection() {
  return (
    <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
      <PublishedSectionHeader title={<><Accent>{c("s5.title.accent")}</Accent>{c("s5.title.suffix")}</>} subtitle={content["s5.subtitle"]} />

      <div className="px-10">
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent>
            {BONUS_CARDS.map(({ id, badgeKey, titleKey, bodyKey }, index) => {
              return (
                <CarouselItem key={id} className="basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="aspect-square overflow-hidden rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col justify-between">
                    <div className="flex items-center justify-start gap-2">
                      <Typography variant="display-l" className="text-primary leading-none">
                        {c(BONUS_ORDINALS[index])}
                      </Typography>
                      <Badge variant="service" size="sm">
                        {c(badgeKey as ContentKey)}
                      </Badge>
                    </div>
                    <div className="flex flex-col gap-3">
                      <Typography variant="h1" className="leading-tight">
                        {c(titleKey)}
                      </Typography>
                      <Typography variant="body-m" className="text-muted-foreground leading-relaxed">
                        {c(bodyKey)}
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

export function PropostaSigoVolumeSection() {
  return (
    <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
      <PublishedSectionHeader title={<>{c("s4.title.prefix")}<Accent>{c("s4.title.accent")}</Accent></>} subtitle={content["s4.subtitle"]} />

      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
          {VOLUME_ITEMS.deliverables.map(({ numberKey, labelKey, subKey }) => (
            <div
              key={labelKey}
              className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-3"
            >
              <Typography variant="display-l" className="text-primary leading-none">
                {c(numberKey)}
              </Typography>
              <div className="flex flex-col gap-1">
                <Typography variant="h4" className="leading-tight">
                  {c(labelKey)}
                </Typography>
                <Typography variant="body-s" className="text-muted-foreground">
                  {c(subKey)}
                </Typography>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
          {VOLUME_ITEMS.bonus.map(({ numberKey, labelKey, subKey, showBonusBadge }) => (
            <div
              key={labelKey}
              className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-3"
            >
              {numberKey ? (
                <div className="flex items-center gap-2">
                  <Typography variant="display-l" className="text-primary leading-none">
                    {c(numberKey)}
                  </Typography>
                  {showBonusBadge ? (
                    <Badge variant="service" size="sm" className="self-end mb-1">
                      {c("s4.bonus.badge")}
                    </Badge>
                  ) : null}
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Typography variant="display-l" className="text-primary leading-none">
                    {c("s4.bonus.default-number")}
                  </Typography>
                  <Badge variant="service" size="sm" className="self-end mb-1">
                    {c("s4.bonus.badge")}
                  </Badge>
                </div>
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
          ))}
        </div>
      </div>
    </section>
  )
}

export function PropostaSigoWhyChuvSection() {
  return (
    <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
      <PublishedSectionHeader title={<><Accent>{c("s6.title.accent")}</Accent>{c("s6.title.suffix")}</>} subtitle={content["s6.subtitle"]} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {POR_QUE_ITEMS.map(({ titleKey, bodyKey }, index) => (
          <div
            key={titleKey}
            className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-6"
          >
            <Typography variant="display-l" className="text-primary leading-none">
              {c(POR_QUE_ORDINALS[index])}
            </Typography>
            <div className="flex flex-col gap-2">
              <Typography variant="h3">
                {c(titleKey)}
              </Typography>
              <Typography variant="body-s" className="text-muted-foreground leading-relaxed">
                {c(bodyKey)}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function PropostaSigoInvestmentSection() {
  return (
    <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
      <PublishedSectionHeader title={<>{c("s7.title.prefix")}<Accent>{c("s7.title.accent")}</Accent></>} subtitle={content["s7.subtitle"]} />

      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {CONDICOES_ITEMS.map(({ titleKey, itemKeys }) => (
            <div
              key={titleKey}
              className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-5"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                {c(titleKey)}
              </p>
              <ul className="flex flex-col gap-2.5">
                {itemKeys.map((itemKey) => (
                  <li key={itemKey} className="flex items-start gap-3">
                    <span className="mt-[7px] h-1 w-1 shrink-0 bg-primary" />
                    <Typography variant="body-s" className="text-muted-foreground">
                      {c(itemKey)}
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
                {c("s7.investimento-label")}
              </p>
              <div className="flex flex-wrap items-end gap-3">
                <Typography variant="display-xl" className="text-primary leading-none">
                  {content["s7.valor"]}
                </Typography>
                <Typography variant="h3" className="text-muted-foreground pb-1">
                  {c("s7.mes-suffix")}
                </Typography>
              </div>
              <Typography variant="body-s" className="max-w-lg text-muted-foreground">
                {content["s7.descricao"]}
              </Typography>
            </div>

            <div className="flex flex-col gap-3 lg:items-end">
              <Badge variant="success" size="sm" className="font-bold">
                {c("s7.badge-pacote")}
              </Badge>
              <div className="flex flex-col gap-1 lg:text-right">
                <Typography variant="caption" className="text-muted-foreground">
                  {c("s7.caption1")}
                </Typography>
                <Typography variant="caption" className="text-muted-foreground">
                  {c("s7.caption2")}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const PUBLISHED_SECTION_COMPONENTS: Record<
  PropostaSigoPublishedSectionSlug,
  {
    title: string
    description: string
    render: () => ReactNode
  }
> = {
  "nossas-areas-de-atuacao": {
    title: "Nossas Áreas de Atuação",
    description: "Section isolada da proposta comercial da Sigo publicada como página independente.",
    render: () => <PropostaSigoAreasSection />,
  },
  "nossas-areas-de-atuacao-centered": {
    title: "Nossas Áreas de Atuação · Centered",
    description: "Versão centered da section de áreas de atuação da proposta comercial da Sigo.",
    render: () => <PropostaSigoAreasCenteredSection />,
  },
  "o-que-queremos-construir-juntos": {
    title: "O Que Queremos Construir Juntos",
    description: "Section isolada de objetivos da proposta comercial da Sigo.",
    render: () => <PropostaSigoObjectivesSection />,
  },
  "escopo-mensal-de-entregas": {
    title: "Escopo Mensal de Entregas",
    description: "Section isolada de escopo mensal da proposta comercial da Sigo.",
    render: () => <PropostaSigoScopeSection />,
  },
  "bonus-estrategico": {
    title: "Bônus Estratégico",
    description: "Section isolada de bônus estratégico da proposta comercial da Sigo.",
    render: () => <PropostaSigoBonusSection />,
  },
  "resumo-do-volume-mensal": {
    title: "Resumo do Volume Mensal",
    description: "Section isolada de resumo do volume mensal da proposta comercial da Sigo.",
    render: () => <PropostaSigoVolumeSection />,
  },
  "seis-razoes-para-escolher-a-chuv-studio": {
    title: "Seis Razões para Escolher a Chuv Studio",
    description: "Section isolada de motivos para contratar a Chuv Studio na proposta comercial da Sigo.",
    render: () => <PropostaSigoWhyChuvSection />,
  },
  "condicoes-gerais-e-investimento": {
    title: "Condições Gerais e Investimento",
    description: "Section isolada de condições gerais e investimento da proposta comercial da Sigo.",
    render: () => <PropostaSigoInvestmentSection />,
  },
}

export function getPropostaSigoPublishedSectionEntry(
  slug: PropostaSigoPublishedSectionSlug
) {
  return PUBLISHED_SECTION_COMPONENTS[slug]
}

export function PropostaSigoPublishedSectionPage({
  slug,
}: {
  slug: PropostaSigoPublishedSectionSlug
}) {
  const entry = getPropostaSigoPublishedSectionEntry(slug)

  return <PublishedSectionShell>{entry.render()}</PublishedSectionShell>
}
