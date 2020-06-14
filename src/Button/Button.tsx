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
    shape?: 'circle' | 'circle-outline' | 'round'
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
  const { children, type = 'default', size = 'md' } = props
  const buttonVariant = css`
    padding: ${size === 'lg'
      ? `${rem('12px')} ${rem('18px')}`
      : size === 'md'
      ? `${rem('10px')} ${rem('16px')}`
      : `${rem('6px')} ${rem('12px')}`};
    border: ${(p) => {
      switch (type) {
        case 'primary':
          return `${rem('1px')} solid ${p.theme.colors.primary}`
        case 'default':
          return `${rem('1px')} solid ${p.theme.colors.gray4}`
        case 'dashed':
          return `${rem('1px')} dashed ${p.theme.colors.gray4}`
        default:
          return `${rem('1px')} solid transparent`
      }
    }};
    background-color: ${(p) => {
      switch (type) {
        case 'primary':
          return p.theme.colors.primary
        default:
          return 'white'
      }
    }};
    color: ${(p) => {
      switch (type) {
        case 'primary':
          return 'white'
        case 'link':
          return p.theme.colors.primary
        default:
          return p.theme.colors.gray6
      }
    }};
    font-size: ${size === 'lg' ? rem('16px') : rem('14px')};
    &:hover {
      border: ${(p) => {
        switch (type) {
          case 'primary':
            return `${rem('1px')} solid ${p.theme.colors.dark}`
          case 'text':
            return `${rem('1px')} solid ${p.theme.colors.gray2}`
          case 'link':
            return `${rem('1px')} solid transparent`
          case 'dashed':
            return `${rem('1px')} dashed ${p.theme.colors.base}`
          default:
            return `${rem('1px')} solid ${p.theme.colors.base}`
        }
      }};
      background-color: ${(p) => {
        switch (type) {
          case 'primary':
            return p.theme.colors.dark
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
            return p.theme.colors.light
          default:
            return p.theme.colors.base
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
