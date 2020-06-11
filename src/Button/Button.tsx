import { Text } from '..'

import { baseStyle } from './styles'

import styled, { css } from 'styled-components'
import React, { FC, ReactNode } from 'react'
import { rem } from 'polished'

export interface ButtonProps {
  disabled?: boolean
  ghost?: boolean
  href?: string
  htmlType?: string
  icon?: ReactNode
  loading?: boolean | { delay: number }
  shape?: string
  size?: 'sm' | 'md' | 'lg'
  target?: string
  type?: 'primary' | 'default' | 'dashed' | 'text' | 'link'
  onClick?: (event: any) => void
  block?: boolean
  danger?: boolean
}

const buttonVariant = ({ type }: ButtonProps) => {
  return css`
    ${baseStyle}

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
    };
  `
}

const ButtonComponent = styled.button<ButtonProps>`
  ${buttonVariant};
`

ButtonComponent.defaultProps = {
  type: 'default'
}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <ButtonComponent {...props}>
      <Text>{children}</Text>
    </ButtonComponent>
  )
}
