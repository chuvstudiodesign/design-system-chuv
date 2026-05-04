"use client"

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import { startTransition, useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react"
import { Badge } from "@/components/badge"
import { Typography } from "@/components/typography"
import { cn } from "@/lib/utils"

export type Proposal3DFolderTabItem = {
  id: string
  label: ReactNode
  body: ReactNode
}

export type Proposal3DFolderFront = {
  id: string
  eyebrow: ReactNode
  tabTitle?: ReactNode
  title: ReactNode
  subtitle: ReactNode
  description: ReactNode
  items: Proposal3DFolderTabItem[]
}

type Proposal3DFolderTabsProps = {
  fronts: Proposal3DFolderFront[]
  initialActiveId?: string
  header?: ReactNode
  className?: string
}

const DESKTOP_WIDE_BREAKPOINT = 1550

function clampIndex(index: number, length: number) {
  if (length === 0) return 0
  return (index + length) % length
}

export function Proposal3DFolderTabs({
  fronts,
  initialActiveId,
  header,
  className,
}: Proposal3DFolderTabsProps) {
  const sectionRef = useRef<HTMLElement | null>(null)
  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const fallbackId = fronts[0]?.id ?? ""
  const [activeFront, setActiveFront] = useState(initialActiveId ?? fallbackId)
  const activeIndex = Math.max(
    0,
    fronts.findIndex((front) => front.id === activeFront)
  )
  const active = fronts[activeIndex] ?? fronts[0]
  const tabsetId = useId()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const tabsParallaxY = useTransform(scrollYProgress, [0, 0.35], [0, 10])

  useEffect(() => {
    if (!initialActiveId) return
    setActiveFront(initialActiveId)
  }, [initialActiveId])

  useEffect(() => {
    const scroller = scrollerRef.current
    const activeTab = tabRefs.current[activeFront]
    const activeTabIndex = fronts.findIndex((front) => front.id === activeFront)

    if (!scroller || !activeTab || typeof window === "undefined") return
    if (window.innerWidth >= DESKTOP_WIDE_BREAKPOINT) return

    const maxAdvanceIndex = Math.min(4, Math.max(0, fronts.length - 1))
    const lockedIndex = Math.min(activeTabIndex, maxAdvanceIndex)
    const lockedTab = fronts[lockedIndex] ? tabRefs.current[fronts[lockedIndex].id] : null

    if (!lockedTab) return

    const frame = window.requestAnimationFrame(() => {
      const scrollerRect = scroller.getBoundingClientRect()
      const lockedTabRect = lockedTab.getBoundingClientRect()
      const nextScrollLeft =
        scroller.scrollLeft + (lockedTabRect.left - scrollerRect.left) - 30

      scroller.scrollTo({
        left: Math.max(0, nextScrollLeft),
        behavior: "smooth",
      })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [activeFront, fronts])

  function selectFront(frontId: string) {
    startTransition(() => {
      setActiveFront(frontId)
    })
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft" && event.key !== "Home" && event.key !== "End") {
      return
    }

    event.preventDefault()

    const nextIndex =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? fronts.length - 1
          : event.key === "ArrowRight"
            ? clampIndex(index + 1, fronts.length)
            : clampIndex(index - 1, fronts.length)

    selectFront(fronts[nextIndex]?.id ?? fallbackId)
  }

  if (!active) return null

  return (
    <section
      ref={sectionRef}
      className={cn("ds-section overflow-hidden pb-[75px] sm:pb-8 md:pb-10 lg:pb-14 xl:pb-20", className)}
      style={{ backgroundColor: "#efefef" }}
    >
      {header}
      <div className="[perspective:2000px]">
        <div
          ref={scrollerRef}
          className="-mx-5 overflow-x-auto overflow-y-hidden px-5 pb-[92px] no-scrollbar [touch-action:pan-x] min-[1550px]:overflow-x-visible min-[1550px]:overflow-y-visible min-[1550px]:pb-0 sm:-mx-8 sm:px-8 min-[1550px]:mx-0 min-[1550px]:px-0"
        >
          <motion.div
            role="tablist"
            aria-label="Frentes da proposta"
            className="relative z-0 flex min-w-max items-end pt-0 pl-[20px] pr-[132px] [transform-style:preserve-3d] min-[811px]:pt-6 min-[1550px]:pr-0"
            style={{ y: tabsParallaxY }}
          >
            {fronts.map((front, index) => {
              const distance = index - activeIndex
              const isActive = index === activeIndex
              const x = Math.max(0, index) * 6
              const desktopX = Math.max(0, index) * 16
              const y = isActive ? 0 : 14 + Math.abs(distance) * 2
              const z = isActive ? 88 : Math.max(14, 58 - Math.abs(distance) * 14)
              const rotateY = isActive ? 0 : distance < 0 ? 10 : -10
              const scale = isActive ? 1 : 0.96 - Math.min(Math.abs(distance) * 0.01, 0.03)

              return (
                <motion.button
                  key={front.id}
                  ref={(node) => {
                    tabRefs.current[front.id] = node
                  }}
                  id={`${tabsetId}-tab-${front.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`${tabsetId}-panel-${front.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => selectFront(front.id)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  className="group relative -ml-2 first:ml-0 h-[168px] w-[107px] shrink-0 rounded-none border border-white/70 px-3 pt-3 pb-3 text-left outline-none [transform-style:preserve-3d] max-[390px]:w-[98px] min-[811px]:-ml-[13px] min-[811px]:h-[210px] min-[811px]:w-[196px] min-[811px]:px-[calc(var(--card-padding)*0.48)] min-[811px]:pt-[calc(var(--card-padding)*0.38)] min-[811px]:pb-[calc(var(--card-padding)*0.34)] xl:w-[212px]"
                  style={{ zIndex: isActive ? 60 : 50 - Math.abs(distance) }}
                  initial={false}
                  animate={{
                    x: typeof window !== "undefined" && window.innerWidth >= 811 ? desktopX : x,
                    y,
                    z,
                    scale,
                    rotateX: isActive ? -5 : -15,
                    rotateY,
                  }}
                  whileHover={{
                    x: (typeof window !== "undefined" && window.innerWidth >= 811 ? desktopX : x) + 4,
                    y: y - 6,
                    z: z + 18,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 26,
                    mass: 0.9,
                  }}
                >
                  <motion.div
                    className={cn(
                      "absolute inset-0 rounded-none",
                      isActive
                        ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(247,247,247,0.94)_48%,rgba(238,238,238,0.98)_78%,rgba(239,239,239,1)_100%)]"
                        : "bg-[linear-gradient(180deg,rgba(242,242,242,0.92)_0%,rgba(230,230,230,0.95)_50%,rgba(238,238,238,0.98)_82%,rgba(239,239,239,1)_100%)]"
                    )}
                  />
                  {isActive ? (
                    <div className="pointer-events-none absolute inset-x-3 top-2 h-px bg-white/80" />
                  ) : null}
                    <div className="relative flex h-full flex-col justify-start">
                    <div className="flex flex-col items-start gap-2 min-[811px]:flex-row min-[811px]:items-start min-[811px]:justify-between min-[811px]:gap-3">
                      <div className="flex w-full justify-end min-[811px]:hidden">
                        <span className="h-2.5 w-2.5 border border-white/80 bg-white/40" />
                        {isActive ? (
                          <span className="absolute right-3 top-3 h-2.5 w-2.5 bg-primary shadow-[0_0_18px_rgba(186,111,60,0.35)]" />
                        ) : null}
                      </div>
                      <Badge
                        variant={isActive ? "service" : "tool"}
                        size="sm"
                        className={cn(
                          "border-white/80 backdrop-blur-sm",
                          isActive ? "bg-white/70" : "bg-white/45 text-foreground/75"
                        )}
                      >
                        {front.eyebrow}
                      </Badge>
                      <div className="mt-1 hidden items-center gap-2 min-[811px]:flex">
                        <span className="h-2.5 w-2.5 border border-white/80 bg-white/40" />
                        {isActive ? (
                          <motion.span
                            layoutId="proposal-folder-indicator"
                            className="h-2.5 w-2.5 bg-primary shadow-[0_0_18px_rgba(186,111,60,0.35)]"
                          />
                        ) : (
                          <span className="h-2.5 w-2.5 bg-transparent" />
                        )}
                      </div>
                    </div>

                    <div className="mt-[14px] hidden space-y-0 min-[811px]:block">
                      <Typography variant="h4" className="pr-2 leading-tight text-foreground">
                        {front.tabTitle ?? front.title}
                      </Typography>
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </motion.div>
        </div>

        <motion.div
          className="relative z-20 -mt-[156px] rounded-none border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.82)_0%,rgba(246,246,246,0.92)_24%,rgba(236,236,236,0.98)_100%)] p-[var(--card-padding)] shadow-[0_35px_80px_rgba(15,23,42,0.12),0_12px_30px_rgba(15,23,42,0.08)] [transform-style:preserve-3d] min-[811px]:-mt-[40px] min-[1550px]:-mt-[40px]"
          initial={false}
          animate={{
            rotateX: 3,
            rotateY: activeIndex % 2 === 0 ? -2 : 2,
            scale: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 24,
          }}
        >
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-white/90" />
          <div className="pointer-events-none absolute left-10 right-10 top-6 h-16 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.88),transparent_72%)]" />
          <div className="pointer-events-none absolute inset-0 rounded-none shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(255,255,255,0.35)]" />

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              id={`${tabsetId}-panel-${active.id}`}
              role="tabpanel"
              aria-labelledby={`${tabsetId}-tab-${active.id}`}
              className="relative"
              initial={{ opacity: 0, y: 12, z: -24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, z: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, z: -24, filter: "blur(6px)" }}
              transition={{
                opacity: { duration: 0.26, ease: "easeOut" },
                y: { type: "spring", stiffness: 180, damping: 22 },
                z: { type: "spring", stiffness: 180, damping: 22 },
                filter: { duration: 0.24, ease: "easeOut" },
              }}
            >
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
                  {active.eyebrow}
                </p>
                <Typography variant="h1" className="max-w-3xl">
                  {active.title}
                </Typography>
                <Typography variant="body-m" className="mt-3 max-w-2xl text-muted-foreground">
                  {active.subtitle}
                </Typography>
              </div>
              <div className="mt-8">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {active.items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      className="rounded-none border border-white/70 bg-[linear-gradient(180deg,rgba(252,252,252,0.95)_0%,rgba(244,244,244,0.98)_100%)] p-[var(--card-padding)] shadow-[0_18px_40px_rgba(15,23,42,0.07)]"
                      initial={{ opacity: 0, y: 14, z: -14 }}
                      animate={{ opacity: 1, y: 0, z: 0 }}
                      transition={{
                        delay: 0.05 + index * 0.04,
                        type: "spring",
                        stiffness: 180,
                        damping: 22,
                      }}
                    >
                      <div className="pointer-events-none mb-4 h-px w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0)_100%)]" />
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                        {item.label}
                      </p>
                      <Typography variant="body-s" className="mt-3 text-muted-foreground leading-relaxed">
                        {item.body}
                      </Typography>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
