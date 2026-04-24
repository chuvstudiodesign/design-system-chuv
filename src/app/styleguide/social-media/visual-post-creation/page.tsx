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

const approvedCopyExample: ApprovedCopy = {
  page1: {
    title: "Marcas fortes não parecem difíceis.",
    subtitle: "Parecem inevitáveis.",
  },
  page2: {
    title: "Complexidade visível raramente é sofisticação.",
    paragraph:
      "Quando uma marca precisa explicar demais sua forma, seu sistema ou sua intenção, algo ainda não resolveu. Clareza não simplifica a ideia. Clareza prova que a ideia está madura.",
  },
  page3: {
    intro: "Massimo Vignelli resumiu isso em uma frase:",
    statement: "“Design is one.”",
    attribution: "Massimo Vignelli",
  },
  page4: {
    highlight: "O que faz uma marca parecer inevitável:",
    bullets: [
      "Hierarquia sem ruído",
      "Forma com intenção",
      "Consistência sem rigidez",
      "Distinção sem exagero",
      "Memória sem esforço",
    ],
  },
  page5: {
    closing: "Sofisticação não é adicionar camadas. É retirar tudo o que impede a leitura certa.",
  },
}

const approvedImagesExample: ApprovedImage[] = [
  {
    page: 1,
    src: "/social-media/vignelli-primeira.jpg",
    alt: "Retrato de Massimo Vignelli",
    label: "Primeira",
    referenceUrl: "https://github.com/chuvstudiodesign/imagens-posts",
  },
  {
    page: 5,
    src: "/social-media/vignelli-segunda.jpg",
    alt: "Imagem final aprovada do post sobre Massimo Vignelli",
    label: "Segunda",
    referenceUrl: "https://github.com/chuvstudiodesign/imagens-posts",
  },
]

export default function VisualPostCreationPage() {
  return (
    <div className="ds-page">
      <div className="ds-page-header">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
          03 — SOCIAL MEDIA
        </p>
        <h1 className="ds-page-title">Visual Post Creation</h1>
        <p className="ds-page-description">
          Etapa final do fluxo: depois da aprovação de tema, copy, imagens e revisão final,
          o post aprovado é montado no Design System real usando a mesma lógica visual do
          vertical post já definido no styleguide.
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-foreground">
          Tema de teste: <strong>Marcas fortes não precisam parecer complexas. Precisam parecer inevitáveis.</strong>
        </p>
      </div>

      <Section
        title="Workflow Fit"
        subtitle="A etapa visual só existe depois da aprovação completa do conteúdo"
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
              title: "Real Codebase",
              body: "Usa a branch master do Design System em /design-system.",
            },
            {
              icon: LayoutTemplate,
              title: "Existing Pattern",
              body: "Segue a estrutura real de section, card e vertical post.",
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
        subtitle="Regras fixas para distribuir approved_copy e approved_images sem reescrita"
      >
        <div className="grid gap-4 xl:grid-cols-5">
          {[
            {
              page: "01",
              title: "Cover Hook",
              body: "Usa `page1.title` e `page1.subtitle`. Pode receber imagem de capa.",
            },
            {
              page: "02",
              title: "Support Page",
              body: "Usa `page2.title` e `page2.paragraph`. Neste post específico, sem imagem.",
            },
            {
              page: "03",
              title: "Statement Page",
              body: "Usa intro + citação ampliada + atribuição, no estilo do demo do vertical post.",
            },
            {
              page: "04",
              title: "Bullet Card",
              body: "Usa `page4.highlight` e `page4.bullets`. Mantém o card system.",
            },
            {
              page: "05",
              title: "Closing",
              body: "Usa `page5.closing`. Imagem opcional no encerramento.",
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
        subtitle="Render de teste em stack horizontal com a copy aprovada e referências visuais aprovadas para Massimo Vignelli"
      >
        <VisualPostCreationDeck
          copy={approvedCopyExample}
          images={approvedImagesExample}
        />

        <div className="mt-6 rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
          <Typography variant="label-m" className="text-primary">
            Image Sources
          </Typography>
          <div className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
            <p>
              Page 1 uses <code className="text-xs text-primary">Primeira.jpg</code> from <code className="text-xs text-primary">chuvstudiodesign/imagens-posts</code>.
            </p>
            <p>
              This post-specific version intentionally uses no image on page 2.
            </p>
            <p>
              Page 5 uses <code className="text-xs text-primary">Segunda.jpg</code> from <code className="text-xs text-primary">chuvstudiodesign/imagens-posts</code>.
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="Practical Demo · 4:5"
        subtitle="O mesmo post adaptado para o formato 4:5 — layouts ajustados para compensar o espaço vertical reduzido"
      >
        <VisualPostCreationDeck45
          copy={approvedCopyExample}
          images={approvedImagesExample}
        />

        <div className="mt-6 rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
          <Typography variant="label-m" className="text-primary">
            Adaptation Notes · 4:5
          </Typography>
          <Typography variant="body-s" className="mt-4 text-muted-foreground">
            Página 2 com texto direto no topo e imagem fill abaixo. Página 3 só com texto, sem imagem. Página 4 com título em cima e card em stack vertical. Página 5 com badge, texto e imagem fill.
          </Typography>
        </div>
      </Section>
    </div>
  )
}
