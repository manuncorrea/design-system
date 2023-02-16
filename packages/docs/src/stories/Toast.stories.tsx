import { Button, Toast, ToastProps } from '@manuncorrea/react'
import type { Meta, StoryObj } from '@storybook/react'
import { useEffect, useRef, useState } from 'react'

const DemoToast = (props: ToastProps) => {
  const [open, setOpen] = useState(false)

  const timerRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  })

  return (
    <div>
      <Button
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => setOpen(true), 100)
        }}
      >
        Agendar
      </Button>
      <Toast open={open} onOpenChange={setOpen} {...props} />
    </div>
  )
}

export default {
  title: 'Surfaces/Toast',
  component: DemoToast,
  args: {
    title: 'Agendamento realizado',
    description: 'Sexta-feira, 16 de Fevereiro às 08h',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
