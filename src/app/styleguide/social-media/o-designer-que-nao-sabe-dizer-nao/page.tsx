import {
  Circle,
  Clock,
  GitBranch,
  ImageIcon,
  Info,
  Layers2,
  LayoutTemplate,
  MessageSquareQuote,
  Target,
  WandSparkles,
  Workflow,
} from "lucide-react"

import { Badge } from "@/components/badge"
import { Typography } from "@/components/typography"
import { AspectRatio } from "@/components/ui/aspect-ratio"
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

function SocialPageFrame({ children }: { children: React.ReactNode }) {
  return (
    <AspectRatio ratio={9 / 16}>
      <div className="h-full w-full bg-white p-1.5 sm:p-2">
        <div
          className="flex h-full w-full flex-col gap-8 overflow-hidden rounded-[10px] px-8 py-10"
          style={{ backgroundColor: "#efefef" }}
        >
          {children}
        </div>
      </div>
    </AspectRatio>
  )
}

function SocialPageFrame45({ children }: { children: React.ReactNode }) {
  return (
    <AspectRatio ratio={4 / 5}>
      <div className="h-full w-full bg-white p-1.5 sm:p-2">
        <div
          className="flex h-full w-full flex-col gap-5 overflow-hidden rounded-[10px] px-7 py-7"
          style={{ backgroundColor: "#efefef" }}
        >
          {children}
        </div>
      </div>
    </AspectRatio>
  )
}

function PostCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
      {children}
    </div>
  )
}

function PostImagePlaceholder({
  label,
  referenceUrl,
  fill = false,
}: {
  label: string
  referenceUrl: string
  fill?: boolean
}) {
  return (
    <div
      className={[
        "overflow-hidden rounded-none border border-white bg-white",
        fill ? "min-h-0 flex-1" : "h-44",
      ].join(" ")}
    >
      <div className="flex h-full flex-col justify-between bg-[linear-gradient(135deg,#ffffff_0%,#efefef_100%)] p-5">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary-500)]">
            Approved image reference
          </span>
          <p className="mt-3 max-w-[18ch] text-sm font-semibold leading-5 text-foreground">
            {label}
          </p>
        </div>
        <a
          href={referenceUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-block text-[11px] font-medium text-primary underline underline-offset-4"
        >
          Open approved source
        </a>
      </div>
    </div>
  )
}

export default function ODesignerQueNaoSabeDizerNaoPage() {
  return (
    <div className="ds-page">
      <div className="ds-page-header">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
          03 — SOCIAL MEDIA
        </p>
        <h1 className="ds-page-title">O designer que não sabe dizer não</h1>
        <p className="ds-page-description">
          Página criada para o post aprovado sobre escopo e critério de entrega, usando a estrutura
          real de social media do design system e preservando todas as demos anteriores.
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-foreground">
          Tema aprovado:{" "}
          <strong>
            O designer que não sabe dizer não — como escopo aberto destrói qualidade de entrega
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
              body: "Título e subtítulo aprovados com referência visual de edição e foco na capa.",
            },
            {
              page: "02",
              title: "Support Page",
              body: "Imagem de edição física reforça o argumento sobre limite e decisão.",
            },
            {
              page: "03",
              title: "Statement Page",
              body: "Linha direcional e statement aprovados com contraste tipográfico.",
            },
            {
              page: "04",
              title: "Bullet Card",
              body: "Highlight e quatro bullets aprovados dentro do card system existente.",
            },
            {
              page: "05",
              title: "Closing",
              body: "Fecha com a linha aprovada e referência visual de delimitação estrutural.",
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
              Este post usa 3 referências de imagem.
            </Typography>
            <Typography variant="body-s" className="text-muted-foreground">
              As referências entram nas páginas 1, 2 e 5.
            </Typography>
            <Typography variant="body-s" className="text-muted-foreground">
              URLs diretas devem ser substituídas pelas imagens selecionadas nas referências aprovadas.
            </Typography>
          </div>
        </div>
      </Section>

      <Section
        title="Practical Demo"
        subtitle="Render final do post aprovado em stack horizontal de 5 páginas"
      >
        <div className="overflow-x-auto pb-2">
          <div className="flex min-w-max gap-4">
            {/* Page 1 — Cover */}
            <div className="w-[320px] shrink-0">
              <SocialPageFrame>
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="tool">
                    <Info className="size-4.5" />
                    Chuv Info
                  </Badge>
                  <img
                    src="/social-media/chuv-symbol-black.svg"
                    alt="Chuv symbol"
                    className="h-9 w-9 shrink-0"
                  />
                </div>

                <div className="min-h-0 flex-1 overflow-hidden rounded-none border border-white bg-white">
                  <img
                    src="https://media.istockphoto.com/id/2153944929/photo/mature-photographer.jpg?s=612x612&w=0&k=20&c=klsSSs5Gs98vCN4eoWVkV-Qdrbhs2Ya8LLIwNY000CA="
                    alt="Fotógrafo com foco editorial"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <Typography variant="h1" className="max-w-[14ch] leading-[0.92]">
                    Escopo aberto é inimigo do bom design
                  </Typography>
                  <Typography variant="body-s" className="mt-3 max-w-[29ch] text-muted-foreground">
                    Quando tudo cabe, nada tem peso. E o projeto perde antes de começar.
                  </Typography>
                </div>
              </SocialPageFrame>
            </div>

            {/* Page 2 — Support */}
            <div className="w-[320px] shrink-0">
              <SocialPageFrame>
                <div className="h-44 overflow-hidden rounded-none border border-white bg-white">
                  <img
                    src="https://thumbs.dreamstime.com/b/phrase-i-can-t-crossed-out-letter-t-pen-white-background-top-view-motivation-positivity-phrase-i-can-t-248706222.jpg"
                    alt="Frase riscada com caneta"
                    className="h-full w-full object-cover"
                  />
                </div>

                <PostCard>
                  <Typography variant="h4">
                    Aceitar tudo não é flexibilidade — é ausência de critério
                  </Typography>
                  <Typography variant="body-s" className="mt-3 text-muted-foreground">
                    Limite define forma.
                  </Typography>
                </PostCard>
              </SocialPageFrame>
            </div>

            {/* Page 3 — Statement */}
            <div className="w-[320px] shrink-0">
              <SocialPageFrame>
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="tool">Critério</Badge>
                  <MessageSquareQuote className="size-5 shrink-0 text-primary" />
                </div>

                <div className="flex flex-1 flex-col justify-center min-w-0">
                  <Typography variant="h3" className="max-w-[14ch] leading-[0.94] text-muted-foreground">
                    O que separa entrega forte de entrega dispersa
                  </Typography>
                  <Typography variant="display-l" className="mt-5 max-w-[9ch] text-balance leading-[0.9]">
                    Escopo é decisão.
                  </Typography>
                </div>
              </SocialPageFrame>
            </div>

            {/* Page 4 — Bullets */}
            <div className="w-[320px] shrink-0">
              <SocialPageFrame>
                <Typography variant="display-l" className="max-w-[9ch] text-balance leading-[0.9]">
                  O que um bom não protege
                </Typography>

                <PostCard>
                  <div className="space-y-3">
                    {(
                      [
                        { label: "Foco", Icon: Target },
                        { label: "Qualidade", Icon: Layers2 },
                        { label: "Tempo", Icon: Clock },
                        { label: "Intenção", Icon: Circle },
                      ] as const
                    ).map(({ label, Icon }) => (
                      <div key={label} className="flex items-center gap-3">
                        <Icon className="size-4 shrink-0 text-primary" />
                        <Typography variant="h4">{label}</Typography>
                      </div>
                    ))}
                  </div>
                </PostCard>
              </SocialPageFrame>
            </div>

            {/* Page 5 — Closing */}
            <div className="w-[320px] shrink-0">
              <SocialPageFrame>
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="success">@chuv.studio</Badge>
                  <WandSparkles className="size-5 shrink-0 text-primary" />
                </div>

                <div className="min-w-0">
                  <Typography variant="h3" className="max-w-[16ch] leading-[0.94]">
                    O melhor projeto começa com o que não vai entrar nele.
                  </Typography>
                </div>

                <div className="min-h-0 flex-1 overflow-hidden rounded-none border border-white bg-white">
                  <img
                    src="https://mike-robbins.com/wp-content/uploads/2010/03/3-17-10-blog-1000x703.jpg"
                    alt="Decisão e limite visual"
                    className="h-full w-full object-cover"
                  />
                </div>
              </SocialPageFrame>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
          <Typography variant="label-m" className="text-primary">
            Image Sources
          </Typography>
          <div className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
            <p>Page 1 referencia imagem editorial de mesa de trabalho com foco e edição.</p>
            <p>Page 2 referencia imagem de papel com texto riscado — edição física como decisão.</p>
            <p>Page 5 referencia imagem de planta arquitetônica com área demarcada.</p>
          </div>
        </div>
      </Section>

      <Section
        title="Practical Demo · 4:5"
        subtitle="O mesmo post adaptado para o formato 4:5 — layouts ajustados para compensar o espaço vertical reduzido"
      >
        <div className="overflow-x-auto pb-2">
          <div className="flex min-w-max gap-4">
            {/* Page 1 */}
            <div className="w-[320px] shrink-0">
              <SocialPageFrame45>
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="tool">
                    <Info className="size-4.5" />
                    Chuv Info
                  </Badge>
                  <img
                    src="/social-media/chuv-symbol-black.svg"
                    alt="Chuv symbol"
                    className="h-8 w-8 shrink-0"
                  />
                </div>

                <div className="min-h-0 flex-1 overflow-hidden rounded-none border border-white bg-white">
                  <img
                    src="https://media.istockphoto.com/id/2153944929/photo/mature-photographer.jpg?s=612x612&w=0&k=20&c=klsSSs5Gs98vCN4eoWVkV-Qdrbhs2Ya8LLIwNY000CA="
                    alt="Fotógrafo com foco editorial"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <Typography variant="h2" className="max-w-[18ch] leading-[0.92]">
                    Escopo aberto é inimigo do bom design
                  </Typography>
                  <Typography variant="body-s" className="mt-2 max-w-[32ch] text-muted-foreground">
                    Quando tudo cabe, nada tem peso. E o projeto perde antes de começar.
                  </Typography>
                </div>
              </SocialPageFrame45>
            </div>

            {/* Page 2 — text on top, image fill below */}
            <div className="w-[320px] shrink-0">
              <SocialPageFrame45>
                <div className="min-w-0">
                  <Typography variant="h4">
                    Aceitar tudo não é flexibilidade — é ausência de critério
                  </Typography>
                  <Typography variant="body-s" className="mt-2 text-muted-foreground">
                    Limite define forma.
                  </Typography>
                </div>

                <div className="min-h-0 flex-1 overflow-hidden rounded-none border border-white bg-white">
                  <img
                    src="https://thumbs.dreamstime.com/b/phrase-i-can-t-crossed-out-letter-t-pen-white-background-top-view-motivation-positivity-phrase-i-can-t-248706222.jpg"
                    alt="Frase riscada com caneta"
                    className="h-full w-full object-cover"
                  />
                </div>
              </SocialPageFrame45>
            </div>

            {/* Page 3 — badge + text only */}
            <div className="w-[320px] shrink-0">
              <SocialPageFrame45>
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="tool">Critério</Badge>
                  <MessageSquareQuote className="size-5 shrink-0 text-primary" />
                </div>

                <div className="flex flex-1 flex-col justify-center min-w-0">
                  <Typography variant="h3" className="max-w-[20ch] leading-[0.94] text-muted-foreground">
                    O que separa entrega forte de entrega dispersa
                  </Typography>
                  <Typography variant="display-l" className="mt-5 max-w-[9ch] text-balance leading-[0.9]">
                    Escopo é decisão.
                  </Typography>
                </div>
              </SocialPageFrame45>
            </div>

            {/* Page 4 — h2 title on top, card vertical stack below */}
            <div className="w-[320px] shrink-0">
              <SocialPageFrame45>
                <Typography variant="h2" className="max-w-[14ch] leading-[0.92]">
                  O que um bom não protege
                </Typography>

                <PostCard>
                  <div className="space-y-3">
                    {(
                      [
                        { label: "Foco", Icon: Target },
                        { label: "Qualidade", Icon: Layers2 },
                        { label: "Tempo", Icon: Clock },
                        { label: "Intenção", Icon: Circle },
                      ] as const
                    ).map(({ label, Icon }) => (
                      <div key={label} className="flex items-center gap-3">
                        <Icon className="size-4 shrink-0 text-primary" />
                        <Typography variant="h4">{label}</Typography>
                      </div>
                    ))}
                  </div>
                </PostCard>
              </SocialPageFrame45>
            </div>

            {/* Page 5 — badge + text + image fill */}
            <div className="w-[320px] shrink-0">
              <SocialPageFrame45>
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="success">@chuv.studio</Badge>
                  <WandSparkles className="size-5 shrink-0 text-primary" />
                </div>

                <div className="min-w-0">
                  <Typography variant="h3" className="max-w-[16ch] leading-[0.94]">
                    O melhor projeto começa com o que não vai entrar nele.
                  </Typography>
                </div>

                <div className="min-h-0 flex-1 overflow-hidden rounded-none border border-white bg-white">
                  <img
                    src="https://mike-robbins.com/wp-content/uploads/2010/03/3-17-10-blog-1000x703.jpg"
                    alt="Decisão e limite visual"
                    className="h-full w-full object-cover"
                  />
                </div>
              </SocialPageFrame45>
            </div>
          </div>
        </div>

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
