import { MergeElementProps } from '../utils'

import { baseStyle } from './styles'

import styled, { keyframes } from 'styled-components'
import React, { MouseEventHandler, forwardRef, useRef, useState } from 'react'
import { rem } from 'polished'

type Shape = 'default' | 'circle' | 'round'

export type ButtonProps = MergeElementProps<
  'button',
  {
    disabled?: boolean
    ghost?: boolean
    href?: string
    htmlType?: 'submit' | 'button' | 'reset' | undefined
    icon?: React.ReactElement
    loading?: boolean | { delay: number }
    shape?: Shape
    size?: 'sm' | 'md' | 'lg'
    target?: string
    type?: 'primary' | 'default' | 'dashed' | 'text' | 'link'
    onClick?: MouseEventHandler<HTMLElement>
    block?: boolean
    danger?: boolean
    children?: React.ReactNode
    prefixCls?: string
    className?: string
  }
>

type RippleProps = {
  x: number
  y: number
  width: number
  top: number
  right: number
  bottom: number
  left: number
  shape?: Shape
}

const BaseButton = styled.button<ButtonProps>`
  ${baseStyle}
  width: ${({ block }) => (block ? '100%' : null)};
  min-width: ${({ shape, size }) => {
    if (shape !== 'circle') return null
    switch (size) {
      case 'lg':
        return rem('44px')
      case 'sm':
        return rem('30px')
      default:
        return rem('38px')
    }
  }};
  height: ${({ size }) => {
    switch (size) {
      case 'lg':
        return rem('44px')
      case 'sm':
        return rem('30px')
      default:
        return rem('38px')
    }
  }};
  padding: ${({ size }) => {
    switch (size) {
      case 'lg':
        return `${rem('12px')} ${rem('18px')}`
      case 'sm':
        return `${rem('6px')} ${rem('12px')}`
      default:
        return `${rem('10px')} ${rem('16px')}`
    }
  }};
  padding-right: ${({ shape }) => (shape === 'circle' ? rem('0px') : null)};
  padding-left: ${({ shape }) => (shape === 'circle' ? rem('0px') : null)};
  border-radius: ${({ shape }) =>
    shape === 'circle' ? '50%' : shape === 'round' ? rem('40px') : rem('4px')};
  font-size: ${({ size }) => (size === 'lg' ? rem('16px') : rem('14px'))};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`

const PrimaryButton = styled(BaseButton)`
  border-style: solid;
  border-color: ${({ disabled, danger, theme }) =>
    theme.colors[disabled ? 'gray3' : danger ? 'danger' : 'primary']};
  background-color: ${({ ghost, disabled, danger, theme }) => {
    if (ghost) return 'transparent'
    if (disabled) {
      return theme.colors.gray3
    } else {
      return theme.colors[danger ? 'danger' : 'primary']
    }
  }};
  color: ${({ ghost, disabled, theme }) => {
    if (disabled) return theme.colors.gray5
    if (ghost) {
      return theme.colors.primary
    } else {
      return 'white'
    }
  }};
  &:hover {
    border-color: ${({ disabled, danger, theme }) => {
      if (disabled) return null
      return `${theme.colors[danger ? 'danger' : 'dark']}`
    }};
    background-color: ${({ ghost, disabled, danger, theme }) => {
      if (disabled || ghost) return null
      return theme.colors[danger ? 'danger' : 'dark']
    }};
    color: ${({ ghost, disabled, danger, theme }) => {
      if (disabled) return null
      if (ghost) {
        return theme.colors[danger ? 'danger' : 'dark']
      } else {
        return 'white'
      }
    }};
  }
`

const DefaultButton = styled(BaseButton)`
  border-style: solid;
  border-color: ${({ ghost, theme }) => {
    if (ghost) {
      return 'white'
    } else {
      return `${theme.colors.gray4}`
    }
  }};
  background-color: ${({ ghost, disabled, theme }) => {
    if (ghost) return 'transparent'
    if (disabled) {
      return theme.colors.gray3
    } else {
      return 'white'
    }
  }};
  color: ${({ ghost, disabled, theme }) => {
    if (disabled) return theme.colors.gray5
    if (ghost) {
      return 'white'
    } else {
      return theme.colors.gray7
    }
  }};
  &:hover {
    border-color: ${({ ghost, disabled, danger, theme }) => {
      if (disabled) return null
      return `${theme.colors[danger ? 'danger' : ghost ? 'dark' : 'primary']}`
    }};
    background-color: ${({ ghost, disabled }) => {
      if (disabled || ghost) return null
      return 'white'
    }};
    color: ${({ ghost, disabled, danger, theme }) => {
      if (disabled) return null
      if (ghost) {
        return theme.colors[danger ? 'danger' : 'dark']
      } else {
        return theme.colors[danger ? 'danger' : 'primary']
      }
    }};
  }
`

const DashedButton = styled(BaseButton)`
  border-style: dashed;
  border-color: ${({ ghost, theme }) => {
    if (ghost) {
      return 'white'
    } else {
      return `${theme.colors.gray4}`
    }
  }};
  background-color: ${({ ghost, disabled, theme }) => {
    if (ghost) return 'transparent'
    if (disabled) {
      return theme.colors.gray3
    } else {
      return 'white'
    }
  }};
  color: ${({ ghost, disabled, theme }) => {
    if (disabled) return theme.colors.gray5
    if (ghost) {
      return 'white'
    } else {
      return theme.colors.gray7
    }
  }};
  &:hover {
    border-color: ${({ ghost, disabled, danger, theme }) => {
      if (disabled) return null
      return `${theme.colors[danger ? 'danger' : ghost ? 'dark' : 'primary']}`
    }};
    background-color: ${({ ghost, disabled }) => {
      if (disabled || ghost) return null
      return 'white'
    }};
    color: ${({ ghost, disabled, danger, theme }) => {
      if (disabled) return null
      return `${theme.colors[danger ? 'danger' : ghost ? 'dark' : 'primary']}`
    }};
  }
`

const TextButton = styled(BaseButton)`
  border-style: solid;
  border-color: white;
  background-color: ${({ ghost }) => {
    if (ghost) return 'transparent'
    return 'white'
  }};
  color: ${({ ghost, disabled, theme }) => {
    if (disabled) return theme.colors.gray5
    if (ghost) {
      return 'white'
    } else {
      return theme.colors.gray7
    }
  }};
  &:hover {
    border-color: ${({ ghost, disabled, theme }) => {
      if (disabled) return null
      if (ghost) {
        return 'transparent'
      } else {
        return `${theme.colors.gray2}`
      }
    }};
    background-color: ${({ ghost, disabled, theme }) => {
      if (disabled || ghost) return null
      return theme.colors.gray2
    }};
    color: ${({ disabled, theme }) => {
      if (disabled) return null
      return theme.colors.gray7
    }};
  }
`

const LinkButton = styled(BaseButton)`
  border-style: solid;
  border-color: ${({ ghost }) => {
    if (ghost) {
      return 'transparent'
    } else {
      return 'white'
    }
  }};
  background-color: ${({ ghost }) => {
    if (ghost) return 'transparent'
    return 'white'
  }};
  color: ${({ ghost, disabled, danger, theme }) => {
    if (disabled) return theme.colors.gray5
    if (ghost) {
      return 'white'
    } else {
      return theme.colors[danger ? 'danger' : 'primary']
    }
  }};
  &:hover {
    border-color: ${({ ghost, disabled }) => {
      if (disabled) return null
      if (ghost) {
        return 'transparent'
      } else {
        return 'white'
      }
    }};
    background-color: ${({ ghost, disabled }) => {
      if (disabled || ghost) return null
      return 'white'
    }};
    color: ${({ ghost, disabled, danger, theme }) => {
      if (disabled) return null
      return theme.colors[danger ? 'danger' : ghost ? 'dark' : 'light']
    }};
  }
`

const RippleSpan = styled.span<RippleProps>`
  position: absolute;
  background: #555;
  transform: translate(-50%, -50%);
  left: ${({ x }) => rem(`${x}px`)};
  top: ${({ y }) => rem(`${y}px`)};
  pointer-events: none;
  border-radius: 50%;
  animation: ${({ width, top, right, bottom, left, shape }) => {
      return keyframes`
    from {
      opacity: 0.5;
      width: 0px;
      height: 0px;
      clip-path: ${`inset(${rem(`${-top}px`)} ${rem(`${-right}px`)} ${rem(
        `${-bottom}px`
      )} ${rem(`${-left}px`)} round ${
        shape === 'circle'
          ? '50%'
          : shape === 'round'
          ? rem('40px')
          : rem('4px')
      })`}
    }
    to {
      opacity: 0;
      width: ${rem(`${width}px`)};
      height: ${rem(`${width}px`)};
      clip-path: ${`inset(${rem(`${-top + width / 2}px`)} ${rem(
        `${-right + width / 2}px`
      )} ${rem(`${-bottom + width / 2}px`)} ${rem(
        `${-left + width / 2}px`
      )} round ${
        shape === 'circle'
          ? '50%'
          : shape === 'round'
          ? rem('40px')
          : rem('4px')
      })`}
    }
`
    }}
    0.5s linear 1;
`

const Button = forwardRef((props: ButtonProps, ref: any) => {
  const { children, type = 'default', onClick, icon, ...rest } = props

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

  const [ripple, setRipple] = useState<any>(null)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  if (!ref) ref = useRef<HTMLButtonElement>(null)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) (onClick as React.MouseEventHandler<HTMLButtonElement>)(e)
  }

  const handleMouseDown = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const clientRect = ref.current.getBoundingClientRect()

    let top, right, bottom, left

    if (rest.shape === 'circle') {
      top = right = bottom = left = ref.current.offsetHeight / 2
    } else {
      top = e.clientY - clientRect.top
      right = clientRect.right - e.clientX
      bottom = clientRect.bottom - e.clientY
      left = e.clientX - clientRect.left
    }
    const x = ref.current.offsetLeft + left
    const y = ref.current.offsetTop + top

    setRipple(
      <RippleSpan
        x={x}
        y={y}
        top={top}
        right={right}
        bottom={bottom}
        left={left}
        shape={rest.shape}
        width={ref.current.offsetWidth * 2}
        onAnimationEnd={() => {
          setRipple(null)
        }}
      />
    )
  }

  const iconStyle = {
    height: rest.size === 'lg' ? rem('19px') : rem('18px')
  }

  return (
    <StyledButton
      ref={ref}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      {...rest}
    >
      {ripple}
      {icon ? <icon.type style={iconStyle} /> : null}
      {children}
    </StyledButton>
  )
})

export { Button }
