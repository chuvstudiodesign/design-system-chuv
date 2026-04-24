import { GitBranch, ImageIcon, LayoutTemplate, Workflow } from "lucide-react"

import {
  type ApprovedCopy,
  type ApprovedImage,
  VisualPostCreationDeck,
  VisualPostCreationDeck45,
} from "@/components/social-media/visual-post-creation"
import { Badge } from "@/components/badge"
import { Typography } from "@/components/typography"
import { Separator } from "@/components/ui/separator"

function Section({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle?: string
  children: React.ReactNode
}) {
  return (
    <section className="ds-section" style={{ backgroundColor: "#efefef" }}>
      <div className="mb-5">
        <h2 className="ds-section-title">{title}</h2>
        {subtitle ? <p className="ds-section-subtitle">{subtitle}</p> : null}
      </div>
      <Separator className="mb-8 bg-black/10" />
      {children}
    </section>
  )
}

const approvedCopy: ApprovedCopy = {
  page1: {
    title: "Liquid Glass",
    subtitle: "Depois de anos de interface plana, a Apple devolve espessura ao software.",
  },
  page2: {
    title: "Não é enfeite novo. É foco, contexto e gesto ficando mais legíveis.",
    paragraph: "Material também orienta.",
  },
  page3: {
    intro: "Não é só vidro.",
    statement: "Mais presença.",
  },
  page4: {
    highlight: "O que isso muda",
    bullets: [
      "foco visível",
      "camadas vivas",
      "gesto guiado",
      "contexto claro",
    ],
  },
  page5: {
    closing: "Se a última era limpou a interface, esta quer devolver presença.",
  },
}

const approvedImages: ApprovedImage[] = [
  {
    page: 1,
    src: "/social-media/liquid-glass-legibility.png",
    alt: "Interface Liquid Glass com destaque para questões de legibilidade em diferentes superfícies",
    label: "Legibility concerns",
    referenceUrl: "https://www.notebookcheck.info/fileadmin/Notebooks/News/_nc4/Apple-Liquid-Glass-software-design-has-prompted-legibility-concerns.png",
  },
  {
    page: 2,
    src: "/social-media/liquid-glass-general-feature.jpg",
    alt: "Colagem com diferentes superfícies e elementos da linguagem Liquid Glass",
    label: "General feature",
    referenceUrl: "https://images.macrumors.com/t/IjyVZSXLrhrZjP0FSjPREvJSdoo=/800x0/article-new/2025/06/Liquid-Glass-General-Feature.jpg?lossy",
  },
  {
    page: 5,
    src: "/social-media/liquid-glass-interface-study.png",
    alt: "Interface com elementos translúcidos e organização visual do tema Liquid Glass",
    label: "Interface study",
    referenceUrl: "https://miro.medium.com/v2/resize:fit:1400/1*3EJAQVK372QbWjYxU1JpRg.png",
  },
]

export default function LiquidGlassPostPage() {
  return (
    <div className="ds-page">
      <div className="ds-page-header">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
          03 — SOCIAL MEDIA
        </p>
        <h1 className="ds-page-title">Liquid Glass</h1>
        <p className="ds-page-description">
          Página dedicada ao post aprovado sobre Liquid Glass, criada como rota própria dentro de
          social media para preservar as demos anteriores e manter cada post em seu próprio espaço.
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-foreground">
          Tema aprovado:{" "}
          <strong>
            Liquid Glass da Apple - por que a nova linguagem de interface recoloca materialidade e
            movimento no centro
          </strong>
        </p>
      </div>

      <Section
        title="Workflow Fit"
        subtitle="Este post só existe depois da aprovação completa de tema, copy, imagens e revisão final"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Workflow,
              title: "Approval Gate",
              body: "Executa apenas após final review confirmado.",
            },
            {
              icon: GitBranch,
              title: "Own Page",
              body: "Criado em rota própria para não sobrescrever demos existentes.",
            },
            {
              icon: LayoutTemplate,
              title: "Existing Pattern",
              body: "Segue a estrutura real de section, card e vertical post do styleguide.",
            },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
              <Icon className="size-5 text-primary" />
              <Typography variant="h4" className="mt-5">
                {title}
              </Typography>
              <Typography variant="body-s" className="mt-3 text-muted-foreground">
                {body}
              </Typography>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Content Mapping"
        subtitle="Distribuição direta da copy aprovada sem reescrita"
      >
        <div className="grid gap-4 xl:grid-cols-5">
          {[
            {
              page: "01",
              title: "Cover Hook",
              body: "Usa page1.title e page1.subtitle com imagem aprovada na capa.",
            },
            {
              page: "02",
              title: "Support Page",
              body: "Usa page2.title e page2.paragraph com imagem de desktop aplicada ao tema.",
            },
            {
              page: "03",
              title: "Statement Page",
              body: "Usa uma frase mais curta para manter peso visual e leitura imediata.",
            },
            {
              page: "04",
              title: "Bullet Card",
              body: "Usa page4.highlight e page4.bullets no card system existente.",
            },
            {
              page: "05",
              title: "Closing",
              body: "Usa page5.closing com referência visual aprovada no encerramento.",
            },
          ].map((item) => (
            <div key={item.page} className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
              <Badge variant="outline">Page {item.page}</Badge>
              <Typography variant="h4" className="mt-5">
                {item.title}
              </Typography>
              <Typography variant="body-s" className="mt-3 text-muted-foreground">
                {item.body}
              </Typography>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
          <div className="flex items-center gap-3">
            <ImageIcon className="size-5 text-primary" />
            <Typography variant="h4">Image Slot Rules</Typography>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <Typography variant="body-s" className="text-muted-foreground">
              Padrão de 2 imagens por post.
            </Typography>
            <Typography variant="body-s" className="text-muted-foreground">
              Máximo de 3 imagens no total.
            </Typography>
            <Typography variant="body-s" className="text-muted-foreground">
              Posições aceitas: páginas 1, 2, 3 e 5.
            </Typography>
          </div>
        </div>
      </Section>

      <Section
        title="Practical Demo"
        subtitle="Render do post aprovado sobre Liquid Glass em stack horizontal de 5 páginas"
      >
        <VisualPostCreationDeck copy={approvedCopy} images={approvedImages} />

        <div className="mt-6 rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
          <Typography variant="label-m" className="text-primary">
            Image Sources
          </Typography>
          <div className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
            <p>
              Page 1 uses the Liquid Glass legibility image provided for this version.
            </p>
            <p>
              Page 2 uses the MacRumors general Liquid Glass feature image provided for this version.
            </p>
            <p>
              Page 5 uses the Medium-hosted interface image provided for this version.
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="Practical Demo · 4:5"
        subtitle="O mesmo post adaptado para o formato 4:5 — layouts ajustados para compensar o espaço vertical reduzido"
      >
        <VisualPostCreationDeck45 copy={approvedCopy} images={approvedImages} />

        <div className="mt-6 rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
          <Typography variant="label-m" className="text-primary">
            Adaptation Notes · 4:5
          </Typography>
          <Typography variant="body-s" className="mt-4 text-muted-foreground">
            Página 2 com texto direto no topo e imagem fill abaixo. Página 3 só com texto, sem imagem. Página 4 com título em cima e card em stack vertical. Página 5 com badge e texto corrido, sem lista.
          </Typography>
        </div>
      </Section>
    </div>
  )
}
