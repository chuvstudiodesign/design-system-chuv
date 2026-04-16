import { Separator } from "@/components/ui/separator"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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

const faqItems = [
  {
    value: "item-1",
    trigger: "O que é o Design System da Chuv Studio?",
    content:
      "É o conjunto de tokens, componentes e padrões visuais que guiam toda a produção de interfaces da Chuv Studio. Garante consistência entre projetos e acelera o desenvolvimento.",
  },
  {
    value: "item-2",
    trigger: "Como os tokens de cor são aplicados?",
    content:
      "Todos os valores de cor são definidos como variáveis CSS em globals.css e referenciados via classes Tailwind — por exemplo, bg-primary, text-muted-foreground. Nenhuma cor é inserida diretamente no código dos componentes.",
  },
  {
    value: "item-3",
    trigger: "Posso usar múltiplos itens abertos ao mesmo tempo?",
    content:
      'Sim. Defina type="multiple" no componente Accordion. Para permitir apenas um item aberto por vez, use type="single" com a prop collapsible.',
  },
  {
    value: "item-4",
    trigger: "Como estender o Accordion com variantes personalizadas?",
    content:
      "Crie um wrapper em /components/CustomAccordion.tsx que importa os primitivos e aplica classes adicionais via cn(). Evite modificar diretamente os arquivos em /components/ui/.",
  },
]

// ── Page ──────────────────────────────────────────────────────────────────────
export default function AccordionPage() {
  return (
    <div className="flex flex-col gap-3 py-3 lg:gap-4 lg:py-4 lg:pr-4">

      {/* Header */}
      <div className="px-1 mb-2">
        <p className="text-xs font-bold tracking-widest text-primary uppercase mb-2">
          02 — COMPONENTS
        </p>
        <h1 className="text-4xl font-bold text-foreground mb-3">Accordion</h1>
        <p className="text-muted-foreground text-base max-w-xl">
          Seções expansíveis com animação. Construído sobre{" "}
          <code className="text-xs font-mono bg-black/5 px-1 py-0.5">@base-ui/react/accordion</code>.
          Suporta modo single e múltiplo.
        </p>
      </div>

      {/* ── SINGLE ── */}
      <Section
        title="Single"
        subtitle='type="single" — apenas um item aberto por vez, collapsible'
      >
        <div className="max-w-xl rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
          <Accordion type="single" collapsible defaultValue="item-1">
            {faqItems.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger>{item.trigger}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <pre className="mt-6 bg-foreground/5 border border-black/10 px-4 py-3 text-xs font-mono text-foreground/70 overflow-x-auto whitespace-pre">{`<Accordion type="single" collapsible defaultValue="item-1">
  <AccordionItem value="item-1">
    <AccordionTrigger>Título</AccordionTrigger>
    <AccordionContent>Conteúdo</AccordionContent>
  </AccordionItem>
</Accordion>`}</pre>
      </Section>

      {/* ── MULTIPLE ── */}
      <Section
        title="Multiple"
        subtitle='type="multiple" — vários itens abertos simultaneamente'
      >
        <div className="max-w-xl rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
          <Accordion type="multiple" defaultValue={["item-1", "item-3"]}>
            {faqItems.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger>{item.trigger}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <pre className="mt-6 bg-foreground/5 border border-black/10 px-4 py-3 text-xs font-mono text-foreground/70 overflow-x-auto whitespace-pre">{`<Accordion type="multiple" defaultValue={["item-1", "item-3"]}>
  ...
</Accordion>`}</pre>
      </Section>

      {/* ── SEM BORDA ── */}
      <Section
        title="Sem container"
        subtitle="Accordion diretamente sobre o fundo, sem box branca"
      >
        <div className="max-w-xl">
          <Accordion type="single" collapsible>
            {faqItems.slice(0, 3).map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger>{item.trigger}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <pre className="mt-6 bg-foreground/5 border border-black/10 px-4 py-3 text-xs font-mono text-foreground/70 overflow-x-auto whitespace-pre">{`{/* sem wrapper adicional */}
<Accordion type="single" collapsible>
  ...
</Accordion>`}</pre>
      </Section>

      {/* ── USAGE ── */}
      <Section title="Uso" subtitle="Import e props disponíveis">
        <div className="space-y-6 text-sm">

          <div>
            <p className="font-semibold mb-2">Import</p>
            <pre className="bg-foreground/5 border border-black/10 px-4 py-3 text-xs font-mono text-foreground/70 overflow-x-auto whitespace-pre">{`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"`}</pre>
          </div>

          <div>
            <p className="font-semibold mb-3">Props — Accordion</p>
            <div className="flex flex-col gap-2 max-w-xl">
              {[
                ["type",          `"single" | "multiple"`,       "Modo de abertura"],
                ["collapsible",   "boolean",                      'Permite fechar o item aberto (só com type="single")'],
                ["defaultValue",  "string | string[]",            "Item(s) aberto(s) por padrão (não controlado)"],
                ["value",         "string | string[]",            "Item(s) aberto(s) (controlado)"],
                ["onValueChange", "(value) => void",              "Callback ao mudar seleção"],
              ].map(([prop, type, desc]) => (
                <div key={prop} className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
                  <p className="font-mono text-xs text-primary font-semibold">{prop}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{type}</p>
                  <p className="text-[11px] text-muted-foreground/70 mt-1">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold mb-2">Acessibilidade</p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Triggers são elementos <code className="font-mono text-xs bg-black/5 px-1 py-0.5">button</code> — navegáveis por teclado</li>
              <li><kbd className="font-mono text-xs bg-black/5 px-1 py-0.5">Enter</kbd> / <kbd className="font-mono text-xs bg-black/5 px-1 py-0.5">Space</kbd> abrem e fecham o item focado</li>
              <li><kbd className="font-mono text-xs bg-black/5 px-1 py-0.5">Tab</kbd> move o foco entre triggers</li>
              <li>ARIA <code className="font-mono text-xs bg-black/5 px-1 py-0.5">aria-expanded</code> e <code className="font-mono text-xs bg-black/5 px-1 py-0.5">aria-controls</code> aplicados automaticamente</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <div className="px-1 pt-2 pb-4">
        <p className="text-xs text-muted-foreground">
          Chuv Studio Design System · Component:{" "}
          <span className="font-mono">accordion.tsx</span> ·{" "}
          <span className="font-mono">@base-ui/react/accordion</span>
        </p>
      </div>

    </div>
  )
}
