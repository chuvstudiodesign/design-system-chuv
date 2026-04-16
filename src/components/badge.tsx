"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { Badge as BaseBadge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const studioBadgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-none border font-medium transition-colors [&>svg]:pointer-events-none [&>svg]:size-3.5",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground",
        outline:
          "border-[var(--brand-neutral-200)] bg-background text-foreground",
        service:
          "border-[var(--brand-primary-200)] bg-[var(--brand-primary-50)] text-[var(--brand-primary-500)]",
        tool:
          "border-white bg-[var(--brand-neutral-50)] text-foreground",
        success:
          "border-transparent bg-[var(--success)] text-[var(--success-foreground)]",
        warning:
          "border-transparent bg-[var(--warning)] text-[var(--warning-foreground)]",
      },
      size: {
        sm: "h-5 px-2 text-[10px] uppercase tracking-[0.16em]",
        default: "h-6 px-2.5 text-xs",
        lg: "h-7 px-3 text-sm",
        count: "h-6 min-w-6 rounded-none px-1.5 font-mono tabular-nums",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type BadgeProps = Omit<React.ComponentProps<typeof BaseBadge>, "variant"> &
  VariantProps<typeof studioBadgeVariants>

function Badge({
  className,
  variant = "default",
  size = "default",
  ...props
}: BadgeProps) {
  return (
    <BaseBadge
      variant="outline"
      className={cn(studioBadgeVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Badge, studioBadgeVariants }
