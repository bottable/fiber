import { MergeElementProps } from '../utils'

import {
  PrimaryButton,
  DefaultButton,
  DashedButton,
  TextButton,
  LinkButton,
  RippleSpan,
  Icon,
  StartIcon,
  EndIcon
} from './styles'

import React, { MouseEventHandler, forwardRef, useRef, useState } from 'react'
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

export type RippleProps = {
  x: number
  y: number
  width: number
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, type, onClick, icon, startIcon, endIcon, ...rest } = props
  const { shape } = props
  const buttonRef = useRef<HTMLButtonElement>(null)

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

  const [ripples, setRipples] = useState<React.ReactNode[]>([])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) (onClick as React.MouseEventHandler<HTMLButtonElement>)(e)
  }

  const handleMouseDown = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!buttonRef.current) return

    const clientRect = buttonRef.current.getBoundingClientRect()

    console.log(shape)

    const x =
      shape === 'circle'
        ? buttonRef.current.offsetWidth / 2
        : e.clientX - clientRect.left
    const y =
      shape === 'circle'
        ? buttonRef.current.offsetHeight / 2
        : e.clientY - clientRect.top

    setRipples((prevRipples) => [
      ...prevRipples!,
      <RippleSpan
        x={x}
        y={y}
        width={buttonRef!.current!.offsetWidth * 2}
        onAnimationEnd={() => {
          setRipples((prevRipples) => prevRipples?.slice(1)!)
        }}
        key={`${new Date().getTime()}`}
      />
    ])
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
