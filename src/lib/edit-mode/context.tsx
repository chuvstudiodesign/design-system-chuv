"use client"

import { createContext, useContext, useState, useCallback } from "react"

interface Change {
  namespace: string
  key: string
  value: string
}

interface EditModeContextType {
  isEditing: boolean
  toggleEdit: () => void
  changes: Map<string, Change>
  pendingCount: number
  recordChange: (namespace: string, key: string, value: string) => void
  getValue: (namespace: string, key: string, fallback: string) => string
  saveChanges: () => Promise<void>
  cancelChanges: () => void
}

const EditModeContext = createContext<EditModeContextType | null>(null)

export function EditModeProvider({ children }: { children: React.ReactNode }) {
  const [isEditing, setIsEditing] = useState(false)
  const [changes, setChanges] = useState(new Map<string, Change>())
  const [savedValues, setSavedValues] = useState(new Map<string, string>())

  const toggleEdit = useCallback(() => setIsEditing((v) => !v), [])

  const recordChange = useCallback((namespace: string, key: string, value: string) => {
    setChanges((prev) => new Map(prev).set(`${namespace}.${key}`, { namespace, key, value }))
  }, [])

  const getValue = useCallback((namespace: string, key: string, fallback: string) => {
    const compoundKey = `${namespace}.${key}`
    return changes.get(compoundKey)?.value ?? savedValues.get(compoundKey) ?? fallback
  }, [changes, savedValues])

  const cancelChanges = useCallback(() => {
    setChanges(new Map())
    setIsEditing(false)
  }, [])

  const saveChanges = useCallback(async () => {
    // Group by namespace
    const byNamespace = new Map<string, Record<string, string>>()
    for (const change of changes.values()) {
      if (!byNamespace.has(change.namespace)) byNamespace.set(change.namespace, {})
      byNamespace.get(change.namespace)![change.key] = change.value
    }

    for (const [namespace, updates] of byNamespace) {
      await fetch("/api/save-content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ namespace, changes: updates }),
      })
    }

    setSavedValues((prev) => {
      const next = new Map(prev)
      for (const change of changes.values()) {
        next.set(`${change.namespace}.${change.key}`, change.value)
      }
      return next
    })
    setChanges(new Map())
    setIsEditing(false)
  }, [changes])

  return (
    <EditModeContext.Provider
      value={{
        isEditing,
        toggleEdit,
        changes,
        pendingCount: changes.size,
        recordChange,
        getValue,
        saveChanges,
        cancelChanges,
      }}
    >
      {children}
    </EditModeContext.Provider>
  )
}

export function useEditMode() {
  const ctx = useContext(EditModeContext)
  if (!ctx) throw new Error("useEditMode must be used within EditModeProvider")
  return ctx
}
