"use client"

import * as React from "react"
import {
  CircleHelp,
  Code2,
  Info,
  Layers3,
  MessageSquareMore,
  Wrench,
} from "lucide-react"

import { Typography } from "@/components/typography"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

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
        <Typography variant="h3">{title}</Typography>
        {subtitle ? (
          <Typography variant="muted" className="mt-1">
            {subtitle}
          </Typography>
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

function InlineTrigger({
  children,
  active = false,
}: {
  children: React.ReactNode
  active?: boolean
}) {
  return (
    <span
      className={[
        "inline-flex items-center gap-2 rounded-none border px-4 py-3 text-sm font-medium transition-colors",
        active
          ? "border-black bg-black text-white"
          : "border-white bg-[#f9f9f9] text-foreground",
      ].join(" ")}
    >
      {children}
    </span>
  )
}

const sideOptions = ["top", "right", "bottom", "left"] as const
const alignOptions = ["start", "center", "end"] as const
const toneOptions = ["info", "tool", "note"] as const

type SideOption = (typeof sideOptions)[number]
type AlignOption = (typeof alignOptions)[number]
type ToneOption = (typeof toneOptions)[number]

function TooltipText({ tone }: { tone: ToneOption }) {
  const config = {
    info: {
      icon: <Info className="size-3.5 shrink-0" />,
      text: "Use tooltips for short guidance, never for essential content.",
    },
    tool: {
      icon: <Code2 className="size-3.5 shrink-0" />,
      text: "This stack uses Next.js, shadcn/ui, and structured UI tokens.",
    },
    note: {
      icon: <MessageSquareMore className="size-3.5 shrink-0" />,
      text: "Helpful for explaining status labels, icons, or subtle interactions.",
    },
  }[tone]

  return (
    <span className="inline-flex items-start gap-2">
      {config.icon}
      <span>{config.text}</span>
    </span>
  )
}

export default function TooltipPage() {
  const [side, setSide] = React.useState<SideOption>("top")
  const [align, setAlign] = React.useState<AlignOption>("center")
  const [tone, setTone] = React.useState<ToneOption>("info")
  const [delayed, setDelayed] = React.useState(false)

  return (
    <TooltipProvider delay={delayed ? 500 : 0}>
      <div className="ds-page">
        <div className="ds-page-header">
          <Typography variant="label-m" className="mb-2 text-primary">
            02 — COMPONENTS
          </Typography>
          <Typography variant="h1" className="mb-3">
            Tooltip
          </Typography>
          <Typography variant="body-m" className="max-w-2xl text-muted-foreground">
            Compact helper component for microcopy, interface clarification, and
            subtle product guidance. Built from shadcn/ui and adapted to the
            Chuv Studio foundation with straight edges and consistent type.
          </Typography>
        </div>

        <Section
          title="Use Cases"
          subtitle="Short contextual hints that support an action without competing with the main content"
        >
          <div className="space-y-6">
            <div>
              <div className="ds-row">
                <RowLabel label="Button" />
                <div className="w-full">
                  <Tooltip>
                    <TooltipTrigger>
                      <InlineTrigger active>Hover action</InlineTrigger>
                    </TooltipTrigger>
                    <TooltipContent>
                      <TooltipText tone="info" />
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
              <CodeSnippet
                code={`<Tooltip>
  <TooltipTrigger>Hover action</TooltipTrigger>
  <TooltipContent>
    <p>Add to library</p>
  </TooltipContent>
</Tooltip>`}
              />
            </div>

            <div>
              <div className="ds-row">
                <RowLabel label="Icon" />
                <div className="w-full">
                  <Tooltip>
                    <TooltipTrigger className="inline-flex size-11 items-center justify-center rounded-none border border-white bg-[#f9f9f9] text-foreground">
                      <CircleHelp className="size-4" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <TooltipText tone="note" />
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
              <CodeSnippet
                code={`<TooltipTrigger>
  <CircleHelp />
</TooltipTrigger>`}
              />
            </div>
          </div>
        </Section>

        <Section
          title="Studio Contexts"
          subtitle="Patterns that make sense for portfolio sections, service descriptions, and tool explanations"
        >
          <div className="ds-card-grid-3">
            <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
              <Typography variant="label-m" className="mb-4 text-muted-foreground">
                Portfolio Hint
              </Typography>
              <Tooltip>
                <TooltipTrigger className="inline-flex size-11 items-center justify-center rounded-none border border-white bg-white text-foreground">
                  <Layers3 className="size-4" />
                </TooltipTrigger>
                <TooltipContent>
                  <TooltipText tone="info" />
                </TooltipContent>
              </Tooltip>
            </div>

            <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
              <Typography variant="label-m" className="mb-4 text-muted-foreground">
                Tool Stack
              </Typography>
              <Tooltip>
                <TooltipTrigger className="inline-flex size-11 items-center justify-center rounded-none border border-white bg-white text-foreground">
                  <Wrench className="size-4" />
                </TooltipTrigger>
                <TooltipContent>
                  <TooltipText tone="tool" />
                </TooltipContent>
              </Tooltip>
            </div>

            <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
              <Typography variant="label-m" className="mb-4 text-muted-foreground">
                Service Clarifier
              </Typography>
              <Tooltip>
                <TooltipTrigger className="inline-flex size-11 items-center justify-center rounded-none border border-white bg-white text-foreground">
                  <Info className="size-4" />
                </TooltipTrigger>
                <TooltipContent>
                  <TooltipText tone="note" />
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          <CodeSnippet
            code={`<TooltipContent>
  <TooltipText tone="tool" />
</TooltipContent>`}
          />
        </Section>

        <Section
          title="Placements"
          subtitle="Use side and alignment intentionally based on where the trigger sits inside the section"
        >
          <div className="space-y-6">
            {[
              { label: "Top", side: "top" as const, align: "center" as const },
              { label: "Right", side: "right" as const, align: "start" as const },
              { label: "Bottom", side: "bottom" as const, align: "end" as const },
            ].map((item) => (
              <div key={item.label}>
                <div className="ds-row">
                  <RowLabel label={item.label} />
                  <div className="w-full">
                    <Tooltip>
                      <TooltipTrigger>
                        <InlineTrigger>{item.label} tooltip</InlineTrigger>
                      </TooltipTrigger>
                      <TooltipContent side={item.side} align={item.align}>
                        <TooltipText tone="info" />
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
                <CodeSnippet
                  code={`<TooltipContent side="${item.side}" align="${item.align}">
  ...
</TooltipContent>`}
                />
              </div>
            ))}
          </div>
        </Section>

        <Section
          title="Interactive Demo"
          subtitle="Adjust tooltip message tone, placement, alignment, and open delay"
        >
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <div className="ds-interactive-grid">
              <div className="space-y-6">
                <div>
                  <Typography variant="label-m" className="mb-3 text-muted-foreground">
                    Message Tone
                  </Typography>
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
                  <Typography variant="label-m" className="mb-3 text-muted-foreground">
                    Side
                  </Typography>
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
                  <Typography variant="label-m" className="mb-3 text-muted-foreground">
                    Align
                  </Typography>
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
                  <Typography variant="label-m" className="mb-3 text-muted-foreground">
                    Delay
                  </Typography>
                  <Button
                    variant={delayed ? "default" : "outline"}
                    size="sm"
                    onClick={() => setDelayed((current) => !current)}
                  >
                    {delayed ? "Delayed Open" : "Instant Open"}
                  </Button>
                </div>
              </div>

              <div className="flex min-h-[280px] items-center justify-center border border-white bg-white p-5 sm:min-h-[320px] sm:p-8">
                <Tooltip>
                  <TooltipTrigger className="inline-flex size-14 items-center justify-center rounded-none border border-black bg-black text-white">
                    <CircleHelp className="size-5" />
                  </TooltipTrigger>
                  <TooltipContent side={side} align={align} sideOffset={10}>
                    <TooltipText tone={tone} />
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </div>
        </Section>

        <Section
          title="Usage"
          subtitle="Import, key props, and good practices"
        >
          <div className="space-y-6">
            <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
              <Typography variant="label-m" className="text-muted-foreground">
                Import
              </Typography>
              <CodeSnippet
                code={`import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip"`}
              />
            </div>

            <div className="ds-card-grid-2">
              {[
                {
                  title: "Key Props",
                  body: "Use side, align, sideOffset, and delay to control position and timing.",
                },
                {
                  title: "When To Use",
                  body: "Tooltips are best for brief clarifications, labels for icons, and supplementary hints.",
                },
                {
                  title: "When Not To Use",
                  body: "Do not place critical information exclusively inside a tooltip. The UI should still work without it.",
                },
                {
                  title: "Accessibility Notes",
                  body: "Tooltip is available on hover and focus. Keep trigger elements meaningful and ensure keyboard users can reach them.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]"
                >
                  <Typography variant="h4">{item.title}</Typography>
                  <Typography variant="body-s" className="mt-4 text-muted-foreground">
                    {item.body}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>
    </TooltipProvider>
  )
}
