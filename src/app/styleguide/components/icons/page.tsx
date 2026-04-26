import {
  ICON_COLOR,
  ICON_LIBRARY,
} from "@/lib/site-sections/icon-library"
import { Separator } from "@/components/ui/separator";

// ── Sistema de escala proporcional ────────────────────────────────────────────
//
// REGRA DE OURO: nunca defina uma altura/largura fixa igual para todos os
// ícones. Cada ícone tem dimensões originais diferentes no Figma (desenhadas
// na proporção correta para cada forma). Aplicar height: 30px a todos faz com
// que ícones originalmente mais baixos apareçam maiores, quebrando a harmonia
// visual e o peso de linha uniforme.
//
// SOLUÇÃO — fator de escala único (SCALE):
//   scale = tamanhoDesejado / dimensaoFigmaDeReferencia
//   displayWidth  = figmaWidth  × scale
//   displayHeight = figmaHeight × scale
//
// Defina o tamanho para UM ícone, calcule o scale, e aplique a todos.
// Assim o peso de linha e as proporções relativas são preservados.
//
// Exemplo (usado nesta página):
//   Calendar tem 374.1px de largura no Figma.
//   Queremos exibi-lo com ~37px de largura → scale = 37 / 374.1 ≈ 0.099
//   Aplicando 0.099 a todos:
//     Calendar   374.1 × 348.3  →  37 × 35 px
//     Celular    219   × 328    →  22 × 33 px  ← mais estreito (correto)
//     Filmadora  453   × 296    →  45 × 30 px  ← mais largo (correto)

const SCALE = 37 / 374.1; // ≈ 0.099 — referência: Calendar com 37px de largura (50% do display anterior)

// ── Section wrapper ────────────────────────────────────────────────────────────
function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
      <div className="mb-5">
        <h2 className="ds-section-title">{title}</h2>
        {subtitle && <p className="ds-section-subtitle">{subtitle}</p>}
      </div>
      <Separator className="mb-8 bg-black/10" />
      {children}
    </section>
  );
}

// ── Card de ícone — tamanho fixo e uniforme ────────────────────────────────────
const CARD_SIZE = 152; // px — largura e altura idênticas (card quadrado)
const ICON_AREA_H = 80; // px — altura reservada para o ícone, alinhado à base

function IconCard({ icon }: { icon: (typeof ICON_LIBRARY)[number] }) {
  const w = Math.round(icon.fw * SCALE);
  const h = Math.round(icon.fh * SCALE);

  return (
    <div
      className="rounded-none border border-white bg-[#f9f9f9] flex flex-col items-center"
      style={{ width: CARD_SIZE, height: CARD_SIZE, padding: 16 }}
    >
      {/* Área do ícone — altura fixa, ícone alinhado à base */}
      <div
        className="flex items-end justify-center w-full"
        style={{ height: ICON_AREA_H, flexShrink: 0 }}
      >
        <div
          role="img"
          aria-label={icon.name}
          style={{
            width: w,
            height: h,
            flexShrink: 0,
            backgroundColor: ICON_COLOR,
            maskImage: `url(${icon.src})`,
            WebkitMaskImage: `url(${icon.src})`,
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
          }}
        />
      </div>

      {/* Nome do ícone — separado da área do ícone */}
      <div className="flex items-center justify-center" style={{ flex: 1, paddingTop: 8 }}>
        <p
          className="font-mono text-center text-foreground/50 leading-snug"
          style={{ fontSize: 9 }}
        >
          {icon.name}
        </p>
      </div>
    </div>
  );
}

// ── Bloco de código ────────────────────────────────────────────────────────────
function CodeSnippet({ code }: { code: string }) {
  return (
    <pre className="mt-3 bg-foreground/5 border border-black/10 px-4 py-3 text-xs font-mono text-foreground/70 overflow-x-auto whitespace-pre">
      {code}
    </pre>
  );
}

// ── Tabela de referência de dimensões ─────────────────────────────────────────
const REFERENCE_ICONS = [
  { name: "Calendar",   fw: 374.1, fh: 348.3 },
  { name: "Celular",    fw: 219,   fh: 328   },
  { name: "Filmadora",  fw: 453,   fh: 296   },
  { name: "3D",         fw: 412.1, fh: 410   },
  { name: "Email",      fw: 373,   fh: 274   },
];

// ── Page ──────────────────────────────────────────────────────────────────────
export default function IconsPage() {
  return (
    <div className="ds-page">
      {/* Header */}
      <div className="px-1 mb-2">
        <p className="text-xs font-bold tracking-widest text-primary uppercase mb-2">
          02 — COMPONENTS
        </p>
        <h1 className="ds-page-title">Ícones</h1>
        <p className="ds-page-description max-w-xl">
          Biblioteca de ícones custom do Chuv Studio. Cada ícone mantém suas
          proporções originais do Figma via fator de escala único — largura,
          altura e peso de linha são preservados em qualquer tamanho de exibição.
        </p>
      </div>

      {/* ── BIBLIOTECA ── */}
      <Section
        title="Biblioteca"
        subtitle={`${ICON_LIBRARY.length} ícones · escala unificada ${(SCALE * 100).toFixed(1)}% das dimensões Figma · referência: Calendar 37px de largura`}
      >
        {/* Grid uniforme: colunas de CARD_SIZE px, preenchimento automático */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(auto-fill, ${CARD_SIZE}px)`,
            gap: 12,
          }}
        >
          {ICON_LIBRARY.map((icon) => (
            <IconCard key={icon.name} icon={icon} />
          ))}
        </div>
      </Section>

      {/* ── COMO USAR ── */}
      <Section
        title="Como Usar os Ícones"
        subtitle="Sistema de escala proporcional — leia antes de implementar"
      >
        <div className="space-y-4">

          {/* O problema */}
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <p className="font-mono text-xs text-primary font-semibold mb-2">O problema: altura fixa igual para todos</p>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Os ícones do Chuv Studio <strong>não têm as mesmas dimensões entre si</strong> — cada
              símbolo foi desenhado na proporção ideal para a sua forma. Aplicar{" "}
              <code className="text-xs font-mono bg-black/5 px-1 py-0.5">height: 30px</code> a todos
              os ícones faz com que aqueles com menor altura original no Figma apareçam
              visualmente maiores que os demais, quebrando a harmonia e o peso de linha uniforme.
            </p>
            <CodeSnippet code={
`/* ❌ ERRADO — cada ícone fica em uma escala diferente */
<img src={iconCalendar}  height={30} />   /* Calendar:  373px → 30px (escala 0.080) */
<img src={iconCelular}   height={30} />   /* Celular:   328px → 30px (escala 0.091) ← aparece maior */
<img src={iconFilmadora} height={30} />   /* Filmadora: 296px → 30px (escala 0.101) ← aparece ainda maior */`
            } />
          </div>

          {/* A solução */}
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <p className="font-mono text-xs text-primary font-semibold mb-2">A solução: fator de escala único (scale factor)</p>
            <p className="text-sm text-foreground/70 leading-relaxed mb-3">
              Defina o tamanho desejado para <strong>um único ícone de referência</strong>,
              calcule o fator, e aplique o mesmo fator a todos os outros.
              Assim o peso de linha e as proporções relativas permanecem idênticos.
            </p>
            <CodeSnippet code={
`/* ✅ CORRETO — um único scale aplicado a todos */

const SCALE = 37 / 374.1;   /* referência: Calendar com 37px de largura */
                              /* SCALE ≈ 0.0989 */

/* Cada ícone recebe suas próprias dimensões calculadas: */
/* displayWidth  = figmaWidth  × SCALE                   */
/* displayHeight = figmaHeight × SCALE                   */

<img src={iconCalendar}  width={374.1 * SCALE} height={348.3 * SCALE} />  /* 37 × 35 px */
<img src={iconCelular}   width={219   * SCALE} height={328   * SCALE} />  /* 22 × 33 px ← mais estreito */
<img src={iconFilmadora} width={453   * SCALE} height={296   * SCALE} />  /* 45 × 30 px ← mais largo   */`
            } />
          </div>

          {/* Tabela de referência */}
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <p className="font-mono text-xs text-primary font-semibold mb-3">
              Dimensões de referência — escala atual ({(SCALE * 100).toFixed(1)}%)
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs font-mono">
                <thead>
                  <tr className="border-b border-black/10">
                    <th className="text-left pb-2 font-semibold text-foreground/60 pr-6">Ícone</th>
                    <th className="text-right pb-2 font-semibold text-foreground/60 pr-6">Figma W</th>
                    <th className="text-right pb-2 font-semibold text-foreground/60 pr-6">Figma H</th>
                    <th className="text-right pb-2 font-semibold text-foreground/60 pr-6">Display W</th>
                    <th className="text-right pb-2 font-semibold text-foreground/60">Display H</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5">
                  {REFERENCE_ICONS.map((ic) => (
                    <tr key={ic.name}>
                      <td className="py-2 pr-6 text-foreground/80">{ic.name}</td>
                      <td className="py-2 pr-6 text-right text-foreground/50">{ic.fw}px</td>
                      <td className="py-2 pr-6 text-right text-foreground/50">{ic.fh}px</td>
                      <td className="py-2 pr-6 text-right text-primary font-semibold">{Math.round(ic.fw * SCALE)}px</td>
                      <td className="py-2 text-right text-primary font-semibold">{Math.round(ic.fh * SCALE)}px</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-muted-foreground mt-3">
              Para usar em outro tamanho: calcule{" "}
              <code className="bg-black/5 px-1 py-0.5">SCALE = larguraDesejada / figmaWidth</code>{" "}
              usando qualquer ícone como referência, e aplique a todos.
            </p>
          </div>

          {/* Resumo */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              ["Regra",    "Um único SCALE para toda a biblioteca"],
              ["Referência atual", `Calendar → 37px de largura`],
              ["SCALE atual",  `${(SCALE).toFixed(4)} (${(SCALE * 100).toFixed(1)}%)`],
            ].map(([label, value]) => (
              <div
                key={label as string}
                className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]"
              >
                <p className="font-mono text-xs text-primary font-semibold">{label as string}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{value as string}</p>
              </div>
            ))}
          </div>

        </div>
      </Section>

      {/* Footer */}
      <div className="px-1 pt-2 pb-4">
        <p className="text-xs text-muted-foreground">
          Chuv Studio Design System · Ícones custom · Exportados via Figma MCP ·{" "}
          <span className="font-mono">SCALE = {SCALE.toFixed(4)}</span>
        </p>
      </div>
    </div>
  );
}
