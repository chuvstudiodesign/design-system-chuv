import { Separator } from "@/components/ui/separator"

// ── Section wrapper ────────────────────────────────────────────────────────────
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
      <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest w-32 shrink-0">
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

// ── Page ──────────────────────────────────────────────────────────────────────
export default function CardSystemPage() {
  return (
    <div className="ds-page">

      {/* Header */}
      <div className="px-1 mb-2">
        <p className="text-xs font-bold tracking-widest text-primary uppercase mb-2">
          01 — FOUNDATION
        </p>
        <h1 className="ds-page-title">Card System</h1>
        <p className="ds-page-description max-w-xl">
          Como os blocos de conteúdo são construídos dentro dos containers de seção.
          Os cards são a terceira camada da hierarquia visual da Chuv Studio.
        </p>
      </div>

      {/* ── HIERARQUIA ── */}
      <Section
        title="Hierarquia Visual"
        subtitle="Três camadas, sempre nesta ordem"
      >
        <div className="space-y-4 max-w-2xl">
          <p className="text-sm text-foreground/80 leading-relaxed">
            Todo conteúdo real da Chuv Studio passa por três camadas. O <strong>Card System</strong> define
            a terceira — os blocos em neutral gray 50 que vivem dentro dos containers de seção e
            envolvem o conteúdo final.
          </p>

          {/* Camadas */}
          <div className="flex flex-col gap-0">
            {[
              { layer: "01", name: "Base canvas",          color: "#ffffff", border: true,  desc: "Fundo da página — branco puro" },
              { layer: "02", name: "Section container",    color: "#efefef", border: false, desc: "Container de seção — cinza claro, radius 10px" },
              { layer: "03", name: "Card",                 color: "#f9f9f9", border: true,  desc: "Bloco de conteúdo — neutral gray 50, stroke branco, padding 45px, radius 0px" },
            ].map((l) => (
              <div key={l.layer} className="flex items-center gap-4 border-b border-black/8 py-3 last:border-0">
                <span className="text-[10px] font-mono text-primary font-bold w-6 shrink-0">{l.layer}</span>
                <div
                  className="w-8 h-8 shrink-0 border border-black/15"
                  style={{ backgroundColor: l.color }}
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">{l.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{l.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── SPECS ── */}
      <Section
        title="Card Specs"
        subtitle="As regras fixas de todo card"
      >
        <div className="flex flex-col gap-2 max-w-lg">
          <Spec label="Background"    value="#f9f9f9  →  neutral gray 50" />
          <Spec label="Borda"         value="1px solid #ffffff  →  border-white" />
          <Spec label="Corner Radius" value="0px  →  rounded-none  (regra da identidade)" />
          <Spec label="Padding"       value="45px todos os lados  →  p-[var(--card-padding)]" />
          <Spec label="Token"         value="--card-padding: 45px  (globals.css)" />
        </div>
      </Section>

      {/* ── DIAGRAMA ── */}
      <Section
        title="Estrutura Visual"
        subtitle="Diagrama anotado — card dentro do container de seção"
      >
        {/* Section container */}
        <div
          className="rounded-[10px] border border-dashed border-black/20 p-4 sm:p-6 lg:p-8"
          style={{ backgroundColor: "#efefef" }}
        >
          <div className="text-[10px] font-mono text-muted-foreground mb-4">
            Section container — bg #efefef, radius 10px
          </div>

          {/* Card */}
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            {/* Annotations */}
            <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">
                Card
              </span>
              <div className="flex flex-wrap gap-3">
                <Annotation>bg #f9f9f9</Annotation>
                <Annotation>border #ffffff</Annotation>
                <Annotation>radius 0px</Annotation>
                <Annotation>p-[var(--card-padding)]</Annotation>
              </div>
            </div>

            {/* Mock content */}
            <div className="flex flex-col gap-2">
              <div className="h-5 w-1/2 bg-foreground/10" />
              <div className="h-3 w-full bg-foreground/6" />
              <div className="h-3 w-5/6 bg-foreground/6" />
              <div className="h-3 w-4/6 bg-foreground/6" />
              <div className="h-8 w-28 bg-primary/20 mt-2" />
            </div>
          </div>

          {/* Gap annotation */}
          <div className="h-4 flex items-center gap-2 px-1 mt-0">
            <div className="flex-1 border-t border-dashed border-black/20" />
            <span className="text-[10px] font-mono text-muted-foreground shrink-0">gap entre cards — 16px</span>
            <div className="flex-1 border-t border-dashed border-black/20" />
          </div>

          {/* Second card */}
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">
                Card
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-5 w-2/5 bg-foreground/10" />
              <div className="h-3 w-full bg-foreground/6" />
              <div className="h-3 w-3/4 bg-foreground/6" />
            </div>
          </div>
        </div>
      </Section>

      {/* ── PATTERN ── */}
      <Section
        title="Padrão de implementação"
        subtitle="O código Tailwind que todo card deve seguir"
      >
        <div className="space-y-6">
          <div>
            <p className="text-sm font-semibold mb-3">Card básico</p>
            <pre className="bg-foreground/5 border border-black/10 px-4 py-3 text-xs font-mono text-foreground/70 overflow-x-auto whitespace-pre">{`<div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
  {/* conteúdo */}
</div>`}</pre>
          </div>

          <div>
            <p className="text-sm font-semibold mb-3">Cards em grid dentro de uma section</p>
            <pre className="bg-foreground/5 border border-black/10 px-4 py-3 text-xs font-mono text-foreground/70 overflow-x-auto whitespace-pre">{`<section className="rounded-[10px] bg-[#efefef] p-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

    <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
      {/* card 1 */}
    </div>

    <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
      {/* card 2 */}
    </div>

  </div>
</section>`}</pre>
          </div>

          <div>
            <p className="text-sm font-semibold mb-3">Mapa de tokens</p>
            <div className="flex flex-col gap-2 max-w-lg">
              {[
                ["bg-[#f9f9f9]",                "Fundo do card  →  neutral gray 50"],
                ["border-white",                "Stroke branco do card"],
                ["rounded-none",                "Sem radius  →  regra da identidade"],
                ["p-[var(--card-padding)]",      "Padding interno  →  --card-padding (45px)"],
                ["gap-4",                        "Gap entre cards  →  16px"],
              ].map(([token, desc]) => (
                <div key={token} className="flex items-center gap-4 rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
                  <code className="text-xs font-mono text-primary w-52 shrink-0">{token}</code>
                  <span className="text-xs text-muted-foreground">{desc}</span>
                </div>
              ))}
            </div>
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
            ["Sempre neutral gray 50", "O fundo do card é sempre #f9f9f9. O branco puro pertence ao canvas base da página."],
            ["Sempre com stroke branco", "Cards sempre têm border-white. O contraste vem da superfície cinza clara do próprio card."],
            ["Sem corner radius",     "Cards usam rounded-none. A identidade Chuv reserva o radius de 10px exclusivamente para os containers de seção."],
            ["Elementos internos também retos", "Badges, imagens, botões e demais componentes usados dentro da section ou do card também seguem rounded-none."],
            ["Padding consistente",   "Use sempre p-[var(--card-padding)]. Nunca px-6, p-4, ou outros valores ad hoc."],
            ["Gap de 16px",           "Quando múltiplos cards estão lado a lado ou empilhados, o gap entre eles é sempre gap-4 (16px)."],
            ["Não aninhados",         "Cards não contêm outros cards. Hierarquia é: seção → card → conteúdo."],
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

      {/* Footer */}
      <div className="px-1 pt-2 pb-4">
        <p className="text-xs text-muted-foreground">
          Chuv Studio Design System · Foundation: Card System ·{" "}
          <span className="font-mono">neutral gray 50 → border-white → rounded-none → p-[var(--card-padding)]</span>
        </p>
      </div>

    </div>
  )
}
