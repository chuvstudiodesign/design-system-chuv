import { GitBranch, ImageIcon, LayoutTemplate, Workflow } from "lucide-react"

import {
  type ApprovedCopy,
  type ApprovedImage,
  VisualPostCreationDeck,
  VisualPostCreationDeck45,
} from "@/components/social-media/visual-post-creation"
import { Badge } from "@/components/badge"
import { Separator } from "@/components/ui/separator"
import { Typography } from "@/components/typography"

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
    title: "Cor como segmentação",
    subtitle: "Apple vende um produto. Mas fala com quatro pessoas.",
  },
  page2: {
    title: "Blush, Citrus, Indigo, Silver — não são opções.",
    paragraph: "São personas em alumínio.",
  },
  page3: {
    intro: "Quem domina cor",
    statement: "domina percepção antes do preço.",
  },
  page4: {
    highlight: "A lógica por trás da paleta",
    bullets: [
      "Cor define público",
      "Sem alterar o produto",
      "Sem fragmentar a marca",
      "Sistema, não decoração",
    ],
  },
  page5: {
    closing: "Variar sem perder identidade é o desafio central do design de linha.",
  },
}

const approvedImages: ApprovedImage[] = [
  {
    page: 1,
    src: "https://images.fastcompany.com/image/upload/f_webp,c_fit,w_1920,q_auto/wp-cms-2/2026/03/p-1-91502567-macbook-neo.jpg",
    alt: "MacBook Neo — Fast Company editorial",
    label: "Fast Company",
    referenceUrl: "https://images.fastcompany.com/image/upload/f_webp,c_fit,w_1920,q_auto/wp-cms-2/2026/03/p-1-91502567-macbook-neo.jpg",
  },
  {
    page: 2,
    src: "https://macmagazine.com.br/wp-content/uploads/2026/04/15-apple-education-1260x709.jpg",
    alt: "Apple Education — MacMagazine",
    label: "MacMagazine",
    referenceUrl: "https://macmagazine.com.br/wp-content/uploads/2026/04/15-apple-education-1260x709.jpg",
  },
  {
    page: 5,
    src: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/macbook-neo-color-unselect-202603-gallery-1_FMT_WHH?wid=690&hei=720&fmt=p-jpg&qlt=80&.v=TytZbDBUUnRqRElRcFlBSHpmZVVDK3BoR2lIdGdhMDNQSUZrOHIycWd6Vk5EdTEzMnhDNnFqUTNLSW9SdzdIN1RXdm1tTmFzNjBGQmdSRVIyOXZjeGM2c3NSYUM0YjA0RTQxLytvRzE4M0F1d1cwdVFFUmlqTVkxb0FUYmd6QzluUjhtbEpESTNWVVNxQ1UzUkRHZWZB&traceId=1",
    alt: "MacBook Neo color gallery — Apple Store",
    label: "Apple Store",
    referenceUrl: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/macbook-neo-color-unselect-202603-gallery-1_FMT_WHH?wid=690&hei=720&fmt=p-jpg&qlt=80&.v=TytZbDBUUnRqRElRcFlBSHpmZVVDK3BoR2lIdGdhMDNQSUZrOHIycWd6Vk5EdTEzMnhDNnFqUTNLSW9SdzdIN1RXdm1tTmFzNjBGQmdSRVIyOXZjeGM2c3NSYUM0YjA0RTQxLytvRzE4M0F1d1cwdVFFUmlqTVkxb0FUYmd6QzluUjhtbEpESTNWVVNxQ1UzUkRHZWZB&traceId=1",
  },
]

export default function MacbookNeoCoresPage() {
  return (
    <div className="ds-page">
      <div className="ds-page-header">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
          03 — SOCIAL MEDIA
        </p>
        <h1 className="ds-page-title">MacBook Neo — Cores e Segmentação</h1>
        <p className="ds-page-description">
          Como a Apple usa variantes cromáticas para ampliar alcance sem fragmentar identidade.
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-foreground">
          Tema aprovado:{" "}
          <strong>
            Quatro cores, um produto — como a Apple usa variantes cromáticas para ampliar alcance
            sem fragmentar identidade.
          </strong>
        </p>
      </div>

      <Section
        title="Workflow Fit"
        subtitle="Executado apenas depois da aprovação completa de tema, copy, imagens e revisão final"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Workflow,
              title: "Approval Gate",
              body: "O post só entra aqui depois do final review confirmado.",
            },
            {
              icon: GitBranch,
              title: "Own Page",
              body: "Criado em rota própria dentro de social media, sem sobrescrever demos existentes.",
            },
            {
              icon: LayoutTemplate,
              title: "Existing Pattern",
              body: "Segue o section system, o card system e o deck vertical já usado no styleguide.",
            },
          ].map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]"
            >
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
        subtitle="Mapeamento direto da copy aprovada, sem reescrita"
      >
        <div className="grid gap-4 xl:grid-cols-5">
          {[
            {
              page: "01",
              title: "Cover Hook",
              body: "Título e subtítulo com imagem editorial do MacBook Neo na capa.",
            },
            {
              page: "02",
              title: "Support Page",
              body: "Imagem Apple Education reforça o argumento de alcance sem mudar o produto.",
            },
            {
              page: "03",
              title: "Statement Page",
              body: "Linha direcional e statement com contraste tipográfico entre intro e display.",
            },
            {
              page: "04",
              title: "Bullet Card",
              body: "Highlight e quatro bullets aprovados dentro do card system existente.",
            },
            {
              page: "05",
              title: "Closing",
              body: "Fecha com a linha aprovada e galeria de cores do Apple Store.",
            },
          ].map((item) => (
            <div
              key={item.page}
              className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]"
            >
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
              Este post usa 3 imagens aprovadas.
            </Typography>
            <Typography variant="body-s" className="text-muted-foreground">
              As imagens entram nas páginas 1, 2 e 5.
            </Typography>
            <Typography variant="body-s" className="text-muted-foreground">
              Todas as fontes são externas — Fast Company, MacMagazine e Apple Store.
            </Typography>
          </div>
        </div>
      </Section>

      <Section
        title="Practical Demo"
        subtitle="Post aprovado — formato 9:16"
      >
        <VisualPostCreationDeck copy={approvedCopy} images={approvedImages} />

        <div className="mt-6 rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
          <Typography variant="label-m" className="text-primary">
            Image Sources
          </Typography>
          <div className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
            <p>
              Page 1 — <code className="text-xs text-primary">Fast Company</code> editorial MacBook Neo.
            </p>
            <p>
              Page 2 — <code className="text-xs text-primary">MacMagazine</code> Apple Education.
            </p>
            <p>
              Page 5 — <code className="text-xs text-primary">Apple Store</code> MacBook Neo color gallery.
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="Practical Demo · 4:5"
        subtitle="O mesmo post adaptado para o formato 4:5"
      >
        <VisualPostCreationDeck45 copy={approvedCopy} images={approvedImages} />
      </Section>
    </div>
  )
}
