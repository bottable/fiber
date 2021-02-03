import { StyledHeader } from './styles'

import React, { FC } from 'react'

export type HeaderProps = {
  style?: React.CSSProperties & object
}

const Header: FC<HeaderProps> = ({ children, ...props }) => {
  return <StyledHeader {...props}>{children}</StyledHeader>
}

export { Header }
