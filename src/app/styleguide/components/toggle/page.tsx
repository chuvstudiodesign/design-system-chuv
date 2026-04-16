"use client"

import * as React from "react"
import {
  Bookmark,
  Bold,
  Italic,
  LayoutPanelTop,
  MoonStar,
  Sparkles,
  Underline,
  Wrench,
} from "lucide-react"

import { Typography } from "@/components/typography"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Toggle } from "@/components/ui/toggle"

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

type SizeOption = (typeof sizeOptions)[number]
type VariantOption = (typeof variantOptions)[number]

export default function TogglePage() {
  const [bookmarked, setBookmarked] = React.useState(false)
  const [withText, setWithText] = React.useState(true)
  const [editorState, setEditorState] = React.useState({
    bold: true,
    italic: false,
    underline: false,
  })
  const [size, setSize] = React.useState<SizeOption>("default")
  const [variant, setVariant] = React.useState<VariantOption>("default")
  const [pressed, setPressed] = React.useState(true)

  return (
    <div className="ds-page">
      <div className="ds-page-header">
        <Typography variant="label-m" className="mb-2 text-primary">
          02 — COMPONENTS
        </Typography>
        <Typography variant="h1" className="mb-3">
          Toggle
        </Typography>
        <Typography variant="body-m" className="max-w-2xl text-muted-foreground">
          Binary action control for saved states, view preferences, quick modes,
          and lightweight editor actions. Built from shadcn/ui and adapted to
          the Chuv Studio foundation with straight edges and system typography.
        </Typography>
      </div>

      <Section
        title="Core Patterns"
        subtitle="Icon-only and text-based toggles for compact interface actions"
      >
        <div className="space-y-6">
          <div>
            <div className="ds-row">
              <RowLabel label="Icon" />
              <div className="w-full">
                <Toggle
                  aria-label="Toggle bookmark"
                  pressed={bookmarked}
                  onPressedChange={setBookmarked}
                >
                  <Bookmark className="size-4" />
                </Toggle>
              </div>
            </div>
            <CodeSnippet
              code={`<Toggle aria-label="Toggle bookmark">
  <Bookmark />
</Toggle>`}
            />
          </div>

          <div>
            <div className="ds-row">
              <RowLabel label="With Text" />
              <div className="w-full">
                <Toggle
                  aria-label="Toggle saved"
                  pressed={withText}
                  onPressedChange={setWithText}
                >
                  <Bookmark className="size-4" />
                  Save
                </Toggle>
              </div>
            </div>
            <CodeSnippet
              code={`<Toggle aria-label="Toggle saved">
  <Bookmark />
  Save
</Toggle>`}
            />
          </div>
        </div>
      </Section>

      <Section
        title="Studio Contexts"
        subtitle="Single toggles that make sense for a design and tech studio workflow"
      >
        <div className="ds-card-grid-3">
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <Typography variant="label-m" className="mb-4 text-muted-foreground">
              Portfolio Save
            </Typography>
            <Toggle defaultPressed aria-label="Save case">
              <Bookmark className="size-4" />
              Save Case
            </Toggle>
          </div>

          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <Typography variant="label-m" className="mb-4 text-muted-foreground">
              Focus Mode
            </Typography>
            <Toggle aria-label="Toggle focus mode" variant="outline">
              <MoonStar className="size-4" />
              Focus Mode
            </Toggle>
          </div>

          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <Typography variant="label-m" className="mb-4 text-muted-foreground">
              Tool State
            </Typography>
            <Toggle defaultPressed aria-label="Activate build tools">
              <Wrench className="size-4" />
              Build Ready
            </Toggle>
          </div>
        </div>

        <CodeSnippet
          code={`<Toggle variant="outline" aria-label="Toggle focus mode">
  <MoonStar />
  Focus Mode
</Toggle>`}
        />
      </Section>

      <Section
        title="Editor Actions"
        subtitle="A practical pattern for local formatting or stateful controls"
      >
        <div className="space-y-6">
          {[
            {
              label: "Bold",
              pressed: editorState.bold,
              onPressedChange: (value: boolean) =>
                setEditorState((current) => ({ ...current, bold: value })),
              icon: <Bold className="size-4" />,
            },
            {
              label: "Italic",
              pressed: editorState.italic,
              onPressedChange: (value: boolean) =>
                setEditorState((current) => ({ ...current, italic: value })),
              icon: <Italic className="size-4" />,
            },
            {
              label: "Underline",
              pressed: editorState.underline,
              onPressedChange: (value: boolean) =>
                setEditorState((current) => ({ ...current, underline: value })),
              icon: <Underline className="size-4" />,
            },
          ].map((item) => (
            <div key={item.label}>
              <div className="ds-row">
                <RowLabel label={item.label} />
                <div className="w-full">
                  <Toggle
                    aria-label={`Toggle ${item.label.toLowerCase()}`}
                    pressed={item.pressed}
                    onPressedChange={item.onPressedChange}
                  >
                    {item.icon}
                    {item.label}
                  </Toggle>
                </div>
              </div>
              <CodeSnippet
                code={`<Toggle pressed={${item.pressed}} onPressedChange={set${item.label}}>
  <${item.label}Icon />
  ${item.label}
</Toggle>`}
              />
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Sizes & Variants"
        subtitle="Use smaller toggles for dense utilities and larger toggles when the action has more prominence"
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
                  <Toggle
                    size={item.size}
                    variant={item.variant}
                    aria-label={`Toggle ${item.label.toLowerCase()}`}
                    defaultPressed
                  >
                    <LayoutPanelTop className="size-4" />
                    Layout
                  </Toggle>
                </div>
              </div>
              <CodeSnippet
                code={`<Toggle size="${item.size}" variant="${item.variant}">
  <LayoutPanelTop />
  Layout
</Toggle>`}
              />
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Interactive Demo"
        subtitle="Adjust size and variant, then preview the pressed state of the component"
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
                  State
                </Typography>
                <Button
                  variant={pressed ? "default" : "outline"}
                  size="sm"
                  onClick={() => setPressed((current) => !current)}
                >
                  {pressed ? "Pressed" : "Unpressed"}
                </Button>
              </div>
            </div>

            <div className="border border-white bg-white p-5 sm:p-8">
              <Toggle
                size={size}
                variant={variant}
                aria-label="Toggle preview"
                pressed={pressed}
                onPressedChange={setPressed}
              >
                <Sparkles className="size-4" />
                Highlight
              </Toggle>
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
              code={`import { Toggle } from "@/components/ui/toggle"`}
            />
          </div>

          <div className="ds-card-grid-2">
            {[
              {
                title: "Key Props",
                body: "Use pressed, defaultPressed, onPressedChange, size, and variant to control the component state and presentation.",
              },
              {
                title: "When To Use",
                body: "Toggle is best for a single on/off action, saved state, mode activation, or lightweight formatting control.",
              },
              {
                title: "When Not To Use",
                body: "Use Toggle Group when there is a set of related options. Use Switch when the interaction reads more like a settings preference.",
              },
              {
                title: "Accessibility Notes",
                body: "Always add aria-label when the button is icon-only. Keep the pressed state visible and ensure the action meaning stays clear.",
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
