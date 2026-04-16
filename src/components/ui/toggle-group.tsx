"use client"

import * as React from "react"
import { Toggle as TogglePrimitive } from "@base-ui/react/toggle"
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants> & {
    spacing?: number
    orientation?: "horizontal" | "vertical"
  }
>({
  size: "default",
  variant: "default",
  spacing: 0,
  orientation: "horizontal",
})

type ToggleGroupBaseProps<Value extends string> = Omit<
  ToggleGroupPrimitive.Props<Value>,
  "multiple" | "value" | "defaultValue" | "onValueChange"
> &
  VariantProps<typeof toggleVariants> & {
    spacing?: number
    orientation?: "horizontal" | "vertical"
  }

type ToggleGroupSingleProps<Value extends string> = ToggleGroupBaseProps<Value> & {
  type?: "single"
  value?: Value | undefined
  defaultValue?: Value | undefined
  onValueChange?: ((value: Value) => void) | undefined
}

type ToggleGroupMultipleProps<Value extends string> = ToggleGroupBaseProps<Value> & {
  type: "multiple"
  value?: readonly Value[] | undefined
  defaultValue?: readonly Value[] | undefined
  onValueChange?: ((value: Value[]) => void) | undefined
}

function ToggleGroup<Value extends string>({
  className,
  type = "single",
  variant,
  size,
  spacing = 0,
  orientation = "horizontal",
  children,
  value,
  defaultValue,
  onValueChange,
  ...props
}: ToggleGroupSingleProps<Value> | ToggleGroupMultipleProps<Value>) {
  const isMultiple = type === "multiple"

  return (
    <ToggleGroupPrimitive<Value>
      data-slot="toggle-group"
      multiple={isMultiple}
      data-variant={variant}
      data-size={size}
      data-spacing={spacing}
      data-orientation={orientation}
      style={{ "--gap": spacing } as React.CSSProperties}
      className={cn(
        "group/toggle-group flex w-fit max-w-full flex-row flex-wrap items-center gap-[--spacing(var(--gap))] rounded-none data-vertical:flex-col data-vertical:items-stretch",
        className
      )}
      value={
        isMultiple
          ? (value as readonly Value[] | undefined)
          : value
            ? ([value] as readonly Value[])
            : undefined
      }
      defaultValue={
        isMultiple
          ? (defaultValue as readonly Value[] | undefined)
          : defaultValue
            ? ([defaultValue] as readonly Value[])
            : undefined
      }
      onValueChange={(groupValue) => {
        if (isMultiple) {
          ;(onValueChange as ((value: Value[]) => void) | undefined)?.(
            groupValue
          )
          return
        }

        const nextValue = groupValue[0]
        if (nextValue) {
          ;(onValueChange as ((value: Value) => void) | undefined)?.(nextValue)
        }
      }}
      {...props}
    >
      <ToggleGroupContext.Provider
        value={{ variant, size, spacing, orientation }}
      >
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive>
  )
}

function ToggleGroupItem({
  className,
  children,
  variant = "default",
  size = "default",
  ...props
}: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) {
  const context = React.useContext(ToggleGroupContext)

  return (
    <TogglePrimitive
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      data-spacing={context.spacing}
      className={cn(
        "shrink-0 rounded-none focus:z-10 focus-visible:z-10 group-data-[spacing=0]/toggle-group:px-2 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-1.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-1.5 group-data-horizontal/toggle-group:data-[spacing=0]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:first:border-t group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0",
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className
      )}
      {...props}
    >
      {children}
    </TogglePrimitive>
  )
}

export { ToggleGroup, ToggleGroupItem }
