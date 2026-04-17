"use client"

import * as React from "react"
import { addDays, addMonths, format } from "date-fns"
import type { DateRange } from "react-day-picker"
import {
  ArrowLeftRight,
  CalendarDays,
  Clock3,
  LayoutGrid,
  MapPinned,
} from "lucide-react"

import { Typography } from "@/components/typography"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
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
    <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
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

function SurfaceCard({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] ${className}`.trim()}
    >
      {children}
    </div>
  )
}

const modeOptions = ["single", "multiple", "range"] as const
type ModeOption = (typeof modeOptions)[number]

export default function CalendarPage() {
  const [mode, setMode] = React.useState<ModeOption>("single")
  const [monthCount, setMonthCount] = React.useState<1 | 2>(1)
  const [showOutsideDays, setShowOutsideDays] = React.useState(true)
  const [selectedSingle, setSelectedSingle] = React.useState<Date | undefined>(
    new Date(2026, 3, 16)
  )
  const [selectedMultiple, setSelectedMultiple] = React.useState<Date[] | undefined>([
    new Date(2026, 3, 16),
    new Date(2026, 3, 18),
  ])
  const [selectedRange, setSelectedRange] = React.useState<DateRange | undefined>({
    from: new Date(2026, 3, 16),
    to: new Date(2026, 3, 20),
  })

  const today = new Date(2026, 3, 16)

  return (
    <div className="ds-page">
      <div className="ds-page-header">
        <Typography variant="label-m" className="mb-2 text-primary">
          02 — COMPONENTS
        </Typography>
        <Typography variant="h1" className="mb-3">
          Calendar
        </Typography>
        <Typography variant="body-m" className="max-w-2xl text-muted-foreground">
          Scheduling and date-selection component adapted from shadcn/ui to fit
          the Chuv Studio foundation. It follows the same section, card, and
          typography structure used across the design system.
        </Typography>
      </div>

      <Section
        title="Core Patterns"
        subtitle="Use calendars for scheduling, selecting availability windows, and showing date structure clearly"
      >
        <div className="space-y-6">
          <div>
            <div className="ds-row">
              <RowLabel label="Single date" />
              <div className="w-full overflow-x-auto">
                <Calendar
                  mode="single"
                  selected={selectedSingle}
                  onSelect={setSelectedSingle}
                />
              </div>
            </div>
            <CodeSnippet
              code={`<Calendar
  mode="single"
  selected={selectedDate}
  onSelect={setSelectedDate}
/>`}
            />
          </div>

          <div>
            <div className="ds-row">
              <RowLabel label="Range" />
              <div className="w-full overflow-x-auto">
                <Calendar
                  mode="range"
                  selected={selectedRange}
                  onSelect={setSelectedRange}
                  defaultMonth={today}
                />
              </div>
            </div>
            <CodeSnippet
              code={`<Calendar
  mode="range"
  selected={range}
  onSelect={setRange}
/>`}
            />
          </div>
        </div>
      </Section>

      <Section
        title="Studio Contexts"
        subtitle="Patterns tailored to planning production, workshops, launches, and field visits"
      >
        <div className="ds-card-grid-3">
          <SurfaceCard>
            <Typography variant="label-m" className="mb-4 text-muted-foreground">
              Sprint Planning
            </Typography>
            <div className="mb-5 flex items-center gap-3">
              <CalendarDays className="size-4" />
              <Typography variant="body-s">
                Define the next review and deployment cycle.
              </Typography>
            </div>
            <div className="overflow-x-auto">
              <Calendar
                mode="single"
                selected={new Date(2026, 3, 23)}
                defaultMonth={today}
              />
            </div>
          </SurfaceCard>

          <SurfaceCard>
            <Typography variant="label-m" className="mb-4 text-muted-foreground">
              Workshop Window
            </Typography>
            <div className="mb-5 flex items-center gap-3">
              <ArrowLeftRight className="size-4" />
              <Typography variant="body-s">
                Reserve a date interval for client immersion and feedback.
              </Typography>
            </div>
            <div className="overflow-x-auto">
              <Calendar
                mode="range"
                selected={{
                  from: new Date(2026, 3, 21),
                  to: addDays(new Date(2026, 3, 21), 4),
                }}
                defaultMonth={today}
              />
            </div>
          </SurfaceCard>

          <SurfaceCard>
            <Typography variant="label-m" className="mb-4 text-muted-foreground">
              Roadmap Snapshot
            </Typography>
            <div className="mb-5 flex items-center gap-3">
              <LayoutGrid className="size-4" />
              <Typography variant="body-s">
                Track milestone checkpoints across two connected months.
              </Typography>
            </div>
            <div className="overflow-x-auto">
              <Calendar
                mode="multiple"
                selected={[
                  new Date(2026, 3, 16),
                  addDays(new Date(2026, 3, 16), 10),
                  addMonths(new Date(2026, 3, 16), 1),
                ]}
                numberOfMonths={2}
                defaultMonth={today}
              />
            </div>
          </SurfaceCard>
        </div>

        <CodeSnippet
          code={`<Calendar
  mode="multiple"
  selected={[launch, handoff, review]}
  numberOfMonths={2}
/>`}
        />
      </Section>

      <Section
        title="Variants And States"
        subtitle="Single, multiple, range, and disabled date configurations"
      >
        <div className="space-y-6">
          <div>
            <div className="ds-row">
              <RowLabel label="Multiple" />
              <div className="w-full overflow-x-auto">
                <Calendar
                  mode="multiple"
                  selected={selectedMultiple}
                  onSelect={setSelectedMultiple}
                  defaultMonth={today}
                />
              </div>
            </div>
            <CodeSnippet
              code={`<Calendar
  mode="multiple"
  selected={dates}
  onSelect={setDates}
/>`}
            />
          </div>

          <div>
            <div className="ds-row">
              <RowLabel label="Disabled dates" />
              <div className="w-full overflow-x-auto">
                <Calendar
                  mode="single"
                  selected={new Date(2026, 3, 24)}
                  defaultMonth={today}
                  disabled={{ before: new Date(2026, 3, 20) }}
                />
              </div>
            </div>
            <CodeSnippet
              code={`<Calendar
  mode="single"
  disabled={{ before: new Date() }}
/>`}
            />
          </div>
        </div>
      </Section>

      <Section
        title="Interactive Demo"
        subtitle="Preview selection modes and density options in the same calendar foundation"
      >
        <SurfaceCard>
          <div className="ds-interactive-grid">
            <div className="space-y-6">
              <div>
                <Typography variant="label-m" className="mb-3 text-muted-foreground">
                  Selection Mode
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {modeOptions.map((option) => (
                    <Button
                      key={option}
                      variant={mode === option ? "default" : "outline"}
                      onClick={() => setMode(option)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <Typography variant="label-m" className="mb-3 text-muted-foreground">
                  Months Visible
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {[1, 2].map((count) => (
                    <Button
                      key={count}
                      variant={monthCount === count ? "default" : "outline"}
                      onClick={() => setMonthCount(count as 1 | 2)}
                    >
                      {count} month{count > 1 ? "s" : ""}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <Typography variant="label-m" className="mb-3 text-muted-foreground">
                  Outside Days
                </Typography>
                <Button
                  variant={showOutsideDays ? "default" : "outline"}
                  onClick={() => setShowOutsideDays((value) => !value)}
                >
                  {showOutsideDays ? "Visible" : "Hidden"}
                </Button>
              </div>
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock3 className="size-4" />
                <Typography variant="body-s">
                  {mode === "single"
                    ? selectedSingle
                      ? `Selected: ${format(selectedSingle, "PPP")}`
                      : "Select a day"
                    : mode === "multiple"
                      ? `${selectedMultiple?.length ?? 0} dates selected`
                      : selectedRange?.from && selectedRange.to
                        ? `${format(selectedRange.from, "MMM d")} — ${format(selectedRange.to, "MMM d")}`
                        : "Select a range"}
                </Typography>
              </div>

              <div className="overflow-x-auto">
                {mode === "single" ? (
                  <Calendar
                    mode="single"
                    selected={selectedSingle}
                    onSelect={setSelectedSingle}
                    numberOfMonths={monthCount}
                    showOutsideDays={showOutsideDays}
                    defaultMonth={today}
                  />
                ) : mode === "multiple" ? (
                  <Calendar
                    mode="multiple"
                    selected={selectedMultiple}
                    onSelect={setSelectedMultiple}
                    numberOfMonths={monthCount}
                    showOutsideDays={showOutsideDays}
                    defaultMonth={today}
                  />
                ) : (
                  <Calendar
                    mode="range"
                    selected={selectedRange}
                    onSelect={setSelectedRange}
                    numberOfMonths={monthCount}
                    showOutsideDays={showOutsideDays}
                    defaultMonth={today}
                  />
                )}
              </div>
            </div>
          </div>
        </SurfaceCard>
      </Section>

      <Section
        title="Usage"
        subtitle="Import, props, and accessibility guidance"
      >
        <div className="space-y-6">
          <div className="ds-row">
            <RowLabel label="Import" />
            <div className="w-full">
              <CodeSnippet
                code={`import { Calendar } from "@/components/ui/calendar"`}
              />
            </div>
          </div>

          <div className="ds-row">
            <RowLabel label="Common props" />
            <div className="w-full">
              <div className="grid gap-4 md:grid-cols-2">
                <SurfaceCard className="p-6">
                  <Typography variant="label-m" className="mb-3 text-muted-foreground">
                    Selection
                  </Typography>
                  <Typography variant="body-s">
                    `mode`, `selected`, `onSelect`, and `disabled` control how
                    dates are chosen and restricted.
                  </Typography>
                </SurfaceCard>
                <SurfaceCard className="p-6">
                  <Typography variant="label-m" className="mb-3 text-muted-foreground">
                    Layout
                  </Typography>
                  <Typography variant="body-s">
                    `numberOfMonths`, `captionLayout`, and `showOutsideDays`
                    define density and calendar visibility.
                  </Typography>
                </SurfaceCard>
              </div>
            </div>
          </div>

          <div className="ds-row">
            <RowLabel label="Accessibility" />
            <div className="w-full">
              <SurfaceCard className="p-6">
                <div className="flex items-start gap-3">
                  <MapPinned className="mt-1 size-4 shrink-0" />
                  <Typography variant="body-s">
                    The calendar inherits keyboard navigation and screen-reader
                    support from `react-day-picker`. Keep visible labels close
                    to the calendar and avoid using color alone to communicate
                    date state.
                  </Typography>
                </div>
              </SurfaceCard>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
