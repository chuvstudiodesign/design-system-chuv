"use client"

import { CalendarDays } from "lucide-react"
import { Badge } from "@/components/badge"
import { EditableText } from "@/components/editable-text"
import { EditableIcon } from "@/components/site-sections/editable-icon"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/typography"
import { Separator } from "@/components/ui/separator"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import content from "./content.json"

const NS = "solucoes-completas"

function IconOlho({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 373 302" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <path d="M373 302H0V275H373V302Z" fill="currentColor"/>
        <path d="M372.64 147.188L244.621 250.854L227 229.095L355.019 125.428L372.64 147.188Z" fill="currentColor"/>
        <path d="M145.64 21.7598L17.8848 125.213L145.64 228.667L128.019 250.428L0 146.76L17.4473 125.213L0 103.667L128.019 0L145.64 21.7598Z" fill="currentColor"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M187 88C207.435 88 224 104.565 224 125C224 145.435 207.435 162 187 162C166.565 162 150 145.435 150 125C150 104.565 166.565 88 187 88ZM187 109C178.163 109 171 116.163 171 125C171 133.837 178.163 141 187 141C195.837 141 203 133.837 203 125C203 116.163 195.837 109 187 109Z" fill="currentColor"/>
        <path d="M372.64 103.667L355.019 125.428L227 21.7598L244.621 0L372.64 103.667Z" fill="currentColor"/>
      </svg>
    </div>
  )
}

function IconBalaoTexto({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 373 352" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <path d="M28 267H146V267.201L191.426 312.627L237 267.054V267H345V52H373V294H249.651L191.799 351.853L191.426 351.479L191.054 351.853L133.201 294H0V52H28V267Z" fill="currentColor"/>
        <path d="M294 130H80V103H294V130Z" fill="currentColor"/>
        <path d="M373 27H0V0H373V27Z" fill="currentColor"/>
      </svg>
    </div>
  )
}

function IconGrafico({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 373 338" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <path d="M373 338H0V311H373V338Z" fill="currentColor"/>
        <path d="M76 189V288H48V189H76Z" fill="currentColor"/>
        <path d="M201 288H173V80H201V288Z" fill="currentColor"/>
        <path d="M326 288H298V0H326V288Z" fill="currentColor"/>
      </svg>
    </div>
  )
}

function IconLupa({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 373 338" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <path d="M373 338H0V311H373V338Z" fill="currentColor"/>
        <path d="M348.64 271.667L331.019 293.428L203 189.76L220.621 168L348.64 271.667Z" fill="currentColor"/>
        <path d="M193 190H59V162H193V190Z" fill="currentColor"/>
        <path d="M59 28V162H31V28H59Z" fill="currentColor"/>
        <path d="M221 162H193V28H221V162Z" fill="currentColor"/>
        <path d="M193 28H59V0H193V28Z" fill="currentColor"/>
      </svg>
    </div>
  )
}

function IconPasta({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 373 302" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <path fillRule="evenodd" clipRule="evenodd" d="M373 80V302H0V80H373ZM28 107V275H345V107H28Z" fill="currentColor"/>
        <path d="M69 55H22V28H69V55Z" fill="currentColor"/>
        <path d="M348 55H194V28H348V55Z" fill="currentColor"/>
        <path d="M194 28H69V0H194V28Z" fill="currentColor"/>
      </svg>
    </div>
  )
}

function IconSino({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 344 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <path d="M213 360H131V333H213V360Z" fill="currentColor"/>
        <path d="M50 281H294V79H322V281H344V308H0V281H22V79H50V281Z" fill="currentColor"/>
        <path d="M213 27H289V54H207V27H137V54H55V27H131V0H213V27Z" fill="currentColor"/>
      </svg>
    </div>
  )
}

const cards = [
  {
    id: "olhar-macro",
    iconKey: "cards.olhar-macro.icon",
    titleKey: "cards.olhar-macro.title",
    bodyKey: "cards.olhar-macro.body",
  },
  {
    id: "consultoria",
    iconKey: "cards.consultoria.icon",
    titleKey: "cards.consultoria.title",
    bodyKey: "cards.consultoria.body",
  },
  {
    id: "escala",
    iconKey: "cards.escala.icon",
    titleKey: "cards.escala.title",
    bodyKey: "cards.escala.body",
  },
  {
    id: "possibilidades",
    iconKey: "cards.possibilidades.icon",
    titleKey: "cards.possibilidades.title",
    bodyKey: "cards.possibilidades.body",
  },
  {
    id: "multidisciplinar",
    iconKey: "cards.multidisciplinar.icon",
    titleKey: "cards.multidisciplinar.title",
    bodyKey: "cards.multidisciplinar.body",
  },
  {
    id: "entrega",
    iconKey: "cards.entrega.icon",
    titleKey: "cards.entrega.title",
    bodyKey: "cards.entrega.body",
  },
]

type ContentKey = keyof typeof content

function c(key: ContentKey) {
  return content[key]
}

export default function SolucoesCompletasPage() {
  return (
    <div className="ds-page">
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

      <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
        <div className="mb-5">
          <h2 className="ds-section-title">
            <EditableText namespace={NS} id="preview.title">{c("preview.title")}</EditableText>
          </h2>
          <p className="ds-section-subtitle">
            <EditableText namespace={NS} id="preview.subtitle">{c("preview.subtitle")}</EditableText>
          </p>
        </div>
        <Separator className="mb-8 bg-black/10" />

        <div className="px-10">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent>
              {cards.map(({ id, iconKey, titleKey, bodyKey }) => (
                <CarouselItem
                  key={id}
                  className="basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="relative aspect-square rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col justify-between">
                    {id === "consultoria" && (
                      <div className="absolute top-[22px] right-[22px]">
                        <HoverCard>
                          <HoverCardTrigger className="cursor-pointer">
                            <Badge variant="success" size="sm" className="font-bold">
                              <EditableText namespace={NS} id="cards.consultoria.badge">{c("cards.consultoria.badge")}</EditableText>
                            </Badge>
                          </HoverCardTrigger>
                          <HoverCardContent
                            side="top"
                            align="end"
                            className="w-80 rounded-none border-white bg-[#f9f9f9] p-[var(--card-padding)]"
                          >
                            <div className="flex flex-col gap-4">
                              <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary mb-2">
                                  <EditableText namespace={NS} id="cards.consultoria.hover.label">{c("cards.consultoria.hover.label")}</EditableText>
                                </p>
                                <Typography variant="h4">
                                  <EditableText namespace={NS} id="cards.consultoria.hover.title">{c("cards.consultoria.hover.title")}</EditableText>
                                </Typography>
                              </div>
                              <Typography variant="body-s" className="text-muted-foreground">
                                <EditableText namespace={NS} id="cards.consultoria.hover.body">{c("cards.consultoria.hover.body")}</EditableText>
                              </Typography>
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <CalendarDays className="h-3.5 w-3.5 shrink-0" />
                                <Typography variant="caption">
                                  <EditableText namespace={NS} id="cards.consultoria.hover.deadline">{c("cards.consultoria.hover.deadline")}</EditableText>
                                </Typography>
                              </div>
                              <Button size="sm" className="self-start bg-[#22c55e] text-white hover:bg-[#16a34a]">
                                <EditableText namespace={NS} id="cards.consultoria.hover.button">{c("cards.consultoria.hover.button")}</EditableText>
                              </Button>
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      </div>
                    )}

                    <EditableIcon
                      namespace={NS}
                      id={iconKey}
                      fallbackIconId={c(iconKey as ContentKey)}
                      alt={c(titleKey as ContentKey)}
                      strategy={{ kind: "frameHeight", frameHeight: 410, targetHeight: 82 }}
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
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
        <div className="mb-5">
          <h2 className="ds-section-title">
            <EditableText namespace={NS} id="specs.title">{c("specs.title")}</EditableText>
          </h2>
          <p className="ds-section-subtitle">
            <EditableText namespace={NS} id="specs.subtitle">{c("specs.subtitle")}</EditableText>
          </p>
        </div>
        <Separator className="mb-8 bg-black/10" />

        <div className="ds-card-grid-2">
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
              <EditableText namespace={NS} id="specs.card.label">{c("specs.card.label")}</EditableText>
            </p>
            <Typography variant="body-s" className="text-muted-foreground">
              <EditableText namespace={NS} id="specs.card.line1">{c("specs.card.line1")}</EditableText>{" "}
              <span className="font-mono">
                <EditableText namespace={NS} id="specs.card.value1">{c("specs.card.value1")}</EditableText>
              </span>
            </Typography>
            <Typography variant="body-s" className="text-muted-foreground">
              <EditableText namespace={NS} id="specs.card.line2">{c("specs.card.line2")}</EditableText>{" "}
              <span className="font-mono">
                <EditableText namespace={NS} id="specs.card.value2">{c("specs.card.value2")}</EditableText>
              </span>{" "}
              · <EditableText namespace={NS} id="specs.card.line2b">{c("specs.card.line2b")}</EditableText>{" "}
              <span className="font-mono">
                <EditableText namespace={NS} id="specs.card.value2b">{c("specs.card.value2b")}</EditableText>
              </span>
            </Typography>
            <Typography variant="body-s" className="text-muted-foreground">
              <EditableText namespace={NS} id="specs.card.line3">{c("specs.card.line3")}</EditableText>{" "}
              <span className="font-mono">
                <EditableText namespace={NS} id="specs.card.value3">{c("specs.card.value3")}</EditableText>
              </span>
            </Typography>
          </div>

          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
              <EditableText namespace={NS} id="specs.hover.label">{c("specs.hover.label")}</EditableText>
            </p>
            <Typography variant="body-s" className="text-muted-foreground">
              <EditableText namespace={NS} id="specs.hover.line1">{c("specs.hover.line1")}</EditableText>{" "}
              <span className="font-mono">
                <EditableText namespace={NS} id="specs.hover.value1">{c("specs.hover.value1")}</EditableText>
              </span>
            </Typography>
            <Typography variant="body-s" className="text-muted-foreground">
              <EditableText namespace={NS} id="specs.hover.line2">{c("specs.hover.line2")}</EditableText>{" "}
              <EditableText namespace={NS} id="specs.hover.value2">{c("specs.hover.value2")}</EditableText>
            </Typography>
            <Typography variant="body-s" className="text-muted-foreground">
              <EditableText namespace={NS} id="specs.hover.line3">{c("specs.hover.line3")}</EditableText>{" "}
              <span className="font-mono">
                <EditableText namespace={NS} id="specs.hover.value3">{c("specs.hover.value3")}</EditableText>
              </span>
            </Typography>
          </div>
        </div>
      </section>

      <div className="px-1 pt-2 pb-4">
        <p className="text-xs text-muted-foreground">
          <EditableText namespace={NS} id="footer.description">{c("footer.description")}</EditableText>{" "}
          <span className="font-mono">
            <EditableText namespace={NS} id="footer.namespace">{c("footer.namespace")}</EditableText>
          </span>{" "}
          <EditableText namespace={NS} id="footer.summary">{c("footer.summary")}</EditableText>
        </p>
      </div>
    </div>
  )
}
