import { MergeElementProps } from '../utils'

import { StyledFooter } from './styles'

import React, { FC } from 'react'

export type FooterProps = MergeElementProps<
  'div',
  {
    style?: React.CSSProperties & object
  }
>

const Footer: FC<FooterProps> = ({ children, ...props }) => {
  return <StyledFooter {...props}>{children}</StyledFooter>
}

export { Footer }
