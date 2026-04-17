"use client"

import * as React from "react"
import {
  ArrowLeft,
  ChevronDown,
  Grid2x2,
  LayoutPanelTop,
  MoreHorizontal,
  Plus,
  Trash2,
  Wrench,
} from "lucide-react"

import { Typography } from "@/components/typography"
import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"
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
  return <pre className="ds-code-snippet">{code}</pre>
}

function RowLabel({ label }: { label: string }) {
  return <span className="ds-row-label">{label}</span>
}

const orientationOptions = ["horizontal", "vertical"] as const
type OrientationOption = (typeof orientationOptions)[number]

export default function ButtonGroupPage() {
  const [orientation, setOrientation] =
    React.useState<OrientationOption>("horizontal")
  const [compact, setCompact] = React.useState(false)

  return (
    <div className="ds-page">
      <div className="ds-page-header">
        <Typography variant="label-m" className="mb-2 text-primary">
          02 — COMPONENTS
        </Typography>
        <Typography variant="h1" className="mb-3">
          Button Group
        </Typography>
        <Typography variant="body-m" className="max-w-2xl text-muted-foreground">
          Grouped action component for related controls, split actions, compact
          toolbars, and directional UI clusters. Built from shadcn/ui and
          adapted to the Chuv Studio foundation with straight edges and unified
          responsive behavior.
        </Typography>
      </div>

      <Section
        title="Core Patterns"
        subtitle="Use grouped buttons when actions belong to the same decision space"
      >
        <div className="space-y-6">
          <div>
            <div className="ds-row">
              <RowLabel label="Basic" />
              <div className="w-full">
                <ButtonGroup>
                  <Button variant="outline">Archive</Button>
                  <Button variant="outline">Report</Button>
                  <Button variant="outline">Export</Button>
                </ButtonGroup>
              </div>
            </div>
            <CodeSnippet
              code={`<ButtonGroup>
  <Button variant="outline">Archive</Button>
  <Button variant="outline">Report</Button>
  <Button variant="outline">Export</Button>
</ButtonGroup>`}
            />
          </div>

          <div>
            <div className="ds-row">
              <RowLabel label="Split" />
              <div className="w-full">
                <ButtonGroup>
                  <Button>New Item</Button>
                  <ButtonGroupSeparator />
                  <Button size="icon" aria-label="More create options">
                    <ChevronDown className="size-4" />
                  </Button>
                </ButtonGroup>
              </div>
            </div>
            <CodeSnippet
              code={`<ButtonGroup>
  <Button>New Item</Button>
  <ButtonGroupSeparator />
  <Button size="icon">
    <ChevronDown />
  </Button>
</ButtonGroup>`}
            />
          </div>
        </div>
      </Section>

      <Section
        title="Studio Contexts"
        subtitle="Grouped actions that fit portfolio management, tooling, and navigation flows"
      >
        <div className="ds-card-grid-3">
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <Typography variant="label-m" className="mb-4 text-muted-foreground">
              Case Actions
            </Typography>
            <ButtonGroup>
              <Button variant="outline">Preview</Button>
              <Button variant="outline">Publish</Button>
              <Button size="icon" variant="outline" aria-label="More actions">
                <MoreHorizontal className="size-4" />
              </Button>
            </ButtonGroup>
          </div>

          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <Typography variant="label-m" className="mb-4 text-muted-foreground">
              Tooling Cluster
            </Typography>
            <ButtonGroup>
              <Button size="icon" variant="outline" aria-label="Go back">
                <ArrowLeft className="size-4" />
              </Button>
              <Button variant="outline">Sync</Button>
              <Button variant="outline">Deploy</Button>
            </ButtonGroup>
          </div>

          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <Typography variant="label-m" className="mb-4 text-muted-foreground">
              View Switch
            </Typography>
            <ButtonGroup>
              <Button size="icon" variant="outline" aria-label="Grid view">
                <Grid2x2 className="size-4" />
              </Button>
              <Button size="icon" variant="outline" aria-label="List view">
                <LayoutPanelTop className="size-4" />
              </Button>
            </ButtonGroup>
          </div>
        </div>

        <CodeSnippet
          code={`<ButtonGroup>
  <Button variant="outline">Preview</Button>
  <Button variant="outline">Publish</Button>
  <Button size="icon" variant="outline">
    <MoreHorizontal />
  </Button>
</ButtonGroup>`}
        />
      </Section>

      <Section
        title="Composition Patterns"
        subtitle="Button groups can include text, separators, icons, and vertical arrangements"
      >
        <div className="space-y-6">
          <div>
            <div className="ds-row">
              <RowLabel label="With Text" />
              <div className="w-full">
                <ButtonGroup>
                  <ButtonGroupText>
                    <Wrench className="size-4" />
                    Tooling
                  </ButtonGroupText>
                  <Button variant="outline">Review</Button>
                  <Button variant="outline">Apply</Button>
                </ButtonGroup>
              </div>
            </div>
            <CodeSnippet
              code={`<ButtonGroup>
  <ButtonGroupText>Tooling</ButtonGroupText>
  <Button variant="outline">Review</Button>
  <Button variant="outline">Apply</Button>
</ButtonGroup>`}
            />
          </div>

          <div>
            <div className="ds-row">
              <RowLabel label="Vertical" />
              <div className="w-full">
                <ButtonGroup orientation="vertical" className="h-fit">
                  <Button size="icon" variant="outline" aria-label="Add">
                    <Plus className="size-4" />
                  </Button>
                  <Button size="icon" variant="outline" aria-label="Remove">
                    <Trash2 className="size-4" />
                  </Button>
                </ButtonGroup>
              </div>
            </div>
            <CodeSnippet
              code={`<ButtonGroup orientation="vertical">
  <Button size="icon" variant="outline">
    <Plus />
  </Button>
  <Button size="icon" variant="outline">
    <Trash2 />
  </Button>
</ButtonGroup>`}
            />
          </div>
        </div>
      </Section>

      <Section
        title="Interactive Demo"
        subtitle="Adjust orientation and density to preview how grouped actions behave across layouts"
      >
        <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
          <div className="ds-interactive-grid">
            <div className="space-y-6">
              <div>
                <Typography variant="label-m" className="mb-3 text-muted-foreground">
                  Orientation
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {orientationOptions.map((option) => (
                    <Button
                      key={option}
                      variant={orientation === option ? "default" : "outline"}
                      size="sm"
                      onClick={() => setOrientation(option)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <Typography variant="label-m" className="mb-3 text-muted-foreground">
                  Density
                </Typography>
                <Button
                  variant={compact ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCompact((current) => !current)}
                >
                  {compact ? "Compact" : "Comfortable"}
                </Button>
              </div>
            </div>

            <div className="border border-white bg-white p-5 sm:p-8">
              <ButtonGroup
                orientation={orientation}
                className={orientation === "vertical" ? "h-fit" : undefined}
              >
                <Button
                  variant="outline"
                  size={compact ? "sm" : "default"}
                >
                  Draft
                </Button>
                <Button
                  variant="outline"
                  size={compact ? "sm" : "default"}
                >
                  Review
                </Button>
                <Button
                  size={compact ? "sm" : "default"}
                >
                  Publish
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Usage"
        subtitle="Import, structure, and accessibility behavior"
      >
        <div className="space-y-6">
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <Typography variant="label-m" className="text-muted-foreground">
              Import
            </Typography>
            <CodeSnippet
              code={`import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"`}
            />
          </div>

          <div className="ds-card-grid-2">
            {[
              {
                title: "Key Props",
                body: "Use orientation on ButtonGroup, then compose Button, ButtonGroupText, and ButtonGroupSeparator depending on the action cluster.",
              },
              {
                title: "When To Use",
                body: "Use button groups when actions belong to the same object, step, or decision zone and need to feel visually connected.",
              },
              {
                title: "When Not To Use",
                body: "Avoid grouping unrelated actions just to save space. Use standalone buttons when hierarchy or intent is different.",
              },
              {
                title: "Accessibility Notes",
                body: "The wrapper uses role=\"group\". Keep labels clear, provide aria-label on icon-only buttons, and preserve logical action order.",
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
