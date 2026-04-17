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
      className="ds-section"
      style={{ backgroundColor: "#efefef" }}
    >
      <div className="mb-5">
        <h2 className="ds-section-title">{title}</h2>
        {subtitle && (
          <p className="ds-section-subtitle">{subtitle}</p>
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
    <div className="ds-page">

      {/* Header */}
      <div className="px-1 mb-2">
        <p className="text-xs font-bold tracking-widest text-primary uppercase mb-2">
          01 — FOUNDATION
        </p>
        <h1 className="ds-page-title">Section System</h1>
        <p className="ds-page-description max-w-xl">
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
          <div className="flex flex-col gap-0">
            {[
              {
                layer: "01",
                name: "Base canvas",
                color: "#ffffff",
                description:
                  "Branco puro. Nunca usado como superfície de conteúdo. Sempre embaixo.",
              },
              {
                layer: "02",
                name: "Section containers",
                color: "#efefef",
                description:
                  "Cinza claro, radius 10px. Todo o conteúdo vive aqui — diretamente ou dentro de cards.",
              },
              {
                layer: "03",
                name: "Conteúdo interno",
                color: "#f9f9f9",
                description:
                  "Cards, imagens, componentes e qualquer elemento dentro da section usam rounded-none. O radius de 10px pertence exclusivamente ao container de section.",
              },
            ].map((item) => (
              <div
                key={item.layer}
                className="flex items-center gap-4 border-b border-black/8 py-3 last:border-0"
              >
                <span className="w-6 shrink-0 text-[10px] font-mono font-bold text-primary">
                  {item.layer}
                </span>
                <div
                  className="h-8 w-8 shrink-0 border border-black/15"
                  style={{ backgroundColor: item.color }}
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.name}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
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
          <Spec label="Conteúdo interno" value="rounded-none  →  sem corner radius dentro da section" />
        </div>
      </Section>

      {/* ── DIAGRAMA ── */}
      <Section
        title="Estrutura Visual"
        subtitle="Diagrama anotado — como a página se empilha"
      >
        <div
          className="relative flex flex-col border border-dashed border-black/20 p-4"
          style={{ backgroundColor: "#ffffff" }}
        >
          <div className="absolute -top-5 left-0">
            <span className="text-[10px] font-mono text-muted-foreground">Base canvas — #ffffff</span>
          </div>

          {/* Section 1 */}
          <div className="rounded-[10px] p-4 flex flex-col gap-3" style={{ backgroundColor: "#efefef" }}>
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">Section</span>
              <div className="flex flex-wrap gap-3">
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
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">Section</span>
              <div className="flex flex-wrap gap-3">
                <Annotation>bg #efefef</Annotation>
                <Annotation>radius 10px</Annotation>
                <Annotation>p-4</Annotation>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <div className="h-4 w-1/2 bg-foreground/10" />
                <div className="h-3 w-full bg-foreground/6" />
              </div>
              <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
                <div className="h-4 w-3/5 bg-foreground/10" />
                <div className="mt-2 h-3 w-full bg-foreground/6" />
                <div className="mt-2 h-3 w-3/4 bg-foreground/6" />
              </div>
            </div>
          </div>

          <div className="h-4 flex items-center gap-2 px-1">
            <div className="flex-1 border-t border-dashed border-black/20" />
            <span className="text-[10px] font-mono text-muted-foreground shrink-0">gap — 16px</span>
            <div className="flex-1 border-t border-dashed border-black/20" />
          </div>

          {/* Section 3 */}
          <div className="rounded-[10px] p-4 flex flex-col gap-3" style={{ backgroundColor: "#efefef" }}>
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">Section</span>
              <div className="flex flex-wrap gap-3">
                <Annotation>bg #efefef</Annotation>
                <Annotation>radius 10px</Annotation>
                <Annotation>p-4</Annotation>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
                <div className="h-4 w-3/5 bg-foreground/10" />
                <div className="mt-2 h-3 w-full bg-foreground/6" />
                <div className="mt-2 h-3 w-4/5 bg-foreground/6" />
              </div>
              <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
                <div className="h-4 w-1/2 bg-foreground/10" />
                <div className="mt-2 h-3 w-full bg-foreground/6" />
                <div className="mt-2 h-3 w-2/3 bg-foreground/6" />
              </div>
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
      {/* conteúdo direto da section */}
      <h2 className="rounded-none">Título</h2>
      <p className="rounded-none">Texto, imagem ou componente</p>

      <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
        {/* card dentro da section */}
      </div>
    </section>

    <section className="rounded-[10px] bg-[#efefef] p-4">
      <img className="rounded-none" src="/..." alt="" />
    </section>

    <section className="rounded-[10px] bg-[#efefef] p-4">
      <button className="rounded-none">{/* componente */}</button>
    </section>

  </div>
</main>`}</pre>

          <div className="flex flex-col gap-2 max-w-lg">
            {[
              ["bg-white",        "Fundo da página"],
              ["bg-[#efefef]",    "Fundo da section  →  --color-card"],
              ["rounded-[10px]",  "Radius da section  →  --radius"],
              ["rounded-none",    "Regra de qualquer elemento interno à section"],
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
            ["Tudo dentro é reto",        "Cards, imagens, badges, botões e qualquer outro elemento dentro da section usam rounded-none."],
            ["Gap consistente",           "O espaço vertical entre sections é sempre 16px."],
            ["Padding mínimo",            "Sections têm sempre ao menos 16px de padding em todos os lados. Viewports maiores podem ter mais."],
            ["Sem sections aninhadas",    "Sections não contêm outras sections. A hierarquia é: página → section → conteúdos e cards."],
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
            Dentro de cada section podem existir duas coisas ao mesmo tempo:
            <strong> conteúdos diretos</strong> e <strong>cards</strong>. Os
            conteúdos diretos são textos, imagens e componentes que pertencem ao
            assunto da própria section. Os cards entram quando esse assunto
            precisa ser dividido em blocos separados. Em ambos os casos, tudo que
            está dentro da section segue a regra de <strong>rounded-none</strong>.
          </p>

          {/* Hierarquia resumida */}
          <div className="flex flex-col gap-0 max-w-md">
            {[
              { label: "Página",   sub: "bg-white" },
              { label: "Section",  sub: "bg-[#efefef] · rounded-[10px]" },
              { label: "Conteúdos", sub: "texto, componentes, imagens · rounded-none" },
              { label: "Cards",     sub: "bg-[#f9f9f9] · border-white · p-[var(--card-padding)] · rounded-none" },
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
