import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const typographyVariants = cva("text-foreground", {
  variants: {
    variant: {
      "display-xl":
        "text-4xl font-bold tracking-tight leading-none text-balance sm:text-6xl lg:text-7xl",
      "display-l":
        "text-3xl font-bold tracking-tight leading-none text-balance sm:text-4xl lg:text-5xl",
      h1: "text-3xl font-bold tracking-tight leading-tight text-balance sm:text-4xl",
      h2: "text-2xl font-bold tracking-tight leading-tight text-balance sm:text-3xl",
      h3: "text-xl font-semibold tracking-tight leading-tight text-balance sm:text-2xl",
      h4: "text-lg font-semibold tracking-tight leading-tight text-balance sm:text-xl",
      "body-xl": "text-lg leading-7 font-normal sm:text-xl sm:leading-8",
      "body-m": "text-base leading-7 font-normal",
      "body-s": "text-sm leading-6 font-normal",
      "label-m":
        "text-sm font-medium uppercase tracking-[0.16em] leading-none",
      caption: "text-xs font-normal leading-5 text-muted-foreground",
      lead: "text-xl leading-8 text-muted-foreground font-normal",
      muted: "text-sm leading-6 text-muted-foreground font-normal",
      code:
        "font-mono text-sm leading-6 text-foreground",
    },
  },
  defaultVariants: {
    variant: "body-m",
  },
})

const defaultElementByVariant = {
  "display-xl": "h1",
  "display-l": "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  "body-xl": "p",
  "body-m": "p",
  "body-s": "p",
  "label-m": "p",
  caption: "p",
  lead: "p",
  muted: "p",
  code: "code",
} as const satisfies Record<
  NonNullable<VariantProps<typeof typographyVariants>["variant"]>,
  React.ElementType
>

type TypographyProps<C extends React.ElementType> = {
  as?: C
  variant?: VariantProps<typeof typographyVariants>["variant"]
  className?: string
  children: React.ReactNode
} & Omit<React.ComponentPropsWithoutRef<C>, "as" | "children" | "className">

function Typography<C extends React.ElementType = "p">({
  as,
  variant = "body-m",
  className,
  children,
  ...props
}: TypographyProps<C>) {
  const Component = (as ??
    defaultElementByVariant[variant ?? "body-m"]) as React.ElementType

  return (
    <Component
      className={cn(typographyVariants({ variant }), className)}
      {...props}
    >
      {children}
    </Component>
  )
}

export { Typography, typographyVariants }
