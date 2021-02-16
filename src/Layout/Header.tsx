import { MergeElementProps } from '../utils'

import { StyledHeader } from './styles'

import React, { FC } from 'react'

export type HeaderProps = MergeElementProps<
  'div',
  {
    style?: React.CSSProperties & object
  }
>

const Header: FC<HeaderProps> = ({ children, ...props }) => {
  return <StyledHeader {...props}>{children}</StyledHeader>
}

export { Header }
