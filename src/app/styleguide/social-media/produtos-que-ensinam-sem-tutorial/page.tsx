import {
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

import {
  type ApprovedCopy,
  type ApprovedImage,
} from "@/components/social-media/visual-post-creation"
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

const approvedCopy: ApprovedCopy = {
  page1: {
    title: "Produtos que ensinam sem tutorial",
    subtitle: "De Braun a Apple, clareza formal ainda reduz fricção.",
  },
  page2: {
    title: "Os melhores produtos explicam o uso pela forma, não pelo excesso de interface",
    paragraph: "Rams já apontava isso.",
  },
  page3: {
    statement: "Menos instrução. Mais leitura imediata.",
  },
  page4: {
    highlight: "O que sustenta clareza",
    bullets: ["ordem visual", "gesto previsível", "feedback exato", "função evidente"],
  },
  page5: {
    closing: "Quando o uso parece óbvio, quase sempre houve rigor de projeto.",
  },
}

const approvedImages: ApprovedImage[] = [
  {
    page: 1,
    src: "https://onlyonceshop.com/media/pages/blog/influential-3d-designer-interpreting-braun-design/f1974a38ff-1650541406/dongmin_shin_3d_braun_design_dieter_rams_only_once_shop_2.jpg",
    alt: "Interpretação 3D de produto Braun inspirada na linguagem de Dieter Rams",
    label: "3D Braun study",
    referenceUrl: "https://onlyonceshop.com/media/pages/blog/influential-3d-designer-interpreting-braun-design/f1974a38ff-1650541406/dongmin_shin_3d_braun_design_dieter_rams_only_once_shop_2.jpg",
  },
  {
    page: 2,
    src: "https://www.designboom.com/wp-content/uploads/2015/01/systems-braun-design-tribute-paris-designboom-01.jpg",
    alt: "Instalação Systems com tributo visual ao design da Braun",
    label: "Systems / Braun",
    referenceUrl: "https://www.designboom.com/wp-content/uploads/2015/01/systems-braun-design-tribute-paris-designboom-01.jpg",
  },
  {
    page: 5,
    src: "https://d1hhug17qm51in.cloudfront.net/www-media/2018/08/26055752/2012.148.A-B_01_H02-Large-TIFF_4000-pixels-long-scaled.jpg",
    alt: "Calculadora Braun ET66 em fundo neutro com foco na forma do produto",
    label: "Braun ET66",
    referenceUrl: "https://d1hhug17qm51in.cloudfront.net/www-media/2018/08/26055752/2012.148.A-B_01_H02-Large-TIFF_4000-pixels-long-scaled.jpg",
  },
]

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
  image,
  fill = false,
}: {
  image: ApprovedImage
  fill?: boolean
}) {
  return (
    <div
      className={[
        "overflow-hidden rounded-none border border-white bg-white",
        fill ? "min-h-0 flex-1" : "h-44",
      ].join(" ")}
    >
      {image.src ? <img src={image.src} alt={image.alt} className="h-full w-full object-cover" /> : null}
    </div>
  )
}

const imageByPage = Object.fromEntries(
  approvedImages.map((image) => [image.page, image])
) as Partial<Record<1 | 2 | 3 | 5, ApprovedImage>>

export default function ProdutosQueEnsinamSemTutorialPage() {
  return (
    <div className="ds-page">
      <div className="ds-page-header">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
          03 — SOCIAL MEDIA
        </p>
        <h1 className="ds-page-title">Produtos que ensinam sem tutorial</h1>
        <p className="ds-page-description">
          Página criada para o post aprovado sobre clareza formal, usando a estrutura real de
          social media do design system e preservando todas as demos anteriores.
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-foreground">
          Tema aprovado: <strong>Produtos que ensinam sem tutorial</strong>
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
        subtitle="Mapeamento direto da copy aprovada, sem reescrita"
      >
        <div className="grid gap-4 xl:grid-cols-5">
          {[
            {
              page: "01",
              title: "Cover Hook",
              body: "Usa título e subtítulo aprovados com imagem editorial de Dieter Rams na capa.",
            },
            {
              page: "02",
              title: "Support Page",
              body: "Agora recebe uma foto de produto para deixar a referência Braun mais explícita.",
            },
            {
              page: "03",
              title: "Statement Page",
              body: "A frase aprovada foi separada em duas variações tipográficas para ganhar contraste.",
            },
            {
              page: "04",
              title: "Bullet Card",
              body: "Usa highlight e quatro bullets aprovados dentro do card system existente.",
            },
            {
              page: "05",
              title: "Closing",
              body: "Fecha com a linha aprovada e uma imagem de produto alinhada à referência Braun.",
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
              Este post usa 3 imagens.
            </Typography>
            <Typography variant="body-s" className="text-muted-foreground">
              As imagens entram nas páginas 1, 2 e 5.
            </Typography>
            <Typography variant="body-s" className="text-muted-foreground">
              As fotos são puxadas por URL pública a partir das referências selecionadas.
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

                {imageByPage[1] ? <PostImage image={imageByPage[1]} fill /> : <div className="flex-1" />}

                <div className="min-w-0">
                  <Typography variant="h1" className="max-w-[14ch] leading-[0.92]">
                    {approvedCopy.page1.title}
                  </Typography>
                  <Typography variant="body-s" className="mt-3 max-w-[29ch] text-muted-foreground">
                    {approvedCopy.page1.subtitle}
                  </Typography>
                </div>
              </SocialPageFrame>
            </div>

            <div className="w-[320px] shrink-0">
              <SocialPageFrame>
                {imageByPage[2] ? <PostImage image={imageByPage[2]} /> : null}

                <PostCard>
                  <Typography variant="h4">{approvedCopy.page2.title}</Typography>
                  <Typography variant="body-s" className="mt-3 text-muted-foreground">
                    {approvedCopy.page2.paragraph}
                  </Typography>
                </PostCard>
              </SocialPageFrame>
            </div>

            <div className="w-[320px] shrink-0">
              <SocialPageFrame>
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="tool">Manifesto</Badge>
                  <MessageSquareQuote className="size-5 shrink-0 text-primary" />
                </div>

                <div className="flex flex-1 flex-col justify-center min-w-0">
                  <Typography variant="h3" className="max-w-[11ch] leading-[0.94] text-muted-foreground">
                    Menos instrução.
                  </Typography>
                  <Typography variant="display-l" className="mt-5 max-w-[8ch] text-balance leading-[0.9]">
                    Mais leitura imediata.
                  </Typography>
                </div>
              </SocialPageFrame>
            </div>

            <div className="w-[320px] shrink-0">
              <SocialPageFrame>
                <Typography variant="display-l" className="max-w-[9ch] text-balance leading-[0.9]">
                  {approvedCopy.page4.highlight}
                </Typography>

                <PostCard>
                  <div className="space-y-3">
                    {approvedCopy.page4.bullets.map((bullet, index) => {
                      const Icon = [Layers2, Target][index] ?? WandSparkles

                      return (
                        <div key={bullet} className="flex items-center gap-3">
                          <Icon className="size-4 shrink-0 text-primary" />
                          <Typography variant="h4">{bullet}</Typography>
                        </div>
                      )
                    })}
                  </div>
                </PostCard>
              </SocialPageFrame>
            </div>

            <div className="w-[320px] shrink-0">
              <SocialPageFrame>
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="success">@chuv.studio</Badge>
                  <WandSparkles className="size-5 shrink-0 text-primary" />
                </div>

                <div className="min-w-0">
                  <Typography variant="h3" className="max-w-[16ch] leading-[0.94]">
                    {approvedCopy.page5!.closing}
                  </Typography>
                </div>

                {imageByPage[5] ? <PostImage image={imageByPage[5]} fill /> : null}
              </SocialPageFrame>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-none border border-white bg-[#f9f9f9] p-[var(--card-padding)]">
          <Typography variant="label-m" className="text-primary">
            Image Sources
          </Typography>
          <div className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
            <p>
              Page 1 uses the 3D Braun interpretation image provided for this version.
            </p>
            <p>
              Page 2 uses the Systems / Braun tribute image provided for this version.
            </p>
            <p>
              Page 5 uses the Braun ET66 product image provided for this version.
            </p>
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

                {imageByPage[1] ? <PostImage image={imageByPage[1]} fill /> : <div className="flex-1" />}

                <div className="min-w-0">
                  <Typography variant="h2" className="max-w-[18ch] leading-[0.92]">
                    {approvedCopy.page1.title}
                  </Typography>
                  <Typography variant="body-s" className="mt-2 max-w-[32ch] text-muted-foreground">
                    {approvedCopy.page1.subtitle}
                  </Typography>
                </div>
              </SocialPageFrame45>
            </div>

            {/* Page 2 — text on top, image fill below */}
            <div className="w-[320px] shrink-0">
              <SocialPageFrame45>
                <div className="min-w-0">
                  <Typography variant="h4">{approvedCopy.page2.title}</Typography>
                  <Typography variant="body-s" className="mt-2 text-muted-foreground">
                    {approvedCopy.page2.paragraph}
                  </Typography>
                </div>

                {imageByPage[2] ? <PostImage image={imageByPage[2]} fill /> : <div className="flex-1" />}
              </SocialPageFrame45>
            </div>

            {/* Page 3 — badge + text only */}
            <div className="w-[320px] shrink-0">
              <SocialPageFrame45>
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="tool">Manifesto</Badge>
                  <MessageSquareQuote className="size-5 shrink-0 text-primary" />
                </div>

                <div className="flex flex-1 flex-col justify-center min-w-0">
                  <Typography variant="h3" className="max-w-[11ch] leading-[0.94] text-muted-foreground">
                    Menos instrução.
                  </Typography>
                  <Typography variant="display-l" className="mt-5 max-w-[8ch] text-balance leading-[0.9]">
                    Mais leitura imediata.
                  </Typography>
                </div>
              </SocialPageFrame45>
            </div>

            {/* Page 4 — h2 title on top, card vertical stack below */}
            <div className="w-[320px] shrink-0">
              <SocialPageFrame45>
                <Typography variant="h2" className="max-w-[14ch] leading-[0.92]">
                  {approvedCopy.page4.highlight}
                </Typography>

                <PostCard>
                  <div className="space-y-3">
                    {approvedCopy.page4.bullets.map((bullet, index) => {
                      const Icon = [Layers2, Target][index] ?? WandSparkles

                      return (
                        <div key={bullet} className="flex items-center gap-3">
                          <Icon className="size-4 shrink-0 text-primary" />
                          <Typography variant="h4">{bullet}</Typography>
                        </div>
                      )
                    })}
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
                    {approvedCopy.page5!.closing}
                  </Typography>
                </div>

                {imageByPage[5] ? <PostImage image={imageByPage[5]} fill /> : null}
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
