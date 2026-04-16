"use client"

import * as React from "react"
import {
  BriefcaseBusiness,
  Code2,
  Layers3,
  Rocket,
  Sparkles,
} from "lucide-react"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
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

const variantOptions = ["default", "line"] as const
const orientationOptions = ["horizontal", "vertical"] as const

type TabsVariant = (typeof variantOptions)[number]
type TabsOrientation = (typeof orientationOptions)[number]

export default function TabsPage() {
  const [variant, setVariant] = React.useState<TabsVariant>("default")
  const [orientation, setOrientation] =
    React.useState<TabsOrientation>("horizontal")
  const [withIcons, setWithIcons] = React.useState(true)
  const [dark, setDark] = React.useState(false)

  return (
    <div className="ds-page">
      <div className="ds-page-header">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
          02 — COMPONENTS
        </p>
        <h1 className="ds-page-title">Tabs</h1>
        <p className="ds-page-description">
          Content switcher for portfolio narratives, service breakdowns, stack
          views, and project documentation. Built from shadcn/ui and adapted to
          the Chuv Studio section rules with zero corner radius on all internal
          elements.
        </p>
      </div>

      <Section
        title="Variants"
        subtitle="Two navigation styles adapted to the studio foundation"
      >
        <div className="space-y-6">
          <div>
            <div className="ds-row">
              <RowLabel label="Default" />
              <Tabs defaultValue="overview" className="w-full max-w-2xl">
                <TabsList variant="default">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="process">Process</TabsTrigger>
                  <TabsTrigger value="result">Result</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-4">
                  <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
                    High-level view of the project, scope, and business context.
                  </div>
                </TabsContent>
                <TabsContent value="process" className="mt-4">
                  <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
                    Discovery, UX, flows, interface decisions, and handoff.
                  </div>
                </TabsContent>
                <TabsContent value="result" className="mt-4">
                  <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
                    Metrics, qualitative gains, and launch outcomes.
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            <CodeSnippet
              code={`<Tabs defaultValue="overview">
  <TabsList variant="default">
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="process">Process</TabsTrigger>
    <TabsTrigger value="result">Result</TabsTrigger>
  </TabsList>
</Tabs>`}
            />
          </div>

          <div>
            <div className="ds-row">
              <RowLabel label="Line" />
              <Tabs defaultValue="design" className="w-full max-w-2xl">
                <TabsList variant="line">
                  <TabsTrigger value="design">Design</TabsTrigger>
                  <TabsTrigger value="dev">Dev</TabsTrigger>
                  <TabsTrigger value="handoff">Handoff</TabsTrigger>
                </TabsList>
                <TabsContent value="design" className="mt-4">
                  <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
                    Best for lighter navigation patterns inside a dense section.
                  </div>
                </TabsContent>
                <TabsContent value="dev" className="mt-4">
                  <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
                    Keeps emphasis on the content panel rather than the tab rail.
                  </div>
                </TabsContent>
                <TabsContent value="handoff" className="mt-4">
                  <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
                    Good for line-based interfaces, detail pages, and docs.
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            <CodeSnippet
              code={`<TabsList variant="line">
  <TabsTrigger value="design">Design</TabsTrigger>
  <TabsTrigger value="dev">Dev</TabsTrigger>
  <TabsTrigger value="handoff">Handoff</TabsTrigger>
</TabsList>`}
            />
          </div>
        </div>
      </Section>

      <Section
        title="Studio Contexts"
        subtitle="Examples that fit portfolio, services, and stack storytelling"
      >
        <div className="ds-card-grid-3">
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Case Study
            </p>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList variant="line">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="process">Process</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-4 text-sm text-muted-foreground">
                Context, challenge, and strategic framing.
              </TabsContent>
              <TabsContent value="process" className="mt-4 text-sm text-muted-foreground">
                Research, flows, interface, and validation.
              </TabsContent>
            </Tabs>
          </div>

          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Services
            </p>
            <Tabs defaultValue="brand" className="w-full">
              <TabsList variant="default">
                <TabsTrigger value="brand">Brand</TabsTrigger>
                <TabsTrigger value="product">Product</TabsTrigger>
              </TabsList>
              <TabsContent value="brand" className="mt-4 text-sm text-muted-foreground">
                Identity systems, tone, and visual consistency.
              </TabsContent>
              <TabsContent value="product" className="mt-4 text-sm text-muted-foreground">
                Product UX, interfaces, systems, and delivery.
              </TabsContent>
            </Tabs>
          </div>

          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Tool Stack
            </p>
            <Tabs defaultValue="design" className="w-full">
              <TabsList variant="line">
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="build">Build</TabsTrigger>
              </TabsList>
              <TabsContent value="design" className="mt-4 text-sm text-muted-foreground">
                Figma, design systems, flows, and prototypes.
              </TabsContent>
              <TabsContent value="build" className="mt-4 text-sm text-muted-foreground">
                Next.js, shadcn/ui, docs, and implementation.
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <CodeSnippet
          code={`<Tabs defaultValue="overview">
  <TabsList variant="line">
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="process">Process</TabsTrigger>
  </TabsList>
</Tabs>`}
        />
      </Section>

      <Section
        title="States & Orientation"
        subtitle="Horizontal and vertical patterns with icons and disabled states"
      >
        <div className="space-y-6">
          <div>
            <div className="ds-row">
              <RowLabel label="Icons" />
              <Tabs defaultValue="service" className="w-full max-w-2xl">
                <TabsList variant="default">
                  <TabsTrigger value="service">
                    <BriefcaseBusiness />
                    Service
                  </TabsTrigger>
                  <TabsTrigger value="stack">
                    <Code2 />
                    Stack
                  </TabsTrigger>
                  <TabsTrigger value="launch">
                    <Rocket />
                    Launch
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="service" className="mt-4">
                  <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
                    Use icons when the tab labels map to different categories fast.
                  </div>
                </TabsContent>
                <TabsContent value="stack" className="mt-4">
                  <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
                    Great for tooling, technical sections, or internal systems.
                  </div>
                </TabsContent>
                <TabsContent value="launch" className="mt-4">
                  <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
                    Keep labels short so the icon remains supportive, not dominant.
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            <CodeSnippet
              code={`<TabsTrigger value="stack">
  <Code2 />
  Stack
</TabsTrigger>`}
            />
          </div>

          <div>
            <div className="ds-row">
              <RowLabel label="Disabled" />
              <Tabs defaultValue="live" className="w-full max-w-2xl">
                <TabsList variant="line">
                  <TabsTrigger value="live">Live</TabsTrigger>
                  <TabsTrigger value="draft">Draft</TabsTrigger>
                  <TabsTrigger value="coming-soon" disabled>
                    Coming Soon
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="live" className="mt-4">
                  <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
                    Disabled tabs are useful when a section exists in the roadmap
                    but is not yet ready to navigate.
                  </div>
                </TabsContent>
                <TabsContent value="draft" className="mt-4">
                  <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
                    Keep disabled labels visible only when they support product understanding.
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            <CodeSnippet
              code={`<TabsTrigger value="coming-soon" disabled>
  Coming Soon
</TabsTrigger>`}
            />
          </div>

          <div>
            <div className="ds-row">
              <RowLabel label="Vertical" />
              <Tabs
                defaultValue="research"
                orientation="vertical"
                className="w-full max-w-3xl"
              >
                <TabsList variant="line" className="min-w-44">
                  <TabsTrigger value="research">Research</TabsTrigger>
                  <TabsTrigger value="interface">Interface</TabsTrigger>
                  <TabsTrigger value="system">System</TabsTrigger>
                </TabsList>
                <TabsContent value="research">
                  <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
                    Vertical tabs work well when content is dense and the navigation
                    needs to stay persistent beside the panel.
                  </div>
                </TabsContent>
                <TabsContent value="interface">
                  <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
                    Ideal for documentation, long case studies, and internal systems.
                  </div>
                </TabsContent>
                <TabsContent value="system">
                  <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
                    The navigation rail stays straight and aligned to the Chuv foundation.
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            <CodeSnippet
              code={`<Tabs orientation="vertical" defaultValue="research">
  <TabsList variant="line">
    <TabsTrigger value="research">Research</TabsTrigger>
    <TabsTrigger value="interface">Interface</TabsTrigger>
    <TabsTrigger value="system">System</TabsTrigger>
  </TabsList>
</Tabs>`}
            />
          </div>
        </div>
      </Section>

      <Section
        title="Interactive Demo"
        subtitle="Preview variant, orientation, icon usage, and dark mode"
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
                Orientation
              </p>
              <div className="flex flex-wrap gap-2">
                {orientationOptions.map((option) => (
                  <Button
                    key={option}
                    variant={orientation === option ? "default" : "outline"}
                    size="xs"
                    onClick={() => setOrientation(option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                variant={withIcons ? "default" : "outline"}
                size="xs"
                onClick={() => setWithIcons((current) => !current)}
              >
                Icons
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
              <Tabs
                defaultValue="overview"
                orientation={orientation}
                className={orientation === "vertical" ? "w-full max-w-3xl" : "w-full"}
              >
                <TabsList variant={variant} className={orientation === "vertical" ? "min-w-44" : undefined}>
                  <TabsTrigger value="overview">
                    {withIcons ? <Layers3 /> : null}
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="details">
                    {withIcons ? <Sparkles /> : null}
                    Details
                  </TabsTrigger>
                  <TabsTrigger value="handoff">
                    {withIcons ? <Code2 /> : null}
                    Handoff
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className={orientation === "horizontal" ? "mt-4" : undefined}>
                  <div className="rounded-none border border-white bg-background p-[var(--card-padding)] dark:border-white/10 dark:bg-[#121212]">
                    Use tabs to separate narratives without fragmenting the section.
                  </div>
                </TabsContent>
                <TabsContent value="details" className={orientation === "horizontal" ? "mt-4" : undefined}>
                  <div className="rounded-none border border-white bg-background p-[var(--card-padding)] dark:border-white/10 dark:bg-[#121212]">
                    Keep internal surfaces straight and aligned to the foundation.
                  </div>
                </TabsContent>
                <TabsContent value="handoff" className={orientation === "horizontal" ? "mt-4" : undefined}>
                  <div className="rounded-none border border-white bg-background p-[var(--card-padding)] dark:border-white/10 dark:bg-[#121212]">
                    The panel can behave as direct content or as a card-like block.
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>

        <CodeSnippet
          code={`<Tabs defaultValue="overview">
  <TabsList variant="default">
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="details">Details</TabsTrigger>
    <TabsTrigger value="handoff">Handoff</TabsTrigger>
  </TabsList>
</Tabs>`}
        />
      </Section>

      <Section title="Usage" subtitle="Import, props, and accessibility notes">
        <div className="space-y-6 text-sm">
          <div>
            <p className="mb-2 font-semibold">Import</p>
            <pre className="overflow-x-auto whitespace-pre border border-black/10 bg-foreground/5 px-4 py-3 text-xs text-foreground/70">{`import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs"`}</pre>
          </div>

          <div>
            <p className="mb-3 font-semibold">Props</p>
            <div className="flex flex-col gap-2 max-w-2xl">
              {[
                ["Tabs.defaultValue", "string", "Initial active tab"],
                ["Tabs.orientation", `"horizontal" | "vertical"`, `"horizontal"`],
                ["TabsList.variant", `"default" | "line"`, `"default"`],
                ["TabsTrigger.value", "string", "Associates trigger with content panel"],
                ["TabsTrigger.disabled", "boolean", "Disables navigation for a tab"],
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
            <p className="mb-2 font-semibold">Accessibility</p>
            <ul className="space-y-1 text-muted-foreground">
              <li>Tabs should organize related content panels, not unrelated navigation destinations.</li>
              <li>Keep labels short and distinct so keyboard navigation stays clear.</li>
              <li>Disabled tabs should be used sparingly and only when the unavailable state is meaningful to the user.</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
