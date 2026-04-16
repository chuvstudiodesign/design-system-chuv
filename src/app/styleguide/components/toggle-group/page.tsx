"use client"

import * as React from "react"
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  BriefcaseBusiness,
  Code2,
  Grid2x2,
  LayoutPanelTop,
  Sparkles,
  Wrench,
} from "lucide-react"

import { Typography } from "@/components/typography"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

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

const sizeOptions = ["sm", "default", "lg"] as const
const variantOptions = ["default", "outline"] as const
const orientationOptions = ["horizontal", "vertical"] as const

type SizeOption = (typeof sizeOptions)[number]
type VariantOption = (typeof variantOptions)[number]
type OrientationOption = (typeof orientationOptions)[number]

export default function ToggleGroupPage() {
  const [singleValue, setSingleValue] = React.useState("overview")
  const [multiValue, setMultiValue] = React.useState<string[]>([
    "design",
    "build",
  ])
  const [size, setSize] = React.useState<SizeOption>("default")
  const [variant, setVariant] = React.useState<VariantOption>("default")
  const [orientation, setOrientation] =
    React.useState<OrientationOption>("horizontal")

  return (
    <div className="ds-page">
      <div className="ds-page-header">
        <Typography variant="label-m" className="mb-2 text-primary">
          02 — COMPONENTS
        </Typography>
        <Typography variant="h1" className="mb-3">
          Toggle Group
        </Typography>
        <Typography variant="body-m" className="max-w-2xl text-muted-foreground">
          Segmented selection component for filters, content modes, section
          views, and tool-state switching. Built from shadcn/ui and adapted to
          the Chuv Studio foundation with straight edges, card discipline, and
          responsive layout behavior.
        </Typography>
      </div>

      <Section
        title="Selection Modes"
        subtitle="Use single selection for view switching and multiple selection for combined filters"
      >
        <div className="space-y-6">
          <div>
            <div className="ds-row">
              <RowLabel label="Single" />
              <div className="w-full">
                <ToggleGroup
                  type="single"
                  value={singleValue}
                  onValueChange={(value) => value && setSingleValue(value)}
                  spacing={8}
                >
                  <ToggleGroupItem value="overview" aria-label="Overview">
                    <LayoutPanelTop className="size-4" />
                    Overview
                  </ToggleGroupItem>
                  <ToggleGroupItem value="process" aria-label="Process">
                    <Grid2x2 className="size-4" />
                    Process
                  </ToggleGroupItem>
                  <ToggleGroupItem value="result" aria-label="Result">
                    <Sparkles className="size-4" />
                    Result
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
            <CodeSnippet
              code={`<ToggleGroup type="single" value={value} onValueChange={setValue}>
  <ToggleGroupItem value="overview">Overview</ToggleGroupItem>
  <ToggleGroupItem value="process">Process</ToggleGroupItem>
  <ToggleGroupItem value="result">Result</ToggleGroupItem>
</ToggleGroup>`}
            />
          </div>

          <div>
            <div className="ds-row">
              <RowLabel label="Multiple" />
              <div className="w-full">
                <ToggleGroup
                  type="multiple"
                  value={multiValue}
                  onValueChange={setMultiValue}
                  spacing={8}
                >
                  <ToggleGroupItem value="design" aria-label="Design">
                    <BriefcaseBusiness className="size-4" />
                    Design
                  </ToggleGroupItem>
                  <ToggleGroupItem value="build" aria-label="Build">
                    <Code2 className="size-4" />
                    Build
                  </ToggleGroupItem>
                  <ToggleGroupItem value="ops" aria-label="Ops">
                    <Wrench className="size-4" />
                    Ops
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
            <CodeSnippet
              code={`<ToggleGroup type="multiple" value={values} onValueChange={setValues}>
  <ToggleGroupItem value="design">Design</ToggleGroupItem>
  <ToggleGroupItem value="build">Build</ToggleGroupItem>
  <ToggleGroupItem value="ops">Ops</ToggleGroupItem>
</ToggleGroup>`}
            />
          </div>
        </div>
      </Section>

      <Section
        title="Studio Contexts"
        subtitle="Examples that fit a design and tech studio workflow"
      >
        <div className="ds-card-grid-3">
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <Typography variant="label-m" className="mb-4 text-muted-foreground">
              Portfolio View
            </Typography>
            <ToggleGroup type="single" defaultValue="grid" spacing={8}>
              <ToggleGroupItem value="grid" aria-label="Grid view">
                <Grid2x2 className="size-4" />
                Grid
              </ToggleGroupItem>
              <ToggleGroupItem value="list" aria-label="List view">
                <LayoutPanelTop className="size-4" />
                List
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <Typography variant="label-m" className="mb-4 text-muted-foreground">
              Service Filter
            </Typography>
            <ToggleGroup type="multiple" defaultValue={["brand", "product"]} spacing={8}>
              <ToggleGroupItem value="brand" aria-label="Brand">
                Brand
              </ToggleGroupItem>
              <ToggleGroupItem value="product" aria-label="Product">
                Product
              </ToggleGroupItem>
              <ToggleGroupItem value="dev" aria-label="Dev">
                Dev
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <Typography variant="label-m" className="mb-4 text-muted-foreground">
              Text Align
            </Typography>
            <ToggleGroup type="single" defaultValue="left" spacing={8} variant="outline">
              <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeft className="size-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenter className="size-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRight className="size-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="justify" aria-label="Align justify">
                <AlignJustify className="size-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>

        <CodeSnippet
          code={`<ToggleGroup type="single" defaultValue="grid" spacing={8}>
  <ToggleGroupItem value="grid">Grid</ToggleGroupItem>
  <ToggleGroupItem value="list">List</ToggleGroupItem>
</ToggleGroup>`}
        />
      </Section>

      <Section
        title="Sizes & Variants"
        subtitle="Use compact controls in dense UI and larger controls when the toggle is part of the section narrative"
      >
        <div className="space-y-6">
          {[
            { label: "SM", size: "sm" as const, variant: "default" as const },
            { label: "Default", size: "default" as const, variant: "default" as const },
            { label: "Outline", size: "default" as const, variant: "outline" as const },
            { label: "LG", size: "lg" as const, variant: "default" as const },
          ].map((item) => (
            <div key={item.label}>
              <div className="ds-row">
                <RowLabel label={item.label} />
                <div className="w-full">
                  <ToggleGroup type="single" defaultValue="one" size={item.size} variant={item.variant} spacing={8}>
                    <ToggleGroupItem value="one" aria-label="Option one">
                      First
                    </ToggleGroupItem>
                    <ToggleGroupItem value="two" aria-label="Option two">
                      Second
                    </ToggleGroupItem>
                    <ToggleGroupItem value="three" aria-label="Option three">
                      Third
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
              </div>
              <CodeSnippet
                code={`<ToggleGroup type="single" size="${item.size}" variant="${item.variant}" spacing={8}>
  ...
</ToggleGroup>`}
              />
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Interactive Demo"
        subtitle="Adjust size, variant, and orientation to preview how the component behaves in responsive layouts"
      >
        <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
          <div className="ds-interactive-grid">
            <div className="space-y-6">
              <div>
                <Typography variant="label-m" className="mb-3 text-muted-foreground">
                  Size
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {sizeOptions.map((option) => (
                    <Button
                      key={option}
                      variant={size === option ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSize(option)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <Typography variant="label-m" className="mb-3 text-muted-foreground">
                  Variant
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {variantOptions.map((option) => (
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
            </div>

            <div className="border border-white bg-white p-5 sm:p-8">
              <ToggleGroup
                type="multiple"
                value={multiValue}
                onValueChange={setMultiValue}
                size={size}
                variant={variant}
                orientation={orientation}
                spacing={8}
              >
                <ToggleGroupItem value="design" aria-label="Design">
                  <BriefcaseBusiness className="size-4" />
                  Design
                </ToggleGroupItem>
                <ToggleGroupItem value="build" aria-label="Build">
                  <Code2 className="size-4" />
                  Build
                </ToggleGroupItem>
                <ToggleGroupItem value="ops" aria-label="Ops">
                  <Wrench className="size-4" />
                  Ops
                </ToggleGroupItem>
              </ToggleGroup>
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
            <Typography variant="label-m" className="text-muted-foreground">
              Import
            </Typography>
            <CodeSnippet
              code={`import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"`}
            />
          </div>

          <div className="ds-card-grid-2">
            {[
              {
                title: "Key Props",
                body: "Use type, value, onValueChange, size, variant, spacing, and orientation to control selection and layout.",
              },
              {
                title: "Single vs Multiple",
                body: "Choose type=\"single\" for mutually exclusive views and type=\"multiple\" when combining active filters.",
              },
              {
                title: "Responsive Behavior",
                body: "The group wraps in horizontal layouts and can switch to vertical stacking when the context needs a clearer mobile flow.",
              },
              {
                title: "Accessibility Notes",
                body: "Always provide an aria-label when the item is icon-only. Keep labels clear and make the active state visually obvious.",
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
