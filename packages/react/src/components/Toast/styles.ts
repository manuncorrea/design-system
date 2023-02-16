import * as ToastPrimitive from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

const hidden = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + 25px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(0)' },
  to: { transform: `translateX(calc(100% + 25px))` },
})

export const ToastRoot = styled(ToastPrimitive.Root, {
  padding: '$3 $4',
  background: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',
  fontFamily: '$default',
  position: 'relative',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hidden} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(0)',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(ToastPrimitive.Title, {
  color: '$white',
  fontWeight: '$bold',
  fontSize: '$xl',
  lineHeight: '$base',
})

export const ToastDescription = styled(ToastPrimitive.Description, {
  color: '$gray200',
  fontSize: '$sm',
  lineHeight: '$base',
  marginTop: '$1',
})

export const ToastClose = styled(ToastPrimitive.Close, {
  position: 'absolute',
  top: '$4',
  right: '$4',
  background: 'none',
  border: 'none',
  color: '$gray200',
  cursor: 'pointer',
})

export const ToastViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: 25,
  gap: 10,
  width: 360,
  maxWidth: '100vw',
  height: 82,
  listStyle: 'none',
  zIndex: 10000,
  outline: 'none',
})
