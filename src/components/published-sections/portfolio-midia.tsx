"use client"

import type { CSSProperties, ReactNode } from "react"
import { useEffect, useRef, useState } from "react"
import { Typography } from "@/components/typography"
import { VideoPlayer } from "@/components/video-player"
import content from "@/app/styleguide/site-sections/portfolio-midia/content.json"
import sigoContent from "@/app/styleguide/site-sections/proposta-sigo/content.json"
import { ICON_COLOR, ICON_LIBRARY_BY_ID } from "@/lib/site-sections/icon-library"
import type { PortfolioMidiaPublishedSectionSlug } from "@/lib/published-sections"
import { AutoHeightReporter } from "@/components/published-sections/auto-height-reporter"

const GITHUB_RAW = "https://raw.githubusercontent.com/chuvstudiodesign/portfolio-midia/master"

function rawAssetPath(path: string) {
  return `${GITHUB_RAW}/${path.split("/").map(encodeURIComponent).join("/")}`
}

const MIDIAS_ATUAIS_IMAGES = [
  { src: `${GITHUB_RAW}/Midias%20acaompanhadas%20atuais%20/Breno%20Masi%20Oficial.png`, alt: content["s2.masi.alt"], label: "Masi Negócios" },
  { src: `${GITHUB_RAW}/Midias%20acaompanhadas%20atuais%20/Overlens%20Oficial.png`, alt: content["s2.overlens.alt"], label: "Overlens" },
]

const MARCAS_SRC = rawAssetPath("Marcas.png")

const VFX_VIDEOS = [
  { src: `${GITHUB_RAW}/VFX/VFX.MOV`,  label: "VFX — take 1" },
  { src: `${GITHUB_RAW}/VFX/VFX2.MP4`, label: "VFX — take 2" },
]

const REELS_VIRAIS_VIDEOS = [
  { src: `${GITHUB_RAW}/REELS%20VIRAIS/Meu%20projeto%20(10).MP4`, label: "Reel 1" },
  { src: `${GITHUB_RAW}/REELS%20VIRAIS/Meu%20projeto%20(11).MP4`, label: "Reel 2" },
  { src: `${GITHUB_RAW}/REELS%20VIRAIS/Meu%20projeto%20(12).MP4`, label: "Reel 3" },
  { src: `${GITHUB_RAW}/REELS%20VIRAIS/Meu%20projeto%20(13).MP4`, label: "Reel 4" },
]

const MOTION_VIDEOS = [
  { src: `${GITHUB_RAW}/MOTION%202D%20E%203D/Motion%202D.MP4`,          label: "Motion 2D" },
  { src: `${GITHUB_RAW}/MOTION%202D%20E%203D/Motion%202D%202.MP4`,      label: "Motion 2D — take 2" },
  { src: `${GITHUB_RAW}/MOTION%202D%20E%203D/Motion%202D%20e%203D.MP4`, label: "Motion 2D e 3D" },
]

const POSTS_IA_VIDEOS = [
  { src: `${GITHUB_RAW}/POST%20COM%20IA/IA%20POST.MP4`,          label: "IA Post"      },
  { src: `${GITHUB_RAW}/POST%20COM%20IA/Steve%20mais%20som.MP4`, label: "Steve + som" },
]

const VALORIZACAO_IMAGES = [
  { src: `${GITHUB_RAW}/Valoriza%C3%A7%C3%A3o%20do%20Produto/POST%20PARA%20MIDIA%20MELANCIA.png`, alt: "Post mídia — Melancia" },
  { src: `${GITHUB_RAW}/Valoriza%C3%A7%C3%A3o%20do%20Produto/POST%20PARA%20MIDIA%20MEL%C3%83O.png`,  alt: "Post mídia — Melão"    },
  { src: `${GITHUB_RAW}/Valoriza%C3%A7%C3%A3o%20do%20Produto/SORVETE%20MELANCIA.png`,                alt: "Sorvete Melancia"     },
  { src: `${GITHUB_RAW}/Valoriza%C3%A7%C3%A3o%20do%20Produto/SORVETE%20MEL%C3%83O.png`,             alt: "Sorvete Melão"        },
]

const VALORIZACAO_CARD_IMAGES = [
  { src: `${GITHUB_RAW}/Valoriza%C3%A7%C3%A3o%20do%20Produto/Melancia.png` },
  { src: `${GITHUB_RAW}/Valoriza%C3%A7%C3%A3o%20do%20Produto/Mel%C3%A3o.png` },
]

const IDENTIDADE_VISUAL_IMAGES = [
  { src: rawAssetPath("Seguimento de Identidade Visual/1.png"), alt: "Seguimento de identidade visual 1" },
  { src: rawAssetPath("Seguimento de Identidade Visual/2.png"), alt: "Seguimento de identidade visual 2" },
  { src: rawAssetPath("Seguimento de Identidade Visual/3.png"), alt: "Seguimento de identidade visual 3" },
  { src: rawAssetPath("Seguimento de Identidade Visual/4.png"), alt: "Seguimento de identidade visual 4" },
  { src: rawAssetPath("Seguimento de Identidade Visual/5.png"), alt: "Seguimento de identidade visual 5" },
]

const IDENTIDADE_DIVERSAS_AREAS_IMAGES = [
  { src: rawAssetPath("Seguimento de Identidade Visual Diversas Areas/Captura de Tela 2026-03-08 às 09.49.06.png"), alt: "Seguimento de identidade em diversas áreas 1" },
  { src: rawAssetPath("Seguimento de Identidade Visual Diversas Areas/Captura de Tela 2026-03-08 às 09.49.16.png"), alt: "Seguimento de identidade em diversas áreas 2" },
  { src: rawAssetPath("Seguimento de Identidade Visual Diversas Areas/Captura de Tela 2026-03-08 às 09.49.25.png"), alt: "Seguimento de identidade em diversas áreas 3" },
  { src: rawAssetPath("Seguimento de Identidade Visual Diversas Areas/Captura de Tela 2026-03-08 às 09.49.36.png"), alt: "Seguimento de identidade em diversas áreas 4" },
  { src: rawAssetPath("Seguimento de Identidade Visual Diversas Areas/Captura de Tela 2026-03-08 às 09.49.42.png"), alt: "Seguimento de identidade em diversas áreas 5" },
]

const FEED_HARMONICO_SRC = `${GITHUB_RAW}/Feed%20Harmonico.png`

const AREAS = [
  { key: "s1.design-grafico",    iconKey: "s1.design-grafico.icon"    },
  { key: "s1.identidade-visual", iconKey: "s1.identidade-visual.icon" },
  { key: "s1.type-design",       iconKey: "s1.type-design.icon"       },
  { key: "s1.motion-3d",         iconKey: "s1.motion-3d.icon"         },
  { key: "s1.motion-2d",         iconKey: "s1.motion-2d.icon"         },
  { key: "s1.edicao-video",      iconKey: "s1.edicao-video.icon"      },
  { key: "s1.web-design",        iconKey: "s1.web-design.icon"        },
  { key: "s1.development",       iconKey: "s1.development.icon"       },
  { key: "s1.ia-aplicada",       iconKey: "s1.ia-aplicada.icon"       },
] as const

type SigoKey = keyof typeof sigoContent

// ── Shared helpers ────────────────────────────────────────────────────────────

function getIconById(id: string) {
  return ICON_LIBRARY_BY_ID[id] ?? ICON_LIBRARY_BY_ID["design-grafico"]!
}

function getFrameHeightIconDisplay(iconId: string, targetHeight: number) {
  const icon = getIconById(iconId)
  const scale = targetHeight / icon.fh
  return { width: Math.round(icon.fw * scale), height: Math.round(icon.fh * scale) }
}

function StaticIcon({ iconId, alt, width, height }: { iconId: string; alt: string; width: number; height: number }) {
  const icon = getIconById(iconId)
  return (
    <div role="img" aria-label={alt} style={{
      width, height, flexShrink: 0,
      backgroundColor: ICON_COLOR,
      maskImage: `url(${icon.src})`, WebkitMaskImage: `url(${icon.src})`,
      maskSize: "contain", WebkitMaskSize: "contain",
      maskRepeat: "no-repeat", WebkitMaskRepeat: "no-repeat",
      maskPosition: "center", WebkitMaskPosition: "center",
    }} />
  )
}

function Accent({ children }: { children: ReactNode }) {
  return <span className="text-primary">{children}</span>
}

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow?: ReactNode; title: ReactNode; subtitle: string }) {
  return (
    <div className="mb-[45px] flex flex-col items-center text-center">
      {eyebrow && (
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary mb-3">{eyebrow}</p>
      )}
      <Typography variant="h1" className="max-w-3xl">{title}</Typography>
      <Typography variant="body-m" className="mt-3 max-w-2xl text-muted-foreground">{subtitle}</Typography>
    </div>
  )
}

function InfoCards({ cards }: { cards: { label: string; title: string; body: string }[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
      {cards.map(({ label, title, body }) => (
        <div key={label} className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">{label}</p>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body-s" className="text-muted-foreground">{body}</Typography>
        </div>
      ))}
    </div>
  )
}

function AlternatingImages({
  images,
  alt,
  imageClassName,
}: {
  images: { src: string }[]
  alt: string
  imageClassName?: string
}) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length)
    }, 4000)

    return () => window.clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative flex h-full min-h-[420px] items-center justify-center overflow-hidden">
      {images.map((image, imageIndex) => (
        <img
          key={image.src}
          src={image.src}
          alt={alt}
          className={`absolute inset-0 h-full w-full transition-none ${imageClassName ?? "object-contain"} ${imageIndex === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}
    </div>
  )
}

function ImageGrid({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
      {images.map(({ src, alt }) => (
        <div key={src} className="relative min-h-[340px] rounded-none border border-white bg-[#f9f9f9] overflow-hidden">
          <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
        </div>
      ))}
    </div>
  )
}

function PublishedSectionShell({ children }: { children: ReactNode }) {
  return (
    <main className="bg-[#efefef] p-3 sm:p-4">
      <AutoHeightReporter />
      <div data-published-section-root>{children}</div>
    </main>
  )
}

function useEnterOnce() {
  const ref = useRef<HTMLElement | null>(null)
  const [entered, setEntered] = useState(false)
  useEffect(() => {
    const node = ref.current
    if (!node || entered) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry?.isIntersecting) { setEntered(true); observer.disconnect() } },
      { threshold: 0.25 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [entered])
  return { ref, entered }
}

function getFadeStyle(index: number, entered: boolean): CSSProperties {
  return {
    opacity: entered ? 1 : 0,
    transform: entered ? "scale(1)" : "scale(1.1)",
    transformOrigin: "center center",
    willChange: "opacity, transform",
    transitionProperty: "opacity, transform",
    transitionDuration: "1000ms",
    transitionTimingFunction: "ease",
    transitionDelay: entered ? `${index * 500}ms` : "0ms",
  }
}

// ── Section components ────────────────────────────────────────────────────────

export function PortfolioMidiaAreasSection() {
  const { ref, entered } = useEnterOnce()
  return (
    <section ref={ref} className="ds-section flex flex-col" style={{ backgroundColor: "#efefef" }}>
      <SectionHeader title={content["s1.title"]} subtitle={content["s1.subtitle"]} />
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:col-span-3 xl:grid-cols-3">
          {AREAS.map(({ key, iconKey }, index) => {
            const iconId = sigoContent[iconKey as SigoKey]
            const { width, height } = getFrameHeightIconDisplay(iconId, 47.0448)
            return (
              <div
                key={key}
                className="aspect-[5/3] rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col justify-between"
                style={getFadeStyle(index, entered)}
              >
                <StaticIcon iconId={iconId} alt={sigoContent[key as SigoKey]} width={width} height={height} />
                <Typography variant="h4" className="leading-snug">{sigoContent[key as SigoKey]}</Typography>
              </div>
            )
          })}
        </div>
        <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] xl:col-span-1" style={getFadeStyle(AREAS.length, entered)} />
      </div>
    </section>
  )
}

export function PortfolioMidiaMidiasAtuaisSection() {
  return (
    <section className="ds-section flex flex-col" style={{ backgroundColor: "#efefef" }}>
      <SectionHeader
        title={<>{content["s2.title.prefix"]}<Accent>{content["s2.title.accent"]}</Accent></>}
        subtitle={content["s2.subtitle"]}
      />
      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {MIDIAS_ATUAIS_IMAGES.map(({ src, alt, label }) => (
          <div key={label} className="rounded-none border border-white bg-[#f9f9f9] overflow-hidden">
            <img src={src} alt={alt} className="w-full h-auto object-cover block" />
          </div>
        ))}
      </div>
      <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">{content["s2.legado.label"]}</p>
          <div className="flex items-end gap-4">
            <Typography variant="display-xl" className="text-primary leading-none">{content["s2.legado.years.value"]}</Typography>
            <Typography variant="h2" className="pb-1">{content["s2.legado.years.label"]}</Typography>
          </div>
          <Typography variant="body-m" className="text-muted-foreground max-w-2xl">{content["s2.legado.body"]}</Typography>
        </div>
        <div className="px-[15px]">
          <img
            src={MARCAS_SRC}
            alt="Marcas atendidas pela Chuv Studio"
            className="mx-auto w-full h-auto block"
          />
        </div>
      </div>
    </section>
  )
}

export function PortfolioMidiaVFXSection() {
  return (
    <section className="ds-section flex flex-col" style={{ backgroundColor: "#efefef" }}>
      <SectionHeader title={content["s3.title"]} subtitle={content["s3.subtitle"]} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {VFX_VIDEOS.map(({ src, label }) => (
          <div key={label} className="rounded-none border border-white bg-[#f9f9f9] overflow-hidden">
            <VideoPlayer src={src} />
          </div>
        ))}
        <div className="col-span-2 rounded-none border border-white bg-[#f9f9f9]" />
      </div>
      <InfoCards cards={[
        { label: content["s3.c1.label"], title: content["s3.c1.title"], body: content["s3.c1.body"] },
        { label: content["s3.c2.label"], title: content["s3.c2.title"], body: content["s3.c2.body"] },
        { label: content["s3.c3.label"], title: content["s3.c3.title"], body: content["s3.c3.body"] },
      ]} />
    </section>
  )
}

export function PortfolioMidiaReelsViraisSection() {
  return (
    <section className="ds-section flex flex-col" style={{ backgroundColor: "#efefef" }}>
      <SectionHeader title={content["s4.title"]} subtitle={content["s4.subtitle"]} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {REELS_VIRAIS_VIDEOS.map(({ src, label }) => (
          <div key={label} className="rounded-none border border-white bg-[#f9f9f9] overflow-hidden">
            <VideoPlayer src={src} />
          </div>
        ))}
      </div>
      <InfoCards cards={[
        { label: content["s4.c1.label"], title: content["s4.c1.title"], body: content["s4.c1.body"] },
        { label: content["s4.c2.label"], title: content["s4.c2.title"], body: content["s4.c2.body"] },
        { label: content["s4.c3.label"], title: content["s4.c3.title"], body: content["s4.c3.body"] },
      ]} />
    </section>
  )
}

export function PortfolioMidiaMotionSection() {
  return (
    <section className="ds-section flex flex-col" style={{ backgroundColor: "#efefef" }}>
      <SectionHeader title={content["s5.title"]} subtitle={content["s5.subtitle"]} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {MOTION_VIDEOS.map(({ src, label }) => (
          <div key={label} className="rounded-none border border-white bg-[#f9f9f9] overflow-hidden">
            <VideoPlayer src={src} videoClassName="mb-[-5px]" />
          </div>
        ))}
        <div className="rounded-none border border-white bg-[#f9f9f9]" />
      </div>
      <InfoCards cards={[
        { label: content["s5.c1.label"], title: content["s5.c1.title"], body: content["s5.c1.body"] },
        { label: content["s5.c2.label"], title: content["s5.c2.title"], body: content["s5.c2.body"] },
        { label: content["s5.c3.label"], title: content["s5.c3.title"], body: content["s5.c3.body"] },
      ]} />
    </section>
  )
}

export function PortfolioMidiaPostsViraisSection() {
  return (
    <section className="ds-section flex flex-col" style={{ backgroundColor: "#efefef" }}>
      <SectionHeader
        eyebrow={content["s6.eyebrow"]}
        title={content["s6.title"]}
        subtitle={content["s6.subtitle"]}
      />
      <div aria-hidden="true" className="h-[480px]" />
      <InfoCards cards={[
        { label: content["s6.c1.label"], title: content["s6.c1.title"], body: content["s6.c1.body"] },
        { label: content["s6.c2.label"], title: content["s6.c2.title"], body: content["s6.c2.body"] },
        { label: content["s6.c3.label"], title: content["s6.c3.title"], body: content["s6.c3.body"] },
      ]} />
    </section>
  )
}

export function PortfolioMidiaPostsIASection() {
  return (
    <section className="ds-section flex flex-col" style={{ backgroundColor: "#efefef" }}>
      <SectionHeader title={content["s7.title"]} subtitle={content["s7.subtitle"]} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {POSTS_IA_VIDEOS.map(({ src, label }) => (
          <div key={label} className="rounded-none border border-white bg-[#f9f9f9] overflow-hidden">
            <VideoPlayer src={src} videoClassName="mb-[-5px]" />
          </div>
        ))}
        <div className="col-span-2 rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col justify-between gap-6">
          <Typography variant="h4" className="leading-tight">{content["s7.placeholder.title"]}</Typography>
          <Typography variant="body-s" className="text-muted-foreground">{content["s7.placeholder.body"]}</Typography>
        </div>
      </div>
      <InfoCards cards={[
        { label: content["s7.c1.label"], title: content["s7.c1.title"], body: content["s7.c1.body"] },
        { label: content["s7.c2.label"], title: content["s7.c2.title"], body: content["s7.c2.body"] },
        { label: content["s7.c3.label"], title: content["s7.c3.title"], body: content["s7.c3.body"] },
      ]} />
    </section>
  )
}

export function PortfolioMidiaValorizacaoSection() {
  return (
    <section className="ds-section flex flex-col" style={{ backgroundColor: "#efefef" }}>
      <SectionHeader title={content["s8.title"]} subtitle={content["s8.subtitle"]} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {VALORIZACAO_IMAGES.slice(0, 2).map(({ src, alt }) => (
          <div key={alt} className="relative min-h-[420px] rounded-none border border-white bg-[#f9f9f9] overflow-hidden">
            <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
          </div>
        ))}
        <div className="relative col-span-2 min-h-[420px] rounded-none border border-white bg-[#f9f9f9] overflow-hidden">
          <AlternatingImages
            images={VALORIZACAO_CARD_IMAGES}
            alt="Valorização do produto — card alternado"
            imageClassName="object-cover"
          />
        </div>
      </div>
      <InfoCards cards={[
        { label: content["s8.c1.label"], title: content["s8.c1.title"], body: content["s8.c1.body"] },
        { label: content["s8.c2.label"], title: content["s8.c2.title"], body: content["s8.c2.body"] },
        { label: content["s8.c3.label"], title: content["s8.c3.title"], body: content["s8.c3.body"] },
      ]} />
    </section>
  )
}

export function PortfolioMidiaFeedHarmonicoSection() {
  return (
    <section className="ds-section flex flex-col" style={{ backgroundColor: "#efefef" }}>
      <SectionHeader title={content["s9.title"]} subtitle={content["s9.subtitle"]} />
      <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <div className="rounded-none border border-white bg-[#f9f9f9] overflow-hidden">
          <img src={FEED_HARMONICO_SRC} alt="Feed harmônico" className="w-full h-auto object-cover block" />
        </div>
        <div className="overflow-hidden">
          <AlternatingImages
            images={VALORIZACAO_IMAGES.slice(2, 4)}
            alt="Valorização do produto"
          />
        </div>
      </div>
      <InfoCards cards={[
        { label: content["s9.c1.label"], title: content["s9.c1.title"], body: content["s9.c1.body"] },
        { label: content["s9.c2.label"], title: content["s9.c2.title"], body: content["s9.c2.body"] },
        { label: content["s9.c3.label"], title: content["s9.c3.title"], body: content["s9.c3.body"] },
      ]} />
    </section>
  )
}

export function PortfolioMidiaIdentidadeVisualSection() {
  return (
    <section className="ds-section flex flex-col" style={{ backgroundColor: "#efefef" }}>
      <SectionHeader title={content["s10.title"]} subtitle={content["s10.subtitle"]} />
      <ImageGrid images={IDENTIDADE_VISUAL_IMAGES} />
      <InfoCards cards={[
        { label: content["s10.c1.label"], title: content["s10.c1.title"], body: content["s10.c1.body"] },
        { label: content["s10.c2.label"], title: content["s10.c2.title"], body: content["s10.c2.body"] },
        { label: content["s10.c3.label"], title: content["s10.c3.title"], body: content["s10.c3.body"] },
      ]} />
    </section>
  )
}

export function PortfolioMidiaIdentidadeDiversasAreasSection() {
  return (
    <section className="ds-section flex flex-col" style={{ backgroundColor: "#efefef" }}>
      <SectionHeader title={content["s11.title"]} subtitle={content["s11.subtitle"]} />
      <ImageGrid images={IDENTIDADE_DIVERSAS_AREAS_IMAGES} />
      <InfoCards cards={[
        { label: content["s11.c1.label"], title: content["s11.c1.title"], body: content["s11.c1.body"] },
        { label: content["s11.c2.label"], title: content["s11.c2.title"], body: content["s11.c2.body"] },
        { label: content["s11.c3.label"], title: content["s11.c3.title"], body: content["s11.c3.body"] },
      ]} />
    </section>
  )
}

// ── Published page router ─────────────────────────────────────────────────────

const SECTION_RENDER: Record<PortfolioMidiaPublishedSectionSlug, () => ReactNode> = {
  "disciplinas":          () => <PortfolioMidiaAreasSection />,
  "midias-atuais":        () => <PortfolioMidiaMidiasAtuaisSection />,
  "valorizacao-produto":  () => <PortfolioMidiaValorizacaoSection />,
  "feed-harmonico":       () => <PortfolioMidiaFeedHarmonicoSection />,
  "seguimento-identidade-visual": () => <PortfolioMidiaIdentidadeVisualSection />,
  "seguimento-identidade-diversas-areas": () => <PortfolioMidiaIdentidadeDiversasAreasSection />,
  "vfx":                  () => <PortfolioMidiaVFXSection />,
  "reels-virais":         () => <PortfolioMidiaReelsViraisSection />,
  "motion-2d-3d":         () => <PortfolioMidiaMotionSection />,
  "posts-virais":         () => <PortfolioMidiaPostsViraisSection />,
  "posts-com-ia":         () => <PortfolioMidiaPostsIASection />,
}

export function PortfolioMidiaPublishedSectionPage({ slug }: { slug: PortfolioMidiaPublishedSectionSlug }) {
  return (
    <PublishedSectionShell>
      {SECTION_RENDER[slug]()}
    </PublishedSectionShell>
  )
}
