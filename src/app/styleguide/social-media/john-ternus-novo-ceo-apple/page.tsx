import { GitBranch, LayoutTemplate, Workflow } from "lucide-react"

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

const images: ApprovedImage[] = [
  {
    page: 1,
    src: "https://www.apple.com/newsroom/images/2026/04/tim-cook-to-become-apple-executive-chairman-john-ternus-to-become-apple-ceo/article/Apple-John-Ternus-Tim-Cook_Full-Bleed-Image.jpg.large.jpg",
    alt: "Tim Cook e John Ternus — anúncio oficial da sucessão na Apple",
  },
  {
    page: 2,
    src: "https://s.yimg.com/ny/api/res/1.2/DMxH1S34qogrubeVtRibNw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTI0MDA7aD0xNjQ0/https://media.zenfs.com/en/aol_fortune_385/9ecc77648029906cb2bf3695dec916ef",
    alt: "John Ternus — retrato Fortune",
  },
  {
    page: 3,
    src: "https://www.maistecnologia.com/wp-content/uploads/2026/01/John-Ternus-assume-design-da-Apple-em-transicao-de-lideranca.jpg",
    alt: "John Ternus assume oversight do time de design da Apple em janeiro de 2026",
  },
  {
    page: 6,
    src: "https://media.tenor.com/3ZlHCdVWO3IAAAAe/mac-mini-john-ternus.png",
    alt: "John Ternus apresentando o Mac mini",
  },
  {
    page: 10,
    src: "https://512pixels.net/wp-content/uploads/2019/09/tim-cheering.gif",
    alt: "Tim Cook celebrando",
  },
]

const copy: ApprovedCopy = {
  page1: {
    title: "A Apple tem um CEO de produto",
    subtitle: "Ternus entrou na Apple pelo design. Agora chega ao topo.",
  },
  page2: {
    title: "Seu primeiro cargo na Apple foi no product design team, em 2001",
    paragraph: "Começou pelo Cinema Display.",
  },
  page3: {
    intro: "Em janeiro de 2026, Ternus assumiu",
    statement: "todo o design.",
  },
  page4: {
    highlight: "O que Ternus carrega",
    bullets: ["Apple Silicon", "iPhone moderno", "Vision Pro", "Time de design"],
  },
  page5: {
    closing: "Produto e design no mesmo CEO. O endereço muda.",
  },
  page6: {
    title: "O que muda quando o CEO vem do produto, não do mercado",
    paragraph: "A Apple sai do operacional.",
  },
  page7: {
    intro: "Pela primeira vez desde Jobs, quem lidera",
    statement: "entende o produto.",
  },
  page8: {
    highlight: "O que isso sinaliza",
    bullets: ["Produto primeiro", "Forma é decisão", "Voz executiva"],
  },
  page9: {
    highlight: "Um CEO que conhece a forma",
    bullets: ["Pensa em produto", "Vem do hardware", "Lidera o design"],
  },
  page10: {
    closing: "A era Cook foi escala. A era Ternus é produto.",
  },
}

const pages = [
  { page: "01", title: "Cover Hook", body: "CEO de produto. Subtítulo que situa a entrada pela porta do design." },
  { page: "02", title: "Origin", body: "Product design team em 2001. Cinema Display como primeiro produto." },
  { page: "03", title: "Statement", body: "Janeiro 2026: oversight total do time de design da Apple." },
  { page: "04", title: "Bullet Card", body: "Apple Silicon, iPhone, Vision Pro e time de design." },
  { page: "05", title: "Closing I", body: "Produto e design no mesmo CEO — o endereço muda." },
  { page: "06", title: "Context", body: "O que muda quando o CEO vem do produto, não do mercado." },
  { page: "07", title: "Statement II", body: "Pela primeira vez desde Jobs: quem lidera entende o produto." },
  { page: "08", title: "Signals", body: "Produto primeiro, forma como decisão, voz executiva." },
  { page: "09", title: "Profile", body: "Um CEO que conhece a forma — pensa em produto, vem do hardware." },
  { page: "10", title: "Closing II", body: "Era Cook: escala. Era Ternus: produto." },
]

export default function JohnTernusNovoCoePage() {
  return (
    <div className="ds-page">
      <div className="ds-page-header">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
          03 — SOCIAL MEDIA
        </p>
        <h1 className="ds-page-title">John Ternus — Novo CEO da Apple</h1>
        <p className="ds-page-description">
          Post de 10 páginas sobre a nomeação de John Ternus como CEO da Apple e sua
          relação com design. Usa os layouts existentes (P1–P5) repetidos para o segundo bloco.
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-foreground">
          Tema aprovado:{" "}
          <strong>
            John Ternus — o novo CEO da Apple que entrou pelo design e chega ao topo.
          </strong>
        </p>
      </div>

      <Section
        title="Workflow Fit"
        subtitle="Executado após aprovação completa de tema, copy e revisão final"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Workflow,
              title: "Approval Gate",
              body: "Copy de 10 páginas aprovada antes da implementação.",
            },
            {
              icon: GitBranch,
              title: "Own Page",
              body: "Rota própria dentro de social media, sem sobrescrever demos existentes.",
            },
            {
              icon: LayoutTemplate,
              title: "Extended Deck",
              body: "Usa os layouts P2–P5 reutilizados nas páginas 6–10 do mesmo componente.",
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
        subtitle="10 páginas — bloco 1 (P1–P5) + bloco 2 (reuso de P2, P3, P4, P4, P5)"
      >
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {pages.map((item) => (
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
      </Section>

      <Section
        title="Practical Demo · 9:16"
        subtitle="Stack horizontal de 10 páginas"
      >
        <VisualPostCreationDeck copy={copy} images={images} />
      </Section>

      <Section
        title="Practical Demo · 4:5"
        subtitle="O mesmo post adaptado para o formato 4:5"
      >
        <VisualPostCreationDeck45 copy={copy} images={images} />
      </Section>
    </div>
  )
}
