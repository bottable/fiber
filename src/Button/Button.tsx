import { MergeElementProps } from '../utils'
import { useRipple } from '../hooks'

import {
  PrimaryButton,
  DefaultButton,
  DashedButton,
  TextButton,
  LinkButton,
  Icon,
  StartIcon,
  EndIcon
} from './styles'

import React, { MouseEventHandler, forwardRef, useRef } from 'react'
import { composeRef } from 'rc-util/lib/ref'

type Shape = 'default' | 'circle' | 'round'

export type ButtonStyleProps = {
  shape?: Shape
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  ghost?: boolean
  addon?: boolean
  dropdown?: boolean
  block?: boolean
}

export type ButtonProps = MergeElementProps<
  'button',
  {
    htmlType?: 'submit' | 'button' | 'reset' | undefined
    icon?: React.ReactNode
    startIcon?: React.ReactNode
    endIcon?: React.ReactNode
    loading?: boolean | { delay: number }
    target?: string
    type?: 'primary' | 'default' | 'dashed' | 'text' | 'link'
    onClick?: MouseEventHandler<HTMLElement>
    children?: React.ReactNode
  } & ButtonStyleProps
>

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, type, onClick, icon, startIcon, endIcon, ...rest } = props
  const { shape } = props
  const buttonRef = useRef<HTMLButtonElement>(null)

  const { ripples, addRipple } = useRipple()

  let StyledButton

  switch (type) {
    case 'primary':
      StyledButton = PrimaryButton
      break
    case 'dashed':
      StyledButton = DashedButton
      break
    case 'text':
      StyledButton = TextButton
      break
    case 'link':
      StyledButton = LinkButton
      break
    default:
      StyledButton = DefaultButton
      break
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) (onClick as React.MouseEventHandler<HTMLButtonElement>)(e)
  }

  const handleMouseDown = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!buttonRef.current) return

    addRipple({
      event,
      width: buttonRef.current.offsetWidth * 2,
      centered: shape === 'circle'
    })
  }

  const iconNode = icon ? <Icon>{icon}</Icon> : null
  const startIconNode = startIcon ? <StartIcon>{startIcon}</StartIcon> : null
  const endIconNode = endIcon ? <EndIcon>{endIcon}</EndIcon> : null

  const childrenNode = children ? <span>{children}</span> : null

  return (
    <StyledButton
      ref={composeRef(buttonRef, ref)}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      {...rest}
    >
      {ripples}
      {iconNode}
      {startIconNode}
      {childrenNode}
      {endIconNode}
    </StyledButton>
  )
})

export { Button }
