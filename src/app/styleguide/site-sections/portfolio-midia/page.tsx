"use client"

import type { CSSProperties } from "react"
import React, { useEffect, useRef, useState } from "react"
import { Typography } from "@/components/typography"
import { EditableText } from "@/components/editable-text"
import { EditableIcon } from "@/components/site-sections/editable-icon"
import { VideoPlayer } from "@/components/video-player"
import content from "./content.json"
import propostaSigoContent from "@/app/styleguide/site-sections/proposta-sigo/content.json"

const NS = "portfolio-midia"
const NS_SIGO = "proposta-sigo"

const GITHUB_RAW = "https://raw.githubusercontent.com/chuvstudiodesign/portfolio-midia/master"

function rawAssetPath(path: string) {
  return `${GITHUB_RAW}/${path.split("/").map(encodeURIComponent).join("/")}`
}

// ── Media assets ─────────────────────────────────────────────────────────────

const MIDIAS_ATUAIS_IMAGES = [
  { src: `${GITHUB_RAW}/Midias%20acaompanhadas%20atuais%20/Breno%20Masi%20Oficial.png`, altKey: "s2.masi.alt" as ContentKey, label: "Masi Negócios" },
  { src: `${GITHUB_RAW}/Midias%20acaompanhadas%20atuais%20/Overlens%20Oficial.png`, altKey: "s2.overlens.alt" as ContentKey, label: "Overlens" },
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
  { src: `${GITHUB_RAW}/MOTION%202D%20E%203D/Motion%202D.MP4`,       label: "Motion 2D" },
  { src: `${GITHUB_RAW}/MOTION%202D%20E%203D/Motion%202D%202.MP4`,   label: "Motion 2D — take 2" },
  { src: `${GITHUB_RAW}/MOTION%202D%20E%203D/Motion%202D%20e%203D.MP4`, label: "Motion 2D e 3D" },
]

const POSTS_IA_VIDEOS = [
  { src: `${GITHUB_RAW}/POST%20COM%20IA/IA%20POST.MP4`,          label: "IA Post" },
  { src: `${GITHUB_RAW}/POST%20COM%20IA/Steve%20mais%20som.MP4`, label: "Steve + som" },
]

const AGENTICA_IMAGE_SRC = rawAssetPath("Agentica.png")

const VALORIZACAO_IMAGES = [
  { src: `${GITHUB_RAW}/Valoriza%C3%A7%C3%A3o%20do%20Produto/POST%20PARA%20MIDIA%20MELANCIA.png`, alt: "Post mídia — Melancia" },
  { src: `${GITHUB_RAW}/Valoriza%C3%A7%C3%A3o%20do%20Produto/POST%20PARA%20MIDIA%20MEL%C3%83O.png`,  alt: "Post mídia — Melão" },
  { src: `${GITHUB_RAW}/Valoriza%C3%A7%C3%A3o%20do%20Produto/SORVETE%20MELANCIA.png`,                alt: "Sorvete Melancia" },
  { src: `${GITHUB_RAW}/Valoriza%C3%A7%C3%A3o%20do%20Produto/SORVETE%20MEL%C3%83O.png`,             alt: "Sorvete Melão" },
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
  { src: rawAssetPath("Seguimento de Identidade Visual Diversas Areas/Captura de Tela 2026-03-08 às 09.49.06.png"), alt: "Seguimento de identidade em diversas áreas 1" },
  { src: rawAssetPath("Seguimento de Identidade Visual Diversas Areas/Captura de Tela 2026-03-08 às 09.49.16.png"), alt: "Seguimento de identidade em diversas áreas 2" },
  { src: rawAssetPath("Seguimento de Identidade Visual Diversas Areas/Captura de Tela 2026-03-08 às 09.49.25.png"), alt: "Seguimento de identidade em diversas áreas 3" },
  { src: rawAssetPath("Seguimento de Identidade Visual Diversas Areas/Captura de Tela 2026-03-08 às 09.49.36.png"), alt: "Seguimento de identidade em diversas áreas 4" },
  { src: rawAssetPath("Seguimento de Identidade Visual Diversas Areas/Captura de Tela 2026-03-08 às 09.49.42.png"), alt: "Seguimento de identidade em diversas áreas 5" },
]

const FEED_HARMONICO_SRC = `${GITHUB_RAW}/Feed%20Harmonico.png`

// ── Areas (reuse proposta-sigo) ───────────────────────────────────────────────

const areas = [
  { key: "s1.design-grafico",    iconKey: "s1.design-grafico.icon"    },
  { key: "s1.identidade-visual", iconKey: "s1.identidade-visual.icon" },
  { key: "s1.type-design",       iconKey: "s1.type-design.icon"       },
  { key: "s1.motion-3d",         iconKey: "s1.motion-3d.icon"         },
  { key: "s1.motion-2d",         iconKey: "s1.motion-2d.icon"         },
  { key: "s1.edicao-video",      iconKey: "s1.edicao-video.icon"      },
  { key: "s1.web-design",        iconKey: "s1.web-design.icon"        },
  { key: "s1.development",       iconKey: "s1.development.icon"       },
  { key: "s1.ia-aplicada",       iconKey: "s1.ia-aplicada.icon"       },
]

// ── Helpers ───────────────────────────────────────────────────────────────────

const FADE_DURATION_MS = 1000
const FADE_STAGGER_MS  = 500

function getAreaFadeStyle(index: number, entered: boolean): CSSProperties {
  return {
    opacity:            entered ? 1 : 0,
    transform:          entered ? "scale(1)" : "scale(1.1)",
    transformOrigin:    "center center",
    willChange:         "opacity, transform",
    transitionProperty: "opacity, transform",
    transitionDuration: `${FADE_DURATION_MS}ms`,
    transitionTimingFunction: "ease",
    transitionDelay:    entered ? `${index * FADE_STAGGER_MS}ms` : "0ms",
  }
}

type SigoKey    = keyof typeof propostaSigoContent
type ContentKey = keyof typeof content

function cs(key: SigoKey)    { return propostaSigoContent[key] }
function c(key: ContentKey)  { return content[key] }

function Accent({ children }: { children: React.ReactNode }) {
  return <span className="text-primary">{children}</span>
}

function SectionHeader({
  eyebrow,
  eyebrowId,
  titleId,
  subtitleId,
}: {
  eyebrow?: string
  eyebrowId?: ContentKey
  titleId: ContentKey
  subtitleId: ContentKey
}) {
  return (
    <div className="mb-[45px] flex flex-col items-center text-center">
      {eyebrow && eyebrowId && (
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary mb-3">
          <EditableText namespace={NS} id={eyebrowId}>{eyebrow}</EditableText>
        </p>
      )}
      <Typography variant="h1" className="max-w-3xl">
        <EditableText namespace={NS} id={titleId}>{c(titleId)}</EditableText>
      </Typography>
      <Typography variant="body-m" className="mt-3 max-w-2xl text-muted-foreground">
        <EditableText namespace={NS} id={subtitleId}>{c(subtitleId)}</EditableText>
      </Typography>
    </div>
  )
}

function InfoCards({ keys }: { keys: [ContentKey, ContentKey, ContentKey][] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
      {keys.map(([labelKey, titleKey, bodyKey]) => (
        <div key={labelKey} className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
            <EditableText namespace={NS} id={labelKey}>{c(labelKey)}</EditableText>
          </p>
          <Typography variant="h4">
            <EditableText namespace={NS} id={titleKey}>{c(titleKey)}</EditableText>
          </Typography>
          <Typography variant="body-s" className="text-muted-foreground">
            <EditableText namespace={NS} id={bodyKey}>{c(bodyKey)}</EditableText>
          </Typography>
        </div>
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

function ImageStack({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <div className="flex flex-col gap-4">
      {images.map(({ src, alt }) => (
        <div key={src} className="rounded-none border border-white/8 bg-[#111111] overflow-hidden">
          <img src={src} alt={alt} className="block h-auto w-full" />
        </div>
      ))}
    </div>
  )
}

function DarkInfoCards({ keys }: { keys: [ContentKey, ContentKey, ContentKey][] }) {
  return (
    <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-3">
      {keys.map(([labelKey, titleKey, bodyKey]) => (
        <div key={labelKey} className="rounded-none border border-white/8 bg-[#111111] p-[var(--card-padding)] flex flex-col gap-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
            <EditableText namespace={NS} id={labelKey}>{c(labelKey)}</EditableText>
          </p>
          <Typography variant="h4" className="text-white">
            <EditableText namespace={NS} id={titleKey}>{c(titleKey)}</EditableText>
          </Typography>
          <Typography variant="body-s" className="text-[#b3b3b3]">
            <EditableText namespace={NS} id={bodyKey}>{c(bodyKey)}</EditableText>
          </Typography>
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

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PortfolioMidiaPage() {
  const areasRef = useRef<HTMLElement | null>(null)
  const [areasEntered, setAreasEntered] = useState(false)

  useEffect(() => {
    const node = areasRef.current
    if (!node || areasEntered) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry?.isIntersecting) { setAreasEntered(true); observer.disconnect() } },
      { threshold: 0.25 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [areasEntered])

  return (
    <div className="ds-page">

      {/* Header */}
      <div className="ds-page-header">
        <p className="text-xs font-bold tracking-widest text-primary uppercase mb-2">
          <EditableText namespace={NS} id="header.eyebrow">{c("header.eyebrow")}</EditableText>
        </p>
        <h1 className="ds-page-title">
          <EditableText namespace={NS} id="header.title">{c("header.title")}</EditableText>
        </h1>
        <p className="ds-page-description max-w-xl">
          <EditableText namespace={NS} id="header.description">{c("header.description")}</EditableText>
        </p>
      </div>

      {/* ── S1 — Disciplinas ──────────────────────────────────────────────── */}
      <section ref={areasRef} className="ds-section flex flex-col" style={{ backgroundColor: "#efefef" }}>
        <SectionHeader titleId="s1.title" subtitleId="s1.subtitle" />

        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-3 grid grid-cols-3 gap-4">
            {areas.map(({ key, iconKey }, index) => (
              <div
                key={key}
                className="aspect-[5/3] rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col justify-between"
                style={getAreaFadeStyle(index, areasEntered)}
              >
                <EditableIcon
                  namespace={NS_SIGO}
                  id={iconKey}
                  fallbackIconId={cs(iconKey as SigoKey)}
                  alt={cs(key as SigoKey)}
                  strategy={{ kind: "frameHeight", frameHeight: 410, targetHeight: 47.0448 }}
                />
                <Typography variant="h4" className="leading-snug">
                  <EditableText namespace={NS_SIGO} id={key}>{cs(key as SigoKey)}</EditableText>
                </Typography>
              </div>
            ))}
          </div>
          <div
            className="col-span-1 rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]"
            style={getAreaFadeStyle(areas.length, areasEntered)}
          />
        </div>
      </section>

      {/* ── S2 — Mídias acompanhadas atualmente ──────────────────────────── */}
      <section className="ds-section flex flex-col" style={{ backgroundColor: "#efefef" }}>
        <div className="mb-[45px] flex flex-col items-center text-center">
          <Typography variant="h1" className="max-w-3xl">
            <EditableText namespace={NS} id="s2.title.prefix">{c("s2.title.prefix")}</EditableText>
            <Accent><EditableText namespace={NS} id="s2.title.accent">{c("s2.title.accent")}</EditableText></Accent>
          </Typography>
          <Typography variant="body-m" className="mt-3 max-w-2xl text-muted-foreground">
            <EditableText namespace={NS} id="s2.subtitle">{c("s2.subtitle")}</EditableText>
          </Typography>
        </div>

        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {MIDIAS_ATUAIS_IMAGES.map(({ src, altKey, label }) => (
            <div key={label} className="rounded-none border border-white bg-[#f9f9f9] overflow-hidden">
              <img src={src} alt={c(altKey)} className="w-full h-auto object-cover block" />
            </div>
          ))}
        </div>

        <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
              <EditableText namespace={NS} id="s2.legado.label">{c("s2.legado.label")}</EditableText>
            </p>
            <div className="flex items-end gap-4">
              <Typography variant="display-xl" className="text-primary leading-none">
                <EditableText namespace={NS} id="s2.legado.years.value">{c("s2.legado.years.value")}</EditableText>
              </Typography>
              <Typography variant="h2" className="pb-1">
                <EditableText namespace={NS} id="s2.legado.years.label">{c("s2.legado.years.label")}</EditableText>
              </Typography>
            </div>
            <Typography variant="body-m" className="text-muted-foreground max-w-2xl">
              <EditableText namespace={NS} id="s2.legado.body">{c("s2.legado.body")}</EditableText>
            </Typography>
          </div>

          <div className="px-[15px]">
            <img
              src={MARCAS_SRC}
              alt="Marcas atendidas pela Chuv Studio"
              className="mx-auto block h-auto w-[85%]"
            />
          </div>
        </div>
      </section>

      {/* ── S8 — Valorização do Produto ───────────────────────────────────── */}
      <section className="ds-section flex flex-col" style={{ backgroundColor: "#efefef" }}>
        <SectionHeader titleId="s8.title" subtitleId="s8.subtitle" />
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
        <InfoCards keys={[
          ["s8.c1.label", "s8.c1.title", "s8.c1.body"],
          ["s8.c2.label", "s8.c2.title", "s8.c2.body"],
          ["s8.c3.label", "s8.c3.title", "s8.c3.body"],
        ]} />
      </section>

      {/* ── S9 — Feed Harmônico ───────────────────────────────────────────── */}
      <section className="ds-section flex flex-col" style={{ backgroundColor: "#efefef" }}>
        <SectionHeader titleId="s9.title" subtitleId="s9.subtitle" />
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
        <InfoCards keys={[
          ["s9.c1.label", "s9.c1.title", "s9.c1.body"],
          ["s9.c2.label", "s9.c2.title", "s9.c2.body"],
          ["s9.c3.label", "s9.c3.title", "s9.c3.body"],
        ]} />
      </section>

      {/* ── S4 — Reels Virais (antes dos VFX) ────────────────────────────── */}
      <section className="ds-section flex flex-col" style={{ backgroundColor: "#efefef" }}>
        <SectionHeader titleId="s4.title" subtitleId="s4.subtitle" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {REELS_VIRAIS_VIDEOS.map(({ src, label }) => (
            <div key={label} className="rounded-none border border-white bg-[#f9f9f9] overflow-hidden">
              <VideoPlayer src={src} />
            </div>
          ))}
        </div>
        <InfoCards keys={[
          ["s4.c1.label", "s4.c1.title", "s4.c1.body"],
          ["s4.c2.label", "s4.c2.title", "s4.c2.body"],
          ["s4.c3.label", "s4.c3.title", "s4.c3.body"],
        ]} />
      </section>

      {/* ── S3 — Reels com VFX ────────────────────────────────────────────── */}
      <section className="ds-section flex flex-col" style={{ backgroundColor: "#efefef" }}>
        <SectionHeader titleId="s3.title" subtitleId="s3.subtitle" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {VFX_VIDEOS.map(({ src, label }) => (
            <div key={label} className="rounded-none border border-white bg-[#f9f9f9] overflow-hidden">
              <VideoPlayer src={src} />
            </div>
          ))}
          <div className="col-span-2 rounded-none border border-white bg-[#f9f9f9]" />
        </div>
        <InfoCards keys={[
          ["s3.c1.label", "s3.c1.title", "s3.c1.body"],
          ["s3.c2.label", "s3.c2.title", "s3.c2.body"],
          ["s3.c3.label", "s3.c3.title", "s3.c3.body"],
        ]} />
      </section>

      {/* ── S5 — Motion 2D e 3D ───────────────────────────────────────────── */}
      <section className="ds-section flex flex-col" style={{ backgroundColor: "#efefef" }}>
        <SectionHeader titleId="s5.title" subtitleId="s5.subtitle" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {MOTION_VIDEOS.map(({ src, label }) => (
            <div key={label} className="rounded-none border border-white bg-[#f9f9f9] overflow-hidden">
              <VideoPlayer src={src} videoClassName="mb-[-5px]" />
            </div>
          ))}
          <div className="rounded-none border border-white bg-[#f9f9f9]" />
        </div>
        <InfoCards keys={[
          ["s5.c1.label", "s5.c1.title", "s5.c1.body"],
          ["s5.c2.label", "s5.c2.title", "s5.c2.body"],
          ["s5.c3.label", "s5.c3.title", "s5.c3.body"],
        ]} />
      </section>

      {/* ── S6 — Posts Virais ─────────────────────────────────────────────── */}
      <section className="ds-section flex flex-col" style={{ backgroundColor: "#efefef" }}>
        <SectionHeader
          eyebrow={c("s6.eyebrow")}
          eyebrowId="s6.eyebrow"
          titleId="s6.title"
          subtitleId="s6.subtitle"
        />
        <div aria-hidden="true" className="h-[480px]" />
        <InfoCards keys={[
          ["s6.c1.label", "s6.c1.title", "s6.c1.body"],
          ["s6.c2.label", "s6.c2.title", "s6.c2.body"],
          ["s6.c3.label", "s6.c3.title", "s6.c3.body"],
        ]} />
      </section>

      {/* ── S7 — Posts com IA ─────────────────────────────────────────────── */}
      <section className="ds-section flex flex-col" style={{ backgroundColor: "#efefef" }}>
        <SectionHeader titleId="s7.title" subtitleId="s7.subtitle" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {POSTS_IA_VIDEOS.map(({ src, label }) => (
            <div key={label} className="rounded-none border border-white bg-[#f9f9f9] overflow-hidden">
              <VideoPlayer src={src} videoClassName="mb-[-5px]" />
            </div>
          ))}
          <div className="col-span-2 rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)] flex flex-col justify-between gap-6">
            <Typography variant="h4" className="leading-tight">
              <EditableText namespace={NS} id="s7.placeholder.title">{c("s7.placeholder.title")}</EditableText>
            </Typography>
            <div className="flex flex-1 min-h-0 items-center justify-center overflow-hidden rounded-none">
              <img src={AGENTICA_IMAGE_SRC} alt="Agêntica" className="block max-h-[220px] w-auto max-w-full" />
            </div>
          </div>
        </div>
        <InfoCards keys={[
          ["s7.c1.label", "s7.c1.title", "s7.c1.body"],
          ["s7.c2.label", "s7.c2.title", "s7.c2.body"],
          ["s7.c3.label", "s7.c3.title", "s7.c3.body"],
        ]} />
      </section>

      {/* ── S10 — Seguimento de Identidade Visual ────────────────────────── */}
      <section className="ds-section flex flex-col" style={{ backgroundColor: "#000000" }}>
        <div className="mb-[45px] flex flex-col items-center text-center">
          <Typography variant="h1" className="max-w-3xl text-white">
            <EditableText namespace={NS} id="s10.title">{c("s10.title")}</EditableText>
          </Typography>
          <Typography variant="body-m" className="mt-3 max-w-2xl text-[#c7c7c7]">
            <EditableText namespace={NS} id="s10.subtitle">{c("s10.subtitle")}</EditableText>
          </Typography>
        </div>
        <ImageStack images={IDENTIDADE_VISUAL_IMAGES} />
        <DarkInfoCards keys={[
          ["s10.c1.label", "s10.c1.title", "s10.c1.body"],
          ["s10.c2.label", "s10.c2.title", "s10.c2.body"],
          ["s10.c3.label", "s10.c3.title", "s10.c3.body"],
        ]} />
      </section>

      {/* ── S11 — Seguimento de Identidade em Diversas Áreas ─────────────── */}
      <section className="ds-section flex flex-col" style={{ backgroundColor: "#000000" }}>
        <div className="mb-[45px] flex flex-col items-center text-center">
          <Typography variant="h1" className="max-w-3xl text-white">
            <EditableText namespace={NS} id="s11.title">{c("s11.title")}</EditableText>
          </Typography>
          <Typography variant="body-m" className="mt-3 max-w-2xl text-[#c7c7c7]">
            <EditableText namespace={NS} id="s11.subtitle">{c("s11.subtitle")}</EditableText>
          </Typography>
        </div>
        <ImageStack images={IDENTIDADE_DIVERSAS_AREAS_IMAGES} />
        <DarkInfoCards keys={[
          ["s11.c1.label", "s11.c1.title", "s11.c1.body"],
          ["s11.c2.label", "s11.c2.title", "s11.c2.body"],
          ["s11.c3.label", "s11.c3.title", "s11.c3.body"],
        ]} />
      </section>

    </div>
  )
}
