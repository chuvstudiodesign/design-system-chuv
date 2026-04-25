"use client"

import { useState } from "react"
import { Pencil, X, Check, Loader2 } from "lucide-react"
import { useEditMode } from "@/lib/edit-mode/context"
import { cn } from "@/lib/utils"

export function FloatingEditorControls() {
  const { isEditing, toggleEdit, pendingCount, saveChanges, cancelChanges } = useEditMode()
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  const handleSave = async () => {
    setSaving(true)
    await saveChanges()
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      {isEditing && (
        <>
          <button
            onClick={cancelChanges}
            className="flex h-9 items-center gap-1.5 rounded-full border border-black/10 bg-white px-4 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-black/5"
          >
            <X className="h-3.5 w-3.5" />
            Cancelar
          </button>

          {pendingCount > 0 && (
            <button
              onClick={handleSave}
              disabled={saving}
              className={cn(
                "flex h-9 items-center gap-1.5 rounded-full px-4 text-sm font-medium text-white shadow-sm transition-colors",
                saved
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-primary hover:bg-primary/90",
                saving && "cursor-not-allowed opacity-70"
              )}
            >
              {saving ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
              ) : saved ? (
                <Check className="h-3.5 w-3.5" />
              ) : (
                <Check className="h-3.5 w-3.5" />
              )}
              {saving ? "Salvando…" : saved ? "Salvo!" : `Salvar ${pendingCount > 0 ? `(${pendingCount})` : ""}`}
            </button>
          )}
        </>
      )}

      <button
        onClick={toggleEdit}
        title={isEditing ? "Sair do modo de edição" : "Editar textos"}
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-full border shadow-sm transition-colors",
          isEditing
            ? "border-primary bg-primary text-white hover:bg-primary/90"
            : "border-black/10 bg-white text-foreground hover:bg-black/5"
        )}
      >
        <Pencil className="h-3.5 w-3.5" />
      </button>
    </div>
  )
}
