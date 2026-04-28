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
import content from "@/app/styleguide/site-sections/proposta-kito/content.json"
import {
  ICON_COLOR,
  ICON_LIBRARY_BY_ID,
} from "@/lib/site-sections/icon-library"
import type { PropostaKitoPublishedSectionSlug } from "@/lib/published-sections"
import { AutoHeightReporter } from "@/components/published-sections/auto-height-reporter"
import { PropostaSigoAreasSection } from "@/components/published-sections/proposta-sigo"

const AREAS = [
  { key: "s03.identidade", iconKey: "s03.identidade.icon" },
  { key: "s03.type", iconKey: "s03.type.icon" },
  { key: "s03.motion", iconKey: "s03.motion.icon" },
  { key: "s03.brand", iconKey: "s03.brand.icon" },
  { key: "s03.ds", iconKey: "s03.ds.icon" },
  { key: "s03.apps", iconKey: "s03.apps.icon" },
  { key: "s03.sites", iconKey: "s03.sites.icon" },
  { key: "s03.social", iconKey: "s03.social.icon" },
  { key: "s03.pecas", iconKey: "s03.pecas.icon" },
] as const

const S05_ITEMS = [
  { value: "entregas",    iconKey: "s05.entregas.icon",    labelKey: "s05.entregas.label",    bodyKey: "s05.entregas.body"    },
  { value: "exemplo",     iconKey: "s05.exemplo.icon",     labelKey: "s05.exemplo.label",     bodyKey: "s05.exemplo.body"     },
  { value: "consultoria", iconKey: "s05.consultoria.icon", labelKey: "s05.consultoria.label", badgeKey: "s05.consultoria.badge", bodyKey: "s05.consultoria.body" },
] as const

const S04_ITEMS = [
  { value: "usabilidade", iconKey: "s04.usabilidade.icon", labelKey: "s04.usabilidade.label", bodyKey: "s04.usabilidade.body" },
  { value: "fluxos", iconKey: "s04.fluxos.icon", labelKey: "s04.fluxos.label", bodyKey: "s04.fluxos.body" },
  { value: "consistencia", iconKey: "s04.consistencia.icon", labelKey: "s04.consistencia.label", bodyKey: "s04.consistencia.body" },
  { value: "experiencia", iconKey: "s04.experiencia.icon", labelKey: "s04.experiencia.label", bodyKey: "s04.experiencia.body" },
  { value: "bugs", iconKey: "s04.bugs.icon", labelKey: "s04.bugs.label", bodyKey: "s04.bugs.body" },
] as const

const S06_ITEMS = [
  { value: "versao", iconKey: "s06.versao.icon", labelKey: "s06.versao.label", bodyKey: "s06.versao.body" },
  { value: "hig", iconKey: "s06.hig.icon", labelKey: "s06.hig.label", bodyKey: "s06.hig.body" },
  { value: "developer", iconKey: "s06.developer.icon", labelKey: "s06.developer.label", bodyKey: "s06.developer.body" },
  { value: "certificados", iconKey: "s06.certificados.icon", labelKey: "s06.certificados.label", bodyKey: "s06.certificados.body" },
  { value: "testes", iconKey: "s06.testes.icon", labelKey: "s06.testes.label", bodyKey: "s06.testes.body" },
  { value: "appstore", iconKey: "s06.appstore.icon", labelKey: "s06.appstore.label", bodyKey: "s06.appstore.body" },
  { value: "submissao", iconKey: "s06.submissao.icon", labelKey: "s06.submissao.label", bodyKey: "s06.submissao.body" },
] as const

const S07_ITEMS = [
  { value: "analise", iconKey: "s07.analise.icon", labelKey: "s07.analise.label", bodyKey: "s07.analise.body" },
  { value: "verbal", iconKey: "s07.verbal.icon", labelKey: "s07.verbal.label", bodyKey: "s07.verbal.body" },
  { value: "estrategia", iconKey: "s07.estrategia.icon", labelKey: "s07.estrategia.label", bodyKey: "s07.estrategia.body" },
  { value: "argumentos", iconKey: "s07.argumentos.icon", labelKey: "s07.argumentos.label", bodyKey: "s07.argumentos.body" },
  { value: "brandsystem", iconKey: "s07.brandsystem.icon", labelKey: "s07.brandsystem.label", bodyKey: "s07.brandsystem.body" },
] as const

const S08_BENEFITS = [
  { id: "b1", iconKey: "s08.b1.icon", labelKey: "s08.b1", bodyKey: "s08.b1.body" },
  { id: "b2", iconKey: "s08.b2.icon", labelKey: "s08.b2", bodyKey: "s08.b2.body" },
  { id: "b3", iconKey: "s08.b3.icon", labelKey: "s08.b3", bodyKey: "s08.b3.body" },
  { id: "b4", iconKey: "s08.b4.icon", labelKey: "s08.b4", bodyKey: "s08.b4.body" },
  { id: "b5", iconKey: "s08.b5.icon", labelKey: "s08.b5", bodyKey: "s08.b5.body" },
  { id: "b6", iconKey: "s08.b6.icon", labelKey: "s08.b6", bodyKey: "s08.b6.body" },
  { id: "b7", iconKey: "s08.b7.icon", labelKey: "s08.b7", bodyKey: "s08.b7.body" },
  { id: "b8", iconKey: "s08.b8.icon", labelKey: "s08.b8", bodyKey: "s08.b8.body" },
  { id: "b9", iconKey: "s08.b9.icon", labelKey: "s08.b9", bodyKey: "s08.b9.body" },
] as const

const S10_ITEMS = [
  { id: "pecas", iconKey: "s10.pecas.icon", labelKey: "s10.pecas.label", bodyKey: "s10.pecas.body", badgeKey: null },
  { id: "instagram", iconKey: "s10.instagram.icon", labelKey: "s10.instagram.label", bodyKey: "s10.instagram.body", badgeKey: null },
  { id: "posts", iconKey: "s10.posts.icon", labelKey: "s10.posts.label", bodyKey: "s10.posts.body", badgeKey: null },
  { id: "content", iconKey: "s10.content.icon", labelKey: "s10.content.label", bodyKey: "s10.content.body", badgeKey: "s10.content.badge" },
] as const

const S12_ITEMS = [
  { value: "ux", iconKey: "s12.ux.icon", labelKey: "s12.ux.label", badgeKey: "s12.ux.badge", bodyKey: "s12.ux.body" },
  { value: "marca", iconKey: "s12.marca.icon", labelKey: "s12.marca.label", badgeKey: "s12.marca.badge", bodyKey: "s12.marca.body" },
  { value: "ds", iconKey: "s12.ds.icon", labelKey: "s12.ds.label", badgeKey: "s12.ds.badge", bodyKey: "s12.ds.body" },
  { value: "website", iconKey: "s12.website.icon", labelKey: "s12.website.label", badgeKey: "s12.website.badge", bodyKey: "s12.website.body" },
  { value: "midia", iconKey: "s12.midia.icon", labelKey: "s12.midia.label", badgeKey: "s12.midia.badge", bodyKey: "s12.midia.body" },
  { value: "dev", iconKey: "s12.dev.icon", labelKey: "s12.dev.label", badgeKey: "s12.dev.badge", bodyKey: "s12.dev.body" },
] as const

const S13_ITEMS = [
  { value: "ux", iconKey: "s13.ux.icon", labelKey: "s13.ux.label", badgeKey: "s13.ux.badge", bodyKey: "s13.ux.body" },
  { value: "marca", iconKey: "s13.marca.icon", labelKey: "s13.marca.label", badgeKey: "s13.marca.badge", bodyKey: "s13.marca.body" },
  { value: "ds", iconKey: "s13.ds.icon", labelKey: "s13.ds.label", badgeKey: "s13.ds.badge", bodyKey: "s13.ds.body" },
  { value: "website", iconKey: "s13.website.icon", labelKey: "s13.website.label", badgeKey: "s13.website.badge", bodyKey: "s13.website.body" },
  { value: "midia", iconKey: "s13.midia.icon", labelKey: "s13.midia.label", badgeKey: "s13.midia.badge", bodyKey: "s13.midia.body" },
  { value: "dev", iconKey: "s13.dev.icon", labelKey: "s13.dev.label", badgeKey: "s13.dev.badge", bodyKey: "s13.dev.body" },
  { value: "consultoria", iconKey: "s13.consultoria.icon", labelKey: "s13.consultoria.label", badgeKey: "s13.consultoria.badge", bodyKey: "s13.consultoria.body" },
  { value: "ios", iconKey: "s13.ios.icon", labelKey: "s13.ios.label", badgeKey: "s13.ios.badge", bodyKey: "s13.ios.body" },
] as const

const S14_ITEMS = [
  { value: "ux", iconKey: "s14.ux.icon", labelKey: "s14.ux.label", badgeKey: "s14.ux.badge", bodyKey: "s14.ux.body" },
  { value: "marca", iconKey: "s14.marca.icon", labelKey: "s14.marca.label", badgeKey: "s14.marca.badge", bodyKey: "s14.marca.body" },
  { value: "ds", iconKey: "s14.ds.icon", labelKey: "s14.ds.label", badgeKey: "s14.ds.badge", bodyKey: "s14.ds.body" },
  { value: "website", iconKey: "s14.website.icon", labelKey: "s14.website.label", badgeKey: "s14.website.badge", bodyKey: "s14.website.body" },
  { value: "midia", iconKey: "s14.midia.icon", labelKey: "s14.midia.label", badgeKey: "s14.midia.badge", bodyKey: "s14.midia.body" },
  { value: "dev", iconKey: "s14.dev.icon", labelKey: "s14.dev.label", badgeKey: "s14.dev.badge", bodyKey: "s14.dev.body" },
  { value: "consultoria", iconKey: "s14.consultoria.icon", labelKey: "s14.consultoria.label", badgeKey: "s14.consultoria.badge", bodyKey: "s14.consultoria.body" },
  { value: "ios", iconKey: "s14.ios.icon", labelKey: "s14.ios.label", badgeKey: "s14.ios.badge", bodyKey: "s14.ios.body" },
  { value: "dedicacao", iconKey: "s14.dedicacao.icon", labelKey: "s14.dedicacao.label", badgeKey: "s14.dedicacao.badge", bodyKey: "s14.dedicacao.body" },
] as const

const S15_ROWS = [
  { key: "ux", frenteKey: "s15.ux.frente", startKey: "s15.ux.start", proKey: "s15.ux.pro", insaneKey: "s15.ux.insane" },
  { key: "marca", frenteKey: "s15.marca.frente", startKey: "s15.marca.start", proKey: "s15.marca.pro", insaneKey: "s15.marca.insane" },
  { key: "brand", frenteKey: "s15.brand.frente", startKey: "s15.brand.start", proKey: "s15.brand.pro", insaneKey: "s15.brand.insane" },
  { key: "ds", frenteKey: "s15.ds.frente", startKey: "s15.ds.start", proKey: "s15.ds.pro", insaneKey: "s15.ds.insane" },
  { key: "website", frenteKey: "s15.website.frente", startKey: "s15.website.start", proKey: "s15.website.pro", insaneKey: "s15.website.insane" },
  { key: "midia", frenteKey: "s15.midia.frente", startKey: "s15.midia.start", proKey: "s15.midia.pro", insaneKey: "s15.midia.insane" },
  { key: "devapp", frenteKey: "s15.devapp.frente", startKey: "s15.devapp.start", proKey: "s15.devapp.pro", insaneKey: "s15.devapp.insane" },
  { key: "consultoria", frenteKey: "s15.consultoria.frente", startKey: "s15.consultoria.start", proKey: "s15.consultoria.pro", insaneKey: "s15.consultoria.insane" },
  { key: "ios", frenteKey: "s15.ios.frente", startKey: "s15.ios.start", proKey: "s15.ios.pro", insaneKey: "s15.ios.insane" },
  { key: "suporte", frenteKey: "s15.suporte.frente", startKey: "s15.suporte.start", proKey: "s15.suporte.pro", insaneKey: "s15.suporte.insane" },
  { key: "dedicacao", frenteKey: "s15.dedicacao.frente", startKey: "s15.dedicacao.start", proKey: "s15.dedicacao.pro", insaneKey: "s15.dedicacao.insane" },
] as const

const S16_ITEMS = [
  { titleKey: "s16.fluxo.title", itemKeys: ["s16.fluxo.item1", "s16.fluxo.item2", "s16.fluxo.item3"] as const },
  { titleKey: "s16.prazo.title", itemKeys: ["s16.prazo.item1", "s16.prazo.item2"] as const },
  { titleKey: "s16.appstore.title", itemKeys: ["s16.appstore.item1"] as const },
  { titleKey: "s16.custos.title", itemKeys: ["s16.custos.item1"] as const },
  { titleKey: "s16.escopo.title", itemKeys: ["s16.escopo.item1"] as const },
] as const

const S18_CARDS = [
  { id: "start", labelKey: "s18.start.label", valorKey: "s18.start.valor", badgeKey: "s18.start.badge", descKey: "s18.start.descricao", cap1Key: "s18.start.caption1", cap2Key: "s18.start.caption2", variant: "service" as const },
  { id: "pro", labelKey: "s18.pro.label", valorKey: "s18.pro.valor", badgeKey: "s18.pro.badge", descKey: "s18.pro.descricao", cap1Key: "s18.pro.caption1", cap2Key: "s18.pro.caption2", variant: "success" as const },
  { id: "insane", labelKey: "s18.insane.label", valorKey: "s18.insane.valor", badgeKey: "s18.insane.badge", descKey: "s18.insane.descricao", cap1Key: "s18.insane.caption1", cap2Key: "s18.insane.caption2", variant: "service" as const },
] as const

type ContentKey = keyof typeof content

const FIGMA_FRAME_HEIGHT = 410
const FADE_DURATION_MS = 1000
const FADE_STAGGER_MS = 500

function c(key: ContentKey) {
  return content[key]
}

function Accent({ children }: { children: ReactNode }) {
  return <span className="text-primary">{children}</span>
}

function getIconById(iconId: string) {
  return (
    ICON_LIBRARY_BY_ID[iconId] ??
    ICON_LIBRARY_BY_ID[Object.keys(ICON_LIBRARY_BY_ID)[0]]
  )
}

function getFrameHeightIconDisplay(iconId: string, targetHeight: number) {
  const icon = getIconById(iconId)
  return {
    width: Math.round((icon.fw / FIGMA_FRAME_HEIGHT) * targetHeight),
    height: Math.round((icon.fh / FIGMA_FRAME_HEIGHT) * targetHeight),
  }
}

function getScaledIconDisplay(iconId: string, scale: number) {
  const icon = getIconById(iconId)
  return {
    width: Math.round(icon.fw * scale),
    height: Math.round(icon.fh * scale),
  }
}

function getFadeStyle(index: number, entered: boolean): CSSProperties {
  return {
    opacity: entered ? 1 : 0,
    transform: entered ? "scale(1)" : "scale(1.1)",
    transformOrigin: "center center",
    willChange: "opacity, transform",
    transitionProperty: "opacity, transform",
    transitionDuration: `${FADE_DURATION_MS}ms`,
    transitionTimingFunction: "ease",
    transitionDelay: entered ? `${index * FADE_STAGGER_MS}ms` : "0ms",
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
      <section data-published-section-root>{children}</section>
    </main>
  )
}

function PublishedSectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string
  title: ReactNode
  subtitle: string
}) {
  return (
    <div className="mb-[45px] flex flex-col items-center gap-3 text-center">
      {eyebrow ? (
        <p className="text-xs font-bold uppercase tracking-widest text-primary">
          {eyebrow}
        </p>
      ) : null}
      <Typography variant="h1" className="max-w-3xl">
        {title}
      </Typography>
      <Typography variant="body-m" className="max-w-2xl text-muted-foreground">
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
    if (!node || entered) return

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

function FrenteAccordion({
  items,
}: {
  items: readonly {
    value: string
    iconKey: ContentKey
    labelKey: ContentKey
    badgeKey?: ContentKey
    bodyKey: ContentKey
  }[]
}) {
  return (
    <Accordion<string> type="multiple" defaultValue={[]} className="flex flex-col gap-4">
      {items.map(({ value, iconKey, labelKey, badgeKey, bodyKey }) => {
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
                    {badgeKey ? (
                      <Badge variant="service" size="sm" className="shrink-0">
                        {c(badgeKey)}
                      </Badge>
                    ) : null}
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
  )
}

export function PropostaKitoSobreSection() {
  return (
    <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
      <PublishedSectionHeader title={c("s01.title")} subtitle={c("s01.subtitle")} />
      <div className="flex flex-col gap-4">
        <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-6">
          <Badge variant="service" size="sm" className="self-start">
            {c("s01.badge")}
          </Badge>
          <div className="flex max-w-3xl flex-col gap-4">
            {c("s01.body1") && <Typography variant="body-m" className="text-muted-foreground leading-relaxed">{c("s01.body1")}</Typography>}
            {c("s01.body2") && <Typography variant="body-m" className="text-muted-foreground leading-relaxed">{c("s01.body2")}</Typography>}
            {c("s01.body3") && <Typography variant="body-m" className="text-muted-foreground leading-relaxed">{c("s01.body3")}</Typography>}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {(["s01.tag1", "s01.tag2", "s01.tag3"] as const).map((key) => (
            <div
              key={key}
              className="flex min-h-[100px] items-center justify-center rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]"
            >
              <Typography variant="display-l" className="text-center text-primary leading-none">
                {c(key)}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PropostaKitoContextoObjetivosSection() {
  return (
    <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
      <PublishedSectionHeader
        title={
          <>
            {c("s02.title.prefix")}
            <Accent>{c("s02.title.accent")}</Accent>
          </>
        }
        subtitle={c("s02.subtitle")}
      />
      <div className="flex flex-col gap-4">
        <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
          <Typography variant="body-m" className="max-w-3xl text-muted-foreground leading-relaxed">
            {c("s02.intro")}
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {(["usuario", "estabelecimento"] as const).map((audience) => {
            const iconKey = `s02.${audience}.icon` as ContentKey
            const labelKey = `s02.${audience}.label` as ContentKey
            const bodyKey = `s02.${audience}.body` as ContentKey
            const iconDisplay = getFrameHeightIconDisplay(c(iconKey), 47)

            return (
              <div
                key={audience}
                className="flex min-h-[200px] flex-col gap-6 rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]"
              >
                <StaticIcon
                  iconId={c(iconKey)}
                  alt={c(labelKey)}
                  width={iconDisplay.width}
                  height={iconDisplay.height}
                />
                <div className="flex flex-col gap-2">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                    {c(labelKey)}
                  </p>
                  <Typography variant="body-s" className="text-muted-foreground leading-relaxed">
                    {c(bodyKey)}
                  </Typography>
                </div>
              </div>
            )
          })}
        </div>
        <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
            {c("s02.obj.title")}
          </p>
          <ul className="flex flex-col gap-2">
            {(["s02.obj.1", "s02.obj.2", "s02.obj.3", "s02.obj.4", "s02.obj.5", "s02.obj.6", "s02.obj.7"] as const).map((key) => (
              <li key={key} className="flex items-start gap-3">
                <span className="mt-[7px] h-1 w-1 shrink-0 bg-primary" />
                <Typography variant="body-s" className="text-muted-foreground">
                  {c(key)}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function PropostaKitoComoTrabalhamosSection() {
  const { ref, entered } = useEnterOnce()

  return (
    <section ref={ref} className="ds-section flex flex-col" style={{ backgroundColor: "#efefef" }}>
      <PublishedSectionHeader title={c("s03.title")} subtitle={c("s03.subtitle")} />
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:col-span-3 xl:grid-cols-3">
          {AREAS.map(({ key, iconKey }, index) => {
            const iconDisplay = getFrameHeightIconDisplay(c(iconKey), 47.0448)

            return (
              <div
                key={key}
                className="aspect-[5/3] rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col justify-between"
                style={getFadeStyle(index, entered)}
              >
                <StaticIcon
                  iconId={c(iconKey)}
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
          className="flex flex-col justify-end gap-4 rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] xl:col-span-1"
          style={getFadeStyle(AREAS.length, entered)}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">Filosofia</p>
          <Typography variant="body-s" className="text-muted-foreground italic">
            {c("s03.filosofia")}
          </Typography>
        </div>
      </div>
    </section>
  )
}

function FrenteSection({
  badgeKey,
  titlePrefixKey,
  titleAccentKey,
  subtitleKey,
  introKey,
  items,
}: {
  badgeKey: ContentKey
  titlePrefixKey: ContentKey
  titleAccentKey: ContentKey
  subtitleKey: ContentKey
  introKey: ContentKey
  items: readonly {
    value: string
    iconKey: ContentKey
    labelKey: ContentKey
    badgeKey?: ContentKey
    bodyKey: ContentKey
  }[]
}) {
  return (
    <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
      <PublishedSectionHeader
        eyebrow={c(badgeKey)}
        title={
          <>
            {c(titlePrefixKey)}
            <Accent>{c(titleAccentKey)}</Accent>
          </>
        }
        subtitle={c(subtitleKey)}
      />
      <div className="flex flex-col gap-4">
        <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
          <Typography variant="body-m" className="max-w-3xl text-muted-foreground leading-relaxed">
            {c(introKey)}
          </Typography>
        </div>
        <FrenteAccordion items={items} />
      </div>
    </section>
  )
}

export function PropostaKitoFrente1Section() {
  return (
    <FrenteSection
      badgeKey="s04.badge"
      titlePrefixKey="s04.title.prefix"
      titleAccentKey="s04.title.accent"
      subtitleKey="s04.subtitle"
      introKey="s04.intro"
      items={S04_ITEMS}
    />
  )
}

export function PropostaKitoFrente2Section() {
  return (
    <FrenteSection
      badgeKey="s05.badge"
      titlePrefixKey="s05.title.prefix"
      titleAccentKey="s05.title.accent"
      subtitleKey="s05.subtitle"
      introKey="s05.intro"
      items={S05_ITEMS}
    />
  )
}

export function PropostaKitoFrente3Section() {
  return (
    <FrenteSection
      badgeKey="s06.badge"
      titlePrefixKey="s06.title.prefix"
      titleAccentKey="s06.title.accent"
      subtitleKey="s06.subtitle"
      introKey="s06.intro"
      items={S06_ITEMS}
    />
  )
}

export function PropostaKitoFrente4Section() {
  return (
    <FrenteSection
      badgeKey="s07.badge"
      titlePrefixKey="s07.title.prefix"
      titleAccentKey="s07.title.accent"
      subtitleKey="s07.subtitle"
      introKey="s07.intro"
      items={S07_ITEMS}
    />
  )
}

export function PropostaKitoFrente5Section() {
  return (
    <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
      <PublishedSectionHeader
        eyebrow={c("s08.badge")}
        title={
          <>
            {c("s08.title.prefix")}
            <Accent>{c("s08.title.accent")}</Accent>
          </>
        }
        subtitle={c("s08.subtitle")}
      />
      <div className="flex flex-col gap-4">
        {/* Linha 1: intro ≠ Brand System | Foundations */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-2">
            <Typography variant="h4" className="font-bold">{c("s08.intro1")}</Typography>
            <Typography variant="body-s" className="text-muted-foreground leading-relaxed">{c("s08.intro2")}</Typography>
          </div>
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">{c("s08.foundations.label")}</p>
            <Typography variant="body-s" className="text-muted-foreground">{c("s08.foundations.sublabel")}</Typography>
            <Typography variant="body-s" className="text-muted-foreground leading-relaxed">{c("s08.foundations.body")}</Typography>
          </div>
        </div>
        {/* Linha 2: Componentes | Patterns */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">{c("s08.componentes.label")}</p>
            <Typography variant="body-s" className="text-muted-foreground">{c("s08.componentes.sublabel")}</Typography>
            <Typography variant="body-s" className="text-muted-foreground leading-relaxed">{c("s08.componentes.body")}</Typography>
          </div>
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">{c("s08.patterns.label")}</p>
            <Typography variant="body-s" className="text-muted-foreground">{c("s08.patterns.sublabel")}</Typography>
            <Typography variant="body-s" className="text-muted-foreground leading-relaxed">{c("s08.patterns.body")}</Typography>
          </div>
        </div>
      </div>
    </section>
  )
}

export function PropostaKitoBeneficiosSection() {
  return (
    <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
      <PublishedSectionHeader
        title={c("s08.beneficios.title")}
        subtitle={c("s08.beneficios.subtitle")}
      />
      <div className="px-10">
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent>
            {S08_BENEFITS.map(({ id, iconKey, labelKey, bodyKey }) => {
              const iconDisplay = getFrameHeightIconDisplay(c(iconKey as ContentKey), 74)
              return (
                <CarouselItem key={id} className="basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="aspect-square rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col justify-between">
                    <StaticIcon iconId={c(iconKey as ContentKey)} alt={c(labelKey as ContentKey)} width={iconDisplay.width} height={iconDisplay.height} />
                    <div className="flex flex-col gap-3">
                      <Typography variant="h1" className="leading-tight">{c(labelKey as ContentKey)}</Typography>
                      <Typography variant="body-m" className="text-muted-foreground leading-relaxed">{c(bodyKey as ContentKey)}</Typography>
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

export function PropostaKitoFrente6Section() {
  return (
    <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
      <PublishedSectionHeader
        eyebrow={c("s09.badge")}
        title={
          <>
            {c("s09.title.prefix")}
            <Accent>{c("s09.title.accent")}</Accent>
          </>
        }
        subtitle={c("s09.subtitle")}
      />
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {(["lp-geral", "lp-estab"] as const).map((block) => {
            const labelKey = `s09.${block}.label` as ContentKey
            const bodyKey = `s09.${block}.body` as ContentKey

            return (
              <div key={block} className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                  {c(labelKey)}
                </p>
                <Typography variant="body-s" className="text-muted-foreground leading-relaxed">
                  {c(bodyKey)}
                </Typography>
              </div>
            )
          })}
        </div>
        <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
            {c("s09.entregas.title")}
          </p>
          <Typography variant="body-s" className="text-muted-foreground leading-relaxed">
            {c("s09.entregas.body")}
          </Typography>
        </div>
      </div>
    </section>
  )
}

export function PropostaKitoFrente7Section() {
  return (
    <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
      <PublishedSectionHeader
        eyebrow={c("s10.badge")}
        title={
          <>
            {c("s10.title.prefix")}
            <Accent>{c("s10.title.accent")}</Accent>
          </>
        }
        subtitle={c("s10.subtitle")}
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {S10_ITEMS.map(({ id, iconKey, labelKey, bodyKey, badgeKey }) => {
          const iconDisplay = getFrameHeightIconDisplay(c(iconKey), 47)

          return (
            <div
              key={id}
              className="flex min-h-[200px] flex-col gap-6 rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]"
            >
              <div className="flex items-start justify-between gap-4">
                <StaticIcon
                  iconId={c(iconKey)}
                  alt={c(labelKey)}
                  width={iconDisplay.width}
                  height={iconDisplay.height}
                />
                {badgeKey ? (
                  <Badge variant="service" size="sm" className="shrink-0">
                    {c(badgeKey)}
                  </Badge>
                ) : null}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                  {c(labelKey)}
                </p>
                <Typography variant="body-s" className="text-muted-foreground leading-relaxed">
                  {c(bodyKey)}
                </Typography>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export function PropostaKitoNiveisSection() {
  return (
    <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
      <PublishedSectionHeader
        title={
          <>
            {c("s11.title.prefix")}
            <Accent>{c("s11.title.accent")}</Accent>
          </>
        }
        subtitle={c("s11.subtitle")}
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {(["n1", "n2", "n3"] as const).map((level) => {
          const ordKey = `s11.${level}.ord` as ContentKey
          const badgeKey = `s11.${level}.badge` as ContentKey
          const titleKey = `s11.${level}.title` as ContentKey
          const bodyKey = `s11.${level}.body` as ContentKey

          return (
            <div key={level} className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <Typography variant="display-l" className="text-primary leading-none">
                  {c(ordKey)}
                </Typography>
                <Badge variant="service" size="sm">
                  {c(badgeKey)}
                </Badge>
              </div>
              <div className="flex flex-col gap-3">
                <Typography variant="h3">{c(titleKey)}</Typography>
                <Typography variant="body-s" className="text-muted-foreground leading-relaxed">
                  {c(bodyKey)}
                </Typography>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function PacoteSection({
  titlePrefixKey,
  titleAccentKey,
  subtitleKey,
  badgeKey,
  introKey,
  precoKey,
  badgeVariant,
  items,
}: {
  titlePrefixKey: ContentKey
  titleAccentKey: ContentKey
  subtitleKey: ContentKey
  badgeKey: ContentKey
  introKey: ContentKey
  precoKey: ContentKey
  badgeVariant: "service" | "success"
  items: readonly {
    value: string
    iconKey: ContentKey
    labelKey: ContentKey
    badgeKey: ContentKey
    bodyKey: ContentKey
  }[]
}) {
  return (
    <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
      <PublishedSectionHeader
        title={
          <>
            {c(titlePrefixKey)}
            <Accent>{c(titleAccentKey)}</Accent>
          </>
        }
        subtitle={c(subtitleKey)}
      />
      <div className="flex flex-col gap-4">
        <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-2xl flex-col gap-3">
            <Badge variant={badgeVariant} size="sm" className="self-start font-bold">
              {c(badgeKey)}
            </Badge>
            <Typography variant="body-m" className="text-muted-foreground leading-relaxed">
              {c(introKey)}
            </Typography>
          </div>
          <Typography variant="display-xl" className="shrink-0 text-primary leading-none">
            {c(precoKey)}
          </Typography>
        </div>
        <FrenteAccordion items={items} />
      </div>
    </section>
  )
}

export function PropostaKitoPacoteStartSection() {
  return (
    <PacoteSection
      titlePrefixKey="s12.title.prefix"
      titleAccentKey="s12.title.accent"
      subtitleKey="s12.subtitle"
      badgeKey="s12.badge"
      introKey="s12.intro"
      precoKey="s12.preco"
      badgeVariant="service"
      items={S12_ITEMS}
    />
  )
}

export function PropostaKitoPacoteProSection() {
  return (
    <PacoteSection
      titlePrefixKey="s13.title.prefix"
      titleAccentKey="s13.title.accent"
      subtitleKey="s13.subtitle"
      badgeKey="s13.badge"
      introKey="s13.intro"
      precoKey="s13.preco"
      badgeVariant="success"
      items={S13_ITEMS}
    />
  )
}

export function PropostaKitoPacoteInsaneSection() {
  return (
    <PacoteSection
      titlePrefixKey="s14.title.prefix"
      titleAccentKey="s14.title.accent"
      subtitleKey="s14.subtitle"
      badgeKey="s14.badge"
      introKey="s14.intro"
      precoKey="s14.preco"
      badgeVariant="service"
      items={S14_ITEMS}
    />
  )
}

export function PropostaKitoComparativoSection() {
  return (
    <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
      <PublishedSectionHeader
        title={
          <>
            {c("s15.title.prefix")}
            <Accent>{c("s15.title.accent")}</Accent>
          </>
        }
        subtitle={c("s15.subtitle")}
      />
      <div className="overflow-x-auto">
        <div className="flex min-w-[720px] flex-col gap-2">
          <div className="grid grid-cols-4 gap-2">
            <div className="rounded-none border border-white bg-[#f9f9f9] p-4" />
            {(["s15.col.start", "s15.col.pro", "s15.col.insane"] as const).map((key, index) => (
              <div key={key} className="flex items-center justify-center rounded-none border border-white bg-[#f9f9f9] p-4">
                <p className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${index === 1 ? "text-primary" : "text-foreground/60"}`}>
                  {c(key)}
                </p>
              </div>
            ))}
          </div>
          {S15_ROWS.map(({ key, frenteKey, startKey, proKey, insaneKey }) => (
            <div key={key} className="grid grid-cols-4 gap-2">
              <div className="rounded-none border border-white bg-[#f9f9f9] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                  {c(frenteKey)}
                </p>
              </div>
              <div className="rounded-none border border-white bg-[#f9f9f9] p-4">
                <Typography variant="body-s" className="text-muted-foreground">
                  {c(startKey)}
                </Typography>
              </div>
              <div className="rounded-none border border-white bg-[#f9f9f9] p-4">
                <Typography variant="body-s" className="font-medium">
                  {c(proKey)}
                </Typography>
              </div>
              <div className="rounded-none border border-white bg-[#f9f9f9] p-4">
                <Typography variant="body-s" className="text-muted-foreground">
                  {c(insaneKey)}
                </Typography>
              </div>
            </div>
          ))}
          {/* Linha de preços */}
          <div className="grid grid-cols-4 gap-2 mt-2">
            <div className="rounded-none border border-white bg-[#f9f9f9] p-4 flex items-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                {c("s15.price.label")}
              </p>
            </div>
            {(["s15.price.start", "s15.price.pro", "s15.price.insane"] as const).map((key, i) => (
              <div key={key} className="rounded-none border border-white bg-[#f9f9f9] p-4 flex items-center justify-center">
                <Typography variant="h4" className={i === 1 ? "text-primary font-bold" : "text-foreground/60"}>
                  {c(key)}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function PropostaKitoCondicoesSection() {
  return (
    <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
      <PublishedSectionHeader
        title={
          <>
            {c("s16.title.prefix")}
            <Accent>{c("s16.title.accent")}</Accent>
          </>
        }
        subtitle={c("s16.subtitle")}
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {S16_ITEMS.map(({ titleKey, itemKeys }) => (
          <div key={titleKey} className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-5">
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
    </section>
  )
}

export function PropostaKitoPagamentoSection() {
  return (
    <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
      <PublishedSectionHeader
        title={
          <>
            {c("s17.title.prefix")}
            <Accent>{c("s17.title.accent")}</Accent>
          </>
        }
        subtitle={c("s17.subtitle")}
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {(["start", "pro", "insane"] as const).map((pkg) => {
          const ordKey = `s17.${pkg}.ord` as ContentKey
          const badgeKey = `s17.${pkg}.badge` as ContentKey
          const titleKey = `s17.${pkg}.title` as ContentKey
          const items =
            pkg === "start"
              ? (["s17.start.item1", "s17.start.item2"] as const)
              : pkg === "pro"
                ? (["s17.pro.item1", "s17.pro.item2", "s17.pro.item3"] as const)
                : (["s17.insane.item1", "s17.insane.item2", "s17.insane.item3", "s17.insane.item4"] as const)

          return (
            <div key={pkg} className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <Typography variant="display-l" className="text-primary leading-none">
                  {c(ordKey)}
                </Typography>
                <Badge variant={pkg === "pro" ? "success" : "service"} size="sm">
                  {c(badgeKey)}
                </Badge>
              </div>
              <div className="flex flex-col gap-3">
                <Typography variant="h3">{c(titleKey)}</Typography>
                <ul className="flex flex-col gap-2">
                  {items.map((itemKey) => (
                    <li key={itemKey} className="flex items-start gap-3">
                      <span className="mt-[7px] h-1 w-1 shrink-0 bg-primary" />
                      <Typography variant="body-s" className="text-muted-foreground">
                        {c(itemKey)}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export function PropostaKitoInvestimentoSection() {
  return (
    <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
      <PublishedSectionHeader
        title={
          <>
            {c("s18.title.prefix")}
            <Accent>{c("s18.title.accent")}</Accent>
          </>
        }
        subtitle={c("s18.subtitle")}
      />
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {S18_CARDS.map(({ id, labelKey, valorKey, badgeKey, descKey, cap1Key, cap2Key, variant }) => (
            <div key={id} className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                  {c(labelKey)}
                </p>
                <Typography variant="display-xl" className="text-primary leading-none">
                  {c(valorKey)}
                </Typography>
                <Typography variant="body-s" className="text-muted-foreground">
                  {c(descKey)}
                </Typography>
              </div>
              <div className="flex flex-col gap-2">
                <Badge variant={variant} size="sm" className="self-start font-bold">
                  {c(badgeKey)}
                </Badge>
                <Typography variant="caption" className="text-muted-foreground">
                  {c(cap1Key)}
                </Typography>
                <Typography variant="caption" className="text-muted-foreground">
                  {c(cap2Key)}
                </Typography>
              </div>
            </div>
          ))}
        </div>
        <Typography variant="caption" className="px-1 text-muted-foreground">
          {c("s18.footnote")}
        </Typography>
      </div>
    </section>
  )
}

const PUBLISHED_SECTION_COMPONENTS: Record<
  PropostaKitoPublishedSectionSlug,
  {
    render: () => ReactNode
  }
> = {
  "sobre-a-proposta": { render: () => <PropostaKitoSobreSection /> },
  "contexto-e-objetivos-do-projeto": { render: () => <PropostaKitoContextoObjetivosSection /> },
  "como-trabalhamos": { render: () => <PropostaSigoAreasSection /> },
  "frente-1-analise-e-melhoria-do-aplicativo": { render: () => <PropostaKitoFrente1Section /> },
  "frente-2-desenvolvimento-e-evolucao-do-aplicativo": { render: () => <PropostaKitoFrente2Section /> },
  "frente-3-desenvolvimento-para-ios": { render: () => <PropostaKitoFrente3Section /> },
  "frente-4-atualizacao-de-marca-e-brand-system": { render: () => <PropostaKitoFrente4Section /> },
  "frente-5-design-system": { render: () => <PropostaKitoFrente5Section /> },
  "frente-6-website-e-landing-pages": { render: () => <PropostaKitoFrente6Section /> },
  "frente-7-midia-instagram-e-pecas-publicitarias": { render: () => <PropostaKitoFrente7Section /> },
  "estrutura-por-niveis": { render: () => <PropostaKitoNiveisSection /> },
  "pacote-start": { render: () => <PropostaKitoPacoteStartSection /> },
  "pacote-pro": { render: () => <PropostaKitoPacoteProSection /> },
  "pacote-insane": { render: () => <PropostaKitoPacoteInsaneSection /> },
  "comparativo-dos-pacotes": { render: () => <PropostaKitoComparativoSection /> },
  "beneficios-do-design-system": { render: () => <PropostaKitoBeneficiosSection /> },
}

export function getPropostaKitoPublishedSectionEntry(
  slug: PropostaKitoPublishedSectionSlug
) {
  return PUBLISHED_SECTION_COMPONENTS[slug]
}

export function PropostaKitoPublishedSectionPage({
  slug,
}: {
  slug: PropostaKitoPublishedSectionSlug
}) {
  const entry = getPropostaKitoPublishedSectionEntry(slug)
  return <PublishedSectionShell>{entry.render()}</PublishedSectionShell>
}
