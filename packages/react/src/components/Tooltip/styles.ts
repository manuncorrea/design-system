import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContainer = styled(Tooltip.Content, {
  fontWeight: '$medium',
  padding: '$3 $4',

  background: '$gray900',
  color: '$gray100',
  borderRadius: '$xs',

  fontFamily: '$default',
  fontSize: '$sm',

  filter: 'drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25))',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
