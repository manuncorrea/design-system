import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { ComponentProps } from '@stitches/react'
import { ElementType, ReactNode } from 'react'
import { TooltipArrow, TooltipContainer } from './styles'

export type Props<T> = ComponentProps<T> & {
  as: ElementType
}

export type TooltipProps = ComponentProps<typeof TooltipPrimitive.Root> & {
  content: string
  children: ReactNode
}
export function Tooltip({ content, children, ...props }: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root {...props}>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipContainer>
            <TooltipArrow />
            {content}
          </TooltipContainer>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
