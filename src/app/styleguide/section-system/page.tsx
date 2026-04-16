import Link from "next/link"
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
        {subtitle && (
          <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        )}
      </div>
      <Separator className="mb-8 bg-black/10" />
      {children}
    </section>
  )
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
      <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest w-28 shrink-0">
        {label}
      </span>
      <code className="text-xs font-mono text-primary">{value}</code>
    </div>
  )
}

function Annotation({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-3 h-px bg-foreground/30" />
      <span className="text-[11px] font-mono text-muted-foreground">{children}</span>
    </div>
  )
}

export default function SectionSystemPage() {
  return (
    <div className="flex flex-col gap-3 py-3 lg:gap-4 lg:py-4 lg:pr-4">

      {/* Header */}
      <div className="px-1 mb-2">
        <p className="text-xs font-bold tracking-widest text-primary uppercase mb-2">
          01 — FOUNDATION
        </p>
        <h1 className="text-4xl font-bold text-foreground mb-3">Section System</h1>
        <p className="text-muted-foreground text-base max-w-xl">
          Como toda página da Chuv Studio é construída — a camada estrutural
          que define o fundo base e os containers de seção empilhados sobre ele.
        </p>
      </div>

      {/* ── PRINCÍPIO ── */}
      <Section
        title="Princípio"
        subtitle="Duas camadas, sempre nesta ordem"
      >
        <div className="space-y-6 max-w-2xl">
          <p className="text-sm text-foreground/80 leading-relaxed">
            Toda página é construída a partir de exatamente duas camadas. A camada
            inferior é sempre um <strong>canvas branco puro</strong>. Sobre esse canvas
            empilhamos os <strong>containers de seção</strong> — blocos retangulares com
            cor de fundo, radius e padding fixos. Todo o conteúdo real vive dentro
            desses containers. Nada significativo fica diretamente sobre o branco.
          </p>
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-start gap-4">
              <div className="mt-0.5 w-4 h-4 shrink-0 border border-black/20" style={{ backgroundColor: "#ffffff" }} />
              <div>
                <p className="font-semibold text-foreground">Camada 1 — Base canvas</p>
                <p className="text-muted-foreground text-xs mt-0.5">Branco puro. Nunca usado como superfície de conteúdo. Sempre embaixo.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-0.5 w-4 h-4 shrink-0 border border-black/10" style={{ backgroundColor: "#efefef" }} />
              <div>
                <p className="font-semibold text-foreground">Camada 2 — Section containers</p>
                <p className="text-muted-foreground text-xs mt-0.5">Cinza claro, radius 10px. Todo o conteúdo vive aqui — diretamente ou dentro de cards.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── SPECS ── */}
      <Section
        title="Section Specs"
        subtitle="As regras fixas de todo container de seção"
      >
        <div className="flex flex-col gap-2 max-w-lg">
          <Spec label="Background"     value="#efefef  →  section container" />
          <Spec label="Corner Radius"  value="10px  →  rounded-[10px]" />
          <Spec label="Padding"        value="16px mínimo  →  p-4" />
          <Spec label="Gap (vertical)" value="16px entre sections  →  gap-4" />
          <Spec label="Base canvas"    value="#ffffff  →  --color-background" />
        </div>
      </Section>

      {/* ── DIAGRAMA ── */}
      <Section
        title="Estrutura Visual"
        subtitle="Diagrama anotado — como a página se empilha"
      >
        <div
          className="relative border border-dashed border-black/20 p-4 flex flex-col"
          style={{ backgroundColor: "#ffffff" }}
        >
          <div className="absolute -top-5 left-0">
            <span className="text-[10px] font-mono text-muted-foreground">Base canvas — #ffffff</span>
          </div>

          {/* Section 1 */}
          <div className="rounded-[10px] p-4 flex flex-col gap-3" style={{ backgroundColor: "#efefef" }}>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">Section</span>
              <div className="flex gap-3">
                <Annotation>bg #efefef</Annotation>
                <Annotation>radius 10px</Annotation>
                <Annotation>p-4</Annotation>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-4 w-2/3 bg-foreground/10" />
              <div className="h-3 w-full bg-foreground/6" />
              <div className="h-3 w-5/6 bg-foreground/6" />
            </div>
          </div>

          <div className="h-4 flex items-center gap-2 px-1">
            <div className="flex-1 border-t border-dashed border-black/20" />
            <span className="text-[10px] font-mono text-muted-foreground shrink-0">gap — 16px</span>
            <div className="flex-1 border-t border-dashed border-black/20" />
          </div>

          {/* Section 2 */}
          <div className="rounded-[10px] p-4 flex flex-col gap-3" style={{ backgroundColor: "#efefef" }}>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">Section</span>
              <div className="flex gap-3">
                <Annotation>bg #efefef</Annotation>
                <Annotation>radius 10px</Annotation>
                <Annotation>p-4</Annotation>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-4 w-1/2 bg-foreground/10" />
              <div className="h-3 w-full bg-foreground/6" />
              <div className="h-3 w-3/4 bg-foreground/6" />
            </div>
          </div>

          <div className="h-4 flex items-center gap-2 px-1">
            <div className="flex-1 border-t border-dashed border-black/20" />
            <span className="text-[10px] font-mono text-muted-foreground shrink-0">gap — 16px</span>
            <div className="flex-1 border-t border-dashed border-black/20" />
          </div>

          {/* Section 3 */}
          <div className="rounded-[10px] p-4 flex flex-col gap-3" style={{ backgroundColor: "#efefef" }}>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">Section</span>
              <div className="flex gap-3">
                <Annotation>bg #efefef</Annotation>
                <Annotation>radius 10px</Annotation>
                <Annotation>p-4</Annotation>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-4 w-3/5 bg-foreground/10" />
              <div className="h-3 w-full bg-foreground/6" />
              <div className="h-3 w-4/5 bg-foreground/6" />
            </div>
          </div>
        </div>
      </Section>

      {/* ── PATTERN ── */}
      <Section
        title="Padrão de implementação"
        subtitle="O código Tailwind que toda página segue"
      >
        <div className="space-y-6">
          <pre className="bg-foreground/5 border border-black/10 px-4 py-3 text-xs font-mono text-foreground/70 overflow-x-auto whitespace-pre">{`<main className="min-h-screen bg-white">
  <div className="flex flex-col gap-4 p-4">

    <section className="rounded-[10px] bg-[#efefef] p-4">
      {/* primeira section */}
    </section>

    <section className="rounded-[10px] bg-[#efefef] p-4">
      {/* segunda section */}
    </section>

    <section className="rounded-[10px] bg-[#efefef] p-4">
      {/* terceira section */}
    </section>

  </div>
</main>`}</pre>

          <div className="flex flex-col gap-2 max-w-lg">
            {[
              ["bg-white",        "Fundo da página"],
              ["bg-[#efefef]",    "Fundo da section  →  --color-card"],
              ["rounded-[10px]",  "Radius da section  →  --radius"],
              ["p-4",             "Padding mínimo interno  →  16px"],
              ["gap-4",           "Gap entre sections  →  16px"],
            ].map(([token, desc]) => (
              <div key={token} className="flex items-center gap-4 rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
                <code className="text-xs font-mono text-primary w-36 shrink-0">{token}</code>
                <span className="text-xs text-muted-foreground">{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── REGRAS ── */}
      <Section
        title="Regras"
        subtitle="Restrições não negociáveis"
      >
        <ol className="flex flex-col gap-4 max-w-xl">
          {[
            ["Base sempre branca",        "O fundo da página é sempre #ffffff. Nunca use cor ou padrão no base."],
            ["Conteúdo dentro da section","Nada significativo fica diretamente sobre o branco. Tudo vive dentro de uma section."],
            ["Radius único",              "Sections usam sempre exatamente 10px de corner radius. Nenhuma exceção."],
            ["Gap consistente",           "O espaço vertical entre sections é sempre 16px."],
            ["Padding mínimo",            "Sections têm sempre ao menos 16px de padding em todos os lados. Viewports maiores podem ter mais."],
            ["Sem sections aninhadas",    "Sections não contêm outras sections. A hierarquia é: página → section → cards → conteúdo."],
          ].map(([title, body], i) => (
            <li key={title as string} className="flex gap-4">
              <span className="text-[10px] font-mono text-primary font-bold mt-0.5 w-4 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">{title as string}</p>
                <p className="text-sm text-muted-foreground mt-0.5">{body as string}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* ── CARD SYSTEM ── */}
      <Section
        title="Conteúdo interno — Card System"
        subtitle="O que vive dentro das sections"
      >
        <div className="space-y-5 max-w-2xl">
          <p className="text-sm text-foreground/80 leading-relaxed">
            Dentro de cada section, o conteúdo pode ser colocado diretamente ou
            agrupado em <strong>cards</strong> — blocos em neutral gray 50 com stroke
            branco, sem radius
            e com padding padronizado. Os cards são a terceira camada da hierarquia
            visual e têm suas próprias regras de construção.
          </p>

          {/* Hierarquia resumida */}
          <div className="flex flex-col gap-0 max-w-sm">
            {[
              { label: "Página",   sub: "bg-white" },
              { label: "Section",  sub: "bg-[#efefef] · rounded-[10px]" },
              { label: "Card",     sub: "bg-[#f9f9f9] · border-white · p-[var(--card-padding)]" },
              { label: "Conteúdo", sub: "texto, componentes, imagens" },
            ].map((item, i, arr) => (
              <div key={item.label} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 bg-primary mt-1 shrink-0" />
                  {i < arr.length - 1 && <div className="w-px flex-1 bg-primary/20 my-1" />}
                </div>
                <div className="pb-3">
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <code className="text-[11px] font-mono text-muted-foreground">{item.sub}</code>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/styleguide/card-system"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4"
          >
            Ver Card System completo →
          </Link>
        </div>
      </Section>

      {/* Footer */}
      <div className="px-1 pt-2 pb-4">
        <p className="text-xs text-muted-foreground">
          Chuv Studio Design System · Foundation: Section System ·{" "}
          <span className="font-mono">bg-white → section #efefef → card #f9f9f9</span>
        </p>
      </div>

    </div>
  )
}
