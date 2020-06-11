import { baseStyle } from './styles'

import styled, { css } from 'styled-components'
import { ReactNode } from 'react'

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
  type?: string
  onClick?: (event: any) => void
  block?: boolean
  danger?: boolean
}

const buttonVariant = () => {
  return css`
    ${baseStyle}
  `
}

const Button = styled.button<ButtonProps>`
  ${buttonVariant};
`

export { Button }
