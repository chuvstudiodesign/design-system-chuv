"use client"

import type { CSSProperties } from "react"
import { useEffect, useRef, useState } from "react"
import { Typography } from "@/components/typography"
import content from "@/app/styleguide/site-sections/proposta-sigo/content.json"
import {
  ICON_LIBRARY_BY_ID,
  SITE_SECTION_ICON_COLOR_FILTER,
} from "@/lib/site-sections/icon-library"
import { AutoHeightReporter } from "@/components/published-sections/auto-height-reporter"

const AREAS = [
  { key: "s1.design-grafico", iconKey: "s1.design-grafico.icon" },
  { key: "s1.identidade-visual", iconKey: "s1.identidade-visual.icon" },
  { key: "s1.type-design", iconKey: "s1.type-design.icon" },
  { key: "s1.motion-3d", iconKey: "s1.motion-3d.icon" },
  { key: "s1.motion-2d", iconKey: "s1.motion-2d.icon" },
  { key: "s1.edicao-video", iconKey: "s1.edicao-video.icon" },
  { key: "s1.web-design", iconKey: "s1.web-design.icon" },
  { key: "s1.development", iconKey: "s1.development.icon" },
  { key: "s1.ia-aplicada", iconKey: "s1.ia-aplicada.icon" },
] as const

const SECTION_FADE_DURATION_MS = 1000
const SECTION_STAGGER_MS = 500
const SECTION_ICON_TARGET_HEIGHT = 70.5672
const FIGMA_FRAME_HEIGHT = 410

type ContentKey = keyof typeof content

function getFadeStyle(index: number, hasEntered: boolean) {
  return {
    opacity: hasEntered ? 1 : 0,
    transform: hasEntered ? "scale(1)" : "scale(1.1)",
    transformOrigin: "center center",
    willChange: "opacity, transform",
    transitionProperty: "opacity, transform",
    transitionDuration: `${SECTION_FADE_DURATION_MS}ms`,
    transitionTimingFunction: "ease",
    transitionDelay: hasEntered ? `${index * SECTION_STAGGER_MS}ms` : "0ms",
  } satisfies CSSProperties
}

function getIconDisplay(iconId: string) {
  const icon = ICON_LIBRARY_BY_ID[iconId] ?? ICON_LIBRARY_BY_ID[Object.keys(ICON_LIBRARY_BY_ID)[0]]

  return {
    icon,
    width: Math.round((icon.fw / FIGMA_FRAME_HEIGHT) * SECTION_ICON_TARGET_HEIGHT),
    height: Math.round((icon.fh / FIGMA_FRAME_HEIGHT) * SECTION_ICON_TARGET_HEIGHT),
  }
}

export function NossasAreasDeAtuacaoCentered() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    const node = sectionRef.current

    if (!node || entered) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        setEntered(true)
        observer.disconnect()
      },
      {
        threshold: 0.25,
      }
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [entered])

  return (
    <>
      <AutoHeightReporter />
      <section ref={sectionRef} className="ds-section flex flex-col" style={{ backgroundColor: "#efefef" }}>
        <div className="mb-[45px] flex flex-col items-center text-center">
          <Typography variant="h1" className="max-w-3xl">
            {content["s1.title"]}
          </Typography>
          <Typography variant="body-m" className="mt-3 max-w-2xl text-muted-foreground">
            {content["s1.subtitle"]}
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:col-span-3 xl:grid-cols-3">
            {AREAS.map(({ key, iconKey }, index) => {
              const iconId = content[iconKey as ContentKey] as string
              const { icon, width, height } = getIconDisplay(iconId)

              return (
                <div
                  key={`${key}-centered-published`}
                  className="relative aspect-[5/3] rounded-none border border-white bg-[#f9f9f9]"
                  style={getFadeStyle(index, entered)}
                >
                  <div className="absolute inset-0 p-[var(--card-padding)] flex flex-col text-center">
                    <div className="flex flex-1 items-center justify-center">
                      <img
                        src={icon.src}
                        alt={content[key as ContentKey]}
                        width={width}
                        height={height}
                        style={{
                          width,
                          height,
                          filter: SITE_SECTION_ICON_COLOR_FILTER,
                        }}
                      />
                    </div>
                    <Typography variant="h4" className="leading-snug text-center">
                      {content[key as ContentKey]}
                    </Typography>
                  </div>
                </div>
              )
            })}
          </div>

          <div
            className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] xl:col-span-1"
            style={getFadeStyle(AREAS.length, entered)}
          />
        </div>
      </section>
    </>
  )
}
