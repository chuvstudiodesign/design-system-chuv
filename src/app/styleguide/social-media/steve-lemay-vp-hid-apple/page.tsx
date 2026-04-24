import {
  Award,
  GitBranch,
  ImageIcon,
  Info,
  LayoutTemplate,
  MessageSquareQuote,
  Shield,
  Smartphone,
  UserCheck,
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
  "https://s2.q4cdn.com/470004039/files/images/executive/2026/Steve_Lemay_bio-png-large_2x.png"
const image2 =
  "https://miro.medium.com/v2/resize:fit:1400/0*Db-4sYxQg7sRWd7m.jpg"
const image3 =
  "https://macmagazine.com.br/wp-content/uploads/2025/12/05-Steve-Lemay-1160x680.jpg"

export default function SteveLemayVpHidApplePage() {
  return (
    <div className="ds-page">
      <div className="ds-page-header">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
          03 — SOCIAL MEDIA
        </p>
        <h1 className="ds-page-title">Steve Lemay — VP Human Interface Design · Apple</h1>
        <p className="ds-page-description">
          Página criada para o post aprovado sobre a nomeação de Steve Lemay como VP de Human
          Interface Design da Apple, usando a estrutura real de social media do design system e
          preservando todas as demos anteriores.
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-foreground">
          Tema aprovado:{" "}
          <strong>
            Steve Lemay — 26 anos de Apple, nomeado VP de Human Interface Design após saída de Alan
            Dye para a Meta
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
              body: "Foto oficial de Lemay com título e subtítulo aprovados.",
            },
            {
              page: "02",
              title: "Support Page",
              body: "Contexto da troca — Dye para Meta, Lemay como resposta.",
            },
            {
              page: "03",
              title: "Statement Page",
              body: "Statement aprovado com contraste tipográfico e badge de contexto.",
            },
            {
              page: "04",
              title: "Bullet Card",
              body: "Highlight e quatro bullets factuais sobre quem Lemay é.",
            },
            {
              page: "05",
              title: "Closing",
              body: "Fecha com a linha aprovada e foto de Lemay como âncora visual.",
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
              Foto oficial abre a capa. Imagem de contexto ancora a página 2. Segundo retrato
              fecha na página 5.
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

                <PostImage src={image1} alt="Steve Lemay — foto oficial Apple" fill />

                <div className="min-w-0">
                  <Typography variant="h1" className="max-w-[10ch] leading-[0.92]">
                    O designer que sempre esteve lá.
                  </Typography>
                  <Typography variant="body-s" className="mt-3 max-w-[29ch] text-muted-foreground">
                    Steve Lemay assume o Human Interface Design da Apple. 26 anos. Centenas de patentes.
                  </Typography>
                </div>
              </SocialPageFrame>
            </div>

            {/* Page 2 — Support */}
            <div className="w-[320px] shrink-0">
              <SocialPageFrame>
                <PostImage src={image2} alt="Apple design — contexto da troca" />

                <PostCard>
                  <Typography variant="h4">
                    Alan Dye saiu para a Meta. A Apple respondeu com um veterano de 26 anos.
                  </Typography>
                  <Typography variant="body-s" className="mt-3 text-muted-foreground">
                    A escolha já é uma declaração.
                  </Typography>
                </PostCard>
              </SocialPageFrame>
            </div>

            {/* Page 3 — Statement */}
            <div className="w-[320px] shrink-0">
              <SocialPageFrame>
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="tool">HID · Apple</Badge>
                  <MessageSquareQuote className="size-5 shrink-0 text-primary" />
                </div>

                <div className="flex flex-1 flex-col justify-center min-w-0">
                  <Typography variant="h3" className="max-w-[14ch] leading-[0.94] text-muted-foreground">
                    Artesanato, não estética.
                  </Typography>
                  <Typography
                    variant="display-l"
                    className="mt-5 max-w-[9ch] text-balance leading-[0.9]"
                  >
                    Como funciona, não só como parece.
                  </Typography>
                </div>
              </SocialPageFrame>
            </div>

            {/* Page 4 — Bullets */}
            <div className="w-[320px] shrink-0">
              <SocialPageFrame>
                <Typography variant="display-l" className="max-w-[12ch] text-balance leading-[0.9]">
                  O que Lemay representa?
                </Typography>

                <PostCard>
                  <div className="space-y-3">
                    {(
                      [
                        { label: "26 anos na Apple", Icon: Shield },
                        { label: "Centenas de patentes", Icon: Award },
                        { label: "Formado antes do iPhone", Icon: Smartphone },
                        { label: "Interno, não importado", Icon: UserCheck },
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
                    Quando a escolha é um veterano, a mensagem não precisa de palavras.
                  </Typography>
                </div>

                <PostImage src={image3} alt="Steve Lemay — Apple" fill />
              </SocialPageFrame>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
          <Typography variant="label-m" className="text-primary">
            Image Sources
          </Typography>
          <div className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
            <p>Page 1 usa a foto oficial de Steve Lemay aprovada para este post.</p>
            <p>Page 2 usa a imagem de contexto da transição aprovada para este post.</p>
            <p>Page 5 usa o segundo retrato de Lemay aprovado para este post.</p>
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

                <PostImage src={image1} alt="Steve Lemay — foto oficial Apple" fill />

                <div className="min-w-0">
                  <Typography variant="h2" className="max-w-[10ch] leading-[0.92]">
                    O designer que sempre esteve lá.
                  </Typography>
                  <Typography variant="body-s" className="mt-2 max-w-[32ch] text-muted-foreground">
                    Steve Lemay assume o Human Interface Design da Apple. 26 anos. Centenas de patentes.
                  </Typography>
                </div>
              </SocialPageFrame45>
            </div>

            {/* Page 2 */}
            <div className="w-[320px] shrink-0">
              <SocialPageFrame45>
                <div className="min-w-0">
                  <Typography variant="h4">
                    Alan Dye saiu para a Meta. A Apple respondeu com um veterano de 26 anos.
                  </Typography>
                  <Typography variant="body-s" className="mt-2 text-muted-foreground">
                    A escolha já é uma declaração.
                  </Typography>
                </div>

                <PostImage src={image2} alt="Apple design — contexto da troca" fill />
              </SocialPageFrame45>
            </div>

            {/* Page 3 */}
            <div className="w-[320px] shrink-0">
              <SocialPageFrame45>
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="tool">HID · Apple</Badge>
                  <MessageSquareQuote className="size-5 shrink-0 text-primary" />
                </div>

                <div className="flex flex-1 flex-col justify-center min-w-0">
                  <Typography variant="h3" className="max-w-[20ch] leading-[0.94] text-muted-foreground">
                    Artesanato, não estética.
                  </Typography>
                  <Typography
                    variant="display-l"
                    className="mt-5 max-w-[9ch] text-balance leading-[0.9]"
                  >
                    Como funciona, não só como parece.
                  </Typography>
                </div>
              </SocialPageFrame45>
            </div>

            {/* Page 4 */}
            <div className="w-[320px] shrink-0">
              <SocialPageFrame45>
                <Typography variant="h2" className="max-w-[14ch] leading-[0.92]">
                  O que Lemay representa?
                </Typography>

                <PostCard>
                  <div className="space-y-3">
                    {(
                      [
                        { label: "26 anos na Apple", Icon: Shield },
                        { label: "Centenas de patentes", Icon: Award },
                        { label: "Formado antes do iPhone", Icon: Smartphone },
                        { label: "Interno, não importado", Icon: UserCheck },
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
                    Quando a escolha é um veterano, a mensagem não precisa de palavras.
                  </Typography>
                </div>

                <PostImage src={image3} alt="Steve Lemay — Apple" fill />
              </SocialPageFrame45>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
          <Typography variant="label-m" className="text-primary">
            Adaptation Notes · 4:5
          </Typography>
          <Typography variant="body-s" className="mt-4 text-muted-foreground">
            Página 2 com texto direto no topo e imagem fill abaixo. Página 3 só com texto e badge,
            sem imagem. Página 4 com título em cima e card em stack vertical. Página 5 sem linha de
            apoio para preservar o espaço.
          </Typography>
        </div>
      </Section>
    </div>
  )
}
