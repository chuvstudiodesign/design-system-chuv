"use client"

import type { CSSProperties } from "react"
import React, { useEffect, useRef, useState } from "react"
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
import { EditableText } from "@/components/editable-text"
import { EditableIcon } from "@/components/site-sections/editable-icon"
import content from "./content.json"
import propostaSigoContent from "@/app/styleguide/site-sections/proposta-sigo/content.json"

const NS = "proposta-website-sigo"
const NS_SIGO = "proposta-sigo"

// ── Dados ────────────────────────────────────────────────────────────────────

type SigoContentKey = keyof typeof propostaSigoContent
function cs(key: SigoContentKey) {
  return propostaSigoContent[key]
}

const areas = [
  { key: "s1.design-grafico",    iconKey: "s1.design-grafico.icon"    },
  { key: "s1.identidade-visual", iconKey: "s1.identidade-visual.icon" },
  { key: "s1.type-design",       iconKey: "s1.type-design.icon"       },
  { key: "s1.motion-3d",         iconKey: "s1.motion-3d.icon"         },
  { key: "s1.motion-2d",         iconKey: "s1.motion-2d.icon"         },
  { key: "s1.edicao-video",      iconKey: "s1.edicao-video.icon"      },
  { key: "s1.web-design",        iconKey: "s1.web-design.icon"        },
  { key: "s1.development",       iconKey: "s1.development.icon"       },
  { key: "s1.ia-aplicada",       iconKey: "s1.ia-aplicada.icon"       },
]

const FADE_DURATION_MS = 1000
const FADE_STAGGER_MS  = 500

function getAreaFadeStyle(index: number, entered: boolean): CSSProperties {
  return {
    opacity:               entered ? 1 : 0,
    transform:             entered ? "scale(1)" : "scale(1.1)",
    transformOrigin:       "center center",
    willChange:            "opacity, transform",
    transitionProperty:    "opacity, transform",
    transitionDuration:    `${FADE_DURATION_MS}ms`,
    transitionTimingFunction: "ease",
    transitionDelay:       entered ? `${index * FADE_STAGGER_MS}ms` : "0ms",
  }
}

const objectives = [
  { id: "obj1", iconKey: "s2.obj1.icon", titleKey: "s2.obj1.title", bodyKey: "s2.obj1.body" },
  { id: "obj2", iconKey: "s2.obj2.icon", titleKey: "s2.obj2.title", bodyKey: "s2.obj2.body" },
  { id: "obj3", iconKey: "s2.obj3.icon", titleKey: "s2.obj3.title", bodyKey: "s2.obj3.body" },
  { id: "obj4", iconKey: "s2.obj4.icon", titleKey: "s2.obj4.title", bodyKey: "s2.obj4.body" },
  { id: "obj5", iconKey: "s2.obj5.icon", titleKey: "s2.obj5.title", bodyKey: "s2.obj5.body" },
]

const escopoItems = [
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
]

const resumoItems: Array<{
  numberKey?: ContentKey
  iconKey?: ContentKey
  labelKey: ContentKey
  subKey: ContentKey
}> = [
  { numberKey: "s4.paginas.number",    labelKey: "s4.paginas.label",    subKey: "s4.paginas.sub"    },
  { numberKey: "s4.dobras.number",     labelKey: "s4.dobras.label",     subKey: "s4.dobras.sub"     },
  { numberKey: "s4.plataformas.number", labelKey: "s4.plataformas.label", subKey: "s4.plataformas.sub" },
  { numberKey: "s4.suporte.number",    labelKey: "s4.suporte.label",    subKey: "s4.suporte.sub"    },
  { iconKey: "s4.alteracoes.icon",     labelKey: "s4.alteracoes.label", subKey: "s4.alteracoes.sub" },
]

const condicoesItems = [
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
]

// ── Helpers ──────────────────────────────────────────────────────────────────

function Accent({ children }: { children: React.ReactNode }) {
  return <span className="text-primary">{children}</span>
}

type ContentKey = keyof typeof content

function c(key: ContentKey) {
  return content[key]
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function PropostaWebsiteSigoPage() {
  const areasRef = useRef<HTMLElement | null>(null)
  const [areasEntered, setAreasEntered] = useState(false)

  useEffect(() => {
    const node = areasRef.current
    if (!node || areasEntered) return

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
  }, [areasEntered])

  return (
    <div className="ds-page">

      {/* Header */}
      <div className="ds-page-header">
        <p className="text-xs font-bold tracking-widest text-primary uppercase mb-2">
          <EditableText namespace={NS} id="header.eyebrow">{c("header.eyebrow")}</EditableText>
        </p>
        <h1 className="ds-page-title">
          <EditableText namespace={NS} id="header.title">{c("header.title")}</EditableText>
        </h1>
        <p className="ds-page-description max-w-xl">
          <EditableText namespace={NS} id="header.description">{c("header.description")}</EditableText>
        </p>
      </div>

      {/* ── S1 — Nossas áreas de atuação ─────────────────────────────────── */}
      <section ref={areasRef} className="ds-section flex flex-col" style={{ backgroundColor: "#efefef" }}>
        <div className="mb-[45px] flex flex-col items-center text-center">
          <Typography variant="h1" className="max-w-3xl">
            <EditableText namespace={NS_SIGO} id="s1.title">{cs("s1.title")}</EditableText>
          </Typography>
          <Typography variant="body-m" className="mt-3 max-w-2xl text-muted-foreground">
            <EditableText namespace={NS_SIGO} id="s1.subtitle">{cs("s1.subtitle")}</EditableText>
          </Typography>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-3 grid grid-cols-3 gap-4">
            {areas.map(({ key, iconKey }, index) => (
              <div
                key={key}
                className="aspect-[5/3] rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col justify-between"
                style={getAreaFadeStyle(index, areasEntered)}
              >
                <EditableIcon
                  namespace={NS_SIGO}
                  id={iconKey}
                  fallbackIconId={cs(iconKey as SigoContentKey)}
                  alt={cs(key as SigoContentKey)}
                  strategy={{ kind: "frameHeight", frameHeight: 410, targetHeight: 47.0448 }}
                />
                <Typography variant="h4" className="leading-snug">
                  <EditableText namespace={NS_SIGO} id={key}>{cs(key as SigoContentKey)}</EditableText>
                </Typography>
              </div>
            ))}
          </div>

          <div
            className="col-span-1 rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]"
            style={getAreaFadeStyle(areas.length, areasEntered)}
          />
        </div>
      </section>

      {/* ── S2 — Objetivos do projeto ─────────────────────────────────────── */}
      <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
        <div className="mb-[45px] flex flex-col items-center text-center">
          <Typography variant="h1" className="max-w-3xl">
            <EditableText namespace={NS} id="s2.title.prefix">{c("s2.title.prefix")}</EditableText>
            <Accent><EditableText namespace={NS} id="s2.title.accent">{c("s2.title.accent")}</EditableText></Accent>
          </Typography>
          <Typography variant="body-m" className="mt-3 max-w-2xl text-muted-foreground">
            <EditableText namespace={NS} id="s2.subtitle">{c("s2.subtitle")}</EditableText>
          </Typography>
        </div>

        <div className="px-10">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent>
              {objectives.map(({ id, iconKey, titleKey, bodyKey }) => (
                <CarouselItem key={id} className="basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="aspect-square rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col justify-between">
                    <EditableIcon
                      namespace={NS}
                      id={iconKey as ContentKey}
                      fallbackIconId={c(iconKey as ContentKey)}
                      alt={c(titleKey as ContentKey)}
                      strategy={{ kind: "frameHeight", frameHeight: 410, targetHeight: 74 }}
                    />
                    <div className="flex flex-col gap-3">
                      <Typography variant="h1" className="leading-tight">
                        <EditableText namespace={NS} id={titleKey as ContentKey}>{c(titleKey as ContentKey)}</EditableText>
                      </Typography>
                      <Typography variant="body-m" className="text-muted-foreground leading-relaxed">
                        <EditableText namespace={NS} id={bodyKey as ContentKey}>{c(bodyKey as ContentKey)}</EditableText>
                      </Typography>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* ── S3 — Escopo do projeto ────────────────────────────────────────── */}
      <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
        <div className="mb-[45px] flex flex-col items-center text-center">
          <Typography variant="h1" className="max-w-3xl">
            <Accent><EditableText namespace={NS} id="s3.title.accent">{c("s3.title.accent")}</EditableText></Accent>
            <EditableText namespace={NS} id="s3.title.suffix">{c("s3.title.suffix")}</EditableText>
          </Typography>
          <Typography variant="body-m" className="mt-3 max-w-2xl text-muted-foreground">
            <EditableText namespace={NS} id="s3.subtitle">{c("s3.subtitle")}</EditableText>
          </Typography>
        </div>

        <Accordion<string> type="multiple" defaultValue={[]} className="flex flex-col gap-4">
          {escopoItems.map(({ value, iconKey, labelKey, badgeKey, bodyKey }) => (
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
                      <EditableText namespace={NS} id={labelKey as ContentKey}>{c(labelKey as ContentKey)}</EditableText>
                    </span>
                    <div className="flex shrink-0 items-center gap-3">
                      <Badge variant="service" size="sm" className="shrink-0">
                        <EditableText namespace={NS} id={badgeKey as ContentKey}>{c(badgeKey as ContentKey)}</EditableText>
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
                  <EditableText namespace={NS} id={bodyKey as ContentKey}>{c(bodyKey as ContentKey)}</EditableText>
                </Typography>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* ── S4 — Resumo do pacote ─────────────────────────────────────────── */}
      <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
        <div className="mb-[45px] flex flex-col items-center text-center">
          <Typography variant="h1" className="max-w-3xl">
            <EditableText namespace={NS} id="s4.title.prefix">{c("s4.title.prefix")}</EditableText>
            <Accent><EditableText namespace={NS} id="s4.title.accent">{c("s4.title.accent")}</EditableText></Accent>
          </Typography>
          <Typography variant="body-m" className="mt-3 max-w-2xl text-muted-foreground">
            <EditableText namespace={NS} id="s4.subtitle">{c("s4.subtitle")}</EditableText>
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
          {resumoItems.map(({ numberKey, iconKey, labelKey, subKey }) => (
            <div
              key={labelKey}
              className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col justify-between min-h-[200px]"
            >
              {iconKey ? (
                <EditableIcon
                  namespace={NS}
                  id={iconKey}
                  fallbackIconId={c(iconKey)}
                  alt={c(labelKey)}
                  strategy={{ kind: "scale", scale: 0.18 }}
                />
              ) : (
                <Typography variant="display-l" className="text-primary leading-none -translate-y-[9px]">
                  <EditableText namespace={NS} id={numberKey!}>{c(numberKey!)}</EditableText>
                </Typography>
              )}
              <div className="flex flex-col gap-1">
                <Typography variant="h4" className="leading-tight">
                  <EditableText namespace={NS} id={labelKey}>{c(labelKey)}</EditableText>
                </Typography>
                <Typography variant="body-s" className="text-muted-foreground">
                  <EditableText namespace={NS} id={subKey}>{c(subKey)}</EditableText>
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── S5 — Condições gerais + Investimento ──────────────────────────── */}
      <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
        <div className="mb-[45px] flex flex-col items-center text-center">
          <Typography variant="h1" className="max-w-3xl">
            <EditableText namespace={NS} id="s5.title.prefix">{c("s5.title.prefix")}</EditableText>
            <Accent><EditableText namespace={NS} id="s5.title.accent">{c("s5.title.accent")}</EditableText></Accent>
          </Typography>
          <Typography variant="body-m" className="mt-3 max-w-2xl text-muted-foreground">
            <EditableText namespace={NS} id="s5.subtitle">{c("s5.subtitle")}</EditableText>
          </Typography>
        </div>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {condicoesItems.map(({ titleKey, itemKeys }) => (
              <div
                key={titleKey}
                className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-5"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                  <EditableText namespace={NS} id={titleKey as ContentKey}>{c(titleKey as ContentKey)}</EditableText>
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
                  <EditableText namespace={NS} id="s5.investimento-label">{c("s5.investimento-label")}</EditableText>
                </p>
                <div className="flex items-end gap-3 flex-wrap">
                  <Typography variant="display-xl" className="text-primary leading-none">
                    <EditableText namespace={NS} id="s5.valor">{c("s5.valor")}</EditableText>
                  </Typography>
                  <Typography variant="h3" className="text-muted-foreground pb-1">
                    <EditableText namespace={NS} id="s5.mes-suffix">{c("s5.mes-suffix")}</EditableText>
                  </Typography>
                </div>
                <Typography variant="body-s" className="text-muted-foreground max-w-lg">
                  <EditableText namespace={NS} id="s5.descricao">{c("s5.descricao")}</EditableText>
                </Typography>
              </div>

              <div className="flex flex-col gap-3 lg:items-end">
                <Badge variant="success" size="sm" className="font-bold">
                  <EditableText namespace={NS} id="s5.badge-pacote">{c("s5.badge-pacote")}</EditableText>
                </Badge>
                <div className="flex flex-col gap-1 lg:text-right">
                  <Typography variant="caption" className="text-muted-foreground">
                    <EditableText namespace={NS} id="s5.caption1">{c("s5.caption1")}</EditableText>
                  </Typography>
                  <Typography variant="caption" className="text-muted-foreground">
                    <EditableText namespace={NS} id="s5.caption2">{c("s5.caption2")}</EditableText>
                  </Typography>
                </div>
              </div>
            </div>
          </div>

          <Typography variant="caption" className="text-muted-foreground px-1">
            <EditableText namespace={NS} id="s5.footnote">{c("s5.footnote")}</EditableText>
          </Typography>
        </div>
      </section>

      {/* Footer */}
      <div className="px-1 pt-2 pb-4">
        <p className="text-xs text-muted-foreground">
          <EditableText namespace={NS} id="footer.prefix">{c("footer.prefix")}</EditableText>{" "}
          <span className="font-mono">
            <EditableText namespace={NS} id="footer.slug">{c("footer.slug")}</EditableText>
          </span>{" "}
          <EditableText namespace={NS} id="footer.suffix">{c("footer.suffix")}</EditableText>
        </p>
      </div>

    </div>
  )
}
