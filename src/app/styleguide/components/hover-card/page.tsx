"use client"

import * as React from "react"
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Layers3,
  Sparkles,
  Wrench,
} from "lucide-react"

import { Badge } from "@/components/badge"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

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
        {subtitle ? (
          <p className="ds-section-subtitle">{subtitle}</p>
        ) : null}
      </div>
      <Separator className="mb-8 bg-black/10" />
      {children}
    </section>
  )
}

function CodeSnippet({ code }: { code: string }) {
  return (
    <pre className="ds-code-snippet">
      {code}
    </pre>
  )
}

function RowLabel({ label }: { label: string }) {
  return (
    <span className="ds-row-label">
      {label}
    </span>
  )
}

function TriggerLink({
  children,
  subtle = false,
}: {
  children: React.ReactNode
  subtle?: boolean
}) {
  return (
    <span
      className={[
        "inline-flex items-center gap-2 rounded-none border px-4 py-3 text-sm font-medium transition-colors",
        subtle
          ? "border-white bg-[#f9f9f9] text-foreground"
          : "border-black bg-black text-white hover:bg-black/85",
      ].join(" ")}
    >
      {children}
      <ArrowUpRight className="size-4" />
    </span>
  )
}

type PreviewTone = "case" | "service" | "tool"

function PreviewPanel({
  tone,
  dark = false,
}: {
  tone: PreviewTone
  dark?: boolean
}) {
  const config = {
    case: {
      eyebrow: "Case Study",
      title: "Fintech Growth Platform",
      body: "Quick context preview for portfolio cards, hero links, and project listings.",
      badge: <Badge variant="outline">SaaS Platform</Badge>,
      icon: <Layers3 className="size-4" />,
    },
    service: {
      eyebrow: "Service",
      title: "Product Design Sprint",
      body: "Use hover previews to explain scope, deliverables, and the role of a service offer.",
      badge: <Badge variant="service">Discovery + UI System</Badge>,
      icon: <BriefcaseBusiness className="size-4" />,
    },
    tool: {
      eyebrow: "Tool Stack",
      title: "shadcn/ui + Next.js",
      body: "Helpful for stack references, internal tooltips, and implementation shortcuts.",
      badge: <Badge variant="tool">Production UI</Badge>,
      icon: <Code2 className="size-4" />,
    },
  }[tone]

  return (
    <div
      className={[
        "rounded-none border p-[var(--card-padding)]",
        dark ? "border-black bg-[#111111] text-white" : "border-white bg-[#f9f9f9] text-foreground",
      ].join(" ")}
    >
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p
            className={[
              "text-[10px] font-semibold uppercase tracking-[0.16em]",
              dark ? "text-white/65" : "text-muted-foreground",
            ].join(" ")}
          >
            {config.eyebrow}
          </p>
          <h3 className="mt-2 text-lg font-semibold">{config.title}</h3>
        </div>
        <div
          className={[
            "flex size-10 items-center justify-center rounded-none border",
            dark ? "border-white/15 bg-white/5" : "border-white bg-white",
          ].join(" ")}
        >
          {config.icon}
        </div>
      </div>
      <p
        className={[
          "text-sm leading-6",
          dark ? "text-white/72" : "text-muted-foreground",
        ].join(" ")}
      >
        {config.body}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">{config.badge}</div>
    </div>
  )
}

const sideOptions = ["top", "right", "bottom", "left"] as const
const alignOptions = ["start", "center", "end"] as const
const toneOptions = ["case", "service", "tool"] as const

type SideOption = (typeof sideOptions)[number]
type AlignOption = (typeof alignOptions)[number]
type ToneOption = (typeof toneOptions)[number]

export default function HoverCardPage() {
  const [side, setSide] = React.useState<SideOption>("bottom")
  const [align, setAlign] = React.useState<AlignOption>("center")
  const [tone, setTone] = React.useState<ToneOption>("case")
  const [darkPreview, setDarkPreview] = React.useState(false)

  return (
    <div className="ds-page">
      <div className="ds-page-header">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
          02 — COMPONENTS
        </p>
        <h1 className="ds-page-title">
          Hover Card
        </h1>
        <p className="ds-page-description">
          Context preview component for case links, service descriptions, and
          stack references. Built from shadcn/ui and adapted to the Chuv Studio
          foundation, keeping section internals straight-edged and card-based.
        </p>
      </div>

      <Section
        title="Use Cases"
        subtitle="Compact triggers that reveal extra context without leaving the current section"
      >
        <div className="space-y-6">
          <div>
            <div className="ds-row">
              <RowLabel label="Case" />
              <div className="w-full">
                <HoverCard>
                  <HoverCardTrigger href="#">
                    <TriggerLink>View case preview</TriggerLink>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-[min(30rem,calc(100vw-2rem))] p-0">
                    <PreviewPanel tone="case" />
                  </HoverCardContent>
                </HoverCard>
              </div>
            </div>
            <CodeSnippet
              code={`<HoverCard>
  <HoverCardTrigger href="#">View case preview</HoverCardTrigger>
  <HoverCardContent className="w-[min(30rem,calc(100vw-2rem))] p-0">
    <PreviewPanel tone="case" />
  </HoverCardContent>
</HoverCard>`}
            />
          </div>

          <div>
            <div className="ds-row">
              <RowLabel label="Service" />
              <div className="w-full">
                <HoverCard>
                  <HoverCardTrigger href="#">
                    <TriggerLink subtle>Open service scope</TriggerLink>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-[min(30rem,calc(100vw-2rem))] p-0">
                    <PreviewPanel tone="service" />
                  </HoverCardContent>
                </HoverCard>
              </div>
            </div>
            <CodeSnippet
              code={`<HoverCardTrigger href="#">Open service scope</HoverCardTrigger>`}
            />
          </div>
        </div>
      </Section>

      <Section
        title="Studio Contexts"
        subtitle="Patterns that make sense for a design and tech studio workflow"
      >
        <div className="ds-card-grid-3">
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Portfolio Link
            </p>
            <HoverCard>
              <HoverCardTrigger href="#">
                <TriggerLink>Launch story</TriggerLink>
              </HoverCardTrigger>
              <HoverCardContent className="w-[min(28rem,calc(100vw-2rem))] p-0">
                <PreviewPanel tone="case" />
              </HoverCardContent>
            </HoverCard>
          </div>

          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Service Detail
            </p>
            <HoverCard>
              <HoverCardTrigger href="#">
                <TriggerLink subtle>Product design sprint</TriggerLink>
              </HoverCardTrigger>
              <HoverCardContent className="w-[min(28rem,calc(100vw-2rem))] p-0">
                <PreviewPanel tone="service" />
              </HoverCardContent>
            </HoverCard>
          </div>

          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Tool Reference
            </p>
            <HoverCard>
              <HoverCardTrigger href="#">
                <TriggerLink subtle>shadcn/ui stack</TriggerLink>
              </HoverCardTrigger>
              <HoverCardContent className="w-[min(28rem,calc(100vw-2rem))] p-0">
                <PreviewPanel tone="tool" />
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>

        <CodeSnippet
          code={`<HoverCardContent className="w-[min(28rem,calc(100vw-2rem))] p-0">
  <PreviewPanel tone="tool" />
</HoverCardContent>`}
        />
      </Section>

      <Section
        title="Placements"
        subtitle="The popup can be positioned based on layout density and surrounding content"
      >
        <div className="space-y-6">
          {[
            {
              label: "Top",
              side: "top" as const,
              align: "start" as const,
              tone: "case" as const,
            },
            {
              label: "Right",
              side: "right" as const,
              align: "center" as const,
              tone: "service" as const,
            },
            {
              label: "Bottom",
              side: "bottom" as const,
              align: "end" as const,
              tone: "tool" as const,
            },
          ].map((item) => (
            <div key={item.label}>
              <div className="ds-row">
                <RowLabel label={item.label} />
                <div className="w-full">
                  <HoverCard>
                    <HoverCardTrigger href="#">
                      <TriggerLink subtle>
                        {item.label} aligned preview
                      </TriggerLink>
                    </HoverCardTrigger>
                    <HoverCardContent
                      align={item.align}
                      side={item.side}
                      className="w-[min(28rem,calc(100vw-2rem))] p-0"
                    >
                      <PreviewPanel tone={item.tone} />
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </div>
              <CodeSnippet
                code={`<HoverCardContent side="${item.side}" align="${item.align}">
  ...
</HoverCardContent>`}
              />
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Interactive Demo"
        subtitle="Adjust the preview type, popup position, and light or dark visual treatment"
      >
        <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
          <div className="ds-interactive-grid">
            <div className="space-y-6">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Preview Type
                </p>
                <div className="flex flex-wrap gap-2">
                  {toneOptions.map((option) => (
                    <Button
                      key={option}
                      variant={tone === option ? "default" : "outline"}
                      size="sm"
                      onClick={() => setTone(option)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Side
                </p>
                <div className="flex flex-wrap gap-2">
                  {sideOptions.map((option) => (
                    <Button
                      key={option}
                      variant={side === option ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSide(option)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Align
                </p>
                <div className="flex flex-wrap gap-2">
                  {alignOptions.map((option) => (
                    <Button
                      key={option}
                      variant={align === option ? "default" : "outline"}
                      size="sm"
                      onClick={() => setAlign(option)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Preview Tone
                </p>
                <Button
                  variant={darkPreview ? "default" : "outline"}
                  size="sm"
                  onClick={() => setDarkPreview((current) => !current)}
                >
                  {darkPreview ? <Sparkles /> : <Wrench />}
                  {darkPreview ? "Dark Preview" : "Light Preview"}
                </Button>
              </div>
            </div>

            <div
              className={[
                "flex min-h-[280px] items-center justify-center border border-white p-[var(--card-padding)] sm:min-h-[320px]",
                darkPreview ? "bg-[#111111]" : "bg-white",
              ].join(" ")}
            >
              <HoverCard>
                <HoverCardTrigger href="#">
                  <TriggerLink subtle>
                    Hover to inspect the {tone} preview
                  </TriggerLink>
                </HoverCardTrigger>
                <HoverCardContent
                  side={side}
                  align={align}
                  sideOffset={14}
                  className="w-[min(30rem,calc(100vw-2rem))] p-0"
                >
                  <PreviewPanel tone={tone} dark={darkPreview} />
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Usage"
        subtitle="Import, key props, and accessibility behavior"
      >
        <div className="space-y-6">
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Import
            </p>
            <CodeSnippet
              code={`import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card"`}
            />
          </div>

          <div className="ds-card-grid-2">
            {[
              {
                name: "side",
                type: `"top" | "right" | "bottom" | "left"`,
                detail: `Default handled by the component. Controls where the preview appears.`,
              },
              {
                name: "align",
                type: `"start" | "center" | "end"`,
                detail: `Default is "center". Useful when the trigger sits close to an edge.`,
              },
              {
                name: "sideOffset",
                type: "number",
                detail: "Distance between trigger and popup. Good for denser layouts.",
              },
              {
                name: "delay",
                type: "number",
                detail: "Open delay on the trigger. Helpful when the interface has many hover points.",
              },
            ].map((prop) => (
              <div
                key={prop.name}
                className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]"
              >
                <p className="text-sm font-semibold text-foreground">
                  {prop.name}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {prop.type}
                </p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {prop.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <p className="text-sm font-semibold text-foreground">
              Accessibility Notes
            </p>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Hover Card also responds to focus, which helps keyboard users
              inspect the same contextual information. Keep the trigger copy
              explicit, avoid critical-only hover content, and make sure the
              destination still works without opening the preview first.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}
