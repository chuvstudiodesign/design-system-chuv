"use client"

import * as React from "react"
import {
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
  Layers3,
  Palette,
  Sparkles,
  TrendingUp,
  Wrench,
} from "lucide-react"

import { Badge } from "@/components/badge"
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
      className="w-full rounded-[10px] p-10 md:p-12 lg:p-20"
      style={{ backgroundColor: "#efefef" }}
    >
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        {subtitle ? (
          <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
        ) : null}
      </div>
      <Separator className="mb-8 bg-black/10" />
      {children}
    </section>
  )
}

function CodeSnippet({ code }: { code: string }) {
  return (
    <pre className="mt-6 overflow-x-auto whitespace-pre-wrap border border-black/10 bg-foreground/5 px-4 py-3 text-xs text-foreground/70">
      {code}
    </pre>
  )
}

function RowLabel({ label }: { label: string }) {
  return (
    <span className="w-24 shrink-0 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
      {label}
    </span>
  )
}

const variantOptions = [
  "default",
  "secondary",
  "outline",
  "service",
  "tool",
  "success",
  "warning",
] as const

const sizeOptions = ["sm", "default", "lg", "count"] as const

type BadgeVariant = (typeof variantOptions)[number]
type BadgeSize = (typeof sizeOptions)[number]

export default function BadgePage() {
  const [variant, setVariant] = React.useState<BadgeVariant>("service")
  const [size, setSize] = React.useState<BadgeSize>("default")
  const [withIcon, setWithIcon] = React.useState(true)
  const [dark, setDark] = React.useState(false)

  const previewLabel =
    size === "count"
      ? "12"
      : variant === "service"
        ? "Product Design"
        : variant === "tool"
          ? "Framer"
          : variant === "success"
            ? "Live"
            : variant === "warning"
              ? "In Progress"
              : "Badge"

  return (
    <div className="flex flex-col gap-3 py-3 lg:gap-4 lg:py-4 lg:pr-4">
      <div className="mb-2 px-1">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
          02 — COMPONENTS
        </p>
        <h1 className="mb-3 text-4xl font-bold text-foreground">Badge</h1>
        <p className="max-w-2xl text-base text-muted-foreground">
          Small metadata label for services, tools, stack, project stage, and
          portfolio context. Built from shadcn/ui and adapted to the Chuv
          Studio foundation, following the rule that internal section elements
          always use zero corner radius.
        </p>
      </div>

      <Section
        title="Variants"
        subtitle="Core badge variants adapted to the studio's design tokens"
      >
        <div className="space-y-5">
          {[
            {
              label: "Default",
              el: <Badge>Studio</Badge>,
              code: `<Badge>Studio</Badge>`,
            },
            {
              label: "Secondary",
              el: <Badge variant="secondary">Internal</Badge>,
              code: `<Badge variant="secondary">Internal</Badge>`,
            },
            {
              label: "Outline",
              el: <Badge variant="outline">Case Study</Badge>,
              code: `<Badge variant="outline">Case Study</Badge>`,
            },
            {
              label: "Service",
              el: (
                <Badge variant="service">
                  <BriefcaseBusiness />
                  Product Design
                </Badge>
              ),
              code: `<Badge variant="service">\n  <BriefcaseBusiness />\n  Product Design\n</Badge>`,
            },
            {
              label: "Tool",
              el: (
                <Badge variant="tool">
                  <Palette />
                  Figma
                </Badge>
              ),
              code: `<Badge variant="tool">\n  <Figma />\n  Figma\n</Badge>`,
            },
            {
              label: "Success",
              el: (
                <Badge variant="success">
                  <BadgeCheck />
                  Live
                </Badge>
              ),
              code: `<Badge variant="success">\n  <BadgeCheck />\n  Live\n</Badge>`,
            },
            {
              label: "Warning",
              el: (
                <Badge variant="warning">
                  <Sparkles />
                  In Progress
                </Badge>
              ),
              code: `<Badge variant="warning">\n  <Sparkles />\n  In Progress\n</Badge>`,
            },
          ].map(({ label, el, code }) => (
            <div key={label}>
              <div className="flex items-center gap-6">
                <RowLabel label={label} />
                <div className="flex flex-wrap gap-3">{el}</div>
              </div>
              <CodeSnippet code={code} />
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Studio Contexts"
        subtitle="Examples that make sense for a design studio working with products and tech"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Services
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="service">Brand System</Badge>
              <Badge variant="service">Product Design</Badge>
              <Badge variant="service">UX Audit</Badge>
            </div>
          </div>

          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Tools & Stack
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="tool">
                <Palette />
                Figma
              </Badge>
              <Badge variant="tool">
                <Code2 />
                Next.js
              </Badge>
              <Badge variant="tool">
                <Wrench />
                shadcn/ui
              </Badge>
            </div>
          </div>

          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Case Metadata
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline">SaaS</Badge>
              <Badge variant="success">Delivered</Badge>
              <Badge size="count">24</Badge>
            </div>
          </div>
        </div>

        <CodeSnippet
          code={`<Badge variant="service">Product Design</Badge>
<Badge variant="tool">
  <Code2 />
  Next.js
</Badge>
<Badge variant="success">Delivered</Badge>`}
        />
      </Section>

      <Section
        title="Sizes & Formats"
        subtitle="Compact labels, default metadata, highlighted badges, and numeric counters"
      >
        <div className="space-y-5">
          {[
            {
              label: "SM",
              el: <Badge size="sm" variant="service">UI SYSTEM</Badge>,
              code: `<Badge size="sm" variant="service">UI SYSTEM</Badge>`,
            },
            {
              label: "Default",
              el: <Badge variant="tool">React</Badge>,
              code: `<Badge variant="tool">React</Badge>`,
            },
            {
              label: "LG",
              el: (
                <Badge size="lg" variant="success">
                  <TrendingUp />
                  +43% conversion
                </Badge>
              ),
              code: `<Badge size="lg" variant="success">\n  <TrendingUp />\n  +43% conversion\n</Badge>`,
            },
            {
              label: "Count",
              el: <Badge size="count">12</Badge>,
              code: `<Badge size="count">12</Badge>`,
            },
          ].map(({ label, el, code }) => (
            <div key={label}>
              <div className="flex items-center gap-6">
                <RowLabel label={label} />
                <div className="flex flex-wrap gap-3">{el}</div>
              </div>
              <CodeSnippet code={code} />
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Interactive Demo"
        subtitle="Preview variant, size, icon usage, and dark mode"
      >
        <div className="space-y-6">
          <div className="grid gap-4 rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Variant
              </p>
              <div className="flex flex-wrap gap-2">
                {variantOptions.map((option) => (
                  <Button
                    key={option}
                    variant={variant === option ? "default" : "outline"}
                    size="xs"
                    onClick={() => setVariant(option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Size
              </p>
              <div className="flex flex-wrap gap-2">
                {sizeOptions.map((option) => (
                  <Button
                    key={option}
                    variant={size === option ? "default" : "outline"}
                    size="xs"
                    onClick={() => setSize(option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                variant={withIcon ? "default" : "outline"}
                size="xs"
                onClick={() => setWithIcon((current) => !current)}
              >
                Icon
              </Button>
              <Button
                variant={dark ? "default" : "outline"}
                size="xs"
                onClick={() => setDark((current) => !current)}
              >
                Dark Preview
              </Button>
            </div>
          </div>

          <div className={dark ? "dark" : undefined}>
            <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] dark:border-white/10 dark:bg-[#1a1a1a]">
              <div className="flex min-h-24 items-center justify-center">
                <Badge variant={variant} size={size}>
                  {withIcon && size !== "count" ? <Layers3 /> : null}
                  {previewLabel}
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <CodeSnippet
          code={`<Badge variant="service" size="default">
  <BriefcaseBusiness />
  Product Design
</Badge>`}
        />
      </Section>

      <Section title="Usage" subtitle="Import, props, examples, and accessibility notes">
        <div className="space-y-6 text-sm">
          <div>
            <p className="mb-2 font-semibold">Import</p>
            <pre className="overflow-x-auto whitespace-pre border border-black/10 bg-foreground/5 px-4 py-3 text-xs text-foreground/70">{`import { Badge } from "@/components/badge"`}</pre>
          </div>

          <div>
            <p className="mb-3 font-semibold">Props</p>
            <div className="flex flex-col gap-2 max-w-2xl">
              {[
                ["variant", `"default" | "secondary" | "outline" | "service" | "tool" | "success" | "warning"`, `"default"`],
                ["size", `"sm" | "default" | "lg" | "count"`, `"default"`],
                ["children", "React.ReactNode", "Badge content"],
                ["className", "string", "Optional visual overrides"],
              ].map(([prop, type, def]) => (
                <div
                  key={prop}
                  className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]"
                >
                  <p className="font-mono text-xs font-semibold text-primary">{prop}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{type}</p>
                  <p className="mt-1 text-[11px] text-muted-foreground/70">{def}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 font-semibold">Common Patterns</p>
            <CodeSnippet
              code={`<Badge variant="tool">
  <Code2 />
  Next.js
</Badge>

<Badge variant="service">UX Audit</Badge>

<Badge size="count">12</Badge>`}
            />
          </div>

          <div>
            <p className="mb-2 font-semibold">Accessibility</p>
            <ul className="space-y-1 text-muted-foreground">
              <li>Badges are non-interactive by default and should be used as metadata labels.</li>
              <li>If a badge becomes clickable, render it with the correct semantic element such as a button or link.</li>
              <li>Do not rely on color alone for status; pair it with meaningful text like “Live” or “In Progress”.</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
