"use client"

import * as React from "react"
import {
  AlertCircle,
  CheckCircle2,
  Info,
  Layers3,
  Sparkles,
  TriangleAlert,
  Wrench,
} from "lucide-react"

import { Typography } from "@/components/typography"
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
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
        <Typography variant="h3">{title}</Typography>
        {subtitle ? (
          <Typography variant="muted" className="mt-1">
            {subtitle}
          </Typography>
        ) : null}
      </div>
      <Separator className="mb-8 bg-black/10" />
      {children}
    </section>
  )
}

function CodeSnippet({ code }: { code: string }) {
  return <pre className="ds-code-snippet">{code}</pre>
}

function RowLabel({ label }: { label: string }) {
  return <span className="ds-row-label">{label}</span>
}

type AlertTone = "default" | "destructive"

function AlertPreview({
  tone,
  title,
  description,
  icon,
  action,
  className,
}: {
  tone: AlertTone
  title: string
  description?: string
  icon: React.ReactNode
  action?: React.ReactNode
  className?: string
}) {
  return (
    <Alert variant={tone} className={className}>
      {icon}
      <AlertTitle>{title}</AlertTitle>
      {description ? (
        <AlertDescription>{description}</AlertDescription>
      ) : null}
      {action ? <AlertAction>{action}</AlertAction> : null}
    </Alert>
  )
}

export default function AlertPage() {
  const [tone, setTone] = React.useState<AlertTone>("default")
  const [withDescription, setWithDescription] = React.useState(true)
  const [withAction, setWithAction] = React.useState(false)

  return (
    <div className="ds-page">
      <div className="ds-page-header">
        <Typography variant="label-m" className="mb-2 text-primary">
          02 — COMPONENTS
        </Typography>
        <Typography variant="h1" className="mb-3">
          Alert
        </Typography>
        <Typography variant="body-m" className="max-w-2xl text-muted-foreground">
          Inline status and feedback surface for project updates, warnings,
          operational notices, and contextual system messaging. Built from
          shadcn/ui and adapted to the Chuv Studio foundation with straight
          edges, controlled emphasis, and consistent typography.
        </Typography>
      </div>

      <Section
        title="Core States"
        subtitle="Alerts can communicate neutral status, positive confirmation, or destructive warnings"
      >
        <div className="space-y-6">
          <div>
            <div className="ds-row">
              <RowLabel label="Default" />
              <div className="w-full">
                <AlertPreview
                  tone="default"
                  title="Design system update available"
                  description="A new component set was added to the styleguide and is ready for review."
                  icon={<Info className="size-4" />}
                />
              </div>
            </div>
            <CodeSnippet
              code={`<Alert>
  <Info />
  <AlertTitle>Design system update available</AlertTitle>
  <AlertDescription>
    A new component set was added to the styleguide and is ready for review.
  </AlertDescription>
</Alert>`}
            />
          </div>

          <div>
            <div className="ds-row">
              <RowLabel label="Success" />
              <div className="w-full">
                <AlertPreview
                  tone="default"
                  title="Deploy approved"
                  description="The updated build passed validation and is ready to be published to production."
                  icon={<CheckCircle2 className="size-4" />}
                />
              </div>
            </div>
            <CodeSnippet
              code={`<Alert>
  <CheckCircle2 />
  <AlertTitle>Deploy approved</AlertTitle>
</Alert>`}
            />
          </div>

          <div>
            <div className="ds-row">
              <RowLabel label="Destructive" />
              <div className="w-full">
                <AlertPreview
                  tone="destructive"
                  title="Build failed"
                  description="A production check failed. Review the route output before sending the update to Vercel."
                  icon={<AlertCircle className="size-4" />}
                />
              </div>
            </div>
            <CodeSnippet
              code={`<Alert variant="destructive">
  <AlertCircle />
  <AlertTitle>Build failed</AlertTitle>
  <AlertDescription>
    A production check failed.
  </AlertDescription>
</Alert>`}
            />
          </div>
        </div>
      </Section>

      <Section
        title="Studio Contexts"
        subtitle="Examples that make sense for a design and tech studio workflow"
      >
        <div className="ds-card-grid-3">
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <Typography variant="label-m" className="mb-4 text-muted-foreground">
              Portfolio Notice
            </Typography>
            <div className="bg-white p-[var(--card-padding)]">
              <AlertPreview
                tone="default"
                title="Case study in progress"
                description="Screens and metrics are still being refined before public release."
                icon={<Layers3 className="size-4" />}
                className="border-0 bg-transparent p-0"
              />
            </div>
          </div>

          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <Typography variant="label-m" className="mb-4 text-muted-foreground">
              Tooling Status
            </Typography>
            <div className="bg-white p-[var(--card-padding)]">
              <AlertPreview
                tone="default"
                title="Implementation aligned"
                description="The component already follows the current tokens, sections, and card rules."
                icon={<Wrench className="size-4" />}
                className="border-0 bg-transparent p-0"
              />
            </div>
          </div>

          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <Typography variant="label-m" className="mb-4 text-muted-foreground">
              Risk Warning
            </Typography>
            <div className="bg-white p-[var(--card-padding)]">
              <AlertPreview
                tone="destructive"
                title="Preview mismatch detected"
                description="Validate interactions on Vercel before considering the task complete."
                icon={<TriangleAlert className="size-4" />}
                className="border-0 bg-transparent p-0"
              />
            </div>
          </div>
        </div>

        <CodeSnippet
          code={`<Alert>
  <Wrench />
  <AlertTitle>Implementation aligned</AlertTitle>
  <AlertDescription>
    The component already follows the current tokens, sections, and card rules.
  </AlertDescription>
</Alert>`}
        />
      </Section>

      <Section
        title="Content Patterns"
        subtitle="Short alerts, richer alerts, and action-based alerts"
      >
        <div className="space-y-6">
          <div>
            <div className="ds-row">
              <RowLabel label="Title Only" />
              <div className="w-full">
                <AlertPreview
                  tone="default"
                  title="The content is ready for review."
                  icon={<Sparkles className="size-4" />}
                />
              </div>
            </div>
            <CodeSnippet
              code={`<Alert>
  <Sparkles />
  <AlertTitle>The content is ready for review.</AlertTitle>
</Alert>`}
            />
          </div>

          <div>
            <div className="ds-row">
              <RowLabel label="With Action" />
              <div className="w-full">
                <AlertPreview
                  tone="default"
                  title="New preview available"
                  description="Open the latest route and confirm the layout before publishing."
                  icon={<Info className="size-4" />}
                  action={
                    <Button size="sm" variant="outline">
                      Open
                    </Button>
                  }
                />
              </div>
            </div>
            <CodeSnippet
              code={`<Alert>
  <Info />
  <AlertTitle>New preview available</AlertTitle>
  <AlertAction>
    <Button size="sm" variant="outline">Open</Button>
  </AlertAction>
</Alert>`}
            />
          </div>
        </div>
      </Section>

      <Section
        title="Interactive Demo"
        subtitle="Adjust tone and content density to preview how the component behaves in real UI states"
      >
        <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
          <div className="ds-interactive-grid">
            <div className="space-y-6">
              <div>
                <Typography variant="label-m" className="mb-3 text-muted-foreground">
                  Tone
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {(["default", "destructive"] as const).map((option) => (
                    <Button
                      key={option}
                      variant={tone === option ? "default" : "outline"}
                      size="sm"
                      onClick={() => setTone(option)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <Typography variant="label-m" className="mb-3 text-muted-foreground">
                  Description
                </Typography>
                <Button
                  variant={withDescription ? "default" : "outline"}
                  size="sm"
                  onClick={() => setWithDescription((current) => !current)}
                >
                  {withDescription ? "Visible" : "Hidden"}
                </Button>
              </div>

              <div>
                <Typography variant="label-m" className="mb-3 text-muted-foreground">
                  Action
                </Typography>
                <Button
                  variant={withAction ? "default" : "outline"}
                  size="sm"
                  onClick={() => setWithAction((current) => !current)}
                >
                  {withAction ? "Visible" : "Hidden"}
                </Button>
              </div>
            </div>

            <div className="border border-white bg-white p-[var(--card-padding)]">
              <AlertPreview
                tone={tone}
                title={
                  tone === "destructive"
                    ? "There is an issue that needs attention"
                    : "Everything is ready to move forward"
                }
                description={
                  withDescription
                    ? tone === "destructive"
                      ? "Review the failing step, resolve the mismatch, and run the production build again."
                      : "The component is aligned with the design system and can proceed to the next validation stage."
                    : undefined
                }
                icon={
                  tone === "destructive" ? (
                    <AlertCircle className="size-4" />
                  ) : (
                    <CheckCircle2 className="size-4" />
                  )
                }
                action={
                  withAction ? (
                    <Button size="sm" variant="outline">
                      Review
                    </Button>
                  ) : undefined
                }
              />
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Usage"
        subtitle="Import, key props, and accessibility behavior"
      >
        <div className="space-y-6">
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <Typography variant="label-m" className="text-muted-foreground">
              Import
            </Typography>
            <CodeSnippet
              code={`import {
  Alert,
  AlertTitle,
  AlertDescription,
  AlertAction,
} from "@/components/ui/alert"`}
            />
          </div>

          <div className="ds-card-grid-2">
            {[
              {
                title: "Key Props",
                body: "Use variant on Alert, then compose AlertTitle, AlertDescription, and AlertAction depending on the amount of context needed.",
              },
              {
                title: "When To Use",
                body: "Use alerts for inline status, warnings, confirmations, and contextual feedback directly inside a section or card.",
              },
              {
                title: "When Not To Use",
                body: "Avoid using an alert for every piece of helper text. Use it when the message has contextual importance or urgency.",
              },
              {
                title: "Accessibility Notes",
                body: "The root uses role=\"alert\". Keep the copy concise, use meaningful headings, and reserve destructive styling for real warnings.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]"
              >
                <Typography variant="h4">{item.title}</Typography>
                <Typography variant="body-s" className="mt-4 text-muted-foreground">
                  {item.body}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}
