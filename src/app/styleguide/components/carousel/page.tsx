"use client"

import * as React from "react"
import { Separator } from "@/components/ui/separator"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

// ── Section wrapper ────────────────────────────────────────────────────────────
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
    <section
      className="ds-section"
      style={{ backgroundColor: "#efefef" }}
    >
      <div className="mb-5">
        <h2 className="ds-section-title">{title}</h2>
        {subtitle && (
          <p className="ds-section-subtitle">{subtitle}</p>
        )}
      </div>
      <Separator className="mb-8 bg-black/10" />
      {children}
    </section>
  )
}

// ── Mock slide card ────────────────────────────────────────────────────────────
function SlideCard({ index, label }: { index: number; label?: string }) {
  return (
    <div
      className="flex aspect-video w-full items-center justify-center border border-black/10 bg-white"
    >
      <div className="text-center">
        <p className="text-4xl font-bold text-primary">{index + 1}</p>
        {label && (
          <p className="text-xs text-muted-foreground mt-1">{label}</p>
        )}
      </div>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function CarouselPage() {
  // API demo state
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1))
  }, [api])

  return (
    <div className="ds-page">

      {/* Header */}
      <div className="ds-page-header">
        <p className="text-xs font-bold tracking-widest text-primary uppercase mb-2">
          02 — COMPONENTS
        </p>
        <h1 className="ds-page-title">Carousel</h1>
        <p className="ds-page-description max-w-xl">
          Scrollable slide container powered by{" "}
          <code className="text-xs font-mono bg-black/5 px-1 py-0.5">embla-carousel-react</code>.
          Supports horizontal, vertical, multi-slide, and programmatic control via API.
        </p>
      </div>

      {/* ── BASIC ── */}
      <Section
        title="Basic"
        subtitle="Single slide at a time, horizontal"
      >
        <div className="px-4 sm:px-8 lg:px-12">
          <Carousel className="w-full">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, i) => (
                <CarouselItem key={i}>
                  <SlideCard index={i} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <pre className="ds-code-snippet mt-8 whitespace-pre">{`<Carousel className="w-full">
  <CarouselContent>
    {items.map((item, i) => (
      <CarouselItem key={i}>
        {/* slide content */}
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}</pre>
      </Section>

      {/* ── MULTI SLIDE ── */}
      <Section
        title="Multiple Slides"
        subtitle="Show several items at once using basis classes on CarouselItem"
      >
        <div className="px-4 sm:px-8 lg:px-12">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent>
              {Array.from({ length: 6 }).map((_, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <SlideCard index={i} label="1/3 width" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <pre className="ds-code-snippet mt-8 whitespace-pre">{`<Carousel opts={{ align: "start" }} className="w-full">
  <CarouselContent>
    {items.map((item, i) => (
      <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
        {/* slide content */}
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}</pre>
      </Section>

      {/* ── VERTICAL ── */}
      <Section
        title="Vertical"
        subtitle="Scrolls top-to-bottom via orientation prop"
      >
        <div className="flex justify-center">
          <Carousel orientation="vertical" className="w-full max-w-[18rem] sm:max-w-xs">
            <CarouselContent className="h-64">
              {Array.from({ length: 5 }).map((_, i) => (
                <CarouselItem key={i} className="basis-full">
                  <SlideCard index={i} label="vertical" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <pre className="ds-code-snippet mt-8 whitespace-pre">{`<Carousel orientation="vertical" className="w-full max-w-xs">
  <CarouselContent className="h-64">
    {items.map((item, i) => (
      <CarouselItem key={i}>
        {/* slide content */}
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}</pre>
      </Section>

      {/* ── API / CONTROLLED ── */}
      <Section
        title="Controlled via API"
        subtitle="Access the Embla API to read position and listen to events"
      >
        <div className="space-y-4 px-4 sm:px-8 lg:px-12">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, i) => (
                <CarouselItem key={i}>
                  <SlideCard index={i} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <p className="text-center text-sm text-muted-foreground">
            Slide{" "}
            <span className="font-semibold text-foreground">{current}</span>
            {" "}of{" "}
            <span className="font-semibold text-foreground">{count}</span>
          </p>
        </div>
        <pre className="ds-code-snippet mt-8 whitespace-pre">{`const [api, setApi] = React.useState<CarouselApi>()
const [current, setCurrent] = React.useState(0)

React.useEffect(() => {
  if (!api) return
  setCurrent(api.selectedScrollSnap() + 1)
  api.on("select", () => setCurrent(api.selectedScrollSnap() + 1))
}, [api])

<Carousel setApi={setApi}>...</Carousel>
<p>Slide {current} of {api?.scrollSnapList().length}</p>`}</pre>
      </Section>

      {/* ── USAGE ── */}
      <Section title="Uso" subtitle="Import e props disponíveis">
        <div className="space-y-6 text-sm">

          <div>
            <p className="font-semibold mb-2">Import</p>
            <pre className="ds-code-snippet whitespace-pre">{`import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"`}</pre>
          </div>

          <div>
            <p className="font-semibold mb-3">Props — Carousel</p>
            <div className="flex flex-col gap-2 max-w-xl">
              {[
                ["orientation", `"horizontal" | "vertical"`, `"horizontal"`],
                ["opts",        "EmblaOptionsType",           "—  loop, align, dragFree, etc."],
                ["plugins",     "EmblaPluginType[]",          "—  embla plugins"],
                ["setApi",      "(api: CarouselApi) => void", "—  access the Embla instance"],
              ].map(([prop, type, def]) => (
                <div key={prop} className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
                  <p className="font-mono text-xs text-primary font-semibold">{prop}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{type}</p>
                  <p className="text-[11px] text-muted-foreground/70 mt-1">{def}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold mb-2">Acessibilidade</p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>O wrapper tem <code className="font-mono text-xs bg-black/5 px-1 py-0.5">role="region"</code> e <code className="font-mono text-xs bg-black/5 px-1 py-0.5">aria-roledescription="carousel"</code> automaticamente</li>
              <li>Cada slide tem <code className="font-mono text-xs bg-black/5 px-1 py-0.5">role="group"</code> e <code className="font-mono text-xs bg-black/5 px-1 py-0.5">aria-roledescription="slide"</code></li>
              <li>Teclado: <kbd className="font-mono text-xs bg-black/5 px-1 py-0.5">←</kbd> / <kbd className="font-mono text-xs bg-black/5 px-1 py-0.5">→</kbd> navegam entre slides quando focado</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <div className="px-1 pt-2 pb-4">
        <p className="text-xs text-muted-foreground">
          Chuv Studio Design System · Component:{" "}
          <span className="font-mono">carousel.tsx</span> ·{" "}
          <span className="font-mono">embla-carousel-react</span>
        </p>
      </div>

    </div>
  )
}
