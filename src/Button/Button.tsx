import { MergeElementProps } from '../utils'

import { baseStyle } from './styles'

import styled, { css } from 'styled-components'
import React, { ReactNode, Ref, MouseEventHandler, forwardRef } from 'react'
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

const Button = forwardRef((props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
  const {
    children,
    type = 'default',
    size = 'md',
    shape = 'default',
    danger = false
  } = props
  const buttonVariant = css`
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
    border: ${(p) => {
      switch (type) {
        case 'primary':
          return `${rem('1px')} solid ${
            p.theme.colors[danger ? 'danger' : 'primary']
          }`
        case 'default':
          return `${rem('1px')} solid ${p.theme.colors.gray4}`
        case 'dashed':
          return `${rem('1px')} dashed ${p.theme.colors.gray4}`
        default:
          return `${rem('1px')} solid white`
      }
    }};
    border-radius: ${shape === 'default'
      ? rem('4px')
      : shape === 'circle'
      ? '50%'
      : rem('40px')};
    background-color: ${(p) => {
      switch (type) {
        case 'primary':
          return p.theme.colors[danger ? 'danger' : 'primary']
        default:
          return 'white'
      }
    }};
    color: ${(p) => {
      switch (type) {
        case 'primary':
          return 'white'
        case 'link':
          return p.theme.colors[danger ? 'danger' : 'primary']
        default:
          return p.theme.colors.gray6
      }
    }};
    font-size: ${size === 'lg' ? rem('16px') : rem('14px')};
    &:hover {
      border: ${(p) => {
        switch (type) {
          case 'primary':
            return `${rem('1px')} solid ${
              p.theme.colors[danger ? 'danger' : 'dark']
            }`
          case 'text':
            return `${rem('1px')} solid ${p.theme.colors.gray2}`
          case 'link':
            return `${rem('1px')} solid white`
          case 'dashed':
            return `${rem('1px')} dashed ${
              p.theme.colors[danger ? 'danger' : 'primary']
            }`
          default:
            return `${rem('1px')} solid ${
              p.theme.colors[danger ? 'danger' : 'primary']
            }`
        }
      }};
      background-color: ${(p) => {
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
        switch (type) {
          case 'primary':
            return 'white'
          case 'text':
            return p.theme.colors.gray6
          case 'link':
            return p.theme.colors[danger ? 'danger' : 'light']
          default:
            return p.theme.colors[danger ? 'danger' : 'primary']
        }
      }};
    }
  `

  const StyledButton = styled.button<ButtonProps>`
    ${baseStyle}
    ${buttonVariant};
  `

  return <StyledButton ref={ref}>{children}</StyledButton>
})

export { Button }
