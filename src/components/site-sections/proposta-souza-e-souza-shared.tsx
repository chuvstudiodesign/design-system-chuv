"use client"

import type { CSSProperties, ReactNode } from "react"
import React, { useEffect, useRef, useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Badge } from "@/components/badge"
import { EditableText } from "@/components/editable-text"
import { AutoHeightReporter } from "@/components/published-sections/auto-height-reporter"
import { Proposal3DFolderTabs } from "@/components/site-sections/proposal-3d-folder-tabs"
import { EditableIcon } from "@/components/site-sections/editable-icon"
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
import propostaSigoContent from "@/app/styleguide/site-sections/proposta-sigo/content.json"
import content from "@/app/styleguide/site-sections/proposta-souza-e-souza/content.json"
import {
  ICON_COLOR,
  ICON_LIBRARY_BY_ID,
} from "@/lib/site-sections/icon-library"
import type { PropostaSouzaESouzaPublishedSectionSlug } from "@/lib/published-sections"

const NS = "proposta-souza-e-souza"
const NS_SIGO = "proposta-sigo"
const FIGMA_FRAME_HEIGHT = 410
const FADE_DURATION_MS = 1000
const FADE_STAGGER_MS = 500
const AREAS_SPLINE_URL = "https://prod.spline.design/S-9NtNJpkF44Kli3/scene.splinecode"

type ContentKey = keyof typeof content
type SigoContentKey = keyof typeof propostaSigoContent
type RenderMode = "editable" | "published"

function c(key: ContentKey) {
  return content[key]
}

function splitComparativoLabel(label: string) {
  const [prefix, ...rest] = label.split(" · ")
  return {
    prefix,
    title: rest.join(" · "),
  }
}

function getComparativoValueClass(value: string, emphasized = false) {
  if (value === "Incluída") {
    return "text-primary font-medium"
  }

  if (emphasized) {
    return "text-muted-foreground"
  }

  return "text-muted-foreground"
}

function cs(key: SigoContentKey) {
  return propostaSigoContent[key]
}

function Accent({ children }: { children: ReactNode }) {
  return <span className="text-primary">{children}</span>
}

function SplineViewer({ url }: { url: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (!document.querySelector("[data-spline-loader]")) {
      const script = document.createElement("script")
      script.type = "module"
      script.src = "https://unpkg.com/@splinetool/viewer@1.12.88/build/spline-viewer.js"
      script.dataset.splineLoader = "1"
      document.head.appendChild(script)
    }

    const viewer = document.createElement("spline-viewer")
    viewer.setAttribute("url", url)
    viewer.style.cssText = "display:block;width:100%;height:100%"
    el.appendChild(viewer)

    return () => {
      el.innerHTML = ""
    }
  }, [url])

  return <div ref={ref} style={{ position: "absolute", inset: "3px" }} />
}

const areas = [
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

const objectives = [
  { id: "obj1", iconKey: "s2.obj1.icon", titleKey: "s2.obj1.title", bodyKey: "s2.obj1.body" },
  { id: "obj2", iconKey: "s2.obj2.icon", titleKey: "s2.obj2.title", bodyKey: "s2.obj2.body" },
  { id: "obj3", iconKey: "s2.obj3.icon", titleKey: "s2.obj3.title", bodyKey: "s2.obj3.body" },
  { id: "obj4", iconKey: "s2.obj4.icon", titleKey: "s2.obj4.title", bodyKey: "s2.obj4.body" },
  { id: "obj5", iconKey: "s2.obj5.icon", titleKey: "s2.obj5.title", bodyKey: "s2.obj5.body" },
  { id: "obj6", iconKey: "s2.obj6.icon", titleKey: "s2.obj6.title", bodyKey: "s2.obj6.body" },
] as const

const escopoItems = [
  { value: "system",     iconKey: "s3.system.icon",     labelKey: "s3.system.label",     badgeKey: "s3.system.badge",     bodyKey: "s3.system.body"     },
  { value: "site",       iconKey: "s3.site.icon",       labelKey: "s3.site.label",       badgeKey: "s3.site.badge",       bodyKey: "s3.site.body"       },
  { value: "automation", iconKey: "s3.automation.icon", labelKey: "s3.automation.label", badgeKey: "s3.automation.badge", bodyKey: "s3.automation.body" },
  { value: "premium",    iconKey: "s3.premium.icon",    labelKey: "s3.premium.label",    badgeKey: "s3.premium.badge",    bodyKey: "s3.premium.body"    },
  { value: "seo",        iconKey: "s3.seo.icon",        labelKey: "s3.seo.label",        badgeKey: "s3.seo.badge",        bodyKey: "s3.seo.body"        },
  { value: "physical",   iconKey: "s3.physical.icon",   labelKey: "s3.physical.label",   badgeKey: "s3.physical.badge",   bodyKey: "s3.physical.body"   },
] as const

const condicoesItems = [
  { titleKey: "s5.fluxo.title",  itemKeys: ["s5.fluxo.item1", "s5.fluxo.item2", "s5.fluxo.item3"] as const },
  { titleKey: "s5.custos.title", itemKeys: ["s5.custos.item1", "s5.custos.item2"] as const },
  { titleKey: "s5.prazo.title",  itemKeys: ["s5.prazo.item1", "s5.prazo.item2"] as const },
] as const

const packagesData = [
  {
    badgeKey:    "sp.start.badge"  as ContentKey,
    tagKey:      "sp.start.tag"    as ContentKey,
    valorKey:    "sp.start.valor"  as ContentKey,
    pagamentoKey:"sp.start.pagamento" as ContentKey,
    descricaoKey:"sp.start.descricao" as ContentKey,
    itemKeys:    ["sp.start.item1","sp.start.item2","sp.start.item3","sp.start.item4","sp.start.item5","sp.start.item6"] as ContentKey[],
    highlighted: false,
  },
  {
    badgeKey:    "sp.pro.badge"  as ContentKey,
    tagKey:      "sp.pro.tag"    as ContentKey,
    valorKey:    "sp.pro.valor"  as ContentKey,
    pagamentoKey:"sp.pro.pagamento" as ContentKey,
    descricaoKey:"sp.pro.descricao" as ContentKey,
    itemKeys:    ["sp.pro.item1","sp.pro.item2","sp.pro.item3","sp.pro.item4","sp.pro.item5","sp.pro.item6"] as ContentKey[],
    highlighted: true,
  },
  {
    badgeKey:    "sp.insane.badge"  as ContentKey,
    tagKey:      "sp.insane.tag"    as ContentKey,
    valorKey:    "sp.insane.valor"  as ContentKey,
    pagamentoKey:"sp.insane.pagamento" as ContentKey,
    descricaoKey:"sp.insane.descricao" as ContentKey,
    itemKeys:    ["sp.insane.item1","sp.insane.item2","sp.insane.item3","sp.insane.item4","sp.insane.item5","sp.insane.item6"] as ContentKey[],
    highlighted: false,
  },
]

const comparativoRows = [
  { key: "frente1", labelKey: "cmp.row.frente1.label", startKey: "cmp.row.frente1.start", proKey: "cmp.row.frente1.pro", insaneKey: "cmp.row.frente1.insane" },
  { key: "frente2", labelKey: "cmp.row.frente2.label", startKey: "cmp.row.frente2.start", proKey: "cmp.row.frente2.pro", insaneKey: "cmp.row.frente2.insane" },
  { key: "frente3", labelKey: "cmp.row.frente3.label", startKey: "cmp.row.frente3.start", proKey: "cmp.row.frente3.pro", insaneKey: "cmp.row.frente3.insane" },
  { key: "frente4", labelKey: "cmp.row.frente4.label", startKey: "cmp.row.frente4.start", proKey: "cmp.row.frente4.pro", insaneKey: "cmp.row.frente4.insane" },
  { key: "frente5", labelKey: "cmp.row.frente5.label", startKey: "cmp.row.frente5.start", proKey: "cmp.row.frente5.pro", insaneKey: "cmp.row.frente5.insane" },
  { key: "frente6", labelKey: "cmp.row.frente6.label", startKey: "cmp.row.frente6.start", proKey: "cmp.row.frente6.pro", insaneKey: "cmp.row.frente6.insane" },
  { key: "bonus", labelKey: "cmp.row.bonus.label", startKey: "cmp.row.bonus.start", proKey: "cmp.row.bonus.pro", insaneKey: "cmp.row.bonus.insane" },
] as const

const detailedFrontSections = [
  {
    slug: "frente-1-design-system-e-identidade-digital",
    eyebrowKey: "s6.badge",
    titlePrefixKey: "s6.title.prefix",
    titleAccentKey: "s6.title.accent",
    subtitleKey: "s6.subtitle",
    items: [
      { id: "c1", iconKey: "s6.c1.icon", labelKey: "s6.c1.label", bodyKey: "s6.c1.body" },
      { id: "c2", iconKey: "s6.c2.icon", labelKey: "s6.c2.label", bodyKey: "s6.c2.body" },
      { id: "c3", iconKey: "s6.c3.icon", labelKey: "s6.c3.label", bodyKey: "s6.c3.body" },
      { id: "c4", iconKey: "s6.c4.icon", labelKey: "s6.c4.label", bodyKey: "s6.c4.body" },
    ],
  },
  {
    slug: "frente-2-atualizacao-e-modernizacao-do-site",
    eyebrowKey: "s7.badge",
    titlePrefixKey: "s7.title.prefix",
    titleAccentKey: "s7.title.accent",
    subtitleKey: "s7.subtitle",
    items: [
      { id: "c1", iconKey: "s7.c1.icon", labelKey: "s7.c1.label", bodyKey: "s7.c1.body" },
      { id: "c2", iconKey: "s7.c2.icon", labelKey: "s7.c2.label", bodyKey: "s7.c2.body" },
      { id: "c3", iconKey: "s7.c3.icon", labelKey: "s7.c3.label", bodyKey: "s7.c3.body" },
      { id: "c4", iconKey: "s7.c4.icon", labelKey: "s7.c4.label", bodyKey: "s7.c4.body" },
    ],
  },
  {
    slug: "frente-3-automacao-inteligente-de-atendimento",
    eyebrowKey: "s8.badge",
    titlePrefixKey: "s8.title.prefix",
    titleAccentKey: "s8.title.accent",
    subtitleKey: "s8.subtitle",
    items: [
      { id: "c1", iconKey: "s8.c1.icon", labelKey: "s8.c1.label", bodyKey: "s8.c1.body" },
      { id: "c2", iconKey: "s8.c2.icon", labelKey: "s8.c2.label", bodyKey: "s8.c2.body" },
      { id: "c3", iconKey: "s8.c3.icon", labelKey: "s8.c3.label", bodyKey: "s8.c3.body" },
      { id: "c4", iconKey: "s8.c4.icon", labelKey: "s8.c4.label", bodyKey: "s8.c4.body" },
    ],
  },
  {
    slug: "frente-4-consulta-processual-via-ia",
    eyebrowKey: "s9.badge",
    titlePrefixKey: "s9.title.prefix",
    titleAccentKey: "s9.title.accent",
    subtitleKey: "s9.subtitle",
    items: [
      { id: "c1", iconKey: "s9.c1.icon", labelKey: "s9.c1.label", bodyKey: "s9.c1.body" },
      { id: "c2", iconKey: "s9.c2.icon", labelKey: "s9.c2.label", bodyKey: "s9.c2.body" },
      { id: "c3", iconKey: "s9.c3.icon", labelKey: "s9.c3.label", bodyKey: "s9.c3.body" },
      { id: "c4", iconKey: "s9.c4.icon", labelKey: "s9.c4.label", bodyKey: "s9.c4.body" },
    ],
  },
  {
    slug: "frente-5-seo-e-presenca-no-google",
    eyebrowKey: "s10.badge",
    titlePrefixKey: "s10.title.prefix",
    titleAccentKey: "s10.title.accent",
    subtitleKey: "s10.subtitle",
    items: [
      { id: "c1", iconKey: "s10.c1.icon", labelKey: "s10.c1.label", bodyKey: "s10.c1.body" },
      { id: "c2", iconKey: "s10.c2.icon", labelKey: "s10.c2.label", bodyKey: "s10.c2.body" },
      { id: "c3", iconKey: "s10.c3.icon", labelKey: "s10.c3.label", bodyKey: "s10.c3.body" },
      { id: "c4", iconKey: "s10.c4.icon", labelKey: "s10.c4.label", bodyKey: "s10.c4.body" },
    ],
  },
  {
    slug: "frente-6-aplicacao-da-marca-nos-espacos-fisicos",
    eyebrowKey: "s11.badge",
    titlePrefixKey: "s11.title.prefix",
    titleAccentKey: "s11.title.accent",
    subtitleKey: "s11.subtitle",
    items: [
      { id: "c1", iconKey: "s11.c1.icon", labelKey: "s11.c1.label", bodyKey: "s11.c1.body" },
      { id: "c2", iconKey: "s11.c2.icon", labelKey: "s11.c2.label", bodyKey: "s11.c2.body" },
      { id: "c3", iconKey: "s11.c3.icon", labelKey: "s11.c3.label", bodyKey: "s11.c3.body" },
      { id: "c4", iconKey: "s11.c4.icon", labelKey: "s11.c4.label", bodyKey: "s11.c4.body" },
    ],
  },
] as const

function getAreaFadeStyle(index: number, entered: boolean): CSSProperties {
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

function getIconById(iconId: string) {
  return ICON_LIBRARY_BY_ID[iconId] ?? ICON_LIBRARY_BY_ID[Object.keys(ICON_LIBRARY_BY_ID)[0]]
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

function Shell({
  mode,
  children,
}: {
  mode: RenderMode
  children: ReactNode
}) {
  if (mode === "editable") {
    return <div className="ds-page proposta-souza-e-souza-page">{children}</div>
  }

  return (
    <main className="proposta-souza-e-souza-page bg-[#efefef] p-3 sm:p-4">
      <AutoHeightReporter />
      <div data-published-section-root>{children}</div>
    </main>
  )
}

function matchSlug(
  current: PropostaSouzaESouzaPublishedSectionSlug | undefined,
  target: PropostaSouzaESouzaPublishedSectionSlug
) {
  return current === undefined || current === target
}

function EditableOrStaticText({
  mode,
  id,
}: {
  mode: RenderMode
  id: ContentKey
}) {
  if (mode === "editable") {
    return <EditableText namespace={NS} id={id}>{c(id)}</EditableText>
  }

  return <>{c(id)}</>
}

function MobileAwareObjectiveTitle({
  mode,
  id,
}: {
  mode: RenderMode
  id: ContentKey
}) {
  const text = c(id)

  if (id !== "s2.obj1.title") {
    return <EditableOrStaticText mode={mode} id={id} />
  }

  return (
    <>
      <span className="sm:hidden">Recuperar segurança</span>
      <span className="hidden sm:inline">{text}</span>
    </>
  )
}

function MobileAwareObjectiveBody({
  mode,
  id,
}: {
  mode: RenderMode
  id: ContentKey
}) {
  if (id === "s2.obj1.body") {
    return (
      <>
        <span className="sm:hidden">
          Eliminar vulnerabilidades ativas, restaurar HTTPS, reduzir fragilidade operacional e reconstruir a confiança técnica do site para visitantes.
        </span>
        <span className="hidden sm:inline">
          <EditableOrStaticText mode={mode} id={id} />
        </span>
      </>
    )
  }

  if (id === "s2.obj2.body") {
    return (
      <>
        <span className="sm:hidden">
          Migrar o site para uma base moderna, rápida e segura, com layout institucional mais atual, melhor performance e comunicação.
        </span>
        <span className="hidden sm:inline">
          <EditableOrStaticText mode={mode} id={id} />
        </span>
      </>
    )
  }

  if (id === "s2.obj5.body") {
    return (
      <>
        <span className="sm:hidden">
          Organizar o canal de atendimento dentro do site para que descoberta, confiança e contato aconteçam de forma mais clara e funcional.
        </span>
        <span className="hidden sm:inline">
          <EditableOrStaticText mode={mode} id={id} />
        </span>
      </>
    )
  }

  return <EditableOrStaticText mode={mode} id={id} />
}

function EditableOrStaticSigoText({
  mode,
  id,
}: {
  mode: RenderMode
  id: SigoContentKey
}) {
  if (mode === "editable") {
    return <EditableText namespace={NS_SIGO} id={id}>{cs(id)}</EditableText>
  }

  return <>{cs(id)}</>
}

function EditableOrStaticIcon({
  mode,
  iconId,
  fallbackIconId,
  alt,
  strategy,
  className,
}: {
  mode: RenderMode
  iconId: string
  fallbackIconId: string
  alt: string
  strategy: { kind: "frameHeight"; frameHeight: number; targetHeight: number } | { kind: "scale"; scale: number }
  className?: string
}) {
  if (mode === "editable") {
    return (
      <EditableIcon
        namespace={NS}
        id={iconId as ContentKey}
        fallbackIconId={fallbackIconId}
        alt={alt}
        strategy={strategy}
        className={className}
      />
    )
  }

  const iconDisplay =
    strategy.kind === "frameHeight"
      ? getFrameHeightIconDisplay(fallbackIconId, strategy.targetHeight)
      : getScaledIconDisplay(fallbackIconId, strategy.scale)

  return (
    <StaticIcon
      iconId={fallbackIconId}
      alt={alt}
      width={iconDisplay.width}
      height={iconDisplay.height}
      className={className}
    />
  )
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: ReactNode
  title: ReactNode
  subtitle?: ReactNode
}) {
  return (
    <div className="mb-[45px] flex flex-col items-center text-center">
      {eyebrow && (
        <p className="text-xs font-bold tracking-widest text-primary uppercase mb-2">
          {eyebrow}
        </p>
      )}
      <Typography variant="h1" className="max-w-3xl">{title}</Typography>
      {subtitle && (
        <Typography variant="body-m" className="mt-3 max-w-2xl text-muted-foreground">
          {subtitle}
        </Typography>
      )}
    </div>
  )
}

function DetailedFrontSection({
  mode,
  eyebrowKey,
  titlePrefixKey,
  titleAccentKey,
  subtitleKey,
  items,
}: {
  mode: RenderMode
  eyebrowKey: ContentKey
  titlePrefixKey: ContentKey
  titleAccentKey: ContentKey
  subtitleKey: ContentKey
  items: readonly {
    id: string
    iconKey: ContentKey
    labelKey: ContentKey
    bodyKey: ContentKey
  }[]
}) {
  return (
    <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
      <SectionHeader
        eyebrow={<EditableOrStaticText mode={mode} id={eyebrowKey} />}
        title={
          <>
            <EditableOrStaticText mode={mode} id={titlePrefixKey} />
            <Accent><EditableOrStaticText mode={mode} id={titleAccentKey} /></Accent>
          </>
        }
        subtitle={<EditableOrStaticText mode={mode} id={subtitleKey} />}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map(({ id, labelKey, bodyKey }) => (
          <div
            key={id}
            className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                <EditableOrStaticText mode={mode} id={labelKey} />
              </p>
              <Typography variant="body-s" className="text-muted-foreground leading-relaxed">
                <EditableOrStaticText mode={mode} id={bodyKey} />
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function PropostaSouzaESouzaContent({
  mode,
  slug,
}: {
  mode: RenderMode
  slug?: PropostaSouzaESouzaPublishedSectionSlug
}) {
  const areasRef = useRef<HTMLElement | null>(null)
  const [areasEntered, setAreasEntered] = useState(false)

  const proposalFronts = detailedFrontSections.map((section) => ({
    id: section.slug,
    eyebrow: (
      <EditableOrStaticText mode={mode} id={section.eyebrowKey as ContentKey} />
    ),
    tabTitle:
      section.slug === "frente-1-design-system-e-identidade-digital" ? (
        <>
          Design system
          <br />
          <Accent>identidade</Accent>
        </>
      ) : section.slug === "frente-2-atualizacao-e-modernizacao-do-site" ? (
        <>
          Modernização <Accent>do site</Accent>
        </>
      ) : section.slug === "frente-3-automacao-inteligente-de-atendimento" ? (
        <>
          Automação <Accent>inteligente</Accent>
        </>
      ) : section.slug === "frente-4-consulta-processual-via-ia" ? (
        <>
          Consulta processual <Accent>IA</Accent>
        </>
      ) : section.slug === "frente-5-seo-e-presenca-no-google" ? (
        <>
          SEO
          <br />
          <Accent>Google</Accent>
        </>
      ) : section.slug === "frente-6-aplicacao-da-marca-nos-espacos-fisicos" ? (
        <>
          Emblema de <Accent>marca</Accent>
        </>
      ) : undefined,
    title: (
      <>
        <EditableOrStaticText mode={mode} id={section.titlePrefixKey as ContentKey} />
        <Accent>
          <EditableOrStaticText mode={mode} id={section.titleAccentKey as ContentKey} />
        </Accent>
      </>
    ),
    subtitle: (
      <EditableOrStaticText mode={mode} id={section.subtitleKey as ContentKey} />
    ),
    description: <>{section.items.length} entregas organizadas nesta frente.</>,
    items: section.items.map((item) => ({
      id: item.id,
      label: <EditableOrStaticText mode={mode} id={item.labelKey as ContentKey} />,
      body: <EditableOrStaticText mode={mode} id={item.bodyKey as ContentKey} />,
    })),
  }))

  useEffect(() => {
    const node = areasRef.current
    if (!node || areasEntered || mode !== "editable") return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        setAreasEntered(true)
        observer.disconnect()
      },
      { threshold: 0.25 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [areasEntered, mode])

  const showFronts = slug === undefined || detailedFrontSections.some((s) => s.slug === slug)

  return (
    <Shell mode={mode}>
      {mode === "editable" ? (
        <div className="ds-page-header">
          <p className="text-xs font-bold tracking-widest text-primary uppercase mb-2">
            <EditableOrStaticText mode={mode} id="header.eyebrow" />
          </p>
          <h1 className="ds-page-title">
            <EditableOrStaticText mode={mode} id="header.title" />
          </h1>
          <p className="ds-page-description max-w-xl">
            <EditableOrStaticText mode={mode} id="header.description" />
          </p>
        </div>
      ) : null}

      {/* S1 — Nossas áreas de atuação */}
      {matchSlug(slug, "nossas-areas-de-atuacao") ? (
        <section ref={areasRef} className="ds-section flex flex-col" style={{ backgroundColor: "#efefef" }}>
          <div className="mb-[45px] flex flex-col items-center text-center">
            <Typography variant="h1" className="max-w-3xl">
              <EditableOrStaticSigoText mode={mode} id="s1.title" />
            </Typography>
            <Typography variant="body-m" className="mt-3 max-w-2xl text-muted-foreground">
              <EditableOrStaticSigoText mode={mode} id="s1.subtitle" />
            </Typography>
          </div>

          <div className="grid grid-cols-1 gap-4 xl:grid-cols-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:col-span-3 xl:grid-cols-3">
              {areas.map(({ key, iconKey }, index) => (
                <div
                  key={key}
                  className="aspect-[5/3] rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col justify-between"
                  style={mode === "editable" ? getAreaFadeStyle(index, areasEntered) : undefined}
                >
                  {mode === "editable" ? (
                    <EditableIcon
                      namespace={NS_SIGO}
                      id={iconKey}
                      fallbackIconId={cs(iconKey as SigoContentKey)}
                      alt={cs(key as SigoContentKey)}
                      strategy={{ kind: "frameHeight", frameHeight: 410, targetHeight: 47.0448 }}
                    />
                  ) : (
                    <StaticIcon
                      iconId={cs(iconKey as SigoContentKey)}
                      alt={cs(key as SigoContentKey)}
                      width={getFrameHeightIconDisplay(cs(iconKey as SigoContentKey), 47.0448).width}
                      height={getFrameHeightIconDisplay(cs(iconKey as SigoContentKey), 47.0448).height}
                    />
                  )}
                  <Typography variant="h4" className="leading-snug">
                    <EditableOrStaticSigoText mode={mode} id={key as SigoContentKey} />
                  </Typography>
                </div>
              ))}
            </div>

            <div
              className="relative aspect-[9/16] w-full sm:aspect-[5/3] xl:aspect-auto rounded-none border border-white bg-[#f9f9f9] xl:col-span-1 overflow-hidden"
              style={mode === "editable" ? getAreaFadeStyle(areas.length, areasEntered) : undefined}
            >
              <SplineViewer url={AREAS_SPLINE_URL} />
            </div>
          </div>
        </section>
      ) : null}

      {/* S2 — Objetivos do projeto */}
      {matchSlug(slug, "objetivos-do-projeto") ? (
        <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
          <SectionHeader
            title={
              <>
                <Accent><EditableOrStaticText mode={mode} id="s2.title.prefix" /></Accent>
                <EditableOrStaticText mode={mode} id="s2.title.accent" />
              </>
            }
            subtitle={<EditableOrStaticText mode={mode} id="s2.subtitle" />}
          />

          <div className="px-0 sm:px-10">
            <Carousel opts={{ align: "start", containScroll: "trimSnaps" }} className="w-full">
              <CarouselContent className="items-stretch">
                {objectives.map(({ id, iconKey, titleKey, bodyKey }) => (
                  <CarouselItem
                    key={id}
                    className="basis-[86%] sm:basis-[420px] lg:basis-[460px] xl:basis-[500px]"
                  >
                    <div className="aspect-square rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col justify-between">
                      <EditableOrStaticIcon
                        mode={mode}
                        iconId={iconKey}
                        fallbackIconId={c(iconKey as ContentKey)}
                        alt={c(titleKey as ContentKey)}
                        strategy={{ kind: "frameHeight", frameHeight: 410, targetHeight: 74 }}
                      />
                      <div className="flex flex-col gap-3">
                        <Typography variant="h1" className="leading-tight">
                          <MobileAwareObjectiveTitle mode={mode} id={titleKey as ContentKey} />
                        </Typography>
                        <Typography variant="body-m" className="text-muted-foreground leading-relaxed">
                          <MobileAwareObjectiveBody mode={mode} id={bodyKey as ContentKey} />
                        </Typography>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-[13px] sm:-left-12" />
              <CarouselNext className="-right-[13px] sm:-right-12" />
            </Carousel>
          </div>
        </section>
      ) : null}

      {/* S3 — Escopo do projeto */}
      {matchSlug(slug, "escopo-do-projeto") ? (
        <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
          <SectionHeader
            title={
              <>
                <Accent><EditableOrStaticText mode={mode} id="s3.title.accent" /></Accent>
                <EditableOrStaticText mode={mode} id="s3.title.suffix" />
              </>
            }
            subtitle={<EditableOrStaticText mode={mode} id="s3.subtitle" />}
          />

          <Accordion<string> type="multiple" defaultValue={[]} className="flex flex-col gap-4">
            {escopoItems.map(({ value, iconKey, labelKey, badgeKey, bodyKey }) => (
              <AccordionItem
                key={value}
                value={value}
                className="rounded-none border border-white bg-[#f9f9f9] px-[var(--card-padding)] py-[var(--card-padding)]"
              >
                <AccordionTrigger className="py-0 hover:no-underline [&_[data-slot=accordion-trigger-icon]]:hidden">
                  <div className="flex w-full items-start gap-4 pr-2">
                    <EditableOrStaticIcon
                      mode={mode}
                      iconId={iconKey}
                      fallbackIconId={c(iconKey as ContentKey)}
                      alt={c(labelKey as ContentKey)}
                      strategy={{ kind: "scale", scale: ((37 * 0.75 * 0.85) / 374.1) * 1.1 }}
                      className="self-start sm:self-center"
                    />
                    <div className="flex min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                      <span className="text-left text-lg font-semibold tracking-tight">
                        <EditableOrStaticText mode={mode} id={labelKey as ContentKey} />
                      </span>
                      <div className="flex shrink-0 items-center gap-3 self-start sm:self-auto">
                        <Badge variant="service" size="sm" className="shrink-0">
                          <EditableOrStaticText mode={mode} id={badgeKey as ContentKey} />
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
                    <EditableOrStaticText mode={mode} id={bodyKey as ContentKey} />
                  </Typography>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      ) : null}

      {/* Detalhamento de frentes — header + tabs */}
      {showFronts ? (
        <Proposal3DFolderTabs
          fronts={proposalFronts}
          initialActiveId={slug && detailedFrontSections.some((s) => s.slug === slug) ? slug : undefined}
          header={
            <SectionHeader
              title={
                <>
                  <EditableOrStaticText mode={mode} id="sdet.title.prefix" />
                  <Accent><EditableOrStaticText mode={mode} id="sdet.title.accent" /></Accent>
                </>
              }
              subtitle={<EditableOrStaticText mode={mode} id="sdet.subtitle" />}
            />
          }
        />
      ) : null}

      {/* SP — Pacotes e investimento */}
      {matchSlug(slug, "pacotes-e-investimento") ? (
        <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
          <SectionHeader
            title={
              <>
                <EditableOrStaticText mode={mode} id="sp.title.prefix" />
                <Accent><EditableOrStaticText mode={mode} id="sp.title.accent" /></Accent>
              </>
            }
            subtitle={<EditableOrStaticText mode={mode} id="sp.subtitle" />}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {packagesData.map((pkg) => (
              <div
                key={pkg.badgeKey}
                className={`rounded-none border bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-6 ${pkg.highlighted ? "border-[var(--success)]" : "border-white"}`}
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Badge variant={pkg.highlighted ? "success" : "service"} size="sm" className="font-bold">
                      <EditableOrStaticText mode={mode} id={pkg.badgeKey} />
                    </Badge>
                    <Typography variant="caption" className="text-muted-foreground">
                      <EditableOrStaticText mode={mode} id={pkg.tagKey} />
                    </Typography>
                  </div>
                  <Typography variant="display-l" className="text-primary leading-none">
                    <EditableOrStaticText mode={mode} id={pkg.valorKey} />
                  </Typography>
                </div>

                <div className="border-t border-white pt-4">
                  <ul className="flex flex-col gap-4">
                    {pkg.itemKeys.map((itemKey) => (
                      <li key={itemKey} className="flex items-start gap-3">
                        <span className="mt-[7px] h-1 w-1 shrink-0 bg-primary" />
                        <Typography variant="body-s" className="text-muted-foreground">
                          <EditableOrStaticText mode={mode} id={itemKey} />
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-white py-16 flex flex-col gap-6">
            <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                <div className="flex flex-col gap-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                    <EditableOrStaticText mode={mode} id="s5.investimento-label" />
                  </p>
                  <div className="flex items-end gap-3 flex-wrap">
                    <Typography variant="display-xl" className="text-primary leading-none">
                      <EditableOrStaticText mode={mode} id="s5.valor" />
                    </Typography>
                    <Typography variant="h3" className="text-muted-foreground pb-1">
                      <EditableOrStaticText mode={mode} id="s5.mes-suffix" />
                    </Typography>
                  </div>
                  <Typography variant="body-s" className="text-muted-foreground max-w-lg">
                    <EditableOrStaticText mode={mode} id="s5.descricao" />
                  </Typography>
                </div>

                <div className="flex flex-col gap-3 lg:items-end">
                  <Badge variant="success" size="sm" className="font-bold">
                    <EditableOrStaticText mode={mode} id="s5.badge-pacote" />
                  </Badge>
                  <div className="flex flex-col gap-1 lg:text-right">
                    <Typography variant="caption" className="text-muted-foreground">
                      <EditableOrStaticText mode={mode} id="s5.caption1" />
                    </Typography>
                    <Typography variant="caption" className="text-muted-foreground">
                      <EditableOrStaticText mode={mode} id="s5.caption2" />
                    </Typography>
                  </div>
                </div>
              </div>
            </div>

            <Typography variant="caption" className="text-muted-foreground px-1">
              <EditableOrStaticText mode={mode} id="s5.footnote" />
            </Typography>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {condicoesItems.map(({ titleKey, itemKeys }) => (
                <div
                  key={titleKey}
                  className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-5"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                    <EditableOrStaticText mode={mode} id={titleKey as ContentKey} />
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {itemKeys.map((itemKey) => (
                      <li key={itemKey} className="flex items-start gap-3">
                        <span className="mt-[7px] h-1 w-1 shrink-0 bg-primary" />
                        <Typography variant="body-s" className="text-muted-foreground">
                          <EditableOrStaticText mode={mode} id={itemKey as ContentKey} />
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* CMP — Comparativo dos pacotes */}
      {matchSlug(slug, "comparativo-dos-pacotes") ? (
        <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
          <SectionHeader
            title={
              <>
                <EditableOrStaticText mode={mode} id="cmp.title.prefix" />
                <Accent><EditableOrStaticText mode={mode} id="cmp.title.accent" /></Accent>
              </>
            }
            subtitle={<EditableOrStaticText mode={mode} id="cmp.subtitle" />}
          />

          <div className="overflow-x-auto">
            <div className="flex min-w-[720px] flex-col gap-2">
              <div className="grid grid-cols-4 gap-2">
                <div className="rounded-none border border-white bg-[#f9f9f9] p-4" />
                    {(["cmp.col.start", "cmp.col.pro", "cmp.col.insane"] as const).map((key, index) => (
                      <div key={key} className={`flex items-center justify-center rounded-none border p-4 ${index === 1 ? "border-[var(--success)] bg-[color:color-mix(in_srgb,var(--success)_10%,white)]" : "border-white bg-[#f9f9f9]"}`}>
                        <p className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${index === 1 ? "text-foreground" : "text-foreground/60"}`}>
                          <EditableOrStaticText mode={mode} id={key} />
                        </p>
                      </div>
                    ))}
              </div>

                  {comparativoRows.map(({ key, labelKey, startKey, proKey, insaneKey }) => {
                    const { prefix, title } = splitComparativoLabel(c(labelKey))
                    const startValue = c(startKey)
                    const proValue = c(proKey)
                    const insaneValue = c(insaneKey)

                    return (
                      <div key={key} className="grid grid-cols-4 gap-2">
                        <div className="rounded-none border border-white bg-[#f9f9f9] p-4">
                          <div className="flex flex-col gap-1">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                              {prefix}
                            </p>
                            <Typography variant="body-s" className="font-medium text-foreground">
                              {title}
                            </Typography>
                          </div>
                        </div>
                        <div className="rounded-none border border-white bg-[#f9f9f9] p-4">
                          <Typography variant="body-s" className={getComparativoValueClass(startValue)}>
                            <EditableOrStaticText mode={mode} id={startKey} />
                          </Typography>
                        </div>
                        <div className="rounded-none border border-white bg-[#f9f9f9] p-4">
                          <Typography variant="body-s" className={getComparativoValueClass(proValue, true)}>
                            <EditableOrStaticText mode={mode} id={proKey} />
                          </Typography>
                        </div>
                        <div className="rounded-none border border-white bg-[#f9f9f9] p-4">
                          <Typography variant="body-s" className={getComparativoValueClass(insaneValue)}>
                            <EditableOrStaticText mode={mode} id={insaneKey} />
                          </Typography>
                        </div>
                      </div>
                    )
                  })}

              <div className="grid grid-cols-4 gap-2 mt-2">
                <div className="rounded-none border border-white bg-[#f9f9f9] p-4 flex items-center">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                    <EditableOrStaticText mode={mode} id="cmp.price.label" />
                  </p>
                </div>
                    {(["sp.start.valor", "sp.pro.valor", "sp.insane.valor"] as const).map((key, index) => (
                      <div key={key} className={`rounded-none border p-4 flex items-center justify-center ${index === 1 ? "border-[var(--success)] bg-[color:color-mix(in_srgb,var(--success)_10%,white)]" : "border-white bg-[#f9f9f9]"}`}>
                        <Typography variant="h4" className={index === 1 ? "text-foreground font-bold" : "text-foreground/60"}>
                          <EditableOrStaticText mode={mode} id={key} />
                        </Typography>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {mode === "editable" ? (
        <div className="px-1 pt-2 pb-4">
          <p className="text-xs text-muted-foreground">
            <EditableOrStaticText mode={mode} id="footer.prefix" />{" "}
            <span className="font-mono">
              <EditableOrStaticText mode={mode} id="footer.slug" />
            </span>{" "}
            <EditableOrStaticText mode={mode} id="footer.suffix" />
          </p>
        </div>
      ) : null}
    </Shell>
  )
}
