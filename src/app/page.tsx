import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-background">
      <main className="flex flex-col items-center text-center gap-8 px-8">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">
            CHUV STUDIO
          </span>
          <h1 className="text-5xl font-bold text-foreground tracking-tight">
            Design System
          </h1>
          <p className="text-muted-foreground text-lg mt-2 max-w-md">
            Tokens, componentes e guia de estilo baseados no Figma{" "}
            <span className="text-foreground font-medium">
              Design Chuv Studio 2.0
            </span>
            .
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            href="/styleguide"
            className="inline-flex items-center justify-center h-11 px-6 rounded-[10px] bg-primary text-primary-foreground text-sm font-semibold transition-colors hover:bg-primary/90"
          >
            Ver Design System →
          </Link>
          <a
            href="https://www.figma.com/design/jW54MbWJugxBR3NIPVe1rT/Design-Chuv-Studio-2.0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-11 px-6 rounded-[10px] border border-border text-sm font-medium transition-colors hover:bg-muted"
          >
            Abrir Figma
          </a>
        </div>

        <div className="flex gap-3 mt-4">
          {["#5628e8", "#9f78f7", "#efefef", "#111111"].map((color) => (
            <div
              key={color}
              className="w-8 h-8 rounded-full border border-border"
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
