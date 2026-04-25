"use client"

import type { CSSProperties } from "react"
import { useEffect, useRef, useState } from "react"
import {
  ChevronDown,
  ChevronUp,
} from "lucide-react"
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
import { EditableText } from "@/components/editable-text"
import { EditableIcon } from "@/components/site-sections/editable-icon"
import content from "./content.json"

const NS = "proposta-sigo"

// ── Dados ────────────────────────────────────────────────────────────────────

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
]

const objectives = [
  {
    id: "marca",
    iconKey: "s2.marca.icon",
    titleKey: "s2.marca.title",
    bodyKey:  "s2.marca.body",
  },
  {
    id: "posicionamento",
    iconKey: "s2.posicionamento.icon",
    titleKey: "s2.posicionamento.title",
    bodyKey:  "s2.posicionamento.body",
  },
  {
    id: "linkedin",
    iconKey: "s2.linkedin.icon",
    titleKey: "s2.linkedin.title",
    bodyKey:  "s2.linkedin.body",
  },
  {
    id: "apresentacoes",
    iconKey: "s2.apresentacoes.icon",
    titleKey: "s2.apresentacoes.title",
    bodyKey:  "s2.apresentacoes.body",
  },
  {
    id: "materiais",
    iconKey: "s2.materiais.icon",
    titleKey: "s2.materiais.title",
    bodyKey:  "s2.materiais.body",
  },
]

const escopoItems = [
  {
    value: "posts",
    iconKey: "s3.posts.icon",
    labelKey: "s3.posts.label",
    badgeKey:  "s3.posts.badge",
    bodyKey:   "s3.posts.body",
  },
  {
    value: "carroseis",
    iconKey: "s3.carroseis.icon",
    labelKey: "s3.carroseis.label",
    badgeKey:  "s3.carroseis.badge",
    bodyKey:   "s3.carroseis.body",
  },
  {
    value: "stories",
    iconKey: "s3.stories.icon",
    labelKey: "s3.stories.label",
    badgeKey:  "s3.stories.badge",
    bodyKey:   "s3.stories.body",
  },
  {
    value: "video",
    iconKey: "s3.video.icon",
    labelKey: "s3.video.label",
    badgeKey:  "s3.video.badge",
    bodyKey:   "s3.video.body",
  },
  {
    value: "apresentacao",
    iconKey: "s3.apresentacao.icon",
    labelKey: "s3.apresentacao.label",
    badgeKey:  "s3.apresentacao.badge",
    bodyKey:   "s3.apresentacao.body",
  },
  {
    value: "extras",
    iconKey: "s3.extras.icon",
    labelKey: "s3.extras.label",
    badgeKey:  "s3.extras.badge",
    bodyKey:   "s3.extras.body",
  },
]

const bonusCards = [
  {
    id: "linguagem",
    badge: "Branding",
    titleKey: "s5.linguagem.title",
    bodyKey:  "s5.linguagem.body",
  },
  {
    id: "analise",
    badge: "Estratégia",
    titleKey: "s5.analise.title",
    bodyKey:  "s5.analise.body",
  },
  {
    id: "design-system",
    badge: "Sistema",
    titleKey: "s5.sistema.title",
    bodyKey:  "s5.sistema.body",
  },
  {
    id: "destaques",
    badge: "Storytelling",
    titleKey: "s5.destaques.title",
    bodyKey:  "s5.destaques.body",
  },
  {
    id: "carroseis",
    badge: "Conteúdo",
    titleKey: "s5.carroseis.title",
    bodyKey: "s5.carroseis.body",
  },
]

const bonusOrdinals = ["1º", "2º", "3º", "4º", "5º"] as const

const volumeItems = {
  deliverables: [
    { numberKey: "s4.posts.number",         labelKey: "s4.posts.label",         subKey: "s4.posts.sub"         },
    { numberKey: "s4.stories.number",       labelKey: "s4.stories.label",       subKey: "s4.stories.sub"       },
    { numberKey: "s4.video.number",         labelKey: "s4.video.label",         subKey: "s4.video.sub"         },
    { numberKey: "s4.apresentacoes.number", labelKey: "s4.apresentacoes.label", subKey: "s4.apresentacoes.sub" },
    { numberKey: "s4.extras.number",        labelKey: "s4.extras.label",        subKey: "s4.extras.sub"        },
  ],
  bonus: [
    { numberKey: null,                         labelKey: "s4.bonus-linguagem.label",  subKey: "s4.bonus-linguagem.sub",  showBonusBadge: true },
    { numberKey: null,                         labelKey: "s4.bonus-analise.label",    subKey: "s4.bonus-analise.sub",    showBonusBadge: true },
    { numberKey: null,                         labelKey: "s4.bonus-sistema.label",    subKey: "s4.bonus-sistema.sub",    showBonusBadge: true },
    { numberKey: null,                         labelKey: "s4.bonus-destaques.label",  subKey: "s4.bonus-destaques.sub",  showBonusBadge: true },
    { numberKey: "s4.bonus-carroseis.number", labelKey: "s4.bonus-carroseis.label",  subKey: "s4.bonus-carroseis.sub",  showBonusBadge: true },
  ],
}

const porQueItems = [
  { iconKey: "s6.design-inteligente.icon", titleKey: "s6.design-inteligente.title", bodyKey: "s6.design-inteligente.body" },
  { iconKey: "s6.consistencia.icon",       titleKey: "s6.consistencia.title",       bodyKey: "s6.consistencia.body"       },
  { iconKey: "s6.inovacao.icon",           titleKey: "s6.inovacao.title",           bodyKey: "s6.inovacao.body"           },
  { iconKey: "s6.multidisciplinar.icon",   titleKey: "s6.multidisciplinar.title",   bodyKey: "s6.multidisciplinar.body"   },
  { iconKey: "s6.prazo.icon",              titleKey: "s6.prazo.title",              bodyKey: "s6.prazo.body"              },
  { iconKey: "s6.biblioteca.icon",         titleKey: "s6.biblioteca.title",         bodyKey: "s6.biblioteca.body"         },
]

const porQueOrdinals = ["1º", "2º", "3º", "4º", "5º", "6º"] as const

const condicoesItems = [
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
]

// ── Helpers ──────────────────────────────────────────────────────────────────

type ContentKey = keyof typeof content

function c(key: ContentKey) {
  return content[key]
}

const SECTION_ONE_FADE_DURATION_MS = 1000
const SECTION_ONE_STAGGER_MS = 500

function getSectionOneFadeStyle(index: number, hasEntered: boolean) {
  return {
    opacity: hasEntered ? 1 : 0,
    transform: hasEntered ? "scale(1)" : "scale(1.1)",
    transformOrigin: "center center",
    willChange: "opacity, transform",
    transitionProperty: "opacity, transform",
    transitionDuration: `${SECTION_ONE_FADE_DURATION_MS}ms`,
    transitionTimingFunction: "ease",
    transitionDelay: hasEntered ? `${index * SECTION_ONE_STAGGER_MS}ms` : "0ms",
  } satisfies CSSProperties
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function PropostaSigoPage() {
  const sectionOneRef = useRef<HTMLElement | null>(null)
  const sectionOneCenteredRef = useRef<HTMLElement | null>(null)
  const [sectionOneEntered, setSectionOneEntered] = useState(false)
  const [sectionOneCenteredEntered, setSectionOneCenteredEntered] = useState(false)

  useEffect(() => {
    const node = sectionOneRef.current

    if (!node || sectionOneEntered) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        setSectionOneEntered(true)
        observer.disconnect()
      },
      {
        threshold: 0.25,
      }
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [sectionOneEntered])

  useEffect(() => {
    const node = sectionOneCenteredRef.current

    if (!node || sectionOneCenteredEntered) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        setSectionOneCenteredEntered(true)
        observer.disconnect()
      },
      {
        threshold: 0.25,
      }
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [sectionOneCenteredEntered])

  return (
    <div className="ds-page">

      {/* Header */}
      <div className="ds-page-header">
        <p className="text-xs font-bold tracking-widest text-primary uppercase mb-2">
          04 — SITE SECTIONS
        </p>
        <h1 className="ds-page-title">
          <EditableText namespace={NS} id="header.title">{c("header.title")}</EditableText>
        </h1>
        <p className="ds-page-description max-w-xl">
          <EditableText namespace={NS} id="header.description">{c("header.description")}</EditableText>
        </p>
      </div>

      {/* ── S1 — Áreas de atuação ────────────────────────────────────────── */}
      <section ref={sectionOneRef} className="ds-section flex flex-col" style={{ backgroundColor: "#efefef" }}>
        <div className="mb-[45px] flex flex-col items-center text-center">
          <Typography variant="h1" className="max-w-3xl">
            <EditableText namespace={NS} id="s1.title">{c("s1.title")}</EditableText>
          </Typography>
          <Typography variant="body-m" className="mt-3 max-w-2xl text-muted-foreground">
            <EditableText namespace={NS} id="s1.subtitle">{c("s1.subtitle")}</EditableText>
          </Typography>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-3 grid grid-cols-3 gap-4">
            {areas.map(({ key, iconKey }, index) => {
              return (
                <div
                  key={key}
                  className="aspect-[5/3] rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col justify-between"
                  style={getSectionOneFadeStyle(index, sectionOneEntered)}
                >
                  <EditableIcon
                    namespace={NS}
                    id={iconKey}
                    fallbackIconId={c(iconKey as ContentKey)}
                    alt={c(key as ContentKey)}
                    strategy={{ kind: "frameHeight", frameHeight: 410, targetHeight: 47.0448 }}
                  />
                  <Typography variant="h4" className="leading-snug">
                    <EditableText namespace={NS} id={key}>{c(key as ContentKey)}</EditableText>
                  </Typography>
                </div>
              )
            })}
          </div>

          <div
            className="col-span-1 rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]"
            style={getSectionOneFadeStyle(areas.length, sectionOneEntered)}
          />
        </div>
      </section>

      <section ref={sectionOneCenteredRef} className="ds-section flex flex-col" style={{ backgroundColor: "#efefef" }}>
        <div className="mb-[45px] flex flex-col items-center text-center">
          <Typography variant="h1" className="max-w-3xl">
            <EditableText namespace={NS} id="s1.title">{c("s1.title")}</EditableText>
          </Typography>
          <Typography variant="body-m" className="mt-3 max-w-2xl text-muted-foreground">
            <EditableText namespace={NS} id="s1.subtitle">{c("s1.subtitle")}</EditableText>
          </Typography>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-3 grid grid-cols-3 gap-4">
            {areas.map(({ key, iconKey }, index) => {
              return (
                <div
                  key={`${key}-centered-test`}
                  className="aspect-[5/3] rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]"
                  style={getSectionOneFadeStyle(index, sectionOneCenteredEntered)}
                >
                  <div className="flex h-full flex-col text-center">
                    <div className="flex flex-1 items-center justify-center">
                      <EditableIcon
                        namespace={NS}
                        id={iconKey}
                        fallbackIconId={c(iconKey as ContentKey)}
                        alt={c(key as ContentKey)}
                        strategy={{ kind: "frameHeight", frameHeight: 410, targetHeight: 70.5672 }}
                        className="self-center items-center justify-center"
                      />
                    </div>
                    <Typography variant="h4" className="leading-snug text-center">
                      <EditableText namespace={NS} id={key}>{c(key as ContentKey)}</EditableText>
                    </Typography>
                  </div>
                </div>
              )
            })}
          </div>

          <div
            className="col-span-1 rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]"
            style={getSectionOneFadeStyle(areas.length, sectionOneCenteredEntered)}
          />
        </div>
      </section>

      {/* ── S2 — Objetivos ───────────────────────────────────────────────── */}
      <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
        <div className="mb-[45px] flex flex-col items-center text-center">
          <Typography variant="h1" className="max-w-3xl">
            <EditableText namespace={NS} id="s2.title">{c("s2.title")}</EditableText>
          </Typography>
          <Typography variant="body-m" className="mt-3 max-w-2xl text-muted-foreground">
            <EditableText namespace={NS} id="s2.subtitle">{c("s2.subtitle")}</EditableText>
          </Typography>
        </div>

        <div className="px-10">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent>
              {objectives.map(({ id, iconKey, titleKey, bodyKey }) => {
                return (
                  <CarouselItem key={id} className="basis-full sm:basis-1/2 lg:basis-1/3">
                    <div className="aspect-square rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col justify-between">
                      <EditableIcon
                        namespace={NS}
                        id={iconKey}
                        fallbackIconId={c(iconKey as ContentKey)}
                        alt={c(titleKey as ContentKey)}
                        strategy={{ kind: "frameHeight", frameHeight: 410, targetHeight: 74 }}
                      />
                      <div className="flex flex-col gap-3">
                        <Typography variant="h1" className="leading-tight">
                          <EditableText namespace={NS} id={titleKey}>{c(titleKey as ContentKey)}</EditableText>
                        </Typography>
                        <Typography variant="body-m" className="text-muted-foreground leading-relaxed">
                          <EditableText namespace={NS} id={bodyKey}>{c(bodyKey as ContentKey)}</EditableText>
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

      {/* ── S3 — Escopo mensal ────────────────────────────────────────────── */}
      <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
        <div className="mb-[45px] flex flex-col items-center text-center">
          <Typography variant="h1" className="max-w-3xl">
            <EditableText namespace={NS} id="s3.title">{c("s3.title")}</EditableText>
          </Typography>
          <Typography variant="body-m" className="mt-3 max-w-2xl text-muted-foreground">
            <EditableText namespace={NS} id="s3.subtitle">{c("s3.subtitle")}</EditableText>
          </Typography>
        </div>

        <Accordion<string> type="multiple" defaultValue={[]} className="flex flex-col gap-4">
          {escopoItems.map(({ value, iconKey, labelKey, badgeKey, bodyKey }) => {
            return (
              <AccordionItem
                key={value}
                value={value}
                className="rounded-none border border-white bg-[#f9f9f9] px-[var(--card-padding)] py-[var(--card-padding)]"
              >
                <AccordionTrigger className="py-0 hover:no-underline [&_[data-slot=accordion-trigger-icon]]:hidden">
                  <div className="flex w-full items-center gap-4 pr-2">
                    <EditableIcon
                      namespace={NS}
                      id={iconKey}
                      fallbackIconId={c(iconKey as ContentKey)}
                      alt={c(labelKey as ContentKey)}
                      strategy={{ kind: "scale", scale: ((37 * 0.75 * 0.85) / 374.1) * 1.1 }}
                      className="self-center"
                    />
                    <div className="flex min-w-0 flex-1 items-center justify-between gap-4">
                      <span className="text-left text-lg font-semibold tracking-tight">
                        <EditableText namespace={NS} id={labelKey}>{c(labelKey as ContentKey)}</EditableText>
                      </span>
                      <div className="flex shrink-0 items-center gap-3">
                        <Badge variant="service" size="sm" className="shrink-0">
                          <EditableText namespace={NS} id={badgeKey}>{c(badgeKey as ContentKey)}</EditableText>
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
                  <Typography
                    variant="body-s"
                    className="max-w-2xl pt-4 pb-0 text-muted-foreground"
                  >
                    <EditableText namespace={NS} id={bodyKey}>{c(bodyKey as ContentKey)}</EditableText>
                  </Typography>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </section>

      {/* ── S5 — Bônus estratégico ────────────────────────────────────────── */}
      <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
        <div className="mb-[45px] flex flex-col items-center text-center">
          <Typography variant="h1" className="max-w-3xl">
            <EditableText namespace={NS} id="s5.title">{c("s5.title")}</EditableText>
          </Typography>
          <Typography variant="body-m" className="mt-3 max-w-2xl text-muted-foreground">
            <EditableText namespace={NS} id="s5.subtitle">{c("s5.subtitle")}</EditableText>
          </Typography>
        </div>

        <div className="px-10">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent>
              {bonusCards.map(({ id, badge, titleKey, bodyKey }, index) => {
                return (
                  <CarouselItem key={id} className="basis-full sm:basis-1/2 lg:basis-1/3">
                    <div className="aspect-square rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col justify-between">
                      <div className="flex items-center justify-start gap-2">
                        <Typography variant="display-l" className="text-primary leading-none">
                          {bonusOrdinals[index]}
                        </Typography>
                        <Badge variant="service" size="sm">{badge}</Badge>
                      </div>
                      <div className="flex flex-col gap-3">
                        <Typography variant="h1" className="leading-tight">
                          <EditableText namespace={NS} id={titleKey}>{c(titleKey as ContentKey)}</EditableText>
                        </Typography>
                        <Typography variant="body-m" className="text-muted-foreground leading-relaxed">
                          <EditableText namespace={NS} id={bodyKey}>{c(bodyKey as ContentKey)}</EditableText>
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

      {/* ── S4 — Volume mensal ───────────────────────────────────────────── */}
      <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
        <div className="mb-[45px] flex flex-col items-center text-center">
          <Typography variant="h1" className="max-w-3xl">
            <EditableText namespace={NS} id="s4.title">{c("s4.title")}</EditableText>
          </Typography>
          <Typography variant="body-m" className="mt-3 max-w-2xl text-muted-foreground">
            <EditableText namespace={NS} id="s4.subtitle">{c("s4.subtitle")}</EditableText>
          </Typography>
        </div>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
            {volumeItems.deliverables.map(({ numberKey, labelKey, subKey }) => (
              <div
                key={labelKey}
                className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-3"
              >
                <Typography variant="display-l" className="text-primary leading-none">
                  <EditableText namespace={NS} id={numberKey}>{c(numberKey as ContentKey)}</EditableText>
                </Typography>
                <div className="flex flex-col gap-1">
                  <Typography variant="h4" className="leading-tight">
                    <EditableText namespace={NS} id={labelKey}>{c(labelKey as ContentKey)}</EditableText>
                  </Typography>
                  <Typography variant="body-s" className="text-muted-foreground">
                    <EditableText namespace={NS} id={subKey}>{c(subKey as ContentKey)}</EditableText>
                  </Typography>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
            {volumeItems.bonus.map(({ numberKey, labelKey, subKey, showBonusBadge }) => (
              <div
                key={labelKey}
                className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-3"
              >
                {numberKey ? (
                  <div className="flex items-center gap-2">
                    <Typography variant="display-l" className="text-primary leading-none">
                      <EditableText namespace={NS} id={numberKey}>{c(numberKey as ContentKey)}</EditableText>
                    </Typography>
                    {showBonusBadge ? (
                      <Badge variant="service" size="sm" className="self-end mb-1">Bônus</Badge>
                    ) : null}
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Typography variant="display-l" className="text-primary leading-none">+1</Typography>
                    <Badge variant="service" size="sm" className="self-end mb-1">Bônus</Badge>
                  </div>
                )}
                <div className="flex flex-col gap-1">
                  <Typography variant="h4" className="leading-tight">
                    <EditableText namespace={NS} id={labelKey}>{c(labelKey as ContentKey)}</EditableText>
                  </Typography>
                  <Typography variant="body-s" className="text-muted-foreground">
                    <EditableText namespace={NS} id={subKey}>{c(subKey as ContentKey)}</EditableText>
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S6 — Por que a Chuv Studio ───────────────────────────────────── */}
      <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
        <div className="mb-[45px] flex flex-col items-center text-center">
          <Typography variant="h1" className="max-w-3xl">
            <EditableText namespace={NS} id="s6.title">{c("s6.title")}</EditableText>
          </Typography>
          <Typography variant="body-m" className="mt-3 max-w-2xl text-muted-foreground">
            <EditableText namespace={NS} id="s6.subtitle">{c("s6.subtitle")}</EditableText>
          </Typography>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {porQueItems.map(({ titleKey, bodyKey }, index) => (
            <div
              key={titleKey}
              className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-6"
            >
              <Typography variant="display-l" className="text-primary leading-none">
                {porQueOrdinals[index]}
              </Typography>
              <div className="flex flex-col gap-2">
                <Typography variant="h3">
                  <EditableText namespace={NS} id={titleKey}>{c(titleKey as ContentKey)}</EditableText>
                </Typography>
                <Typography variant="body-s" className="text-muted-foreground leading-relaxed">
                  <EditableText namespace={NS} id={bodyKey}>{c(bodyKey as ContentKey)}</EditableText>
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── S7 — Condições + Investimento ────────────────────────────────── */}
      <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
        <div className="mb-[45px] flex flex-col items-center text-center">
          <Typography variant="h1" className="max-w-3xl">
            <EditableText namespace={NS} id="s7.title">{c("s7.title")}</EditableText>
          </Typography>
          <Typography variant="body-m" className="mt-3 max-w-2xl text-muted-foreground">
            <EditableText namespace={NS} id="s7.subtitle">{c("s7.subtitle")}</EditableText>
          </Typography>
        </div>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {condicoesItems.map(({ titleKey, itemKeys }) => (
              <div
                key={titleKey}
                className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-5"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                  <EditableText namespace={NS} id={titleKey}>{c(titleKey as ContentKey)}</EditableText>
                </p>
                <ul className="flex flex-col gap-2.5">
                  {itemKeys.map((itemKey) => (
                    <li key={itemKey} className="flex items-start gap-3">
                      <span className="mt-[7px] h-1 w-1 shrink-0 bg-primary" />
                      <Typography variant="body-s" className="text-muted-foreground">
                        <EditableText namespace={NS} id={itemKey}>{c(itemKey as ContentKey)}</EditableText>
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Investment hero card */}
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div className="flex flex-col gap-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                  Investimento mensal
                </p>
                <div className="flex items-end gap-3 flex-wrap">
                  <Typography variant="display-xl" className="text-primary leading-none">
                    <EditableText namespace={NS} id="s7.valor">{c("s7.valor")}</EditableText>
                  </Typography>
                  <Typography variant="h3" className="text-muted-foreground pb-1">
                    / mês
                  </Typography>
                </div>
                <Typography variant="body-s" className="text-muted-foreground max-w-lg">
                  <EditableText namespace={NS} id="s7.descricao">{c("s7.descricao")}</EditableText>
                </Typography>
              </div>

              <div className="flex flex-col gap-3 lg:items-end">
                <Badge variant="success" size="sm">Pacote completo</Badge>
                <div className="flex flex-col gap-1 lg:text-right">
                  <Typography variant="caption" className="text-muted-foreground">
                    Fidelidade mínima de 3 meses
                  </Typography>
                  <Typography variant="caption" className="text-muted-foreground">
                    Início mediante contrato assinado
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="px-1 pt-2 pb-4">
        <p className="text-xs text-muted-foreground">
          Chuv Studio Design System · Site Section:{" "}
          <span className="font-mono">proposta-sigo</span> · Proposta comercial completa — 7 sections
        </p>
      </div>

    </div>
  )
}
