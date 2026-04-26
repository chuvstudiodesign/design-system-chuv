"use client"

import { useEffect } from "react"

const EMBED_RESIZE_MESSAGE_TYPE = "chuv:embed-resize"

export function AutoHeightReporter() {
  useEffect(() => {
    const getContainer = () =>
      document.querySelector<HTMLElement>("main > section[data-published-section-root]") ??
      document.querySelector<HTMLElement>("main > section") ??
      document.querySelector<HTMLElement>("main") ??
      document.body

    const getMeasuredHeight = (element: HTMLElement) =>
      Math.ceil(
        Math.max(
          element.getBoundingClientRect().height,
          element.scrollHeight,
          element.offsetHeight,
        )
      )

    let frameId = 0
    let postAnimationTimerId = 0
    const previousHtmlOverflow = document.documentElement.style.overflow
    const previousBodyOverflow = document.body.style.overflow

    const sendHeight = () => {
      frameId = window.requestAnimationFrame(() => {
        const container = getContainer()

        window.parent.postMessage(
          {
            type: EMBED_RESIZE_MESSAGE_TYPE,
            height: getMeasuredHeight(container),
            path: window.location.pathname,
          },
          "*"
        )
      })
    }

    const schedulePostAnimation = () => {
      window.clearTimeout(postAnimationTimerId)
      postAnimationTimerId = window.setTimeout(sendHeight, 350)
    }

    document.documentElement.style.overflow = "hidden"
    document.body.style.overflow = "hidden"

    // Suppress all scrollbars — prevents the flash that appears for a split
    // second when accordion content grows before Framer resizes the iframe.
    const noScrollbarStyle = document.createElement("style")
    noScrollbarStyle.textContent = `
      * { scrollbar-width: none !important; }
      *::-webkit-scrollbar { display: none !important; }
    `
    document.head.appendChild(noScrollbarStyle)

    // Observe the content container — fires when accordion opens or closes
    const resizeObserver = new ResizeObserver(() => {
      sendHeight()
      schedulePostAnimation()
    })

    resizeObserver.observe(document.documentElement)
    resizeObserver.observe(document.body)

    const initialContainer = getContainer()
    resizeObserver.observe(initialContainer)

    // MutationObserver as backup trigger for any DOM change
    const mutationObserver = new MutationObserver(() => {
      sendHeight()
      schedulePostAnimation()
    })

    mutationObserver.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
      characterData: true,
    })

    window.addEventListener("resize", sendHeight)

    sendHeight()
    window.setTimeout(sendHeight, 50)
    window.setTimeout(sendHeight, 150)
    window.setTimeout(sendHeight, 300)
    window.setTimeout(sendHeight, 600)

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId)
      window.clearTimeout(postAnimationTimerId)
      window.removeEventListener("resize", sendHeight)
      resizeObserver.disconnect()
      mutationObserver.disconnect()
      document.documentElement.style.overflow = previousHtmlOverflow
      document.body.style.overflow = previousBodyOverflow
      noScrollbarStyle.remove()
    }
  }, [])

  return null
}

export { EMBED_RESIZE_MESSAGE_TYPE }
