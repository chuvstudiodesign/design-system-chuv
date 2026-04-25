"use client"

import { useEffect } from "react"

const EMBED_RESIZE_MESSAGE_TYPE = "chuv:embed-resize"

function getDocumentHeight() {
  return document.body.scrollHeight
}

export function AutoHeightReporter() {
  useEffect(() => {
    let frameId = 0
    let postAnimationTimerId = 0
    const previousHtmlOverflow = document.documentElement.style.overflow
    const previousBodyOverflow = document.body.style.overflow

    const sendHeight = () => {
      frameId = window.requestAnimationFrame(() => {
        window.parent.postMessage(
          {
            type: EMBED_RESIZE_MESSAGE_TYPE,
            height: getDocumentHeight(),
            path: window.location.pathname,
          },
          "*"
        )
      })
    }

    document.documentElement.style.overflow = "hidden"
    document.body.style.overflow = "hidden"

    const resizeObserver = new ResizeObserver(() => {
      sendHeight()
      // Send again after accordion/animation completes to capture final settled height
      window.clearTimeout(postAnimationTimerId)
      postAnimationTimerId = window.setTimeout(sendHeight, 350)
    })

    resizeObserver.observe(document.documentElement)
    resizeObserver.observe(document.body)

    const mutationObserver = new MutationObserver(() => {
      sendHeight()
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
      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }

      window.clearTimeout(postAnimationTimerId)
      window.removeEventListener("resize", sendHeight)
      resizeObserver.disconnect()
      mutationObserver.disconnect()
      document.documentElement.style.overflow = previousHtmlOverflow
      document.body.style.overflow = previousBodyOverflow
    }
  }, [])

  return null
}

export { EMBED_RESIZE_MESSAGE_TYPE }
