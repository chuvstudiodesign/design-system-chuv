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
import { EditableText } from "@/components/editable-text"
import { EditableIcon } from "@/components/site-sections/editable-icon"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import content from "./content.json"
import propostaSigoContent from "@/app/styleguide/site-sections/proposta-sigo/content.json"

const NS = "proposta-kito"
const NS_SIGO = "proposta-sigo"
type SigoContentKey = keyof typeof propostaSigoContent
function cs(key: SigoContentKey) { return propostaSigoContent[key] }

// ── Dados ────────────────────────────────────────────────────────────────────

// S03 — usa exatamente as áreas da proposta-sigo
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

const s05Items = [
  { value: "entregas",    iconKey: "s05.entregas.icon",    labelKey: "s05.entregas.label",    bodyKey: "s05.entregas.body"    },
  { value: "exemplo",     iconKey: "s05.exemplo.icon",     labelKey: "s05.exemplo.label",     bodyKey: "s05.exemplo.body"     },
  { value: "consultoria", iconKey: "s05.consultoria.icon", labelKey: "s05.consultoria.label", badgeKey: "s05.consultoria.badge", bodyKey: "s05.consultoria.body" },
]

const s04Items = [
  { value: "usabilidade", iconKey: "s04.usabilidade.icon", labelKey: "s04.usabilidade.label", bodyKey: "s04.usabilidade.body" },
  { value: "fluxos",      iconKey: "s04.fluxos.icon",      labelKey: "s04.fluxos.label",      bodyKey: "s04.fluxos.body"      },
  { value: "consistencia",iconKey: "s04.consistencia.icon",labelKey: "s04.consistencia.label",bodyKey: "s04.consistencia.body"},
  { value: "experiencia", iconKey: "s04.experiencia.icon", labelKey: "s04.experiencia.label", bodyKey: "s04.experiencia.body" },
  { value: "bugs",        iconKey: "s04.bugs.icon",        labelKey: "s04.bugs.label",        bodyKey: "s04.bugs.body"        },
]

const s06Items = [
  { value: "versao",       iconKey: "s06.versao.icon",      labelKey: "s06.versao.label",      bodyKey: "s06.versao.body"      },
  { value: "hig",          iconKey: "s06.hig.icon",         labelKey: "s06.hig.label",         bodyKey: "s06.hig.body"         },
  { value: "developer",    iconKey: "s06.developer.icon",   labelKey: "s06.developer.label",   bodyKey: "s06.developer.body"   },
  { value: "certificados", iconKey: "s06.certificados.icon",labelKey: "s06.certificados.label",bodyKey: "s06.certificados.body"},
  { value: "testes",       iconKey: "s06.testes.icon",      labelKey: "s06.testes.label",      bodyKey: "s06.testes.body"      },
  { value: "appstore",     iconKey: "s06.appstore.icon",    labelKey: "s06.appstore.label",    bodyKey: "s06.appstore.body"    },
  { value: "submissao",    iconKey: "s06.submissao.icon",   labelKey: "s06.submissao.label",   bodyKey: "s06.submissao.body"   },
]

const s07Items = [
  { value: "analise",    iconKey: "s07.analise.icon",    labelKey: "s07.analise.label",    bodyKey: "s07.analise.body"    },
  { value: "verbal",     iconKey: "s07.verbal.icon",     labelKey: "s07.verbal.label",     bodyKey: "s07.verbal.body"     },
  { value: "estrategia", iconKey: "s07.estrategia.icon", labelKey: "s07.estrategia.label", bodyKey: "s07.estrategia.body" },
  { value: "argumentos", iconKey: "s07.argumentos.icon", labelKey: "s07.argumentos.label", bodyKey: "s07.argumentos.body" },
  { value: "brandsystem", iconKey: "s07.brandsystem.icon",labelKey: "s07.brandsystem.label",bodyKey: "s07.brandsystem.body"},
]

const s08Benefits = [
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

const s10Items = [
  { id: "pecas",     iconKey: "s10.pecas.icon",    labelKey: "s10.pecas.label",    bodyKey: "s10.pecas.body",    badge: null                 },
  { id: "instagram", iconKey: "s10.instagram.icon", labelKey: "s10.instagram.label",bodyKey: "s10.instagram.body",badge: null                 },
  { id: "posts",     iconKey: "s10.posts.icon",     labelKey: "s10.posts.label",    bodyKey: "s10.posts.body",    badge: null                 },
  { id: "content",   iconKey: "s10.content.icon",   labelKey: "s10.content.label",  bodyKey: "s10.content.body",  badge: "s10.content.badge"  },
]

const s12Items = [
  { value: "ux",      iconKey: "s12.ux.icon",     labelKey: "s12.ux.label",     badgeKey: "s12.ux.badge",     bodyKey: "s12.ux.body"     },
  { value: "marca",   iconKey: "s12.marca.icon",  labelKey: "s12.marca.label",  badgeKey: "s12.marca.badge",  bodyKey: "s12.marca.body"  },
  { value: "ds",      iconKey: "s12.ds.icon",     labelKey: "s12.ds.label",     badgeKey: "s12.ds.badge",     bodyKey: "s12.ds.body"     },
  { value: "website", iconKey: "s12.website.icon",labelKey: "s12.website.label",badgeKey: "s12.website.badge",bodyKey: "s12.website.body"},
  { value: "midia",   iconKey: "s12.midia.icon",  labelKey: "s12.midia.label",  badgeKey: "s12.midia.badge",  bodyKey: "s12.midia.body"  },
  { value: "dev",     iconKey: "s12.dev.icon",    labelKey: "s12.dev.label",    badgeKey: "s12.dev.badge",    bodyKey: "s12.dev.body"    },
]

const s13Items = [
  { value: "ux",         iconKey: "s13.ux.icon",         labelKey: "s13.ux.label",         badgeKey: "s13.ux.badge",         bodyKey: "s13.ux.body"         },
  { value: "marca",      iconKey: "s13.marca.icon",      labelKey: "s13.marca.label",       badgeKey: "s13.marca.badge",      bodyKey: "s13.marca.body"      },
  { value: "ds",         iconKey: "s13.ds.icon",         labelKey: "s13.ds.label",         badgeKey: "s13.ds.badge",         bodyKey: "s13.ds.body"         },
  { value: "website",    iconKey: "s13.website.icon",    labelKey: "s13.website.label",    badgeKey: "s13.website.badge",    bodyKey: "s13.website.body"    },
  { value: "midia",      iconKey: "s13.midia.icon",      labelKey: "s13.midia.label",      badgeKey: "s13.midia.badge",      bodyKey: "s13.midia.body"      },
  { value: "dev",        iconKey: "s13.dev.icon",        labelKey: "s13.dev.label",        badgeKey: "s13.dev.badge",        bodyKey: "s13.dev.body"        },
  { value: "consultoria",iconKey: "s13.consultoria.icon",labelKey: "s13.consultoria.label",badgeKey: "s13.consultoria.badge",bodyKey: "s13.consultoria.body"},
  { value: "ios",        iconKey: "s13.ios.icon",        labelKey: "s13.ios.label",        badgeKey: "s13.ios.badge",        bodyKey: "s13.ios.body"        },
]

const s14Items = [
  { value: "ux",         iconKey: "s14.ux.icon",         labelKey: "s14.ux.label",         badgeKey: "s14.ux.badge",         bodyKey: "s14.ux.body"         },
  { value: "marca",      iconKey: "s14.marca.icon",      labelKey: "s14.marca.label",       badgeKey: "s14.marca.badge",      bodyKey: "s14.marca.body"      },
  { value: "ds",         iconKey: "s14.ds.icon",         labelKey: "s14.ds.label",         badgeKey: "s14.ds.badge",         bodyKey: "s14.ds.body"         },
  { value: "website",    iconKey: "s14.website.icon",    labelKey: "s14.website.label",    badgeKey: "s14.website.badge",    bodyKey: "s14.website.body"    },
  { value: "midia",      iconKey: "s14.midia.icon",      labelKey: "s14.midia.label",      badgeKey: "s14.midia.badge",      bodyKey: "s14.midia.body"      },
  { value: "dev",        iconKey: "s14.dev.icon",        labelKey: "s14.dev.label",        badgeKey: "s14.dev.badge",        bodyKey: "s14.dev.body"        },
  { value: "consultoria",iconKey: "s14.consultoria.icon",labelKey: "s14.consultoria.label",badgeKey: "s14.consultoria.badge",bodyKey: "s14.consultoria.body"},
  { value: "ios",        iconKey: "s14.ios.icon",        labelKey: "s14.ios.label",        badgeKey: "s14.ios.badge",        bodyKey: "s14.ios.body"        },
  { value: "dedicacao",  iconKey: "s14.dedicacao.icon",  labelKey: "s14.dedicacao.label",  badgeKey: "s14.dedicacao.badge",  bodyKey: "s14.dedicacao.body"  },
]

const s15Rows = [
  { key: "ux",         frenteKey: "s15.ux.frente",         startKey: "s15.ux.start",         proKey: "s15.ux.pro",         insaneKey: "s15.ux.insane"         },
  { key: "marca",      frenteKey: "s15.marca.frente",      startKey: "s15.marca.start",      proKey: "s15.marca.pro",      insaneKey: "s15.marca.insane"      },
  { key: "brand",      frenteKey: "s15.brand.frente",      startKey: "s15.brand.start",      proKey: "s15.brand.pro",      insaneKey: "s15.brand.insane"      },
  { key: "ds",         frenteKey: "s15.ds.frente",         startKey: "s15.ds.start",         proKey: "s15.ds.pro",         insaneKey: "s15.ds.insane"         },
  { key: "website",    frenteKey: "s15.website.frente",    startKey: "s15.website.start",    proKey: "s15.website.pro",    insaneKey: "s15.website.insane"    },
  { key: "midia",      frenteKey: "s15.midia.frente",      startKey: "s15.midia.start",      proKey: "s15.midia.pro",      insaneKey: "s15.midia.insane"      },
  { key: "devapp",     frenteKey: "s15.devapp.frente",     startKey: "s15.devapp.start",     proKey: "s15.devapp.pro",     insaneKey: "s15.devapp.insane"     },
  { key: "consultoria",frenteKey: "s15.consultoria.frente",startKey: "s15.consultoria.start",proKey: "s15.consultoria.pro",insaneKey: "s15.consultoria.insane"},
  { key: "ios",        frenteKey: "s15.ios.frente",        startKey: "s15.ios.start",        proKey: "s15.ios.pro",        insaneKey: "s15.ios.insane"        },
  { key: "suporte",    frenteKey: "s15.suporte.frente",    startKey: "s15.suporte.start",    proKey: "s15.suporte.pro",    insaneKey: "s15.suporte.insane"    },
  { key: "dedicacao",  frenteKey: "s15.dedicacao.frente",  startKey: "s15.dedicacao.start",  proKey: "s15.dedicacao.pro",  insaneKey: "s15.dedicacao.insane"  },
]

const s16Items = [
  { titleKey: "s16.fluxo.title",    itemKeys: ["s16.fluxo.item1",    "s16.fluxo.item2",    "s16.fluxo.item3"] as const },
  { titleKey: "s16.prazo.title",    itemKeys: ["s16.prazo.item1",    "s16.prazo.item2"]                      as const },
  { titleKey: "s16.appstore.title", itemKeys: ["s16.appstore.item1"]                                         as const },
  { titleKey: "s16.custos.title",   itemKeys: ["s16.custos.item1"]                                           as const },
  { titleKey: "s16.escopo.title",   itemKeys: ["s16.escopo.item1"]                                           as const },
]

const s18Cards = [
  { id: "start",  labelKey: "s18.start.label",  valorKey: "s18.start.valor",  badgeKey: "s18.start.badge",  descKey: "s18.start.descricao",  cap1Key: "s18.start.caption1",  cap2Key: "s18.start.caption2",  variant: "service" as const },
  { id: "pro",    labelKey: "s18.pro.label",    valorKey: "s18.pro.valor",    badgeKey: "s18.pro.badge",    descKey: "s18.pro.descricao",    cap1Key: "s18.pro.caption1",    cap2Key: "s18.pro.caption2",    variant: "success" as const },
  { id: "insane", labelKey: "s18.insane.label", valorKey: "s18.insane.valor", badgeKey: "s18.insane.badge", descKey: "s18.insane.descricao", cap1Key: "s18.insane.caption1", cap2Key: "s18.insane.caption2", variant: "service" as const },
]

// ── Helpers ──────────────────────────────────────────────────────────────────

function Accent({ children }: { children: React.ReactNode }) {
  return <span className="text-primary">{children}</span>
}

type ContentKey = keyof typeof content

function c(key: ContentKey) {
  return content[key]
}

const FADE_DURATION_MS = 1000
const FADE_STAGGER_MS  = 500

function getFadeStyle(index: number, entered: boolean): CSSProperties {
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

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: ContentKey
  title: React.ReactNode
  subtitle: ContentKey
}) {
  return (
    <div className="mb-[45px] flex flex-col items-center text-center gap-3">
      {eyebrow && (
        <p className="text-xs font-bold tracking-widest text-primary uppercase">
          <EditableText namespace={NS} id={eyebrow}>{c(eyebrow)}</EditableText>
        </p>
      )}
      <Typography variant="h1" className="max-w-3xl">
        {title}
      </Typography>
      <Typography variant="body-m" className="max-w-2xl text-muted-foreground">
        <EditableText namespace={NS} id={subtitle}>{c(subtitle)}</EditableText>
      </Typography>
    </div>
  )
}

function FrenteAccordion({
  items,
}: {
  items: { value: string; iconKey: string; labelKey: string; badgeKey?: string; bodyKey: string }[]
}) {
  return (
    <Accordion<string> type="multiple" defaultValue={[]} className="flex flex-col gap-4">
      {items.map(({ value, iconKey, labelKey, badgeKey, bodyKey }) => (
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
                  {badgeKey ? (
                    <Badge variant="service" size="sm" className="shrink-0">
                      <EditableText namespace={NS} id={badgeKey as ContentKey}>{c(badgeKey as ContentKey)}</EditableText>
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
              <EditableText namespace={NS} id={bodyKey as ContentKey}>{c(bodyKey as ContentKey)}</EditableText>
            </Typography>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function PropostaKitoPage() {
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

      {/* Page header */}
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

      {/* ── S01 — Sobre a proposta ──────────────────────────────────────── */}
      <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
        <SectionHeader
          title={<EditableText namespace={NS} id="s01.title">{c("s01.title")}</EditableText>}
          subtitle="s01.subtitle"
        />
        <div className="flex flex-col gap-4">
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-6">
            <Badge variant="service" size="sm" className="self-start">
              <EditableText namespace={NS} id="s01.badge">{c("s01.badge")}</EditableText>
            </Badge>
            <div className="flex flex-col gap-4 max-w-3xl">
              {c("s01.body1") && (
                <Typography variant="body-m" className="text-muted-foreground leading-relaxed">
                  <EditableText namespace={NS} id="s01.body1">{c("s01.body1")}</EditableText>
                </Typography>
              )}
              {c("s01.body2") && (
                <Typography variant="body-m" className="text-muted-foreground leading-relaxed">
                  <EditableText namespace={NS} id="s01.body2">{c("s01.body2")}</EditableText>
                </Typography>
              )}
              {c("s01.body3") && (
                <Typography variant="body-m" className="text-muted-foreground leading-relaxed">
                  <EditableText namespace={NS} id="s01.body3">{c("s01.body3")}</EditableText>
                </Typography>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {(["s01.tag1","s01.tag2","s01.tag3"] as const).map((key) => (
              <div key={key} className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex items-center justify-center min-h-[100px]">
                <Typography variant="display-l" className="text-primary leading-none text-center">
                  <EditableText namespace={NS} id={key}>{c(key)}</EditableText>
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S02 — Contexto e objetivos ──────────────────────────────────── */}
      <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
        <SectionHeader
          title={<><EditableText namespace={NS} id="s02.title.prefix">{c("s02.title.prefix")}</EditableText><Accent><EditableText namespace={NS} id="s02.title.accent">{c("s02.title.accent")}</EditableText></Accent></>}
          subtitle="s02.subtitle"
        />
        <div className="flex flex-col gap-4">
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <Typography variant="body-m" className="text-muted-foreground leading-relaxed max-w-3xl">
              <EditableText namespace={NS} id="s02.intro">{c("s02.intro")}</EditableText>
            </Typography>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-6 min-h-[200px]">
              <EditableIcon namespace={NS} id="s02.usuario.icon" fallbackIconId={c("s02.usuario.icon")} alt={c("s02.usuario.label")} strategy={{ kind: "frameHeight", frameHeight: 410, targetHeight: 47 }} />
              <div className="flex flex-col gap-2">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                  <EditableText namespace={NS} id="s02.usuario.label">{c("s02.usuario.label")}</EditableText>
                </p>
                <Typography variant="body-s" className="text-muted-foreground leading-relaxed">
                  <EditableText namespace={NS} id="s02.usuario.body">{c("s02.usuario.body")}</EditableText>
                </Typography>
              </div>
            </div>
            <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-6 min-h-[200px]">
              <EditableIcon namespace={NS} id="s02.estabelecimento.icon" fallbackIconId={c("s02.estabelecimento.icon")} alt={c("s02.estabelecimento.label")} strategy={{ kind: "frameHeight", frameHeight: 410, targetHeight: 47 }} />
              <div className="flex flex-col gap-2">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                  <EditableText namespace={NS} id="s02.estabelecimento.label">{c("s02.estabelecimento.label")}</EditableText>
                </p>
                <Typography variant="body-s" className="text-muted-foreground leading-relaxed">
                  <EditableText namespace={NS} id="s02.estabelecimento.body">{c("s02.estabelecimento.body")}</EditableText>
                </Typography>
              </div>
            </div>
          </div>
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
              <EditableText namespace={NS} id="s02.obj.title">{c("s02.obj.title")}</EditableText>
            </p>
            <ul className="flex flex-col gap-2">
              {(["s02.obj.1","s02.obj.2","s02.obj.3","s02.obj.4","s02.obj.5","s02.obj.6","s02.obj.7"] as const).map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <span className="mt-[7px] h-1 w-1 shrink-0 bg-primary" />
                  <Typography variant="body-s" className="text-muted-foreground">
                    <EditableText namespace={NS} id={key}>{c(key)}</EditableText>
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── S03 — Nossas áreas de atuação (idêntico à proposta-sigo S1) ──── */}
      <section ref={areasRef} className="ds-section flex flex-col" style={{ backgroundColor: "#efefef" }}>
        <div className="mb-[45px] flex flex-col items-center text-center">
          <Typography variant="h1" className="max-w-3xl">
            <EditableText namespace={NS_SIGO} id="s1.title">{cs("s1.title")}</EditableText>
          </Typography>
          <Typography variant="body-m" className="mt-3 max-w-2xl text-muted-foreground">
            <EditableText namespace={NS_SIGO} id="s1.subtitle">{cs("s1.subtitle")}</EditableText>
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:col-span-3 xl:grid-cols-3">
            {areas.map(({ key, iconKey }, index) => (
              <div
                key={key}
                className="aspect-[5/3] rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col justify-between"
                style={getFadeStyle(index, areasEntered)}
              >
                <EditableIcon namespace={NS_SIGO} id={iconKey} fallbackIconId={cs(iconKey as SigoContentKey)} alt={cs(key as SigoContentKey)} strategy={{ kind: "frameHeight", frameHeight: 410, targetHeight: 47.0448 }} />
                <Typography variant="h4" className="leading-snug">
                  <EditableText namespace={NS_SIGO} id={key}>{cs(key as SigoContentKey)}</EditableText>
                </Typography>
              </div>
            ))}
          </div>
          <div
            className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] xl:col-span-1"
            style={getFadeStyle(areas.length, areasEntered)}
          />
        </div>
      </section>

      {/* ── Bloco: Aplicativo ────────────────────────────────────────────── */}
      <div className="px-1 pt-10 pb-4">
        <p className="text-[10px] font-bold tracking-widest text-primary uppercase mb-2">Parte 1</p>
        <Typography variant="h1" className="text-foreground">Aplicativo</Typography>
      </div>

      {/* ── S04 — Frente 1: UX/UI ───────────────────────────────────────── */}
      <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
        <SectionHeader
          eyebrow="s04.badge"
          title={<><EditableText namespace={NS} id="s04.title.prefix">{c("s04.title.prefix")}</EditableText><Accent><EditableText namespace={NS} id="s04.title.accent">{c("s04.title.accent")}</EditableText></Accent></>}
          subtitle="s04.subtitle"
        />
        <div className="flex flex-col gap-4">
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <Typography variant="body-m" className="text-muted-foreground leading-relaxed max-w-3xl">
              <EditableText namespace={NS} id="s04.intro">{c("s04.intro")}</EditableText>
            </Typography>
          </div>
          <FrenteAccordion items={s04Items} />
        </div>
      </section>

      {/* ── S05 — Frente 2: Dev App ─────────────────────────────────────── */}
      <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
        <SectionHeader
          eyebrow="s05.badge"
          title={<><EditableText namespace={NS} id="s05.title.prefix">{c("s05.title.prefix")}</EditableText><Accent><EditableText namespace={NS} id="s05.title.accent">{c("s05.title.accent")}</EditableText></Accent></>}
          subtitle="s05.subtitle"
        />
        <div className="flex flex-col gap-4">
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <Typography variant="body-m" className="text-muted-foreground leading-relaxed max-w-3xl">
              <EditableText namespace={NS} id="s05.intro">{c("s05.intro")}</EditableText>
            </Typography>
          </div>
          <FrenteAccordion items={s05Items} />
        </div>
      </section>

      {/* ── S06 — Frente 3: iOS ─────────────────────────────────────────── */}
      <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
        <SectionHeader
          eyebrow="s06.badge"
          title={<><EditableText namespace={NS} id="s06.title.prefix">{c("s06.title.prefix")}</EditableText><Accent><EditableText namespace={NS} id="s06.title.accent">{c("s06.title.accent")}</EditableText></Accent></>}
          subtitle="s06.subtitle"
        />
        <div className="flex flex-col gap-4">
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <Typography variant="body-m" className="text-muted-foreground leading-relaxed max-w-3xl">
              <EditableText namespace={NS} id="s06.intro">{c("s06.intro")}</EditableText>
            </Typography>
          </div>
          <FrenteAccordion items={s06Items} />
        </div>
      </section>

      {/* ── Bloco: A Marca ───────────────────────────────────────────────── */}
      <div className="px-1 pt-10 pb-4">
        <p className="text-[10px] font-bold tracking-widest text-primary uppercase mb-2">Parte 2</p>
        <Typography variant="h1" className="text-foreground">A Marca</Typography>
      </div>

      {/* ── S07 — Frente 4: Marca + Brand System ────────────────────────── */}
      <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
        <SectionHeader
          eyebrow="s07.badge"
          title={<><EditableText namespace={NS} id="s07.title.prefix">{c("s07.title.prefix")}</EditableText><Accent><EditableText namespace={NS} id="s07.title.accent">{c("s07.title.accent")}</EditableText></Accent></>}
          subtitle="s07.subtitle"
        />
        <div className="flex flex-col gap-4">
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <Typography variant="body-m" className="text-muted-foreground leading-relaxed max-w-3xl">
              <EditableText namespace={NS} id="s07.intro">{c("s07.intro")}</EditableText>
            </Typography>
          </div>
          <FrenteAccordion items={s07Items} />
        </div>
      </section>

      {/* ── S08 — Frente 5: Design System ───────────────────────────────── */}
      <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
        <SectionHeader
          eyebrow="s08.badge"
          title={<><EditableText namespace={NS} id="s08.title.prefix">{c("s08.title.prefix")}</EditableText><Accent><EditableText namespace={NS} id="s08.title.accent">{c("s08.title.accent")}</EditableText></Accent></>}
          subtitle="s08.subtitle"
        />
        <div className="flex flex-col gap-4">
          {/* Linha 1: intro ≠ Brand System | Foundations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-2">
              <Typography variant="h4" className="font-bold">
                <EditableText namespace={NS} id="s08.intro1">{c("s08.intro1")}</EditableText>
              </Typography>
              <Typography variant="body-s" className="text-muted-foreground leading-relaxed">
                <EditableText namespace={NS} id="s08.intro2">{c("s08.intro2")}</EditableText>
              </Typography>
            </div>
            <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                <EditableText namespace={NS} id="s08.foundations.label">{c("s08.foundations.label")}</EditableText>
              </p>
              <Typography variant="body-s" className="text-muted-foreground">
                <EditableText namespace={NS} id="s08.foundations.sublabel">{c("s08.foundations.sublabel")}</EditableText>
              </Typography>
              <Typography variant="body-s" className="text-muted-foreground leading-relaxed">
                <EditableText namespace={NS} id="s08.foundations.body">{c("s08.foundations.body")}</EditableText>
              </Typography>
            </div>
          </div>
          {/* Linha 2: Componentes | Patterns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                <EditableText namespace={NS} id="s08.componentes.label">{c("s08.componentes.label")}</EditableText>
              </p>
              <Typography variant="body-s" className="text-muted-foreground">
                <EditableText namespace={NS} id="s08.componentes.sublabel">{c("s08.componentes.sublabel")}</EditableText>
              </Typography>
              <Typography variant="body-s" className="text-muted-foreground leading-relaxed">
                <EditableText namespace={NS} id="s08.componentes.body">{c("s08.componentes.body")}</EditableText>
              </Typography>
            </div>
            <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                <EditableText namespace={NS} id="s08.patterns.label">{c("s08.patterns.label")}</EditableText>
              </p>
              <Typography variant="body-s" className="text-muted-foreground">
                <EditableText namespace={NS} id="s08.patterns.sublabel">{c("s08.patterns.sublabel")}</EditableText>
              </Typography>
              <Typography variant="body-s" className="text-muted-foreground leading-relaxed">
                <EditableText namespace={NS} id="s08.patterns.body">{c("s08.patterns.body")}</EditableText>
              </Typography>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary px-1">
              <EditableText namespace={NS} id="s08.beneficios.title">{c("s08.beneficios.title")}</EditableText>
            </p>
            <div className="px-10">
              <Carousel opts={{ align: "start" }} className="w-full">
                <CarouselContent>
                  {s08Benefits.map(({ id, iconKey, labelKey, bodyKey }) => (
                    <CarouselItem key={id} className="basis-full sm:basis-1/2 lg:basis-1/3">
                      <div className="aspect-square rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col justify-between">
                        <EditableIcon
                          namespace={NS}
                          id={iconKey as ContentKey}
                          fallbackIconId={c(iconKey as ContentKey)}
                          alt={c(labelKey as ContentKey)}
                          strategy={{ kind: "frameHeight", frameHeight: 410, targetHeight: 74 }}
                        />
                        <div className="flex flex-col gap-3">
                          <Typography variant="h1" className="leading-tight">
                            <EditableText namespace={NS} id={labelKey as ContentKey}>{c(labelKey as ContentKey)}</EditableText>
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
          </div>
        </div>
      </section>

      {/* ── S09 — Frente 6: Website ─────────────────────────────────────── */}
      <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
        <SectionHeader
          eyebrow="s09.badge"
          title={<><EditableText namespace={NS} id="s09.title.prefix">{c("s09.title.prefix")}</EditableText><Accent><EditableText namespace={NS} id="s09.title.accent">{c("s09.title.accent")}</EditableText></Accent></>}
          subtitle="s09.subtitle"
        />
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                <EditableText namespace={NS} id="s09.lp-geral.label">{c("s09.lp-geral.label")}</EditableText>
              </p>
              <Typography variant="body-s" className="text-muted-foreground leading-relaxed">
                <EditableText namespace={NS} id="s09.lp-geral.body">{c("s09.lp-geral.body")}</EditableText>
              </Typography>
            </div>
            <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                <EditableText namespace={NS} id="s09.lp-estab.label">{c("s09.lp-estab.label")}</EditableText>
              </p>
              <Typography variant="body-s" className="text-muted-foreground leading-relaxed">
                <EditableText namespace={NS} id="s09.lp-estab.body">{c("s09.lp-estab.body")}</EditableText>
              </Typography>
            </div>
          </div>
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
              <EditableText namespace={NS} id="s09.entregas.title">{c("s09.entregas.title")}</EditableText>
            </p>
            <Typography variant="body-s" className="text-muted-foreground leading-relaxed">
              <EditableText namespace={NS} id="s09.entregas.body">{c("s09.entregas.body")}</EditableText>
            </Typography>
          </div>
        </div>
      </section>

      {/* ── S10 — Frente 7: Mídia ───────────────────────────────────────── */}
      <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
        <SectionHeader
          eyebrow="s10.badge"
          title={<><EditableText namespace={NS} id="s10.title.prefix">{c("s10.title.prefix")}</EditableText><Accent><EditableText namespace={NS} id="s10.title.accent">{c("s10.title.accent")}</EditableText></Accent></>}
          subtitle="s10.subtitle"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {s10Items.map(({ id, iconKey, labelKey, bodyKey, badge }) => (
            <div key={id} className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-6 min-h-[200px]">
              <div className="flex items-start justify-between gap-4">
                <EditableIcon namespace={NS} id={iconKey} fallbackIconId={c(iconKey as ContentKey)} alt={c(labelKey as ContentKey)} strategy={{ kind: "frameHeight", frameHeight: 410, targetHeight: 47 }} />
                {badge && (
                  <Badge variant="service" size="sm" className="shrink-0">
                    <EditableText namespace={NS} id={badge as ContentKey}>{c(badge as ContentKey)}</EditableText>
                  </Badge>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                  <EditableText namespace={NS} id={labelKey as ContentKey}>{c(labelKey as ContentKey)}</EditableText>
                </p>
                <Typography variant="body-s" className="text-muted-foreground leading-relaxed">
                  <EditableText namespace={NS} id={bodyKey as ContentKey}>{c(bodyKey as ContentKey)}</EditableText>
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── S11 — Estrutura por níveis ──────────────────────────────────── */}
      <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
        <SectionHeader
          title={<><EditableText namespace={NS} id="s11.title.prefix">{c("s11.title.prefix")}</EditableText><Accent><EditableText namespace={NS} id="s11.title.accent">{c("s11.title.accent")}</EditableText></Accent></>}
          subtitle="s11.subtitle"
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {(["n1","n2","n3"] as const).map((n) => (
            <div key={n} className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <Typography variant="display-l" className="text-primary leading-none">
                  <EditableText namespace={NS} id={`s11.${n}.ord` as ContentKey}>{c(`s11.${n}.ord` as ContentKey)}</EditableText>
                </Typography>
                <Badge variant="service" size="sm">
                  <EditableText namespace={NS} id={`s11.${n}.badge` as ContentKey}>{c(`s11.${n}.badge` as ContentKey)}</EditableText>
                </Badge>
              </div>
              <div className="flex flex-col gap-3">
                <Typography variant="h3">
                  <EditableText namespace={NS} id={`s11.${n}.title` as ContentKey}>{c(`s11.${n}.title` as ContentKey)}</EditableText>
                </Typography>
                <Typography variant="body-s" className="text-muted-foreground leading-relaxed">
                  <EditableText namespace={NS} id={`s11.${n}.body` as ContentKey}>{c(`s11.${n}.body` as ContentKey)}</EditableText>
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── S12 — Pacote Start ──────────────────────────────────────────── */}
      <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
        <SectionHeader
          title={<><EditableText namespace={NS} id="s12.title.prefix">{c("s12.title.prefix")}</EditableText><Accent><EditableText namespace={NS} id="s12.title.accent">{c("s12.title.accent")}</EditableText></Accent></>}
          subtitle="s12.subtitle"
        />
        <div className="flex flex-col gap-4">
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="flex flex-col gap-3 max-w-2xl">
              <Badge variant="service" size="sm" className="self-start">
                <EditableText namespace={NS} id="s12.badge">{c("s12.badge")}</EditableText>
              </Badge>
              <Typography variant="body-m" className="text-muted-foreground leading-relaxed">
                <EditableText namespace={NS} id="s12.intro">{c("s12.intro")}</EditableText>
              </Typography>
            </div>
            <Typography variant="display-xl" className="text-primary leading-none shrink-0">
              <EditableText namespace={NS} id="s12.preco">{c("s12.preco")}</EditableText>
            </Typography>
          </div>
          <FrenteAccordion items={s12Items} />
        </div>
      </section>

      {/* ── S13 — Pacote Pro ────────────────────────────────────────────── */}
      <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
        <SectionHeader
          title={<><EditableText namespace={NS} id="s13.title.prefix">{c("s13.title.prefix")}</EditableText><Accent><EditableText namespace={NS} id="s13.title.accent">{c("s13.title.accent")}</EditableText></Accent></>}
          subtitle="s13.subtitle"
        />
        <div className="flex flex-col gap-4">
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="flex flex-col gap-3 max-w-2xl">
              <Badge variant="success" size="sm" className="self-start font-bold">
                <EditableText namespace={NS} id="s13.badge">{c("s13.badge")}</EditableText>
              </Badge>
              <Typography variant="body-m" className="text-muted-foreground leading-relaxed">
                <EditableText namespace={NS} id="s13.intro">{c("s13.intro")}</EditableText>
              </Typography>
            </div>
            <Typography variant="display-xl" className="text-primary leading-none shrink-0">
              <EditableText namespace={NS} id="s13.preco">{c("s13.preco")}</EditableText>
            </Typography>
          </div>
          <FrenteAccordion items={s13Items} />
        </div>
      </section>

      {/* ── S14 — Pacote Insane ─────────────────────────────────────────── */}
      <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
        <SectionHeader
          title={<><EditableText namespace={NS} id="s14.title.prefix">{c("s14.title.prefix")}</EditableText><Accent><EditableText namespace={NS} id="s14.title.accent">{c("s14.title.accent")}</EditableText></Accent></>}
          subtitle="s14.subtitle"
        />
        <div className="flex flex-col gap-4">
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="flex flex-col gap-3 max-w-2xl">
              <Badge variant="service" size="sm" className="self-start">
                <EditableText namespace={NS} id="s14.badge">{c("s14.badge")}</EditableText>
              </Badge>
              <Typography variant="body-m" className="text-muted-foreground leading-relaxed">
                <EditableText namespace={NS} id="s14.intro">{c("s14.intro")}</EditableText>
              </Typography>
            </div>
            <Typography variant="display-xl" className="text-primary leading-none shrink-0">
              <EditableText namespace={NS} id="s14.preco">{c("s14.preco")}</EditableText>
            </Typography>
          </div>
          <FrenteAccordion items={s14Items} />
        </div>
      </section>

      {/* ── S15 — Comparativo dos pacotes ───────────────────────────────── */}
      <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
        <SectionHeader
          title={<><EditableText namespace={NS} id="s15.title.prefix">{c("s15.title.prefix")}</EditableText><Accent><EditableText namespace={NS} id="s15.title.accent">{c("s15.title.accent")}</EditableText></Accent></>}
          subtitle="s15.subtitle"
        />
        <div className="overflow-x-auto">
          <div className="flex min-w-[720px] flex-col gap-2">
            <div className="grid grid-cols-4 gap-2">
              <div className="rounded-none border border-white bg-[#f9f9f9] p-4" />
              {(["s15.col.start","s15.col.pro","s15.col.insane"] as const).map((key, i) => (
                <div key={key} className="rounded-none border border-white bg-[#f9f9f9] p-4 flex items-center justify-center">
                  <p className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${i === 1 ? "text-primary" : "text-foreground/60"}`}>
                    <EditableText namespace={NS} id={key}>{c(key)}</EditableText>
                  </p>
                </div>
              ))}
            </div>
            {s15Rows.map(({ key, frenteKey, startKey, proKey, insaneKey }) => (
              <div key={key} className="grid grid-cols-4 gap-2">
                <div className="rounded-none border border-white bg-[#f9f9f9] p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                    <EditableText namespace={NS} id={frenteKey as ContentKey}>{c(frenteKey as ContentKey)}</EditableText>
                  </p>
                </div>
                <div className="rounded-none border border-white bg-[#f9f9f9] p-4">
                  <Typography variant="body-s" className="text-muted-foreground">
                    <EditableText namespace={NS} id={startKey as ContentKey}>{c(startKey as ContentKey)}</EditableText>
                  </Typography>
                </div>
                <div className="rounded-none border border-white bg-[#f9f9f9] p-4">
                  <Typography variant="body-s" className="font-medium">
                    <EditableText namespace={NS} id={proKey as ContentKey}>{c(proKey as ContentKey)}</EditableText>
                  </Typography>
                </div>
                <div className="rounded-none border border-white bg-[#f9f9f9] p-4">
                  <Typography variant="body-s" className="text-muted-foreground">
                    <EditableText namespace={NS} id={insaneKey as ContentKey}>{c(insaneKey as ContentKey)}</EditableText>
                  </Typography>
                </div>
              </div>
            ))}
            {/* Linha de preços no final da tabela */}
            <div className="grid grid-cols-4 gap-2 mt-2">
              <div className="rounded-none border border-white bg-[#f9f9f9] p-4 flex items-center">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                  <EditableText namespace={NS} id="s15.price.label">{c("s15.price.label")}</EditableText>
                </p>
              </div>
              {(["s15.price.start","s15.price.pro","s15.price.insane"] as const).map((key, i) => (
                <div key={key} className="rounded-none border border-white bg-[#f9f9f9] p-4 flex items-center justify-center">
                  <Typography variant="h4" className={i === 1 ? "text-primary font-bold" : "text-foreground/60"}>
                    <EditableText namespace={NS} id={key}>{c(key)}</EditableText>
                  </Typography>
                </div>
              ))}
            </div>
          </div>
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
