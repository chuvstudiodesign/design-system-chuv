"use client"

import { CalendarDays } from "lucide-react"
import { Badge } from "@/components/badge"
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
    icon: IconOlho,
    title: "Olhar macro do design da sua empresa",
    body: "Mapeamos identidade, comunicação e experiência para revelar onde o design pode transformar os seus resultados.",
  },
  {
    id: "consultoria",
    icon: IconBalaoTexto,
    title: "Consultoria de design e tecnologia",
    body: "Uma conversa estratégica gratuita. Diagnóstico claro e caminhos concretos, sem compromisso — por agendamento.",
  },
  {
    id: "escala",
    icon: IconGrafico,
    title: "Escala de produção",
    body: "Entregamos volume sem abrir mão da qualidade — do projeto pontual ao contrato contínuo, crescemos com sua demanda.",
  },
  {
    id: "possibilidades",
    icon: IconLupa,
    title: "Reconhecimento de possibilidades",
    body: "Identificamos onde design e tecnologia geram mais valor: interfaces, sistemas internos, automações e além.",
  },
  {
    id: "multidisciplinar",
    icon: IconPasta,
    title: "Aplicação multidisciplinar",
    body: "Design, desenvolvimento e estratégia de marca em um único parceiro. Entregas integradas que maximizam resultado.",
  },
  {
    id: "entrega",
    icon: IconSino,
    title: "Entrega rápida e disponibilidade",
    body: "Prazos enxutos e comunicação direta. Disponíveis para ajustar e iterar em cada etapa do projeto.",
  },
]

export default function SolucoesCompletasPage() {
  return (
    <div className="ds-page">
      <div className="ds-page-header">
        <p className="text-xs font-bold tracking-widest text-primary uppercase mb-2">
          04 — SITE SECTIONS
        </p>
        <h1 className="ds-page-title">Soluções Completas</h1>
        <p className="ds-page-description max-w-xl">
          Seção oficial do site com os seis diferenciais comerciais do Chuv Studio.
          Cards quadrados em carrossel com ícones do design system e texto direto ao ponto.
        </p>
      </div>

      <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
        <div className="mb-5">
          <h2 className="ds-section-title">Preview da seção</h2>
          <p className="ds-section-subtitle">
            Cards quadrados em carrossel — arraste ou use as setas para navegar.
          </p>
        </div>
        <Separator className="mb-8 bg-black/10" />

        <div className="px-10">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent>
              {cards.map(({ id, icon: Icon, title, body }) => (
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
                              Agende grátis
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
                                  Consultoria gratuita
                                </p>
                                <Typography variant="h4">
                                  Análise completa para a sua empresa
                                </Typography>
                              </div>
                              <Typography variant="body-s" className="text-muted-foreground">
                                Uma análise gratuita de tudo que pode ser implementado na sua empresa em design e tecnologia digital — entregue pelo nosso time.
                              </Typography>
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <CalendarDays className="h-3.5 w-3.5 shrink-0" />
                                <Typography variant="caption">
                                  Disponível até 27 de abril
                                </Typography>
                              </div>
                              <Button size="sm" className="self-start bg-[#22c55e] text-white hover:bg-[#16a34a]">
                                Agendar agora
                              </Button>
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      </div>
                    )}

                    <Icon className="h-[82px] w-[82px] shrink-0 text-primary" />

                    <div className="flex flex-col gap-3">
                      <Typography variant="h1" className="leading-tight">
                        {title}
                      </Typography>
                      <Typography variant="body-m" className="text-muted-foreground leading-relaxed">
                        {body}
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
          <h2 className="ds-section-title">Especificações</h2>
          <p className="ds-section-subtitle">Tokens e estrutura utilizados nesta seção.</p>
        </div>
        <Separator className="mb-8 bg-black/10" />

        <div className="ds-card-grid-2">
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">Card</p>
            <Typography variant="body-s" className="text-muted-foreground">
              Proporção: <span className="font-mono">aspect-square (1:1)</span>
            </Typography>
            <Typography variant="body-s" className="text-muted-foreground">
              Background: <span className="font-mono">#f9f9f9</span> · Border: <span className="font-mono">1px solid white</span>
            </Typography>
            <Typography variant="body-s" className="text-muted-foreground">
              Padding: <span className="font-mono">var(--card-padding) = 45px</span>
            </Typography>
          </div>

          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">Consultoria — HoverCard</p>
            <Typography variant="body-s" className="text-muted-foreground">
              Trigger: <span className="font-mono">Badge variant="service"</span> · "Agende consultoria grátis"
            </Typography>
            <Typography variant="body-s" className="text-muted-foreground">
              Conteúdo: título, descrição, data limite e botão de agendamento
            </Typography>
            <Typography variant="body-s" className="text-muted-foreground">
              Disponível até: <span className="font-mono">27 de abril</span>
            </Typography>
          </div>
        </div>
      </section>

      <div className="px-1 pt-2 pb-4">
        <p className="text-xs text-muted-foreground">
          Chuv Studio Design System · Site Section:{" "}
          <span className="font-mono">solucoes-completas</span> · 6 diferenciais comerciais
        </p>
      </div>
    </div>
  )
}
