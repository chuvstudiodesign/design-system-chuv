"use client"

import * as React from "react"
import { AlignLeft, AlignCenter, AlignRight, Type } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Typography } from "@/components/typography"
import { cn } from "@/lib/utils"

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

const typeScale = [
  {
    label: "Display XL",
    variant: "display-xl" as const,
    sample: "Creative Systems For Digital Products",
  },
  {
    label: "Display L",
    variant: "display-l" as const,
    sample: "Design Language With Strategic Weight",
  },
  {
    label: "Heading H1",
    variant: "h1" as const,
    sample: "Product Storytelling For Interfaces",
  },
  {
    label: "Heading H2",
    variant: "h2" as const,
    sample: "Consistent Typography Drives Clarity",
  },
  {
    label: "Heading H3",
    variant: "h3" as const,
    sample: "Foundational Hierarchy",
  },
  {
    label: "Heading H4",
    variant: "h4" as const,
    sample: "Section Titles And Internal Modules",
  },
  {
    label: "Body XL",
    variant: "body-xl" as const,
    sample:
      "Use larger body text for strong introductory statements and framing copy inside sections.",
  },
  {
    label: "Body M",
    variant: "body-m" as const,
    sample:
      "This is the standard reading size for product descriptions, usage notes, and explanatory content.",
  },
  {
    label: "Body S",
    variant: "body-s" as const,
    sample:
      "Smaller body text works for supporting notes, secondary information, and denser UI descriptions.",
  },
  {
    label: "Label M",
    variant: "label-m" as const,
    sample: "Portfolio · Service · Tool Stack",
  },
  {
    label: "Caption",
    variant: "caption" as const,
    sample: "Smallest text layer for metadata, helper notes, and contextual hints.",
  },
]

const alignments = ["left", "center", "right"] as const
const demoVariants = ["display-l", "h1", "h2", "body-xl", "body-m", "body-s"] as const

type Alignment = (typeof alignments)[number]
type DemoVariant = (typeof demoVariants)[number]

export default function TypographyPage() {
  const [variant, setVariant] = React.useState<DemoVariant>("h1")
  const [alignment, setAlignment] = React.useState<Alignment>("left")
  const [muted, setMuted] = React.useState(false)

  const alignmentClass =
    alignment === "center"
      ? "text-center"
      : alignment === "right"
        ? "text-right"
        : "text-left"

  return (
    <div className="ds-page">
      <div className="ds-page-header">
        <Typography variant="label-m" className="mb-2 text-primary">
          02 — COMPONENTS
        </Typography>
        <Typography variant="h1" className="mb-3">
          Typography
        </Typography>
        <Typography variant="body-m" className="max-w-2xl text-muted-foreground">
          Typographic system component built from the Chuv Studio design tokens.
          This component codifies the same scale defined in{" "}
          <span className="font-medium text-foreground">
            Design Tokens → Typography
          </span>{" "}
          so the entire styleguide can maintain a consistent language of
          hierarchy, rhythm, and readability.
        </Typography>
      </div>

      <Section
        title="Type Scale"
        subtitle="The component mirrors the exact hierarchy already documented in the foundation"
      >
        <div className="space-y-6">
          {typeScale.map((item) => (
            <div key={item.label}>
              <div className="ds-row">
                <RowLabel label={item.label} />
                <div className="w-full">
                  <Typography variant={item.variant}>{item.sample}</Typography>
                </div>
              </div>
              <CodeSnippet
                code={`<Typography variant="${item.variant}">
  ${item.sample}
</Typography>`}
              />
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Studio Contexts"
        subtitle="Examples of how the type scale should be used in portfolio, service, and documentation structures"
      >
        <div className="ds-card-grid-3">
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <Typography variant="label-m" className="mb-6 text-muted-foreground">
              Portfolio Hero
            </Typography>
            <Typography variant="display-l" className="max-w-[10ch]">
              Digital Product With Clear Narrative
            </Typography>
            <Typography variant="body-s" className="mt-6 text-muted-foreground">
              Use large display styles when the section needs immediate narrative
              impact.
            </Typography>
          </div>

          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <Typography variant="label-m" className="mb-6 text-muted-foreground">
              Service Section
            </Typography>
            <Typography variant="h3">
              Design Systems With Product Depth
            </Typography>
            <Typography variant="body-m" className="mt-4 text-muted-foreground">
              Use heading and body combinations to keep offer descriptions
              structured and readable.
            </Typography>
          </div>

          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <Typography variant="label-m" className="mb-6 text-muted-foreground">
              Documentation
            </Typography>
            <Typography variant="h4">
              Implementation Notes
            </Typography>
            <Typography variant="caption" className="mt-4">
              Small supporting text is reserved for metadata, constraints, and
              secondary guidance.
            </Typography>
          </div>
        </div>

        <CodeSnippet
          code={`<Typography variant="display-l">Portfolio headline</Typography>
<Typography variant="h3">Service title</Typography>
<Typography variant="body-m">Section explanation</Typography>`}
        />
      </Section>

      <Section
        title="Content Patterns"
        subtitle="Recommended pairings to preserve hierarchy inside sections and cards"
      >
        <div className="space-y-5">
          {[
            {
              label: "Hero",
              content: (
                <>
                  <Typography variant="display-l" className="max-w-[14ch]">
                    Strategy And Interface Working As One System
                  </Typography>
                  <Typography variant="body-xl" className="mt-6 max-w-[52ch] text-muted-foreground">
                    Pair a display style with larger body text when introducing
                    flagship sections or case-study intros.
                  </Typography>
                </>
              ),
            },
            {
              label: "Section",
              content: (
                <>
                  <Typography variant="h2">
                    Product Architecture
                  </Typography>
                  <Typography variant="body-m" className="mt-4 max-w-[58ch] text-muted-foreground">
                    This is the standard pairing for most internal section
                    content in the design system.
                  </Typography>
                </>
              ),
            },
            {
              label: "Card",
              content: (
                <>
                  <Typography variant="label-m" className="text-muted-foreground">
                    Tooling
                  </Typography>
                  <Typography variant="h4" className="mt-4">
                    shadcn/ui Integration
                  </Typography>
                  <Typography variant="body-s" className="mt-4 text-muted-foreground">
                    Cards should stay compact, straight-edged, and typographically
                    disciplined.
                  </Typography>
                </>
              ),
            },
          ].map((item) => (
            <div key={item.label} className="ds-row">
              <RowLabel label={item.label} />
              <div className="w-full rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Interactive Demo"
        subtitle="Preview the type scale with different alignments and emphasis"
      >
        <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
          <div className="ds-interactive-grid">
            <div className="space-y-6">
              <div>
                <Typography variant="label-m" className="mb-3 text-muted-foreground">
                  Variant
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {demoVariants.map((option) => (
                    <Button
                      key={option}
                      variant={variant === option ? "default" : "outline"}
                      size="sm"
                      onClick={() => setVariant(option)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <Typography variant="label-m" className="mb-3 text-muted-foreground">
                  Alignment
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: "left", icon: <AlignLeft className="size-4" /> },
                    { value: "center", icon: <AlignCenter className="size-4" /> },
                    { value: "right", icon: <AlignRight className="size-4" /> },
                  ].map((option) => (
                    <Button
                      key={option.value}
                      variant={alignment === option.value ? "default" : "outline"}
                      size="sm"
                      onClick={() => setAlignment(option.value as Alignment)}
                    >
                      {option.icon}
                      {option.value}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <Typography variant="label-m" className="mb-3 text-muted-foreground">
                  Tone
                </Typography>
                <Button
                  variant={muted ? "default" : "outline"}
                  size="sm"
                  onClick={() => setMuted((current) => !current)}
                >
                  <Type className="size-4" />
                  {muted ? "Muted Text" : "Foreground Text"}
                </Button>
              </div>
            </div>

            <div className="border border-white bg-white p-5 sm:p-8">
              <Typography
                variant={variant}
                className={cn(
                  alignmentClass,
                  muted && "text-muted-foreground"
                )}
              >
                Typography should stay consistent across every section, card, and
                component of the design system.
              </Typography>
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Usage"
        subtitle="Import, variants, and consistency rules for the design system"
      >
        <div className="space-y-6">
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <Typography variant="label-m" className="text-muted-foreground">
              Import
            </Typography>
            <CodeSnippet
              code={`import { Typography } from "@/components/typography"`}
            />
          </div>

          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <Typography variant="label-m" className="text-muted-foreground">
              Basic Usage
            </Typography>
            <CodeSnippet
              code={`<Typography variant="h2">Section title</Typography>
<Typography variant="body-m">Supporting description</Typography>
<Typography variant="caption">Metadata</Typography>`}
            />
          </div>

          <div className="ds-card-grid-2">
            {[
              {
                title: "Available Variants",
                body: "display-xl, display-l, h1, h2, h3, h4, body-xl, body-m, body-s, label-m, caption, lead, muted, code.",
              },
              {
                title: "Consistency Rule",
                body: "Any new styleguide page or component showcase should derive its text hierarchy from this component and from the Design Tokens typography scale.",
              },
              {
                title: "Inside Sections",
                body: "Use display and heading variants for structure, body variants for explanations, and label/caption variants for metadata. Internal elements remain straight-edged.",
              },
              {
                title: "Accessibility Notes",
                body: "Keep semantic HTML aligned with the content meaning. Use headings in order, avoid fake heading jumps, and preserve readable contrast for muted text.",
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
  )
}
