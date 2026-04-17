"use client"

import * as React from "react"
import { ImageIcon, Layers3, Monitor, Smartphone, Video } from "lucide-react"

import { AspectRatio } from "@/components/ui/aspect-ratio"
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

function MediaPlaceholder({
  icon,
  title,
  subtitle,
  mode = "default",
}: {
  icon: React.ReactNode
  title: string
  subtitle: string
  mode?: "default" | "hero" | "dark"
}) {
  return (
    <div
      className={[
        "flex h-full w-full flex-col justify-between rounded-none border border-white p-[var(--card-padding)]",
        mode === "dark"
          ? "bg-[#1a1a1a] text-white"
          : mode === "hero"
            ? "bg-[linear-gradient(135deg,#5628e8_0%,#9f78f7_100%)] text-white"
            : "bg-[#f9f9f9] text-foreground",
      ].join(" ")}
    >
      <div className="flex items-center justify-between">
        <span className="inline-flex rounded-none border border-white/20 bg-white/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em]">
          Preview
        </span>
        <div className="opacity-80">{icon}</div>
      </div>
      <div>
        <p className="text-lg font-semibold">{title}</p>
        <p
          className={[
            "mt-2 text-sm",
            mode === "default" ? "text-muted-foreground" : "text-white/72",
          ].join(" ")}
        >
          {subtitle}
        </p>
      </div>
    </div>
  )
}

const ratioOptions = [
  { label: "16 / 9", value: 16 / 9 },
  { label: "4 / 3", value: 4 / 3 },
  { label: "1 / 1", value: 1 },
  { label: "3 / 4", value: 3 / 4 },
  { label: "9 / 16", value: 9 / 16 },
] as const

const contentOptions = ["cover", "dashboard", "mobile", "video"] as const
type ContentMode = (typeof contentOptions)[number]

export default function AspectRatioPage() {
  const [ratio, setRatio] = React.useState<(typeof ratioOptions)[number]>(
    ratioOptions[0]
  )
  const [mode, setMode] = React.useState<ContentMode>("cover")
  const [dark, setDark] = React.useState(false)

  const preview = {
    cover: {
      icon: <Layers3 className="size-5" />,
      title: "Case Cover",
      subtitle: "Hero frame for project overviews and featured portfolio entries.",
      mode: "hero" as const,
    },
    dashboard: {
      icon: <Monitor className="size-5" />,
      title: "Dashboard Capture",
      subtitle: "Desktop-focused mockup area for product and internal systems.",
      mode: "default" as const,
    },
    mobile: {
      icon: <Smartphone className="size-5" />,
      title: "Mobile Flow",
      subtitle: "Tall frame for app screens, onboarding, and compact narratives.",
      mode: "default" as const,
    },
    video: {
      icon: <Video className="size-5" />,
      title: "Video Placeholder",
      subtitle: "Presentation area for demos, reels, and motion snapshots.",
      mode: "dark" as const,
    },
  }[mode]

  return (
    <div className="ds-page">
      <div className="ds-page-header">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
          02 — COMPONENTS
        </p>
        <h1 className="ds-page-title">
          Aspect Ratio
        </h1>
        <p className="ds-page-description">
          Structural media container that preserves width and height proportion
          for project covers, mockups, thumbnails, screenshots, and video
          surfaces. Built from shadcn/ui and aligned with the Chuv Studio
          section rules.
        </p>
      </div>

      <Section
        title="Ratios"
        subtitle="Common formats for portfolio, interface captures, and visual storytelling"
      >
        <div className="space-y-6">
          {[
            {
              label: "16 / 9",
              ratio: 16 / 9,
              title: "Featured project cover",
              subtitle: "Best for hero banners, horizontal showcases, and presentation frames.",
              icon: <Layers3 className="size-5" />,
              mode: "hero" as const,
              code: `<AspectRatio ratio={16 / 9}>
  {/* media */}
</AspectRatio>`,
            },
            {
              label: "4 / 3",
              ratio: 4 / 3,
              title: "Desktop product shot",
              subtitle: "Works well for dashboard previews and broader interface crops.",
              icon: <Monitor className="size-5" />,
              mode: "default" as const,
              code: `<AspectRatio ratio={4 / 3}>
  {/* media */}
</AspectRatio>`,
            },
            {
              label: "1 / 1",
              ratio: 1,
              title: "Square thumbnail",
              subtitle: "Useful for grids, categories, previews, and social-friendly covers.",
              icon: <ImageIcon className="size-5" />,
              mode: "default" as const,
              code: `<AspectRatio ratio={1}>
  {/* media */}
</AspectRatio>`,
            },
            {
              label: "9 / 16",
              ratio: 9 / 16,
              title: "Mobile screen",
              subtitle: "Ideal for app flows, stories, shorts, or tall UI captures.",
              icon: <Smartphone className="size-5" />,
              mode: "default" as const,
              code: `<AspectRatio ratio={9 / 16}>
  {/* media */}
</AspectRatio>`,
            },
          ].map((item) => (
            <div key={item.label}>
              <div className="ds-row">
                <RowLabel label={item.label} />
                <div className="w-full max-w-xl">
                  <AspectRatio ratio={item.ratio}>
                    <MediaPlaceholder
                      icon={item.icon}
                      title={item.title}
                      subtitle={item.subtitle}
                      mode={item.mode}
                    />
                  </AspectRatio>
                </div>
              </div>
              <CodeSnippet code={item.code} />
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Studio Contexts"
        subtitle="How aspect ratio supports the real sections of a design and tech studio"
      >
        <div className="ds-card-grid-3">
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Portfolio Cover
            </p>
            <AspectRatio ratio={16 / 9}>
              <MediaPlaceholder
                icon={<Layers3 className="size-5" />}
                title="Launch Story"
                subtitle="Project cover with strong hero proportion."
                mode="hero"
              />
            </AspectRatio>
          </div>

          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Tool Preview
            </p>
            <AspectRatio ratio={4 / 3}>
              <MediaPlaceholder
                icon={<Monitor className="size-5" />}
                title="Design Ops Board"
                subtitle="UI frame for internal systems and technical workflows."
              />
            </AspectRatio>
          </div>

          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Mobile Narrative
            </p>
            <AspectRatio ratio={9 / 16}>
              <MediaPlaceholder
                icon={<Smartphone className="size-5" />}
                title="App Flow"
                subtitle="Tall composition for mobile-first product sections."
              />
            </AspectRatio>
          </div>
        </div>

        <CodeSnippet
          code={`<AspectRatio ratio={16 / 9}>
  <img className="h-full w-full rounded-none object-cover" src="/..." alt="" />
</AspectRatio>`}
        />
      </Section>

      <Section
        title="Content Patterns"
        subtitle="Same ratio system, different content types"
      >
        <div className="space-y-6">
          <div>
            <div className="ds-row">
              <RowLabel label="Image" />
              <div className="w-full max-w-xl">
                <AspectRatio ratio={16 / 9}>
                  <MediaPlaceholder
                    icon={<ImageIcon className="size-5" />}
                    title="Image Placeholder"
                    subtitle="Use object-cover imagery while keeping the frame stable."
                  />
                </AspectRatio>
              </div>
            </div>
            <CodeSnippet
              code={`<AspectRatio ratio={16 / 9}>
  <img
    src="/image.jpg"
    alt="Project cover"
    className="h-full w-full rounded-none object-cover"
  />
</AspectRatio>`}
            />
          </div>

          <div>
            <div className="ds-row">
              <RowLabel label="Video" />
              <div className="w-full max-w-xl">
                <AspectRatio ratio={16 / 9}>
                  <MediaPlaceholder
                    icon={<Video className="size-5" />}
                    title="Video Surface"
                    subtitle="Use as a safe container for embeds, reels, or preview players."
                    mode="dark"
                  />
                </AspectRatio>
              </div>
            </div>
            <CodeSnippet
              code={`<AspectRatio ratio={16 / 9}>
  <iframe
    className="h-full w-full rounded-none"
    src="..."
    title="Demo video"
  />
</AspectRatio>`}
            />
          </div>

          <div>
            <div className="ds-row">
              <RowLabel label="Card media" />
              <div className="w-full max-w-xl rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
                <AspectRatio ratio={4 / 3}>
                  <MediaPlaceholder
                    icon={<Monitor className="size-5" />}
                    title="Card Cover"
                    subtitle="Media can live directly inside a foundation card without changing the ratio logic."
                  />
                </AspectRatio>
              </div>
            </div>
            <CodeSnippet
              code={`<div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
  <AspectRatio ratio={4 / 3}>{/* media */}</AspectRatio>
</div>`}
            />
          </div>
        </div>
      </Section>

      <Section
        title="Interactive Demo"
        subtitle="Preview ratio, content mode, and dark background"
      >
        <div className="space-y-6">
          <div className="grid gap-4 rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Ratio
              </p>
              <div className="flex flex-wrap gap-2">
                {ratioOptions.map((option) => (
                  <Button
                    key={option.label}
                    variant={ratio.label === option.label ? "default" : "outline"}
                    size="xs"
                    onClick={() => setRatio(option)}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Content
              </p>
              <div className="flex flex-wrap gap-2">
                {contentOptions.map((option) => (
                  <Button
                    key={option}
                    variant={mode === option ? "default" : "outline"}
                    size="xs"
                    onClick={() => setMode(option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
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
              <div className="mx-auto max-w-2xl">
                <AspectRatio ratio={ratio.value}>
                  <MediaPlaceholder
                    icon={preview.icon}
                    title={preview.title}
                    subtitle={preview.subtitle}
                    mode={preview.mode}
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>

        <CodeSnippet
          code={`<AspectRatio ratio={16 / 9}>
  <div className="h-full w-full rounded-none border border-white bg-[#f9f9f9]">
    {/* visual content */}
  </div>
</AspectRatio>`}
        />
      </Section>

      <Section title="Usage" subtitle="Import, props, and implementation notes">
        <div className="space-y-6 text-sm">
          <div>
            <p className="mb-2 font-semibold">Import</p>
            <pre className="overflow-x-auto whitespace-pre border border-black/10 bg-foreground/5 px-4 py-3 text-xs text-foreground/70">{`import { AspectRatio } from "@/components/ui/aspect-ratio"`}</pre>
          </div>

          <div>
            <p className="mb-3 font-semibold">Props</p>
            <div className="flex flex-col gap-2 max-w-2xl">
              {[
                ["ratio", "number", "Required proportion, e.g. 16 / 9 or 4 / 3"],
                ["children", "React.ReactNode", "Media or placeholder content rendered inside the frame"],
                ["className", "string", "Optional layout or spacing overrides"],
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
              <li>Aspect ratio itself is structural, so accessibility depends on the content placed inside it.</li>
              <li>Always provide meaningful alt text for images and descriptive titles for iframes or embedded video.</li>
              <li>Keep the internal media frame aligned to the foundation with <code className="bg-black/5 px-1 py-0.5 text-xs">rounded-none</code>.</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
