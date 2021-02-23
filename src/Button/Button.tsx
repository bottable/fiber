import { MergeElementProps } from '../utils'
import { useRipple } from '../hooks'
import { ButtonStyleProps } from '../styles'

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

import React, { forwardRef, useRef } from 'react'
import { composeRef } from 'rc-util/lib/ref'

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
    children?: React.ReactNode
    style?: React.CSSProperties & object
  } & ButtonStyleProps
>

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, htmlType, type, icon, startIcon, endIcon, ...rest } = props
  const { shape, ghost } = props
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

  const handleMouseDown = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!buttonRef.current) return

    addRipple({
      event,
      width: buttonRef.current.offsetWidth * 2,
      centered: shape === 'circle',
      color: type === 'primary' && !ghost ? 'light' : 'dark'
    })
  }

  const iconNode = icon ? <Icon>{icon}</Icon> : null
  const startIconNode = startIcon ? (
    <StartIcon {...rest}>{startIcon}</StartIcon>
  ) : null
  const endIconNode = endIcon ? <EndIcon {...rest}>{endIcon}</EndIcon> : null

  const childrenNode = children ? <span>{children}</span> : null

  return (
    <StyledButton
      ref={composeRef(buttonRef, ref)}
      onMouseDown={handleMouseDown}
      type={htmlType}
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
