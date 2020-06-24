import { MergeElementProps } from '../utils'

import { baseStyle } from './styles'

import styled from 'styled-components'
import React, {
  ReactNode,
  MouseEventHandler,
  forwardRef,
  // useState,
  // useEffect,
  useRef
} from 'react'
import { rem } from 'polished'

export type ButtonProps = MergeElementProps<
  'button',
  {
    disabled?: boolean
    ghost?: boolean
    href?: string
    htmlType?: 'submit' | 'button' | 'reset' | undefined
    icon?: ReactNode
    loading?: boolean | { delay: number }
    shape?: 'default' | 'circle' | 'round'
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
    shape === 'default'
      ? rem('4px')
      : shape === 'circle'
      ? '50%'
      : rem('40px')};
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

const Button = forwardRef((props: ButtonProps, ref: any) => {
  const { children, type = 'default', onClick, ...rest } = props

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

  // eslint-disable-next-line react-hooks/rules-of-hooks
  if (!ref) ref = useRef<HTMLButtonElement>(null)

  // const [activeStyle, setActiveStyle] = useState<any>(null)

  // useEffect(() => {
  //   setActiveStyle(css`
  //     &:after {
  //       content: '';
  //       display: var(--display, none);
  //       position: fixed;
  //       height: ${rem(`${ref.current.offsetWidth * 2}px`)};
  //       width: ${rem(`${ref.current.offsetWidth * 2}px`)};
  //       left: calc(var(--mouse-x, 0) - ${rem(`${ref.current.offsetWidth}px`)});
  //       top: calc(var(--mouse-y, 0) - ${rem(`${ref.current.offsetWidth}px`)});
  //       background-color: #555;
  //       border-radius: 50%;
  //       opacity: 0;
  //       transition: all 0.5s;
  //       clip-path: ${() => {
  //         const domRect = ref.current.getBoundingClientRect()
  //         return `inset(calc(${rem(
  //           `${domRect.top + ref.current.offsetWidth}px`
  //         )} - var(--mouse-y, 0)) calc(${rem(
  //           `${-domRect.left}px`
  //         )} + var(--mouse-x, 0)) calc(${rem(
  //           `${-domRect.bottom + ref.current.offsetWidth}px`
  //         )} + var(--mouse-y, 0)) calc(${rem(
  //           `${domRect.right}px`
  //         )} - var(--mouse-x, 0)) round ${
  //           shape === 'default'
  //             ? rem('4px')
  //             : shape === 'circle'
  //             ? '50%'
  //             : rem('40px')
  //         })`
  //       }};
  //     }

  //     &:active:after {
  //       content: '';
  //       height: ${rem(`${ref.current.offsetHeight}px`)};
  //       width: ${rem(`${ref.current.offsetHeight}px`)};
  //       left: calc(
  //         var(--mouse-x, 0) - ${rem(`${ref.current.offsetHeight / 2}px`)}
  //       );
  //       top: calc(
  //         var(--mouse-y, 0) - ${rem(`${ref.current.offsetHeight / 2}px`)}
  //       );
  //       background-color: #555;
  //       border-radius: 50%;
  //       opacity: 0.5;
  //       transition: 0s;
  //       clip-path: ${() => {
  //         const domRect = ref.current.getBoundingClientRect()
  //         return `inset(calc(${rem(
  //           `${domRect.bottom - ref.current.offsetHeight / 2}px`
  //         )} - var(--mouse-y, 0)) calc(${rem(
  //           `${-domRect.right + ref.current.offsetHeight / 2}px`
  //         )} + var(--mouse-x, 0)) calc(${rem(
  //           `${-domRect.top - ref.current.offsetHeight / 2}px`
  //         )} + var(--mouse-y, 0)) calc(${rem(
  //           `${domRect.left + ref.current.offsetHeight / 2}px`
  //         )} - var(--mouse-x, 0)) round ${
  //           shape === 'default'
  //             ? rem('4px')
  //             : shape === 'circle'
  //             ? '50%'
  //             : rem('40px')
  //         })`
  //       }};
  //     }
  //   `)
  // }, [])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) (onClick as React.MouseEventHandler<HTMLButtonElement>)(e)
  }

  const handleMouseDown = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const x = e.clientX
    const y = e.clientY

    ref.current.style.setProperty('--display', 'block')
    ref.current.style.setProperty('--mouse-x', `${x}px`)
    ref.current.style.setProperty('--mouse-y', `${y}px`)

    setTimeout(() => {
      ref.current.style.setProperty('--display', 'none')
    }, 500)
  }

  return (
    <StyledButton
      ref={ref}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      {...rest}
    >
      {children}
    </StyledButton>
  )
})

export { Button }
