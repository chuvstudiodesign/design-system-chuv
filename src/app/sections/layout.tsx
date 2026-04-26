export default function SectionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <style>{`
        html, body {
          height: auto !important;
          min-height: 0 !important;
          background: #efefef !important;
        }
        html, body, * { scrollbar-width: none !important; -ms-overflow-style: none !important; }
        *::-webkit-scrollbar { display: none !important; width: 0 !important; height: 0 !important; }
      `}</style>
      {children}
    </>
  )
}
