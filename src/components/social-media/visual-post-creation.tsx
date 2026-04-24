import {
  Info,
  Layers2,
  MessageSquareQuote,
  Sparkles,
  Target,
  WandSparkles,
} from "lucide-react"

import { Badge } from "@/components/badge"
import { Typography } from "@/components/typography"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export type ApprovedCopy = {
  page1: {
    title: string
    subtitle: string
  }
  page2: {
    title: string
    paragraph: string
  }
  page3: {
    intro?: string
    statement: string
    attribution?: string
  }
  page4: {
    highlight: string
    bullets: string[]
  }
  page5?: {
    closing: string
  }
  page6?: {
    title: string
    paragraph: string
  }
  page7?: {
    intro?: string
    statement: string
    attribution?: string
  }
  page8Text?: {
    title: string
    paragraph: string
  }
  page9Closing?: {
    closing: string
  }
  page8?: {
    highlight: string
    bullets: string[]
  }
  page9?: {
    highlight: string
    bullets: string[]
  }
  page10?: {
    closing: string
  }
}

export type ApprovedImage = {
  src?: string
  alt: string
  page: 1 | 2 | 3 | 5 | 6 | 7 | 10
  label?: string
  referenceUrl?: string
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
      {image.src ? (
        <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full flex-col justify-between bg-[linear-gradient(135deg,#ffffff_0%,#efefef_100%)] p-5">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary-500)]">
              Approved image reference
            </span>
            {image.label ? (
              <p className="mt-3 max-w-[18ch] text-sm font-semibold leading-5 text-foreground">
                {image.label}
              </p>
            ) : null}
          </div>

          <div>
            <p className="text-xs leading-5 text-muted-foreground">{image.alt}</p>
            {image.referenceUrl ? (
              <a
                href={image.referenceUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-[11px] font-medium text-primary underline underline-offset-4"
              >
                Open approved source
              </a>
            ) : null}
          </div>
        </div>
      )}
    </div>
  )
}

function normalizeImages(images: ApprovedImage[]) {
  const allowedPages = new Set<ApprovedImage["page"]>([1, 2, 3, 5, 6, 7, 10])
  const uniquePages = new Set<ApprovedImage["page"]>()

  return images.filter((image) => {
    if (!allowedPages.has(image.page) || uniquePages.has(image.page)) {
      return false
    }

    uniquePages.add(image.page)
    return true
  }).slice(0, 5)
}

function buildImageMap(images: ApprovedImage[]) {
  return normalizeImages(images).reduce<Partial<Record<ApprovedImage["page"], ApprovedImage>>>(
    (map, image) => {
      map[image.page] = image
      return map
    },
    {}
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

export function VisualPostCreationDeck45({
  copy,
  images,
  handle = "@chuv.studio",
}: {
  copy: ApprovedCopy
  images: ApprovedImage[]
  handle?: string
}) {
  const imageMap = buildImageMap(images)

  return (
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

            {imageMap[1] ? <PostImage image={imageMap[1]} fill /> : <div className="flex-1" />}

            <div className="min-w-0">
              <Typography variant="h2" className="max-w-[18ch] leading-[0.92]">
                {copy.page1.title}
              </Typography>
              <Typography variant="body-s" className="mt-2 max-w-[32ch] text-muted-foreground">
                {copy.page1.subtitle}
              </Typography>
            </div>
          </SocialPageFrame45>
        </div>

        {/* Page 2 — text on top, image fill below */}
        <div className="w-[320px] shrink-0">
          <SocialPageFrame45>
            <div className="min-w-0">
              <Typography variant="h4">{copy.page2.title}</Typography>
              <Typography variant="body-s" className="mt-2 text-muted-foreground">
                {copy.page2.paragraph}
              </Typography>
            </div>

            {imageMap[2] ? <PostImage image={imageMap[2]} fill /> : <div className="flex-1" />}
          </SocialPageFrame45>
        </div>

        {/* Page 3 — badge + text only, no image */}
        <div className="w-[320px] shrink-0">
          <SocialPageFrame45>
            <div className="flex items-center justify-between gap-3">
              <Badge variant="tool">Manifesto</Badge>
              <MessageSquareQuote className="size-5 shrink-0 text-primary" />
            </div>

            <div className="flex flex-1 flex-col justify-center min-w-0">
              {copy.page3.intro ? (
                <Typography variant="h3" className="max-w-[20ch] leading-[0.94]">
                  {copy.page3.intro}
                </Typography>
              ) : null}
              <Typography
                variant="display-l"
                className={[
                  "max-w-[9ch] text-balance leading-[0.9]",
                  copy.page3.intro ? "mt-4" : "",
                ].join(" ")}
              >
                {copy.page3.statement}
              </Typography>
              {copy.page3.attribution ? (
                <Typography variant="body-s" className="mt-4 text-muted-foreground">
                  {copy.page3.attribution}
                </Typography>
              ) : null}
            </div>
          </SocialPageFrame45>
        </div>

        {/* Page 4 — h2 title on top, card vertical stack below */}
        <div className="w-[320px] shrink-0">
          <SocialPageFrame45>
            <Typography variant="h2" className="max-w-[14ch] leading-[0.92]">
              {copy.page4.highlight}
            </Typography>

            <PostCard>
              <div className="space-y-3">
                {copy.page4.bullets.map((bullet, index) => {
                  const Icon = [Layers2, Target, Sparkles][index] ?? WandSparkles

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

        {/* Page 5 — legacy closing layout */}
        {copy.page5 ? (
          <div className="w-[320px] shrink-0">
            <SocialPageFrame45>
              <div className="flex items-center justify-between gap-3">
                <Badge variant="success">{handle}</Badge>
                <WandSparkles className="size-5 shrink-0 text-primary" />
              </div>

              <div className="min-w-0">
                <Typography variant="h3" className="max-w-[16ch] leading-[0.94]">
                  {copy.page5.closing}
                </Typography>
              </div>

              {imageMap[5] ? <PostImage image={imageMap[5]} fill /> : null}
            </SocialPageFrame45>
          </div>
        ) : null}

        {/* Page 6 — P2 layout */}
        {copy.page6 ? (
          <div className="w-[320px] shrink-0">
            <SocialPageFrame45>
              <div className="min-w-0">
                <Typography variant="h4">{copy.page6.title}</Typography>
                <Typography variant="body-s" className="mt-2 text-muted-foreground">
                  {copy.page6.paragraph}
                </Typography>
              </div>
              {imageMap[6] ? <PostImage image={imageMap[6]} fill /> : <div className="flex-1" />}
            </SocialPageFrame45>
          </div>
        ) : null}

        {/* Page 7 — P3 layout */}
        {copy.page7 ? (
          <div className="w-[320px] shrink-0">
            <SocialPageFrame45>
              <div className="flex items-center justify-between gap-3">
                <Badge variant="tool">Manifesto</Badge>
                <MessageSquareQuote className="size-5 shrink-0 text-primary" />
              </div>
              <div className="flex flex-1 flex-col justify-center min-w-0">
                {copy.page7.intro ? (
                  <Typography variant="h3" className="max-w-[20ch] leading-[0.94]">
                    {copy.page7.intro}
                  </Typography>
                ) : null}
                <Typography
                  variant="display-l"
                  className={["max-w-[9ch] text-balance leading-[0.9]", copy.page7.intro ? "mt-4" : ""].join(" ")}
                >
                  {copy.page7.statement}
                </Typography>
                {copy.page7.attribution ? (
                  <Typography variant="body-s" className="mt-4 text-muted-foreground">
                    {copy.page7.attribution}
                  </Typography>
                ) : null}
              </div>
            </SocialPageFrame45>
          </div>
        ) : null}

        {/* Page 8 — P2 layout without image */}
        {copy.page8Text ? (
          <div className="w-[320px] shrink-0">
            <SocialPageFrame45>
              <div className="min-w-0">
                <Typography variant="h4">{copy.page8Text.title}</Typography>
                <Typography variant="body-s" className="mt-2 text-muted-foreground">
                  {copy.page8Text.paragraph}
                </Typography>
              </div>
              <div className="flex-1" />
            </SocialPageFrame45>
          </div>
        ) : null}

        {/* Page 9 — P5 layout */}
        {copy.page9Closing ? (
          <div className="w-[320px] shrink-0">
            <SocialPageFrame45>
              <div className="flex items-center justify-between gap-3">
                <Badge variant="success">{handle}</Badge>
                <WandSparkles className="size-5 shrink-0 text-primary" />
              </div>
              <div className="min-w-0">
                <Typography variant="h3" className="max-w-[16ch] leading-[0.94]">
                  {copy.page9Closing.closing}
                </Typography>
              </div>
              {imageMap[10] ? <PostImage image={imageMap[10]} fill /> : null}
            </SocialPageFrame45>
          </div>
        ) : null}

        {/* Legacy Page 8 — P4 layout */}
        {!copy.page8Text && copy.page8 ? (
          <div className="w-[320px] shrink-0">
            <SocialPageFrame45>
              <Typography variant="h2" className="max-w-[14ch] leading-[0.92]">
                {copy.page8.highlight}
              </Typography>
              <PostCard>
                <div className="space-y-3">
                  {copy.page8.bullets.map((bullet, index) => {
                    const Icon = [Layers2, Target, Sparkles][index] ?? WandSparkles
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
        ) : null}

        {/* Legacy Page 9 — P4 layout */}
        {!copy.page9Closing && copy.page9 ? (
          <div className="w-[320px] shrink-0">
            <SocialPageFrame45>
              <Typography variant="h2" className="max-w-[14ch] leading-[0.92]">
                {copy.page9.highlight}
              </Typography>
              <PostCard>
                <div className="space-y-3">
                  {copy.page9.bullets.map((bullet, index) => {
                    const Icon = [Layers2, Target, Sparkles][index] ?? WandSparkles
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
        ) : null}

        {/* Legacy Page 10 — P5 layout */}
        {!copy.page9Closing && copy.page10 ? (
          <div className="w-[320px] shrink-0">
            <SocialPageFrame45>
              <div className="flex items-center justify-between gap-3">
                <Badge variant="success">{handle}</Badge>
                <WandSparkles className="size-5 shrink-0 text-primary" />
              </div>
              <div className="min-w-0">
                <Typography variant="h3" className="max-w-[16ch] leading-[0.94]">
                  {copy.page10.closing}
                </Typography>
              </div>
              {imageMap[10] ? <PostImage image={imageMap[10]} fill /> : null}
            </SocialPageFrame45>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export function VisualPostCreationDeck({
  copy,
  images,
  handle = "@chuv.studio",
}: {
  copy: ApprovedCopy
  images: ApprovedImage[]
  handle?: string
}) {
  const imageMap = buildImageMap(images)

  return (
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

            {imageMap[1] ? <PostImage image={imageMap[1]} fill /> : <div className="flex-1" />}

            <div className="min-w-0">
              <Typography variant="h1" className="max-w-[14ch] leading-[0.92]">
                {copy.page1.title}
              </Typography>
              <Typography variant="body-s" className="mt-3 max-w-[29ch] text-muted-foreground">
                {copy.page1.subtitle}
              </Typography>
            </div>
          </SocialPageFrame>
        </div>

        <div className="w-[320px] shrink-0">
          <SocialPageFrame>
            {imageMap[2] ? <PostImage image={imageMap[2]} /> : null}

            <PostCard>
              <Typography variant="h4">{copy.page2.title}</Typography>
              <Typography variant="body-s" className="mt-3 text-muted-foreground">
                {copy.page2.paragraph}
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

            <div className="flex flex-1 flex-col items-start justify-center min-w-0">
              {copy.page3.intro ? (
                <Typography variant="h3" className="max-w-[14ch] leading-[0.94]">
                  {copy.page3.intro}
                </Typography>
              ) : null}
              <Typography
                variant="display-l"
                className={[
                  "max-w-[9ch] text-balance leading-[0.9]",
                  copy.page3.intro ? "mt-4" : "",
                ].join(" ")}
              >
                {copy.page3.statement}
              </Typography>
              {copy.page3.attribution ? (
                <Typography variant="body-s" className="mt-4 text-muted-foreground">
                  {copy.page3.attribution}
                </Typography>
              ) : null}
            </div>

            {imageMap[3] ? <PostImage image={imageMap[3]} /> : null}
          </SocialPageFrame>
        </div>

        <div className="w-[320px] shrink-0">
          <SocialPageFrame>
            <Typography variant="display-l" className="max-w-[9ch] text-balance leading-[0.9]">
              {copy.page4.highlight}
            </Typography>

            <PostCard>
              <div className="space-y-3">
                {copy.page4.bullets.map((bullet, index) => {
                  const Icon = [Layers2, Target, Sparkles][index] ?? WandSparkles

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

        {copy.page5 ? (
          <div className="w-[320px] shrink-0">
            <SocialPageFrame>
              <div className="flex items-center justify-between gap-3">
                <Badge variant="success">{handle}</Badge>
                <WandSparkles className="size-5 shrink-0 text-primary" />
              </div>

              <div className="min-w-0">
                <Typography variant="h3" className="max-w-[16ch] leading-[0.94]">
                  {copy.page5.closing}
                </Typography>
              </div>

              {imageMap[5] ? <PostImage image={imageMap[5]} fill /> : null}
            </SocialPageFrame>
          </div>
        ) : null}

        {/* Page 6 — P2 layout */}
        {copy.page6 ? (
          <div className="w-[320px] shrink-0">
            <SocialPageFrame>
              {imageMap[6] ? <PostImage image={imageMap[6]} /> : null}
              <PostCard>
                <Typography variant="h4">{copy.page6.title}</Typography>
                <Typography variant="body-s" className="mt-3 text-muted-foreground">
                  {copy.page6.paragraph}
                </Typography>
              </PostCard>
            </SocialPageFrame>
          </div>
        ) : null}

        {/* Page 7 — P3 layout */}
        {copy.page7 ? (
          <div className="w-[320px] shrink-0">
            <SocialPageFrame>
              <div className="flex items-center justify-between gap-3">
                <Badge variant="tool">Manifesto</Badge>
                <MessageSquareQuote className="size-5 shrink-0 text-primary" />
              </div>
              <div className="flex flex-1 flex-col items-start justify-center min-w-0">
                {copy.page7.intro ? (
                  <Typography variant="h3" className="max-w-[14ch] leading-[0.94]">
                    {copy.page7.intro}
                  </Typography>
                ) : null}
                <Typography
                  variant="display-l"
                  className={["max-w-[9ch] text-balance leading-[0.9]", copy.page7.intro ? "mt-4" : ""].join(" ")}
                >
                  {copy.page7.statement}
                </Typography>
                {copy.page7.attribution ? (
                  <Typography variant="body-s" className="mt-4 text-muted-foreground">
                    {copy.page7.attribution}
                  </Typography>
                ) : null}
              </div>
              {imageMap[7] ? <PostImage image={imageMap[7]} /> : null}
            </SocialPageFrame>
          </div>
        ) : null}

        {/* Page 8 — P2 layout without image */}
        {copy.page8Text ? (
          <div className="w-[320px] shrink-0">
            <SocialPageFrame>
              <PostCard>
                <Typography variant="h4">{copy.page8Text.title}</Typography>
                <Typography variant="body-s" className="mt-3 text-muted-foreground">
                  {copy.page8Text.paragraph}
                </Typography>
              </PostCard>
              <div className="flex-1" />
            </SocialPageFrame>
          </div>
        ) : null}

        {/* Page 9 — P5 layout */}
        {copy.page9Closing ? (
          <div className="w-[320px] shrink-0">
            <SocialPageFrame>
              <div className="flex items-center justify-between gap-3">
                <Badge variant="success">{handle}</Badge>
                <WandSparkles className="size-5 shrink-0 text-primary" />
              </div>
              <div className="min-w-0">
                <Typography variant="h3" className="max-w-[16ch] leading-[0.94]">
                  {copy.page9Closing.closing}
                </Typography>
              </div>
              {imageMap[10] ? <PostImage image={imageMap[10]} fill /> : null}
            </SocialPageFrame>
          </div>
        ) : null}

        {/* Legacy Page 8 — P4 layout */}
        {!copy.page8Text && copy.page8 ? (
          <div className="w-[320px] shrink-0">
            <SocialPageFrame>
              <Typography variant="display-l" className="max-w-[9ch] text-balance leading-[0.9]">
                {copy.page8.highlight}
              </Typography>
              <PostCard>
                <div className="space-y-3">
                  {copy.page8.bullets.map((bullet, index) => {
                    const Icon = [Layers2, Target, Sparkles][index] ?? WandSparkles
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
        ) : null}

        {/* Legacy Page 9 — P4 layout */}
        {!copy.page9Closing && copy.page9 ? (
          <div className="w-[320px] shrink-0">
            <SocialPageFrame>
              <Typography variant="display-l" className="max-w-[9ch] text-balance leading-[0.9]">
                {copy.page9.highlight}
              </Typography>
              <PostCard>
                <div className="space-y-3">
                  {copy.page9.bullets.map((bullet, index) => {
                    const Icon = [Layers2, Target, Sparkles][index] ?? WandSparkles
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
        ) : null}

        {/* Legacy Page 10 — P5 layout */}
        {!copy.page9Closing && copy.page10 ? (
          <div className="w-[320px] shrink-0">
            <SocialPageFrame>
              <div className="flex items-center justify-between gap-3">
                <Badge variant="success">{handle}</Badge>
                <WandSparkles className="size-5 shrink-0 text-primary" />
              </div>
              <div className="min-w-0">
                <Typography variant="h3" className="max-w-[16ch] leading-[0.94]">
                  {copy.page10.closing}
                </Typography>
              </div>
              {imageMap[10] ? <PostImage image={imageMap[10]} fill /> : null}
            </SocialPageFrame>
          </div>
        ) : null}
      </div>
    </div>
  )
}
