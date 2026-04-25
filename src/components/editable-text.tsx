"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { useEditMode } from "@/lib/edit-mode/context"

interface EditableTextProps {
  id: string
  namespace: string
  children: string
  className?: string
}

export function EditableText({ id, namespace, children, className }: EditableTextProps) {
  const { isEditing, recordChange, getValue } = useEditMode()
  const ref = useRef<HTMLSpanElement>(null)
  const value = getValue(namespace, id, children)

  // Reset text content when exiting edit mode (cancel) or when value changes externally
  useEffect(() => {
    if (!isEditing && ref.current) {
      ref.current.innerText = value
    }
  }, [isEditing, value])

  return (
    <span
      ref={ref}
      contentEditable={isEditing}
      suppressContentEditableWarning
      data-edit-id={id}
      className={cn(
        className,
        isEditing &&
          "cursor-text rounded-[2px] outline-dashed outline-1 outline-primary/30 transition-[outline-color] hover:outline-primary/60 focus:outline-primary focus:outline-solid"
      )}
      onBlur={() => {
        if (!ref.current) return
        const next = ref.current.innerText
        if (next !== value) recordChange(namespace, id, next)
      }}
    >
      {value}
    </span>
  )
}
