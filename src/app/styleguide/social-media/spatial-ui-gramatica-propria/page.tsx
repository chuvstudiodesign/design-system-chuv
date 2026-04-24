import {
  Eye,
  GitBranch,
  ImageIcon,
  Info,
  LayoutTemplate,
  Lightbulb,
  MessageSquareQuote,
  Maximize,
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
  "https://9to5mac.com/wp-content/uploads/sites/6/2024/06/vision-pro-app-home-screen.jpg?quality=82&strip=all&w=1600"
const image2 =
  "https://img2.storyblok.com/560x300/f/102932/600x338/b2c03b0823/apple-vision-pro-gif.gif"
const image3 =
  "https://gizmodo.com/app/uploads/2023/06/5fb8cea615a0f015a999505305fac690.gif"

export default function SpatialUIGramaticaPropriaPage() {
  return (
    <div className="ds-page">
      <div className="ds-page-header">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
          03 — SOCIAL MEDIA
        </p>
        <h1 className="ds-page-title">Spatial UI tem gramática própria</h1>
        <p className="ds-page-description">
          Página criada para o post aprovado sobre os princípios do visionOS, usando a estrutura
          real de social media do design system e preservando todas as demos anteriores.
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-foreground">
          Tema aprovado:{" "}
          <strong>
            Spatial UI não é flat design em 3D — os princípios que a Apple estabeleceu e o mercado
            ainda ignora
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
              body: "Título e subtítulo aprovados com screenshot da home screen do Vision Pro.",
            },
            {
              page: "02",
              title: "Support Page",
              body: "GIF do Vision Pro em uso reforça o argumento sobre atenção como interface.",
            },
            {
              page: "03",
              title: "Statement Page",
              body: "Statement aprovado com contraste tipográfico e badge de contexto.",
            },
            {
              page: "04",
              title: "Bullet Card",
              body: "Highlight e três princípios aprovados com ícones dentro do card system.",
            },
            {
              page: "05",
              title: "Closing",
              body: "Fecha com as duas linhas aprovadas e GIF do visionOS como âncora visual.",
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
              O screenshot da home screen está na capa. Os GIFs do Vision Pro reforçam o argumento
              nas páginas seguintes.
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

                <PostImage src={image1} alt="Vision Pro home screen" fill />

                <div className="min-w-0">
                  <Typography variant="h1" className="max-w-[10ch] leading-[0.92]">
                    O visionOS reinventou o que é interface
                  </Typography>
                  <Typography variant="body-s" className="mt-3 max-w-[29ch] text-muted-foreground">
                    O visionOS não é uma tela maior. É um sistema de presença.
                  </Typography>
                </div>
              </SocialPageFrame>
            </div>

            {/* Page 2 — Support */}
            <div className="w-[320px] shrink-0">
              <SocialPageFrame>
                <PostImage src={image2} alt="Apple Vision Pro em uso" />

                <PostCard>
                  <Typography variant="h4">
                    A Apple não projetou objetos, projetou atenção
                  </Typography>
                  <Typography variant="body-s" className="mt-3 text-muted-foreground">
                    Onde você olha define o que responde.
                  </Typography>
                </PostCard>
              </SocialPageFrame>
            </div>

            {/* Page 3 — Statement */}
            <div className="w-[320px] shrink-0">
              <SocialPageFrame>
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="tool">visionOS</Badge>
                  <MessageSquareQuote className="size-5 shrink-0 text-primary" />
                </div>

                <div className="flex flex-1 flex-col justify-center min-w-0">
                  <Typography variant="h3" className="max-w-[14ch] leading-[0.94] text-muted-foreground">
                    Dimensão sem âncora não é espacial.
                  </Typography>
                  <Typography
                    variant="display-l"
                    className="mt-5 max-w-[9ch] text-balance leading-[0.9]"
                  >
                    É só decoração.
                  </Typography>
                </div>
              </SocialPageFrame>
            </div>

            {/* Page 4 — Bullets */}
            <div className="w-[320px] shrink-0">
              <SocialPageFrame>
                <Typography variant="display-l" className="max-w-[12ch] text-balance leading-[0.9]">
                  Os três princípios ignorados
                </Typography>

                <PostCard>
                  <div className="space-y-3">
                    {(
                      [
                        { label: "Olhar como input", Icon: Eye },
                        { label: "Distância como tom", Icon: Maximize },
                        { label: "Luz como origem", Icon: Lightbulb },
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
                    No spatial design, o mundo do usuário é camada zero.
                  </Typography>
                </div>

                <PostImage src={image3} alt="visionOS interface" fill />

                <Typography variant="body-s" className="text-muted-foreground">
                  Ignorar isso não é escolha estética. É erro conceitual.
                </Typography>
              </SocialPageFrame>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
          <Typography variant="label-m" className="text-primary">
            Image Sources
          </Typography>
          <div className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
            <p>Page 1 usa o screenshot da home screen do Apple Vision Pro aprovado para este post.</p>
            <p>Page 2 usa o GIF do Vision Pro em uso aprovado para este post.</p>
            <p>Page 5 usa o GIF do visionOS interface aprovado para este post.</p>
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

                <PostImage src={image1} alt="Vision Pro home screen" fill />

                <div className="min-w-0">
                  <Typography variant="h2" className="max-w-[10ch] leading-[0.92]">
                    O visionOS reinventou o que é interface
                  </Typography>
                  <Typography variant="body-s" className="mt-2 max-w-[32ch] text-muted-foreground">
                    O visionOS não é uma tela maior. É um sistema de presença.
                  </Typography>
                </div>
              </SocialPageFrame45>
            </div>

            {/* Page 2 */}
            <div className="w-[320px] shrink-0">
              <SocialPageFrame45>
                <div className="min-w-0">
                  <Typography variant="h4">
                    A Apple não projetou objetos, projetou atenção
                  </Typography>
                  <Typography variant="body-s" className="mt-2 text-muted-foreground">
                    Onde você olha define o que responde.
                  </Typography>
                </div>

                <PostImage src={image2} alt="Apple Vision Pro em uso" fill />
              </SocialPageFrame45>
            </div>

            {/* Page 3 */}
            <div className="w-[320px] shrink-0">
              <SocialPageFrame45>
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="tool">visionOS</Badge>
                  <MessageSquareQuote className="size-5 shrink-0 text-primary" />
                </div>

                <div className="flex flex-1 flex-col justify-center min-w-0">
                  <Typography variant="h3" className="max-w-[14ch] leading-[0.94] text-muted-foreground">
                    Dimensão sem âncora não é espacial.
                  </Typography>
                  <Typography
                    variant="display-l"
                    className="mt-5 max-w-[9ch] text-balance leading-[0.9]"
                  >
                    É só decoração.
                  </Typography>
                </div>
              </SocialPageFrame45>
            </div>

            {/* Page 4 */}
            <div className="w-[320px] shrink-0">
              <SocialPageFrame45>
                <Typography variant="h2" className="max-w-[14ch] leading-[0.92]">
                  Os três princípios ignorados
                </Typography>

                <PostCard>
                  <div className="space-y-3">
                    {(
                      [
                        { label: "Olhar como input", Icon: Eye },
                        { label: "Distância como tom", Icon: Maximize },
                        { label: "Luz como origem", Icon: Lightbulb },
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

            {/* Page 5 */}
            <div className="w-[320px] shrink-0">
              <SocialPageFrame45>
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="success">@chuv.studio</Badge>
                  <WandSparkles className="size-5 shrink-0 text-primary" />
                </div>

                <div className="min-w-0">
                  <Typography variant="h3" className="max-w-[16ch] leading-[0.94]">
                    No spatial design, o mundo do usuário é camada zero.
                  </Typography>
                </div>

                <PostImage src={image3} alt="visionOS interface" fill />
              </SocialPageFrame45>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
          <Typography variant="label-m" className="text-primary">
            Adaptation Notes · 4:5
          </Typography>
          <Typography variant="body-s" className="mt-4 text-muted-foreground">
            Página 2 com texto direto no topo e GIF fill abaixo. Página 3 só com statement e badge,
            sem imagem. Página 4 com título em cima e card em stack vertical. Página 5 sem linha de
            apoio para preservar o espaço.
          </Typography>
        </div>
      </Section>
    </div>
  )
}
