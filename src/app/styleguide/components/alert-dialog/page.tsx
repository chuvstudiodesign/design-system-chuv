"use client"

import * as React from "react"
import {
  AlertTriangle,
  Layers3,
  Sparkles,
  Trash2,
  Wrench,
} from "lucide-react"

import { Typography } from "@/components/typography"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
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

function DemoDialog({
  triggerLabel,
  title,
  description,
  icon,
  actionLabel = "Continue",
  cancelLabel = "Cancel",
  actionVariant = "default",
}: {
  triggerLabel: string
  title: string
  description: string
  icon: React.ReactNode
  actionLabel?: string
  cancelLabel?: string
  actionVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>
        {triggerLabel}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia>{icon}</AlertDialogMedia>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancelLabel}</AlertDialogCancel>
          <AlertDialogAction variant={actionVariant}>
            {actionLabel}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

const sizeOptions = ["default", "sm"] as const
type SizeOption = (typeof sizeOptions)[number]

export default function AlertDialogPage() {
  const [size, setSize] = React.useState<SizeOption>("default")
  const [withMedia, setWithMedia] = React.useState(true)
  const [destructive, setDestructive] = React.useState(false)

  return (
    <div className="ds-page">
      <div className="ds-page-header">
        <Typography variant="label-m" className="mb-2 text-primary">
          02 — COMPONENTS
        </Typography>
        <Typography variant="h1" className="mb-3">
          Alert Dialog
        </Typography>
        <Typography variant="body-m" className="max-w-2xl text-muted-foreground">
          Confirmation modal for high-impact actions, destructive decisions, and
          explicit user acknowledgement. Built from shadcn/ui and adapted to the
          Chuv Studio foundation with straight edges, responsive sizing, and
          disciplined action hierarchy.
        </Typography>
      </div>

      <Section
        title="Core Patterns"
        subtitle="Use alert dialogs when the action is important enough to interrupt the current flow"
      >
        <div className="space-y-6">
          <div>
            <div className="ds-row">
              <RowLabel label="Default" />
              <div className="w-full">
                <DemoDialog
                  triggerLabel="Open confirmation"
                  title="Publish the updated system?"
                  description="This will make the latest approved components available in the live documentation flow."
                  icon={<Sparkles className="size-5" />}
                  actionLabel="Publish"
                />
              </div>
            </div>
            <CodeSnippet
              code={`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Open confirmation</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    ...
  </AlertDialogContent>
</AlertDialog>`}
            />
          </div>

          <div>
            <div className="ds-row">
              <RowLabel label="Destructive" />
              <div className="w-full">
                <DemoDialog
                  triggerLabel="Open destructive action"
                  title="Delete this project draft?"
                  description="This action cannot be undone. The saved content and review state will be permanently removed."
                  icon={<Trash2 className="size-5" />}
                  actionLabel="Delete"
                  actionVariant="destructive"
                />
              </div>
            </div>
            <CodeSnippet
              code={`<AlertDialogAction variant="destructive">
  Delete
</AlertDialogAction>`}
            />
          </div>
        </div>
      </Section>

      <Section
        title="Studio Contexts"
        subtitle="Examples that fit portfolio publishing, tool workflows, and risky operations"
      >
        <div className="ds-card-grid-3">
          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <Typography variant="label-m" className="mb-4 text-muted-foreground">
              Publish Portfolio
            </Typography>
            <DemoDialog
              triggerLabel="Publish case"
              title="Publish this case study?"
              description="The page will become visible in the portfolio and replace the previous live version."
              icon={<Layers3 className="size-5" />}
              actionLabel="Publish"
            />
          </div>

          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <Typography variant="label-m" className="mb-4 text-muted-foreground">
              Tooling Review
            </Typography>
            <DemoDialog
              triggerLabel="Approve implementation"
              title="Approve the implementation package?"
              description="This confirms the component follows tokens, sections, and card rules before Vercel validation."
              icon={<Wrench className="size-5" />}
              actionLabel="Approve"
            />
          </div>

          <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
            <Typography variant="label-m" className="mb-4 text-muted-foreground">
              Risk Warning
            </Typography>
            <DemoDialog
              triggerLabel="Remove route"
              title="Remove this route from the styleguide?"
              description="This action affects navigation structure and may break existing references."
              icon={<AlertTriangle className="size-5" />}
              actionLabel="Remove"
              actionVariant="destructive"
            />
          </div>
        </div>

        <CodeSnippet
          code={`<AlertDialogTitle>Publish this case study?</AlertDialogTitle>
<AlertDialogDescription>
  The page will become visible in the portfolio.
</AlertDialogDescription>`}
        />
      </Section>

      <Section
        title="Content Patterns"
        subtitle="Media, description density, and footer actions all shape the tone of the modal"
      >
        <div className="space-y-6">
          <div>
            <div className="ds-row">
              <RowLabel label="With Media" />
              <div className="w-full">
                <AlertDialog>
                  <AlertDialogTrigger render={<Button variant="outline" />}>
                    Open media dialog
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogMedia>
                        <Sparkles className="size-5" />
                      </AlertDialogMedia>
                      <AlertDialogTitle>Finalize the update?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This keeps the decision visually grounded and works well
                        for important but non-destructive confirmations.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Back</AlertDialogCancel>
                      <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
            <CodeSnippet
              code={`<AlertDialogMedia>
  <Sparkles />
</AlertDialogMedia>`}
            />
          </div>

          <div>
            <div className="ds-row">
              <RowLabel label="Compact" />
              <div className="w-full">
                <AlertDialog>
                  <AlertDialogTrigger render={<Button variant="outline" />}>
                    Open compact dialog
                  </AlertDialogTrigger>
                  <AlertDialogContent size="sm">
                    <AlertDialogHeader>
                      <AlertDialogTitle>Proceed?</AlertDialogTitle>
                      <AlertDialogDescription>
                        A tighter variation for short confirmations.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Yes</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
            <CodeSnippet
              code={`<AlertDialogContent size="sm">
  ...
</AlertDialogContent>`}
            />
          </div>
        </div>
      </Section>

      <Section
        title="Interactive Demo"
        subtitle="Adjust size, emphasis, and media treatment to preview the modal structure"
      >
        <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
          <div className="ds-interactive-grid">
            <div className="space-y-6">
              <div>
                <Typography variant="label-m" className="mb-3 text-muted-foreground">
                  Size
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {sizeOptions.map((option) => (
                    <Button
                      key={option}
                      variant={size === option ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSize(option)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <Typography variant="label-m" className="mb-3 text-muted-foreground">
                  Media
                </Typography>
                <Button
                  variant={withMedia ? "default" : "outline"}
                  size="sm"
                  onClick={() => setWithMedia((current) => !current)}
                >
                  {withMedia ? "Visible" : "Hidden"}
                </Button>
              </div>

              <div>
                <Typography variant="label-m" className="mb-3 text-muted-foreground">
                  Action Tone
                </Typography>
                <Button
                  variant={destructive ? "default" : "outline"}
                  size="sm"
                  onClick={() => setDestructive((current) => !current)}
                >
                  {destructive ? "Destructive" : "Default"}
                </Button>
              </div>
            </div>

            <div className="border border-white bg-white p-[var(--card-padding)]">
              <AlertDialog>
                <AlertDialogTrigger render={<Button variant="outline" />}>
                  Open preview dialog
                </AlertDialogTrigger>
                <AlertDialogContent size={size}>
                  <AlertDialogHeader>
                    {withMedia ? (
                      <AlertDialogMedia>
                        {destructive ? (
                          <AlertTriangle className="size-5" />
                        ) : (
                          <Sparkles className="size-5" />
                        )}
                      </AlertDialogMedia>
                    ) : null}
                    <AlertDialogTitle>
                      {destructive
                        ? "Remove this version?"
                        : "Confirm this update?"}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      {destructive
                        ? "This action cannot be undone and will remove the current reviewed state."
                        : "This confirms the latest version is ready to proceed to the next validation stage."}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      variant={destructive ? "destructive" : "default"}
                    >
                      {destructive ? "Remove" : "Confirm"}
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
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
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"`}
            />
          </div>

          <div className="ds-card-grid-2">
            {[
              {
                title: "Key Props",
                body: "Use AlertDialogContent size, then compose Header, Media, Title, Description, Footer, Cancel, and Action based on the decision complexity.",
              },
              {
                title: "When To Use",
                body: "Use alert dialog when the user must explicitly confirm a risky, important, or irreversible action.",
              },
              {
                title: "When Not To Use",
                body: "Avoid using it for lightweight choices or passive information. Use Dialog, Alert, or Tooltip when interruption is unnecessary.",
              },
              {
                title: "Accessibility Notes",
                body: "The dialog traps focus and expects an explicit choice. Keep the title clear, action labels specific, and destructive actions visually distinct.",
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
