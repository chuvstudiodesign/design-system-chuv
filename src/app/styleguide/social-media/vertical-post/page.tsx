import {
  Compass,
  Info,
  Layers2,
  MessageSquareQuote,
  Sparkles,
  SquareStack,
  Target,
  WandSparkles,
} from "lucide-react"

import { Badge } from "@/components/badge"
import { Typography } from "@/components/typography"
import { AspectRatio } from "@/components/ui/aspect-ratio"
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
    <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
      <div className="mb-5">
        <h2 className="ds-section-title">{title}</h2>
        {subtitle ? <p className="ds-section-subtitle">{subtitle}</p> : null}
      </div>
      <Separator className="mb-8 bg-black/10" />
      {children}
    </section>
  )
}

function CodeSnippet({ code }: { code: string }) {
  return <pre className="ds-code-snippet">{code}</pre>
}

function PatternCard({
  number,
  title,
  note,
  children,
}: {
  number: string
  title: string
  note: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
            Page {number}
          </p>
          <Typography variant="h4" className="mt-3">
            {title}
          </Typography>
        </div>
        <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-none border border-white bg-white px-3 text-xs font-semibold text-foreground">
          {number}
        </span>
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,380px)_minmax(0,1fr)]">
        <div className="w-full max-w-[380px]">{children}</div>

        <div className="flex flex-col gap-5">
          <div className="rounded-none border border-white bg-white p-[var(--card-padding)]">
            <Typography variant="label-m" className="text-primary">
              Internal Composition
            </Typography>
            <Typography variant="body-s" className="mt-4 text-muted-foreground">
              {note}
            </Typography>
          </div>

          <div className="rounded-none border border-white bg-white p-[var(--card-padding)]">
            <Typography variant="label-m" className="text-primary">
              Social Structure
            </Typography>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
              <li>The post itself behaves like a page with a white base canvas.</li>
              <li>Inside the page, a section container organizes the composition.</li>
              <li>The section can contain both direct content and internal cards.</li>
              <li>Cards still follow neutral gray 50, white stroke, and 45px padding.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function SocialPage({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AspectRatio ratio={9 / 16}>
      <div className="h-full w-full bg-white p-1.5 sm:p-2">
        <div
          className="flex h-full w-full flex-col gap-8 overflow-hidden rounded-[10px] px-8 py-10"
          style={{ backgroundColor: "#efefef" }}
        >
          {children}
        </div>
      </div>
    </AspectRatio>
  )
}

function PostCard({ children, tone = "neutral" }: { children: React.ReactNode; tone?: "neutral" | "white" }) {
  return (
    <div
      className="rounded-none border p-[var(--card-padding)]"
      style={{
        backgroundColor: tone === "white" ? "#ffffff" : "#f9f9f9",
        borderColor: "#ffffff",
      }}
    >
      {children}
    </div>
  )
}

function VisualBlock({
  label,
  tone = "purple",
  compact = false,
}: {
  label: string
  tone?: "purple" | "neutral" | "dark"
  compact?: boolean
}) {
  const background =
    tone === "dark"
      ? "linear-gradient(135deg,#1b003d 0%,#5628e8 100%)"
      : tone === "neutral"
        ? "linear-gradient(135deg,#ffffff 0%,#efefef 100%)"
        : "linear-gradient(135deg,#ede8fd 0%,#5628e8 100%)"

  return (
    <div
      className={compact ? "h-28 rounded-none border border-white p-5" : "h-44 rounded-none border border-white p-5"}
      style={{ background }}
    >
      <div className="flex h-full items-end">
        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/90">
          {label}
        </span>
      </div>
    </div>
  )
}

function ImagePlaceholder({
  label = "Place image here",
  compact = false,
  fill = false,
}: {
  label?: string
  compact?: boolean
  fill?: boolean
}) {
  return (
    <div
      className={[
        "rounded-none border border-dashed border-[var(--brand-primary-300)] bg-white/60 p-5",
        fill ? "min-h-0 flex-1" : compact ? "h-28" : "h-44",
      ].join(" ")}
    >
      <div className="flex h-full items-center justify-center">
        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary-500)]">
          {label}
        </span>
      </div>
    </div>
  )
}

function RealImage({
  src,
  alt,
  compact = false,
  fill = false,
}: {
  src: string
  alt: string
  compact?: boolean
  fill?: boolean
}) {
  return (
    <div
      className={[
        "overflow-hidden rounded-none border border-white bg-white",
        fill ? "min-h-0 flex-1" : compact ? "h-28" : "h-44",
      ].join(" ")}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
      />
    </div>
  )
}

export default function VerticalPostPage() {
  return (
    <div className="ds-page">
      <div className="ds-page-header">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
          03 — SOCIAL MEDIA
        </p>
        <h1 className="ds-page-title">Vertical Post · 5 Pages</h1>
        <p className="ds-page-description">
          Primeiro padrão editorial para social media dentro do design system.
          Agora estruturado como um post-página: base canvas branca, uma section
          interna seguindo o Section System, e conteúdos e cards compondo a narrativa.
        </p>
      </div>

      <Section
        title="Pattern Overview"
        subtitle="O formato agora segue a lógica do sistema: page → section → conteúdos e cards"
      >
        <div className="ds-card-grid-3">
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <Typography variant="label-m" className="text-primary">
              Format
            </Typography>
            <Typography variant="h4" className="mt-4">
              9:16 Vertical Story
            </Typography>
            <Typography variant="body-s" className="mt-4 text-muted-foreground">
              Ideal para stories, reels covers, tall post sequences, and mobile-first editorial formats.
            </Typography>
          </div>

          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <Typography variant="label-m" className="text-primary">
              Internal Logic
            </Typography>
            <div className="mt-4 flex flex-wrap gap-3">
              <Badge variant="outline">Page</Badge>
              <Badge variant="outline">Section</Badge>
              <Badge variant="outline">Content</Badge>
              <Badge variant="outline">Card</Badge>
            </div>
          </div>

          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <Typography variant="label-m" className="text-primary">
              Components Used
            </Typography>
            <div className="mt-4 flex flex-wrap gap-3">
              <Badge variant="outline">Typography</Badge>
              <Badge variant="outline">Badge</Badge>
              <Badge variant="outline">Button</Badge>
              <Badge variant="outline">Aspect Ratio</Badge>
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="5-Page Composition"
        subtitle="Cada página usa a mesma foundation, mas alterna tipos de conteúdo e cards dentro da section"
      >
        <div className="space-y-6">
          <PatternCard
            number="01"
            title="Cover + Context"
            note="This opening page uses direct content inside the section: a badge, a stronger title, and a supporting paragraph. No internal card is needed here."
          >
            <SocialPage>
              <div className="flex items-start justify-between gap-3">
                <Badge variant="tool">Social Pattern</Badge>
                <img
                  src="/social-media/chuv-symbol-black.svg"
                  alt="Chuv symbol"
                  className="h-10 w-10 shrink-0"
                />
              </div>

              <ImagePlaceholder fill />

                <div className="min-w-0">
                  <Typography variant="h2" className="max-w-[16ch] leading-[0.92]">
                    How to make product communication feel clearer
                  </Typography>
                  <Typography variant="body-s" className="mt-3 max-w-[30ch] text-muted-foreground">
                    A reusable mobile-first structure for strategy, visuals, and storytelling rhythm.
                  </Typography>
              </div>
            </SocialPage>
          </PatternCard>

          <PatternCard
            number="02"
            title="Visual First + Supporting Content"
            note="This page combines direct image content with a smaller content card inside the same section. The image leads, the card supports."
          >
            <SocialPage>
              <VisualBlock label="Hero Visual / Campaign Image" tone="purple" />

              <PostCard>
                <Typography variant="h4">One strong image can carry half of the message.</Typography>
                <Typography variant="body-s" className="mt-3 text-muted-foreground">
                  Use the visual as the anchor, then add one short explanation block to complete the frame.
                </Typography>
              </PostCard>
            </SocialPage>
          </PatternCard>

          <PatternCard
            number="03"
            title="Title + Running Text"
            note="This one is content-heavy but still uses the section as the main container. The text block is direct content, not a separate card."
          >
            <SocialPage>
              <div className="flex items-center justify-between gap-3">
                <Badge variant="tool">Insight</Badge>
                <MessageSquareQuote className="size-5 shrink-0 text-primary" />
              </div>

              <div className="min-w-0">
                <Typography variant="h3" className="max-w-[18ch] leading-[0.94]">
                  Good systems shape communication, not only interface decisions
                </Typography>
                <Typography variant="body-s" className="mt-4 text-muted-foreground">
                  When the structure is repeatable, social posts stop behaving like isolated artifacts. They become assets that share the same language, rhythm, and internal hierarchy as the rest of the brand system.
                </Typography>
              </div>

              <ImagePlaceholder fill />
            </SocialPage>
          </PatternCard>

          <PatternCard
            number="04"
            title="Impact Title + Internal Card"
            note="This composition uses a larger direct title in the section, followed by an internal card with a smaller visual and supporting statement."
          >
            <SocialPage>
              <Typography variant="display-l" className="max-w-[10ch] text-balance">
                Structure creates confidence.
              </Typography>

              <PostCard>
                <VisualBlock label="Support Visual" tone="dark" compact />
                <Typography variant="body-s" className="mt-3 text-muted-foreground">
                  Clear composition makes the message feel more deliberate, easier to trust, and more memorable.
                </Typography>
              </PostCard>
            </SocialPage>
          </PatternCard>

          <PatternCard
            number="05"
            title="Closing Page + CTA"
            note="The final page combines direct summary content with a CTA card. This keeps the button grouped with the close-out message while still following the section logic."
          >
            <SocialPage>
              <div className="flex items-center justify-between gap-3">
                <Badge variant="success">Final Slide</Badge>
                <WandSparkles className="size-5 shrink-0 text-primary" />
              </div>

              <div className="min-w-0">
                <Typography variant="h3" className="max-w-[16ch]">
                  Turn social posts into repeatable design assets
                </Typography>
                <div className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <SquareStack className="mt-1 size-4 shrink-0 text-primary" />
                    <span>One system for layout, tone, and pacing.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sparkles className="mt-1 size-4 shrink-0 text-primary" />
                    <span>More consistency across content series and launches.</span>
                  </div>
                </div>
              </div>
            </SocialPage>
          </PatternCard>
        </div>
      </Section>

      <Section
        title="Practical Demo"
        subtitle="Exemplo real de uso do padrão, em stack horizontal, usando a copy sobre Dieter Rams"
      >
        <div className="overflow-x-auto pb-2">
          <div className="flex min-w-max gap-4">
            <div className="w-[320px] shrink-0">
              <SocialPage>
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="tool">
                    <Info className="size-4.5" />
                    Chuv info
                  </Badge>
                  <img
                    src="/social-media/chuv-symbol-black.svg"
                    alt="Chuv symbol"
                    className="h-9 w-9 shrink-0"
                  />
                </div>

                <RealImage
                  fill
                  src="/social-media/dieter-rams-cover.jpg"
                  alt="Dieter Rams with his work"
                />

                <div className="min-w-0">
                  <Typography variant="h1" className="max-w-[14ch] leading-[0.92]">
                    A Apple não inventou essa clareza.
                  </Typography>
                  <Typography variant="body-s" className="mt-3 max-w-[29ch] text-muted-foreground">
                    Ela refinou princípios que Dieter Rams já defendia há décadas.
                  </Typography>
                </div>
              </SocialPage>
            </div>

            <div className="w-[320px] shrink-0">
              <SocialPage>
                <RealImage
                  src="/social-media/dieter-rams-product.jpg"
                  alt="Braun SK 4 product associated with Dieter Rams"
                />

                <PostCard>
                  <Typography variant="h4">
                    Muito do design que hoje parece óbvio nasceu de uma ideia simples:
                  </Typography>
                  <Typography variant="body-s" className="mt-3 text-muted-foreground">
                    menos ruído, mais função.
                  </Typography>
                </PostCard>
              </SocialPage>
            </div>

            <div className="w-[320px] shrink-0">
              <SocialPage>
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="tool">Manifesto</Badge>
                  <MessageSquareQuote className="size-5 shrink-0 text-primary" />
                </div>

                <div className="flex flex-1 flex-col items-start justify-center min-w-0">
                  <Typography variant="h3" className="max-w-[14ch] leading-[0.94]">
                    Dieter Rams resumiu isso em uma frase:
                  </Typography>
                  <Typography variant="display-l" className="mt-4 max-w-[9ch] text-balance leading-[0.9]">
                    Less, but better.
                  </Typography>
                </div>
              </SocialPage>
            </div>

            <div className="w-[320px] shrink-0">
              <SocialPage>
                <Typography variant="display-l" className="max-w-[9ch] text-balance leading-[0.9]">
                  Bom design não é exagero.
                </Typography>

                <PostCard>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Compass className="size-4 shrink-0 text-primary" />
                      <Typography variant="h4">É clareza.</Typography>
                    </div>
                    <div className="flex items-center gap-3">
                      <Target className="size-4 shrink-0 text-primary" />
                      <Typography variant="h4">É utilidade.</Typography>
                    </div>
                    <div className="flex items-center gap-3">
                      <Layers2 className="size-4 shrink-0 text-primary" />
                      <Typography variant="h4">É consistência.</Typography>
                    </div>
                    <div className="flex items-center gap-3">
                      <WandSparkles className="size-4 shrink-0 text-primary" />
                      <Typography variant="h4">É intenção.</Typography>
                    </div>
                  </div>
                </PostCard>
              </SocialPage>
            </div>

            <div className="w-[320px] shrink-0">
              <SocialPage>
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="success">@chuv.studio</Badge>
                  <WandSparkles className="size-5 shrink-0 text-primary" />
                </div>

                <div className="min-w-0">
                  <Typography variant="h3" className="max-w-[16ch] leading-[0.94]">
                    É por isso que esse tipo de design continua atual.
                  </Typography>
                  <Typography variant="body-s" className="mt-4 text-muted-foreground">
                    E é por isso que nós acreditamos nesses princípios.
                  </Typography>
                </div>
              </SocialPage>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
          <Typography variant="label-m" className="text-primary">
            Image Notes
          </Typography>
          <Typography variant="body-s" className="mt-4 text-muted-foreground">
            Demo images use Wikimedia Commons sources for Dieter Rams portrait and Braun product photography, only to simulate a real social media use case inside the design system.
          </Typography>
        </div>
      </Section>

      <Section
        title="Composition Rules"
        subtitle="Use these rules to create new social templates without breaking the foundation"
      >
        <div className="ds-card-grid-2">
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <Typography variant="label-m" className="text-primary">
              What Must Stay Consistent
            </Typography>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
              <li>The post preview always starts with a white page canvas.</li>
              <li>Inside the page, the main section always uses the system light gray and 10px radius.</li>
              <li>Content can live directly in the section or inside cards.</li>
              <li>Internal cards stay neutral gray 50, white stroke, zero radius, and 45px padding.</li>
            </ul>
          </div>

          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <Typography variant="label-m" className="text-primary">
              Recommended Use Cases
            </Typography>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
              <li>Case study excerpts and launch storytelling.</li>
              <li>Process explanations and framework breakdowns.</li>
              <li>Short educational content for product and design audiences.</li>
              <li>Repeatable mobile-first content systems for campaigns.</li>
            </ul>
          </div>
        </div>

        <CodeSnippet
          code={`<div className="bg-white p-4">
  <div className="rounded-[10px] bg-[#efefef] p-4">
    {/* direct content */}

    <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
      {/* optional internal card */}
    </div>
  </div>
</div>`}
        />
      </Section>
    </div>
  )
}
