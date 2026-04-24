import {
  GitBranch,
  ImageIcon,
  Info,
  Layers2,
  LayoutTemplate,
  MessageSquareQuote,
  Sparkles,
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

function PostImage({
  src,
  alt,
  fill = false,
}: {
  src: string
  alt: string
  fill?: boolean
}) {
  return (
    <div
      className={[
        "overflow-hidden rounded-none border border-white bg-white",
        fill ? "min-h-0 flex-1" : "h-44",
      ].join(" ")}
    >
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  )
}

const image1 =
  "https://plus.unsplash.com/premium_photo-1680608979589-e9349ed066d5?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const image2 =
  "https://images.unsplash.com/photo-1705249190144-19d7b6d28574?q=80&w=1077&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const image3 =
  "https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

export default function IaEAutoriaVisualPage() {
  return (
    <div className="ds-page">
      <div className="ds-page-header">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
          03 — SOCIAL MEDIA
        </p>
        <h1 className="ds-page-title">IA e autoria visual</h1>
        <p className="ds-page-description">
          Página criada para o post aprovado sobre autoria e inteligência artificial, usando a
          estrutura real de social media do design system e preservando todas as demos anteriores.
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-foreground">
          Tema aprovado:{" "}
          <strong>
            IA e autoria visual — onde está o limite do que pode ser assinado por um estúdio
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
              body: "Título e subtítulo aprovados com imagem editorial sobre IA na capa.",
            },
            {
              page: "02",
              title: "Support Page",
              body: "Foto que reforça a tensão entre ferramenta e autoria.",
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
              body: "Fecha com a linha aprovada e imagem que ancora a dimensão humana do argumento.",
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
              Este post usa 3 imagens.
            </Typography>
            <Typography variant="body-s" className="text-muted-foreground">
              As imagens entram nas páginas 1, 2 e 5.
            </Typography>
            <Typography variant="body-s" className="text-muted-foreground">
              As fotos são puxadas por URL pública a partir das referências aprovadas.
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

                <PostImage src={image1} alt="Mão humana sobre output de IA" fill />

                <div className="min-w-0">
                  <Typography variant="h1" className="max-w-[14ch] leading-[0.92]">
                    IA assina. Mas assina por quem?
                  </Typography>
                  <Typography variant="body-s" className="mt-3 max-w-[29ch] text-muted-foreground">
                    O debate que todo estúdio de design vai ter que enfrentar.
                  </Typography>
                </div>
              </SocialPageFrame>
            </div>

            {/* Page 2 — Support */}
            <div className="w-[320px] shrink-0">
              <SocialPageFrame>
                <PostImage src={image2} alt="Interface de geração com prompt visível" />

                <PostCard>
                  <Typography variant="h4">
                    A ferramenta nunca foi neutra. Com IA, isso ficou óbvio.
                  </Typography>
                  <Typography variant="body-s" className="mt-3 text-muted-foreground">
                    Autoria é intenção, não execução.
                  </Typography>
                </PostCard>
              </SocialPageFrame>
            </div>

            {/* Page 3 — Statement */}
            <div className="w-[320px] shrink-0">
              <SocialPageFrame>
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="tool">Autoria</Badge>
                  <MessageSquareQuote className="size-5 shrink-0 text-primary" />
                </div>

                <div className="flex flex-1 flex-col justify-center min-w-0">
                  <Typography variant="h3" className="max-w-[14ch] leading-[0.94] text-muted-foreground">
                    O que define o que pode ser assinado
                  </Typography>
                  <Typography variant="display-l" className="mt-5 max-w-[9ch] text-balance leading-[0.9]">
                    Critério, não volume.
                  </Typography>
                </div>
              </SocialPageFrame>
            </div>

            {/* Page 4 — Bullets */}
            <div className="w-[320px] shrink-0">
              <SocialPageFrame>
                <Typography variant="display-l" className="max-w-[9ch] text-balance leading-[0.9]">
                  O estúdio define o que a IA não decide.
                </Typography>

                <PostCard>
                  <div className="space-y-3">
                    {(
                      [
                        { label: "Briefing", Icon: Layers2 },
                        { label: "Curadoria", Icon: Target },
                        { label: "Intenção", Icon: Sparkles },
                        { label: "Assinatura", Icon: WandSparkles },
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
                    IA gera. Estúdio responde pelo que escolhe.
                  </Typography>
                </div>

                <PostImage src={image3} alt="Assinatura sobre obra impressa" fill />
              </SocialPageFrame>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
          <Typography variant="label-m" className="text-primary">
            Image Sources
          </Typography>
          <div className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
            <p>Page 1 usa a imagem de mão humana sobre output de IA aprovada para este post.</p>
            <p>Page 2 usa a imagem de interface de geração com prompt visível aprovada para este post.</p>
            <p>Page 5 usa a imagem de assinatura sobre obra impressa aprovada para este post.</p>
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

                <PostImage src={image1} alt="Mão humana sobre output de IA" fill />

                <div className="min-w-0">
                  <Typography variant="h2" className="max-w-[18ch] leading-[0.92]">
                    IA assina. Mas assina por quem?
                  </Typography>
                  <Typography variant="body-s" className="mt-2 max-w-[32ch] text-muted-foreground">
                    O debate que todo estúdio de design vai ter que enfrentar.
                  </Typography>
                </div>
              </SocialPageFrame45>
            </div>

            {/* Page 2 — text on top, image fill below */}
            <div className="w-[320px] shrink-0">
              <SocialPageFrame45>
                <div className="min-w-0">
                  <Typography variant="h4">
                    A ferramenta nunca foi neutra. Com IA, isso ficou óbvio.
                  </Typography>
                  <Typography variant="body-s" className="mt-2 text-muted-foreground">
                    Autoria é intenção, não execução.
                  </Typography>
                </div>

                <PostImage src={image2} alt="Interface de geração com prompt visível" fill />
              </SocialPageFrame45>
            </div>

            {/* Page 3 — badge + text only */}
            <div className="w-[320px] shrink-0">
              <SocialPageFrame45>
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="tool">Autoria</Badge>
                  <MessageSquareQuote className="size-5 shrink-0 text-primary" />
                </div>

                <div className="flex flex-1 flex-col justify-center min-w-0">
                  <Typography variant="h3" className="max-w-[20ch] leading-[0.94] text-muted-foreground">
                    O que define o que pode ser assinado
                  </Typography>
                  <Typography variant="display-l" className="mt-5 max-w-[9ch] text-balance leading-[0.9]">
                    Critério, não volume.
                  </Typography>
                </div>
              </SocialPageFrame45>
            </div>

            {/* Page 4 — h2 title on top, card vertical stack below */}
            <div className="w-[320px] shrink-0">
              <SocialPageFrame45>
                <Typography variant="h2" className="max-w-[14ch] leading-[0.92]">
                  O estúdio define o que a IA não decide.
                </Typography>

                <PostCard>
                  <div className="space-y-3">
                    {(
                      [
                        { label: "Briefing", Icon: Layers2 },
                        { label: "Curadoria", Icon: Target },
                        { label: "Intenção", Icon: Sparkles },
                        { label: "Assinatura", Icon: WandSparkles },
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
                    IA gera. Estúdio responde pelo que escolhe.
                  </Typography>
                </div>

                <PostImage src={image3} alt="Assinatura sobre obra impressa" fill />
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
