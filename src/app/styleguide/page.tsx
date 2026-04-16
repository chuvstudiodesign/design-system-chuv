import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { Typography } from "@/components/typography";

// ── Color swatch ──────────────────────────────────────────────────────────────
function ColorSwatch({
  name,
  value,
  textDark = false,
}: {
  name: string;
  value: string;
  textDark?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="h-16 w-16 border border-white sm:h-[4.5rem] sm:w-[4.5rem] md:h-[5.5rem] md:w-[5.5rem]"
        style={{ backgroundColor: value }}
      />
      <div>
        <p className={`text-xs font-medium ${textDark ? "text-foreground" : "text-foreground"}`}>
          {name}
        </p>
        <p className="text-[11px] text-muted-foreground font-mono">{value}</p>
      </div>
    </div>
  );
}

// ── Section wrapper ───────────────────────────────────────────────────────────
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
      <Separator className="mb-6 bg-black/10" />
      {children}
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function StyleguidePage() {
  const primaryScale = [
    { name: "50", value: "#f5f2ff" },
    { name: "100", value: "#ede8fd" },
    { name: "200", value: "#d4c5fa" },
    { name: "300", value: "#b9a0f8" },
    { name: "400", value: "#9f78f7" },
    { name: "500", value: "#5628e8" },
    { name: "600", value: "#4820cc" },
    { name: "700", value: "#3818a8" },
    { name: "800", value: "#281080" },
    { name: "900", value: "#1b003d" },
  ];

  const neutralScale = [
    { name: "50",  value: "#f9f9f9" },
    { name: "100", value: "#efefef" },
    { name: "200", value: "#e0e0e0" },
    { name: "300", value: "#c4c4c4" },
    { name: "400", value: "#ababab" },
    { name: "500", value: "#878787" },
    { name: "600", value: "#636363" },
    { name: "700", value: "#595959" },
    { name: "800", value: "#545454" },
    { name: "900", value: "#111111" },
  ];

  const semanticColors = [
    { name: "Success", value: "#22c55e" },
    { name: "Warning", value: "#f59e0b" },
    { name: "Error",   value: "#ef4444" },
    { name: "Info",    value: "#3b82f6" },
  ];

  return (
    <div className="ds-page">
      {/* Header */}
      <div className="px-1 mb-2">
        <p className="text-xs font-bold tracking-widest text-primary uppercase mb-2">
          01 — FOUNDATION
        </p>
        <h1 className="ds-page-title">
          Design Tokens
        </h1>
        <p className="ds-page-description max-w-xl">
          Todos os tokens de design da Chuv Studio, extraídos diretamente do
          arquivo Figma{" "}
          <span className="font-medium text-foreground">
            Design Chuv Studio 2.0
          </span>
          .
        </p>
      </div>

      {/* ── COLORS ── */}
      <Section
        title="Color Palette"
        subtitle="Paleta de cores completa derivada da identidade visual da Chuv Studio"
      >
        <div className="space-y-10">
          {/* Primary */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Primary — Purple
            </h3>
            <div className="flex flex-wrap gap-4">
              {primaryScale.map((c) => (
                <ColorSwatch key={c.name} name={c.name} value={c.value} />
              ))}
            </div>
          </div>

          {/* Neutral */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Neutral — Gray
            </h3>
            <div className="flex flex-wrap gap-4">
              {neutralScale.map((c) => (
                <ColorSwatch key={c.name} name={c.name} value={c.value} />
              ))}
            </div>
          </div>

          {/* Semantic */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Semantic
            </h3>
            <div className="flex flex-wrap gap-4">
              {semanticColors.map((c) => (
                <ColorSwatch key={c.name} name={c.name} value={c.value} />
              ))}
            </div>
          </div>

          {/* System tokens */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              System Tokens (CSS Variables)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              {[
                ["--background", "#ffffff"],
                ["--foreground", "#111111"],
                ["--card", "#f9f9f9"],
                ["--primary", "#5628e8"],
                ["--primary-foreground", "#ffffff"],
                ["--secondary", "#efefef"],
                ["--muted", "#f5f5f5"],
                ["--muted-foreground", "#595959"],
                ["--accent", "#f5f2ff"],
                ["--border", "#e0e0e0"],
                ["--ring", "#5628e8"],
                ["--destructive", "#ef4444"],
              ].map(([name, val]) => (
                <div
                  key={name}
                  className="flex items-center justify-between rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]"
                >
                  <code className="text-xs text-primary font-mono">{name}</code>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-4 h-4 border border-[#e0e0e0]"
                      style={{ backgroundColor: val }}
                    />
                    <span className="text-xs text-muted-foreground font-mono">
                      {val}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── TYPOGRAPHY ── */}
      <Section
        title="Typography"
        subtitle="Escala tipográfica · Fonte primária: Inter (sistema) / Neue Haas Unica Pro (marca)"
      >
        <div className="space-y-6">
          {[
            { label: "Display XL", size: "text-7xl", weight: "font-bold",      sample: "Comunicação Visual" },
            { label: "Display L",  size: "text-5xl", weight: "font-bold",      sample: "Chuv Studio" },
            { label: "Heading H1", size: "text-4xl", weight: "font-bold",      sample: "Design de Experiência" },
            { label: "Heading H2", size: "text-3xl", weight: "font-bold",      sample: "Identidade de Marca" },
            { label: "Heading H3", size: "text-2xl", weight: "font-semibold",  sample: "Serviços de Design" },
            { label: "Heading H4", size: "text-xl",  weight: "font-semibold",  sample: "Direção Visual e Estratégia" },
            { label: "Body XL",    size: "text-xl",  weight: "font-normal",    sample: "Quando estratégia e design atuam juntos, algo poderoso acontece." },
            { label: "Body M",     size: "text-base",weight: "font-normal",    sample: "Somos multidisciplinares, oferecendo estratégias sólidas e experiências surreais." },
            { label: "Body S",     size: "text-sm",  weight: "font-normal",    sample: "Toda grande ideia começa com uma conversa." },
            { label: "Label M",    size: "text-sm",  weight: "font-medium",    sample: "ENVIAR · CONTATO · SAIBA MAIS" },
            { label: "Caption",    size: "text-xs",  weight: "font-normal",    sample: "Design by Italy · Chuv Studio © 2025 · id@chuv.studio" },
          ].map((t) => (
            <div key={t.label} className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4 md:gap-8">
              <div className="w-20 md:w-28 shrink-0">
                <span className="text-[10px] md:text-xs font-medium text-primary">{t.label}</span>
              </div>
              <Typography
                variant={
                  t.label === "Display XL"
                    ? "display-xl"
                    : t.label === "Display L"
                      ? "display-l"
                      : t.label === "Heading H1"
                        ? "h1"
                        : t.label === "Heading H2"
                          ? "h2"
                          : t.label === "Heading H3"
                            ? "h3"
                            : t.label === "Heading H4"
                              ? "h4"
                              : t.label === "Body XL"
                                ? "body-xl"
                                : t.label === "Body M"
                                  ? "body-m"
                                  : t.label === "Body S"
                                    ? "body-s"
                                    : t.label === "Label M"
                                      ? "label-m"
                                      : "caption"
                }
                className="truncate"
              >
                {t.sample}
              </Typography>
            </div>
          ))}
        </div>
      </Section>

      {/* ── SPACING ── */}
      <Section
        title="Spacing — 8pt Grid"
        subtitle="Sistema de espaçamento baseado em múltiplos de 8px"
      >
        <div className="flex flex-wrap items-end gap-6">
          {[
            { name: "2",  px: 2  },
            { name: "4",  px: 4  },
            { name: "8",  px: 8  },
            { name: "12", px: 12 },
            { name: "16", px: 16 },
            { name: "24", px: 24 },
            { name: "32", px: 32 },
            { name: "40", px: 40 },
            { name: "48", px: 48 },
            { name: "64", px: 64 },
            { name: "80", px: 80 },
            { name: "96", px: 96 },
          ].map((s) => (
            <div key={s.name} className="flex flex-col items-center gap-2">
              <div
                className="w-6 bg-primary"
                style={{ height: `${s.px}px` }}
              />
              <span className="text-xs text-muted-foreground">{s.name}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── RADIUS ── */}
      <Section
        title="Border Radius"
        subtitle="Estilo: levemente arredondado — 10px nas seções, herança do Figma 2.0"
      >
        <div className="flex flex-wrap gap-6 items-center">
          {[
            { name: "None",    cls: "rounded-none" },
            { name: "XS / 4", cls: "rounded" },
            { name: "S / 8",  cls: "rounded-lg" },
            { name: "M / 10", cls: "rounded-[10px]" },
            { name: "L / 16", cls: "rounded-2xl" },
            { name: "XL / 24",cls: "rounded-3xl" },
            { name: "Full",   cls: "rounded-full" },
          ].map((r) => (
            <div key={r.name} className="flex flex-col items-center gap-3">
              <div
                className={`h-16 w-16 border border-white bg-[#f9f9f9] ${r.cls}`}
              />
              <span className="text-xs text-muted-foreground">{r.name}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── SHADOWS ── */}
      <Section title="Shadows & Elevation">
        <div className="flex flex-wrap items-center gap-6 sm:gap-8">
          {[
            { name: "XS",  cls: "shadow-xs" },
            { name: "S",   cls: "shadow-sm" },
            { name: "M",   cls: "shadow-md" },
            { name: "L",   cls: "shadow-lg" },
            { name: "XL",  cls: "shadow-xl" },
            { name: "2XL", cls: "shadow-2xl" },
          ].map((s) => (
            <div key={s.name} className="flex flex-col items-center gap-3">
              <div
                className={`h-20 w-20 border border-white bg-[#f9f9f9] ${s.cls}`}
              />
              <span className="text-xs text-muted-foreground">Shadow {s.name}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── COMPONENTS PREVIEW ── */}
      <Section
        title="Components Preview"
        subtitle="Amostra dos componentes usando os tokens da Chuv Studio"
      >
        <div className="space-y-10">
          {/* Buttons */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Buttons</h3>
            <div className="flex flex-wrap gap-3 items-center">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button disabled>Disabled</Button>
              <Button size="sm">Small</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          {/* Badges */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Badges</h3>
            <div className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </div>

          {/* Cards */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Card</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              <Card className="rounded-none border border-white bg-card ring-0">
                <CardHeader className="pt-[var(--card-padding)] px-[var(--card-padding)] pb-4">
                  <Badge className="rounded-none w-fit mb-2">Design</Badge>
                  <CardTitle>Identidade Visual</CardTitle>
                </CardHeader>
                <CardContent className="px-[var(--card-padding)] pb-[var(--card-padding)] pt-0">
                  <p className="text-sm text-muted-foreground">
                    Criamos identidades visuais memoráveis com propósito estratégico e estética premium.
                  </p>
                  <Button variant="ghost" size="sm" className="rounded-none mt-4 -ml-3 text-primary">
                    Ver mais →
                  </Button>
                </CardContent>
              </Card>
              <Card className="rounded-none bg-primary text-primary-foreground border border-white">
                <CardHeader className="pt-[var(--card-padding)] px-[var(--card-padding)] pb-4">
                  <Badge variant="outline" className="rounded-none w-fit mb-2 border-white/30 text-white">
                    Premium
                  </Badge>
                  <CardTitle>Direção Visual</CardTitle>
                </CardHeader>
                <CardContent className="px-[var(--card-padding)] pb-[var(--card-padding)] pt-0">
                  <p className="text-sm text-primary-foreground/70">
                    Estratégia visual completa para marcas que querem se destacar no mercado global.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-none mt-4 border-white/30 text-white hover:bg-white/10 bg-transparent"
                  >
                    Ver mais →
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Alerts */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Alerts</h3>
            <div className="space-y-3 max-w-xl">
              <Alert className="rounded-none border-white bg-card p-[var(--card-padding)]">
                <AlertTitle>Design System pronto</AlertTitle>
                <AlertDescription>
                  Os tokens da Chuv Studio foram aplicados com sucesso.
                </AlertDescription>
              </Alert>
              <Alert variant="destructive" className="rounded-none border-white bg-card p-[var(--card-padding)]">
                <AlertTitle>Atenção</AlertTitle>
                <AlertDescription>
                  Verifique as configurações antes de publicar.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <div className="px-1 pt-2 pb-4">
        <p className="text-xs text-muted-foreground">
          Chuv Studio Design System · Gerado a partir do Figma:{" "}
          <span className="font-mono">Design Chuv Studio 2.0</span> ·
          Primary <span className="font-mono text-primary">#5628e8</span> ·
          Font: Neue Haas Unica Pro / Inter
        </p>
      </div>
    </div>
  );
}
