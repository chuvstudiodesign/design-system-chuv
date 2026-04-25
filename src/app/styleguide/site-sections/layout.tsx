import { FloatingEditorControls } from "@/components/floating-editor-controls"
import { EditModeProvider } from "@/lib/edit-mode/context"

export default function SiteSectionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <EditModeProvider>
      {children}
      <FloatingEditorControls />
    </EditModeProvider>
  )
}
