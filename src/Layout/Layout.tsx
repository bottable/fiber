import { StyledLayout } from './styles'

import React, { FC } from 'react'

export type LayoutProps = {
  // custom props here
}

const Layout: FC<LayoutProps> = ({ children, ...props }) => {
  return <StyledLayout {...props}>{children}</StyledLayout>
}

export { Layout }
