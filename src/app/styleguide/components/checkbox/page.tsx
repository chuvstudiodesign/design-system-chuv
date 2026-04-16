"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
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
        {subtitle ? (
          <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
        ) : null}
      </div>
      <Separator className="mb-8 bg-black/10" />
      {children}
    </section>
  )
}

function CodeSnippet({ code }: { code: string }) {
  return (
    <pre className="mt-6 overflow-x-auto whitespace-pre-wrap border border-black/10 bg-foreground/5 px-4 py-3 text-xs text-foreground/70">
      {code}
    </pre>
  )
}

function RowLabel({ label }: { label: string }) {
  return (
    <span className="w-24 shrink-0 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
      {label}
    </span>
  )
}

export default function CheckboxPage() {
  const [checked, setChecked] = React.useState(false)
  const [disabled, setDisabled] = React.useState(false)
  const [dark, setDark] = React.useState(false)

  return (
    <div className="flex flex-col gap-3 py-3 lg:gap-4 lg:py-4 lg:pr-4">
      <div className="mb-2 px-1">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
          02 — COMPONENTS
        </p>
        <h1 className="mb-3 text-4xl font-bold text-foreground">Checkbox</h1>
        <p className="max-w-xl text-base text-muted-foreground">
          Binary selection built with{" "}
          <code className="bg-black/5 px-1 py-0.5 text-xs font-mono">
            @base-ui/react/checkbox
          </code>{" "}
          and installed through shadcn/ui. Ideal for preferences, consent, and
          multi-select forms.
        </p>
      </div>

      <Section
        title="Basic"
        subtitle="Default compositions with label, helper text, and card-style selection"
      >
        <div className="space-y-6">
          <div className="flex items-center gap-6">
            <RowLabel label="Default" />
            <div className="flex items-center gap-3">
              <Checkbox id="terms-basic" />
              <Label htmlFor="terms-basic">Accept terms and conditions</Label>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <RowLabel label="With text" />
            <div className="flex items-start gap-3">
              <Checkbox id="updates" defaultChecked />
              <div className="grid gap-2">
                <Label htmlFor="updates">Receive product updates</Label>
                <p className="text-sm text-muted-foreground">
                  Helpful release notes and design-system changes in your inbox.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <RowLabel label="Feature card" />
            <Label className="flex max-w-md items-start gap-3 rounded-[10px] border border-black/10 bg-white p-4 hover:bg-accent/50 has-[[aria-checked=true]]:border-primary has-[[aria-checked=true]]:bg-accent">
              <Checkbox
                id="notifications-card"
                defaultChecked
                className="mt-0.5"
              />
              <div className="grid gap-1.5 font-normal">
                <p className="text-sm leading-none font-medium text-foreground">
                  Enable notifications
                </p>
                <p className="text-sm text-muted-foreground">
                  Get a ping whenever new components or tokens are published.
                </p>
              </div>
            </Label>
          </div>
        </div>

        <CodeSnippet
          code={`<div className="flex items-center gap-3">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}
        />
      </Section>

      <Section
        title="States"
        subtitle="Common states you will use in forms and preferences flows"
      >
        <div className="space-y-5">
          <div className="flex items-center gap-6">
            <RowLabel label="Unchecked" />
            <div className="flex items-center gap-3">
              <Checkbox id="state-unchecked" />
              <Label htmlFor="state-unchecked">Marketing emails</Label>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <RowLabel label="Checked" />
            <div className="flex items-center gap-3">
              <Checkbox id="state-checked" defaultChecked />
              <Label htmlFor="state-checked">Weekly digest</Label>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <RowLabel label="Disabled" />
            <div className="flex items-center gap-3">
              <Checkbox id="state-disabled" disabled />
              <Label htmlFor="state-disabled">System setting locked</Label>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <RowLabel label="Disabled on" />
            <div className="flex items-center gap-3">
              <Checkbox id="state-disabled-checked" defaultChecked disabled />
              <Label htmlFor="state-disabled-checked">Critical alerts</Label>
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Interactive Demo"
        subtitle="Controlled checkbox with quick prop toggles and light/dark preview"
      >
        <div className="space-y-6">
          <div className="flex flex-wrap gap-3">
            <Button
              variant={checked ? "default" : "outline"}
              onClick={() => setChecked((value) => !value)}
            >
              {checked ? "Checked" : "Unchecked"}
            </Button>
            <Button
              variant={disabled ? "secondary" : "outline"}
              onClick={() => setDisabled((value) => !value)}
            >
              {disabled ? "Disabled" : "Enabled"}
            </Button>
            <Button
              variant={dark ? "default" : "outline"}
              onClick={() => setDark((value) => !value)}
            >
              {dark ? "Dark Preview" : "Light Preview"}
            </Button>
          </div>

          <div className={dark ? "dark" : undefined}>
            <div className="rounded-[10px] border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-[#111111]">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="playground-checkbox"
                  checked={checked}
                  disabled={disabled}
                  onCheckedChange={(value) => setChecked(Boolean(value))}
                />
                <div className="grid gap-2">
                  <Label htmlFor="playground-checkbox">
                    Include advanced analytics
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Controlled state is currently{" "}
                    <span className="font-medium text-foreground">
                      {checked ? "checked" : "unchecked"}
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CodeSnippet
          code={`const [checked, setChecked] = React.useState(false)

<Checkbox
  id="playground-checkbox"
  checked={checked}
  onCheckedChange={(value) => setChecked(Boolean(value))}
/>`}
        />
      </Section>

      <Section title="Usage" subtitle="Import, props, and common patterns">
        <div className="space-y-6 text-sm">
          <div>
            <p className="mb-2 font-semibold">Import</p>
            <pre className="overflow-x-auto whitespace-pre border border-black/10 bg-foreground/5 px-4 py-3 text-xs text-foreground/70">{`import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"`}</pre>
          </div>

          <div>
            <p className="mb-3 font-semibold">Props — Checkbox</p>
            <div className="flex max-w-xl flex-col gap-2">
              {[
                ["checked", "boolean", "Controlled checked state"],
                ["defaultChecked", "boolean", "Initial unchecked/checked state"],
                ["disabled", "boolean", "Prevents interaction and lowers emphasis"],
                ["required", "boolean", "Marks the field as required in form flows"],
                ["onCheckedChange", "(checked) => void", "Fires on user state change"],
                ["id", "string", "Connects the checkbox to a Label via htmlFor"],
              ].map(([prop, type, description]) => (
                <div
                  key={prop}
                  className="border border-black/10 bg-white px-4 py-3"
                >
                  <p className="font-mono text-xs font-semibold text-primary">
                    {prop}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{type}</p>
                  <p className="mt-1 text-[11px] text-muted-foreground/70">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 font-semibold">Accessibility</p>
            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>Associate each checkbox with a visible label via <code className="bg-black/5 px-1 py-0.5 text-xs font-mono">id</code> and <code className="bg-black/5 px-1 py-0.5 text-xs font-mono">htmlFor</code>.</li>
              <li><kbd className="bg-black/5 px-1 py-0.5 text-xs font-mono">Space</kbd> toggles the focused checkbox.</li>
              <li>The component exposes the right checked semantics through Base UI and ARIA state handling.</li>
              <li>Use helper text when the consequence of checking is not obvious.</li>
            </ul>
          </div>
        </div>
      </Section>

      <div className="px-1 pt-2 pb-4">
        <p className="text-xs text-muted-foreground">
          Chuv Studio Design System · Component:{" "}
          <span className="font-mono">checkbox.tsx</span> ·{" "}
          <span className="font-mono">@base-ui/react/checkbox</span>
        </p>
      </div>
    </div>
  )
}
