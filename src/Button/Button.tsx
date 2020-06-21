import { MergeElementProps } from '../utils'

import { baseStyle } from './styles'

import styled, { css } from 'styled-components'
import React, {
  ReactNode,
  MouseEventHandler,
  forwardRef,
  useState,
  useEffect,
  useRef
} from 'react'
import { rem } from 'polished'

export type ButtonProps = MergeElementProps<
  'button',
  {
    disabled?: boolean
    ghost?: boolean
    href?: string
    htmlType?: 'submit' | 'button' | 'reset'
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

const Button = forwardRef((props: ButtonProps, ref: any) => {
  const {
    children,
    type = 'default',
    size = 'md',
    shape = 'default',
    danger = false,
    disabled = false,
    ghost = false,
    block = false,
    onClick
  } = props

  // eslint-disable-next-line react-hooks/rules-of-hooks
  if (!ref) ref = useRef<HTMLButtonElement>(null)

  const [activeStyle, setActiveStyle] = useState<any>(null)

  const buttonVariant = css`
    width: ${block ? '100%' : null};
    min-width: ${() => {
      if (shape !== 'circle') return null
      switch (size) {
        case 'lg':
          return rem('44px')
        case 'md':
          return rem('38px')
        case 'sm':
          return rem('30px')
      }
    }};
    padding: ${() => {
      switch (size) {
        case 'lg':
          return `${rem('12px')} ${rem('18px')}`
        case 'md':
          return `${rem('10px')} ${rem('16px')}`
        case 'sm':
          return `${rem('6px')} ${rem('12px')}`
      }
    }};
    padding-right: ${shape === 'circle' ? rem('0px') : null};
    padding-left: ${shape === 'circle' ? rem('0px') : null};
    border-style: ${() => {
      switch (type) {
        case 'dashed':
          return 'dashed'
        default:
          return 'solid'
      }
    }};
    border-radius: ${shape === 'default'
      ? rem('4px')
      : shape === 'circle'
      ? '50%'
      : rem('40px')};
    border-color: ${(p) => {
      if (ghost) {
        switch (type) {
          case 'primary':
            return `${
              p.theme.colors[disabled ? 'gray3' : danger ? 'danger' : 'primary']
            }`
          case 'link':
            return 'transparent'
          default:
            return 'white'
        }
      } else {
        switch (type) {
          case 'primary':
            return `${
              p.theme.colors[disabled ? 'gray3' : danger ? 'danger' : 'primary']
            }`
          case 'default':
          case 'dashed':
            return `${p.theme.colors.gray4}`
          default:
            return 'white'
        }
      }
    }};
    background-color: ${(p) => {
      if (ghost) return 'transparent'
      if (disabled) {
        switch (type) {
          case 'primary':
          case 'default':
          case 'dashed':
            return p.theme.colors.gray3
          default:
            return 'white'
        }
      } else {
        switch (type) {
          case 'primary':
            return p.theme.colors[danger ? 'danger' : 'primary']
          default:
            return 'white'
        }
      }
    }};
    color: ${(p) => {
      if (disabled) return p.theme.colors.gray5
      if (ghost) {
        switch (type) {
          case 'primary':
            return p.theme.colors.primary
          default:
            return 'white'
        }
      } else {
        switch (type) {
          case 'primary':
            return 'white'
          case 'link':
            return p.theme.colors[danger ? 'danger' : 'primary']
          default:
            return p.theme.colors.gray7
        }
      }
    }};
    font-size: ${size === 'lg' ? rem('16px') : rem('14px')};
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    &:hover {
      border-color: ${(p) => {
        if (disabled) return null
        if (ghost) {
          switch (type) {
            case 'primary':
            case 'default':
            case 'dashed':
              return `${p.theme.colors[danger ? 'danger' : 'dark']}`
            default:
              return 'transparent'
          }
        } else {
          switch (type) {
            case 'primary':
              return `${p.theme.colors[danger ? 'danger' : 'dark']}`
            case 'text':
              return `${p.theme.colors.gray2}`
            case 'link':
              return 'white'
            default:
              return `${p.theme.colors[danger ? 'danger' : 'primary']}`
          }
        }
      }};
      background-color: ${(p) => {
        if (disabled || ghost) return null
        switch (type) {
          case 'primary':
            return p.theme.colors[danger ? 'danger' : 'dark']
          case 'text':
            return p.theme.colors.gray2
          default:
            return 'white'
        }
      }};
      color: ${(p) => {
        if (disabled) return null
        if (ghost) {
          switch (type) {
            case 'text':
              return p.theme.colors.gray7
            default:
              return p.theme.colors[danger ? 'danger' : 'dark']
          }
        } else {
          switch (type) {
            case 'primary':
              return 'white'
            case 'text':
              return p.theme.colors.gray7
            case 'link':
              return p.theme.colors[danger ? 'danger' : 'light']
            default:
              return p.theme.colors[danger ? 'danger' : 'primary']
          }
        }
      }};
    }
  `

  useEffect(() => {
    setActiveStyle(css`
      &:after {
        content: '';
        display: block;
        position: fixed;
        height: ${rem(`${ref.current.offsetHeight * 2}px`)};
        width: ${rem(`${ref.current.offsetHeight * 2}px`)};
        left: calc(var(--mouse-x, 0) - ${rem(`${ref.current.offsetHeight}px`)});
        top: calc(var(--mouse-y, 0) - ${rem(`${ref.current.offsetHeight}px`)});
        background-color: #555;
        border-radius: 50%;
        opacity: 0;
        transition: all 0.5s;
      }

      &:active:after {
        content: '';
        display: block;
        position: fixed;
        height: ${rem(`${ref.current.offsetHeight}px`)};
        width: ${rem(`${ref.current.offsetHeight}px`)};
        left: calc(
          var(--mouse-x, 0) - ${rem(`${ref.current.offsetHeight / 2}px`)}
        );
        top: calc(
          var(--mouse-y, 0) - ${rem(`${ref.current.offsetHeight / 2}px`)}
        );
        background-color: #555;
        border-radius: 50%;
        opacity: 0.5;
        transition: 0s;
      }
    `)

    document.addEventListener('mousedown', (e) => {
      if (e.target !== ref.current) return

      const x = e.clientX
      const y = e.clientY

      ref.current.style.setProperty('--mouse-x', `${x}px`)
      ref.current.style.setProperty('--mouse-y', `${y}px`)
    })
  }, [])

  const StyledButton = styled.button<ButtonProps>`
    ${baseStyle}
    ${buttonVariant};
    ${activeStyle}
  `

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) (onClick as React.MouseEventHandler<HTMLButtonElement>)(e)
  }

  return (
    <StyledButton ref={ref} onClick={handleClick}>
      {children}
    </StyledButton>
  )
})

export { Button }
