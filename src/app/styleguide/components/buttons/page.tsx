import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  Download,
  Loader2,
  Mail,
  Plus,
  Trash2,
} from "lucide-react";

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
  );
}

// ── Code snippet ───────────────────────────────────────────────────────────────
function CodeSnippet({ code }: { code: string }) {
  return (
    <pre className="mt-4 bg-foreground/5 border border-black/10 px-4 py-3 text-xs font-mono text-foreground/70 overflow-x-auto whitespace-pre-wrap">
      {code}
    </pre>
  );
}

// ── Row label ──────────────────────────────────────────────────────────────────
function RowLabel({ label }: { label: string }) {
  return (
    <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest w-20 shrink-0">
      {label}
    </span>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ButtonsPage() {
  return (
    <div className="flex flex-col gap-3 py-3 lg:gap-4 lg:py-4 lg:pr-4">
      {/* Header */}
      <div className="px-1 mb-2">
        <p className="text-xs font-bold tracking-widest text-primary uppercase mb-2">
          02 — COMPONENTS
        </p>
        <h1 className="text-4xl font-bold text-foreground mb-3">Button</h1>
        <p className="text-muted-foreground text-base max-w-xl">
          Trigger actions or navigate. Built on{" "}
          <code className="text-xs font-mono bg-black/5 px-1 py-0.5">
            @base-ui/react/button
          </code>{" "}
          with{" "}
          <code className="text-xs font-mono bg-black/5 px-1 py-0.5">
            class-variance-authority
          </code>{" "}
          variants.
        </p>
      </div>

      {/* ── VARIANTS ── */}
      <Section
        title="Variants"
        subtitle="Six semantic variants — choose based on action hierarchy"
      >
        <div className="space-y-5">
          {[
            {
              label: "Default",
              el: <Button>Default</Button>,
              code: `<Button>Default</Button>`,
            },
            {
              label: "Secondary",
              el: <Button variant="secondary">Secondary</Button>,
              code: `<Button variant="secondary">Secondary</Button>`,
            },
            {
              label: "Outline",
              el: <Button variant="outline">Outline</Button>,
              code: `<Button variant="outline">Outline</Button>`,
            },
            {
              label: "Ghost",
              el: <Button variant="ghost">Ghost</Button>,
              code: `<Button variant="ghost">Ghost</Button>`,
            },
            {
              label: "Destructive",
              el: <Button variant="destructive">Destructive</Button>,
              code: `<Button variant="destructive">Destructive</Button>`,
            },
            {
              label: "Link",
              el: <Button variant="link">Link</Button>,
              code: `<Button variant="link">Link</Button>`,
            },
          ].map(({ label, el, code }) => (
            <div key={label}>
              <div className="flex items-center gap-6">
                <RowLabel label={label} />
                {el}
              </div>
              <CodeSnippet code={code} />
            </div>
          ))}
        </div>
      </Section>

      {/* ── SIZES ── */}
      <Section
        title="Sizes"
        subtitle="Eight size tokens — from xs icon buttons to large CTAs"
      >
        <div className="space-y-5">
          {[
            {
              label: "XS",
              el: <Button size="xs">Extra Small</Button>,
              code: `<Button size="xs">Extra Small</Button>`,
            },
            {
              label: "SM",
              el: <Button size="sm">Small</Button>,
              code: `<Button size="sm">Small</Button>`,
            },
            {
              label: "Default",
              el: <Button>Default</Button>,
              code: `<Button>Default</Button>`,
            },
            {
              label: "LG",
              el: <Button size="lg">Large</Button>,
              code: `<Button size="lg">Large</Button>`,
            },
          ].map(({ label, el, code }) => (
            <div key={label}>
              <div className="flex items-center gap-6">
                <RowLabel label={label} />
                {el}
              </div>
              <CodeSnippet code={code} />
            </div>
          ))}
        </div>
      </Section>

      {/* ── ICON BUTTONS ── */}
      <Section
        title="Icon Buttons"
        subtitle="Square icon-only buttons — use aria-label for accessibility"
      >
        <div className="space-y-5">
          {[
            {
              label: "icon-xs",
              el: (
                <Button size="icon-xs" variant="outline" aria-label="Add">
                  <Plus />
                </Button>
              ),
              code: `<Button size="icon-xs" variant="outline" aria-label="Add">\n  <Plus />\n</Button>`,
            },
            {
              label: "icon-sm",
              el: (
                <Button size="icon-sm" variant="outline" aria-label="Add">
                  <Plus />
                </Button>
              ),
              code: `<Button size="icon-sm" variant="outline" aria-label="Add">\n  <Plus />\n</Button>`,
            },
            {
              label: "icon",
              el: (
                <Button size="icon" aria-label="Add">
                  <Plus />
                </Button>
              ),
              code: `<Button size="icon" aria-label="Add">\n  <Plus />\n</Button>`,
            },
            {
              label: "icon-lg",
              el: (
                <Button size="icon-lg" aria-label="Add">
                  <Plus />
                </Button>
              ),
              code: `<Button size="icon-lg" aria-label="Add">\n  <Plus />\n</Button>`,
            },
          ].map(({ label, el, code }) => (
            <div key={label}>
              <div className="flex items-center gap-6">
                <RowLabel label={label} />
                {el}
              </div>
              <CodeSnippet code={code} />
            </div>
          ))}
        </div>
      </Section>

      {/* ── BUTTONS WITH ICONS ── */}
      <Section
        title="With Icons"
        subtitle="Combine text with leading or trailing icons"
      >
        <div className="space-y-5">
          {[
            {
              label: "Leading",
              el: (
                <Button>
                  <Mail />
                  Send Email
                </Button>
              ),
              code: `<Button>\n  <Mail />\n  Send Email\n</Button>`,
            },
            {
              label: "Trailing",
              el: (
                <Button>
                  Continue
                  <ArrowRight />
                </Button>
              ),
              code: `<Button>\n  Continue\n  <ArrowRight />\n</Button>`,
            },
            {
              label: "Outline",
              el: (
                <Button variant="outline">
                  <Download />
                  Download
                </Button>
              ),
              code: `<Button variant="outline">\n  <Download />\n  Download\n</Button>`,
            },
            {
              label: "Destructive",
              el: (
                <Button variant="destructive">
                  <Trash2 />
                  Delete
                </Button>
              ),
              code: `<Button variant="destructive">\n  <Trash2 />\n  Delete\n</Button>`,
            },
          ].map(({ label, el, code }) => (
            <div key={label}>
              <div className="flex items-center gap-6">
                <RowLabel label={label} />
                {el}
              </div>
              <CodeSnippet code={code} />
            </div>
          ))}
        </div>
      </Section>

      {/* ── STATES ── */}
      <Section
        title="States"
        subtitle="Disabled and loading states for interactive feedback"
      >
        <div className="space-y-5">
          {[
            {
              label: "Disabled",
              el: <Button disabled>Disabled</Button>,
              code: `<Button disabled>Disabled</Button>`,
            },
            {
              label: "Outline dis.",
              el: (
                <Button variant="outline" disabled>
                  Disabled
                </Button>
              ),
              code: `<Button variant="outline" disabled>Disabled</Button>`,
            },
            {
              label: "Loading",
              el: (
                <Button disabled>
                  <Loader2 className="animate-spin" />
                  Loading…
                </Button>
              ),
              code: `<Button disabled>\n  <Loader2 className="animate-spin" />\n  Loading…\n</Button>`,
            },
            {
              label: "Load outline",
              el: (
                <Button variant="outline" disabled>
                  <Loader2 className="animate-spin" />
                  Loading…
                </Button>
              ),
              code: `<Button variant="outline" disabled>\n  <Loader2 className="animate-spin" />\n  Loading…\n</Button>`,
            },
          ].map(({ label, el, code }) => (
            <div key={label}>
              <div className="flex items-center gap-6">
                <RowLabel label={label} />
                {el}
              </div>
              <CodeSnippet code={code} />
            </div>
          ))}
        </div>
      </Section>

      {/* ── ALL VARIANTS TOGETHER ── */}
      <Section
        title="All Variants — Side by Side"
        subtitle="Visual comparison across all variants and the default size"
      >
        <div className="flex flex-wrap gap-3 items-center">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
          <Button disabled>Disabled</Button>
          <Button size="icon" aria-label="Add">
            <Plus />
          </Button>
          <Button variant="outline" size="icon" aria-label="Delete">
            <Trash2 />
          </Button>
        </div>
      </Section>

      {/* ── USAGE ── */}
      <Section title="Usage" subtitle="Import and use in any component">
        <div className="space-y-4 text-sm text-foreground/80">
          <div>
            <p className="font-semibold mb-2">Import</p>
            <CodeSnippet code={`import { Button } from "@/components/ui/button"`} />
          </div>
          <div>
            <p className="font-semibold mb-2">Props</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                ["variant", `"default" | "secondary" | "outline" | "ghost" | "destructive" | "link"`, `"default"`],
                ["size", `"xs" | "sm" | "default" | "lg" | "icon-xs" | "icon-sm" | "icon" | "icon-lg"`, `"default"`],
                ["disabled", "boolean", "false"],
                ["asChild", "boolean", "false — render as a different element"],
              ].map(([prop, type, def]) => (
                <div
                  key={prop as string}
                  className="bg-white border border-black/10 px-4 py-3"
                >
                  <p className="font-mono text-xs text-primary font-semibold">{prop as string}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{type as string}</p>
                  <p className="text-[11px] text-muted-foreground/70 mt-1">Default: {def as string}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold mb-2">Accessibility</p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Icon-only buttons must have an <code className="font-mono text-xs bg-black/5 px-1 py-0.5">aria-label</code></li>
              <li>Use <code className="font-mono text-xs bg-black/5 px-1 py-0.5">disabled</code> prop — never CSS-only opacity</li>
              <li>Keyboard: <kbd className="font-mono text-xs bg-black/5 px-1 py-0.5">Space</kbd> / <kbd className="font-mono text-xs bg-black/5 px-1 py-0.5">Enter</kbd> to activate</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <div className="px-1 pt-2 pb-4">
        <p className="text-xs text-muted-foreground">
          Chuv Studio Design System · Component:{" "}
          <span className="font-mono">button.tsx</span> ·{" "}
          <span className="font-mono">@base-ui/react/button</span> + CVA
        </p>
      </div>
    </div>
  );
}
