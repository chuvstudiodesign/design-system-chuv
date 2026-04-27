"use client"

import { useEffect } from "react"

const EMBED_RESIZE_MESSAGE_TYPE = "chuv:embed-resize"

export function AutoHeightReporter() {
  useEffect(() => {
    // Measure <main> so the reported height includes its padding.
    // Never measure html/body — they inherit the iframe viewport height set by
    // Framer and would create a feedback loop (measure → report → Framer resizes
    // iframe → viewport changes → html/body resize → measure again → ...).
    const getContainer = (): HTMLElement =>
      document.querySelector<HTMLElement>("main") ??
      document.body

    let lastSentHeight = -1
    let rafId = 0
    let debounceId = 0

    const sendHeight = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        const el = getContainer()
        // offsetHeight: rendered box height (content + padding), unaffected by
        // the iframe viewport size. getBoundingClientRect().height is
        // viewport-relative and changes when Framer resizes the iframe.
        const height = el.offsetHeight

        // Guard: only postMessage when height actually changed.
        // Without this, floating-point differences across DPR values (e.g. 1.25×
        // on Windows) cause each round-trip to add 1–2 px indefinitely.
        if (height < 1 || height === lastSentHeight) return
        lastSentHeight = height

        window.parent.postMessage(
          { type: EMBED_RESIZE_MESSAGE_TYPE, height, path: window.location.pathname },
          "*"
        )
      })
    }

    const scheduleDebounce = () => {
      clearTimeout(debounceId)
      debounceId = window.setTimeout(sendHeight, 350)
    }

    // Suppress scrollbar flash before any measurement.
    document.documentElement.style.overflow = "hidden"
    document.body.style.overflow = "hidden"

    // Only observe the content container — not html or body.
    const container = getContainer()
    const ro = new ResizeObserver(() => {
      sendHeight()
      scheduleDebounce()
    })
    ro.observe(container)

    // Fire a few timed shots to catch deferred renders (fonts, images, Spline).
    sendHeight()
    const t1 = setTimeout(sendHeight, 100)
    const t2 = setTimeout(sendHeight, 400)
    const t3 = setTimeout(sendHeight, 900)

    return () => {
      cancelAnimationFrame(rafId)
      clearTimeout(debounceId)
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      ro.disconnect()
      document.documentElement.style.overflow = ""
      document.body.style.overflow = ""
    }
  }, [])

  return null
}

export { EMBED_RESIZE_MESSAGE_TYPE }
