import { Box, Button, Tooltip, TooltipProps } from '@manuncorrea/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  args: {
    children: <Button>Agendamento</Button>,
    content: 'Clique para marcar um horario',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '$20',
            background: '$gray500',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
