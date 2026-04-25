"use client"

import { useState } from "react"
import { Check, Pencil } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { useEditMode } from "@/lib/edit-mode/context"
import {
  ICON_LIBRARY,
  ICON_LIBRARY_BY_ID,
  SITE_SECTION_ICON_COLOR_FILTER,
} from "@/lib/site-sections/icon-library"

type IconScaleStrategy =
  | {
      kind: "frameHeight"
      frameHeight: number
      targetHeight: number
    }
  | {
      kind: "scale"
      scale: number
    }

interface EditableIconProps {
  namespace: string
  id: string
  fallbackIconId: string
  alt: string
  strategy: IconScaleStrategy
  className?: string
  imgClassName?: string
}

function getDisplaySize(
  iconId: string,
  strategy: IconScaleStrategy
) {
  const icon = ICON_LIBRARY_BY_ID[iconId] ?? ICON_LIBRARY_BY_ID[Object.keys(ICON_LIBRARY_BY_ID)[0]]

  if (strategy.kind === "frameHeight") {
    return {
      width: Math.round((icon.fw / strategy.frameHeight) * strategy.targetHeight),
      height: Math.round((icon.fh / strategy.frameHeight) * strategy.targetHeight),
    }
  }

  return {
    width: Math.round(icon.fw * strategy.scale),
    height: Math.round(icon.fh * strategy.scale),
  }
}

export function EditableIcon({
  namespace,
  id,
  fallbackIconId,
  alt,
  strategy,
  className,
  imgClassName,
}: EditableIconProps) {
  const { isEditing, getValue, recordChange } = useEditMode()
  const [open, setOpen] = useState(false)
  const iconId = getValue(namespace, id, fallbackIconId)
  const icon = ICON_LIBRARY_BY_ID[iconId] ?? ICON_LIBRARY_BY_ID[fallbackIconId]
  const { width, height } = getDisplaySize(icon.id, strategy)

  return (
    <>
      <span
        onClick={(event) => {
          if (isEditing) {
            event.stopPropagation()
            setOpen(true)
          }
        }}
        className={cn(
          "relative inline-flex w-fit shrink-0 self-start items-start justify-start align-top",
          isEditing && "cursor-pointer",
          className
        )}
      >
        <img
          src={icon.src}
          alt={alt}
          width={width}
          height={height}
          className={cn("shrink-0", imgClassName)}
          style={{
            width,
            height,
            filter: SITE_SECTION_ICON_COLOR_FILTER,
          }}
        />

        {isEditing ? (
          <span className="absolute -top-2 -right-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white bg-primary text-white shadow-sm">
            <Pencil className="h-3 w-3" />
          </span>
        ) : null}
      </span>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="grid h-[min(78vh,56rem)] w-[min(72rem,calc(100vw-1.5rem))] max-w-[min(72rem,calc(100vw-1.5rem))] grid-rows-[auto_minmax(0,1fr)] gap-0 overflow-hidden rounded-none border border-white bg-[#f9f9f9] p-0 shadow-none ring-0 sm:max-w-[72rem]"
          showCloseButton={false}
        >
          <DialogHeader className="border-b border-black/10 px-[var(--card-padding)] py-6">
            <DialogTitle>Trocar ícone</DialogTitle>
            <DialogDescription>
              Escolha um ícone da biblioteca. A proporção do slot atual será preservada automaticamente.
            </DialogDescription>
          </DialogHeader>

          <div className="grid min-h-0 grid-cols-2 content-start gap-3 overflow-y-auto p-5 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
            {ICON_LIBRARY.map((candidate) => {
              const candidateSize = getDisplaySize(candidate.id, strategy)
              const active = candidate.id === icon.id

              return (
                <button
                  key={candidate.id}
                  type="button"
                  onClick={() => {
                    recordChange(namespace, id, candidate.id)
                    setOpen(false)
                  }}
                  className={cn(
                    "flex min-h-[152px] flex-col rounded-none border bg-white p-4 text-center transition-colors",
                    active
                      ? "border-primary bg-[var(--brand-primary-50)]"
                      : "border-white hover:border-primary/30"
                  )}
                >
                  <div className="flex h-20 items-end justify-center">
                    <img
                      src={candidate.src}
                      alt={candidate.name}
                      width={candidateSize.width}
                      height={candidateSize.height}
                      style={{
                        width: candidateSize.width,
                        height: candidateSize.height,
                        filter: SITE_SECTION_ICON_COLOR_FILTER,
                      }}
                    />
                  </div>
                  <div className="mt-4 flex items-start justify-center gap-2">
                    <span className="font-mono text-[10px] leading-snug text-center text-foreground/70">
                      {candidate.name}
                    </span>
                    {active ? <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" /> : null}
                  </div>
                </button>
              )
            })}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
