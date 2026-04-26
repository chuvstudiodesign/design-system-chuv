import type { ComponentType } from "react"
import { useEffect, useRef } from "react"

export function HideScrollbar(Component: ComponentType): ComponentType {
  return (props: any) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const el = ref.current
      if (!el) return

      // Set scrolling=no on the iframe directly
      const iframe = el.querySelector("iframe")
      if (iframe) {
        iframe.setAttribute("scrolling", "no")
        ;(iframe as HTMLElement).style.overflow = "hidden"
      }

      // Inject CSS to kill scrollbars inside this embed's iframe document
      // (works when iframe is same-origin; for cross-origin it's a best-effort)
      el.style.overflow = "hidden"
    }, [])

    return (
      <div
        ref={ref}
        style={{ overflow: "hidden", width: "100%", height: "100%" }}
      >
        <Component {...props} />
      </div>
    )
  }
}
