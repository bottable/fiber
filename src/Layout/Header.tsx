import { StyledHeader } from './styles'

import React, { FC } from 'react'

export type HeaderProps = {
  // custom props here
}

const Header: FC<HeaderProps> = ({ children, ...props }) => {
  return <StyledHeader {...props}>{children}</StyledHeader>
}

export { Header }
