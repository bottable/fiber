import { Header, HeaderProps } from './Header'
import { Content, ContentProps } from './Content'
import { Footer, FooterProps } from './Footer'
import { Sider, SiderProps } from './Sider'
import { StyledLayout } from './styles'

import React, { FC } from 'react'

export type LayoutProps = {
  // custom props here
}

type LayoutFC<P> = FC<P> & {
  Header: FC<HeaderProps>
  Content: FC<ContentProps>
  Footer: FC<FooterProps>
  Sider: FC<SiderProps>
}

const Layout: LayoutFC<LayoutProps> = ({ children, ...props }) => {
  return <StyledLayout {...props}>{children}</StyledLayout>
}

Layout.Header = Header
Layout.Content = Content
Layout.Footer = Footer
Layout.Sider = Sider

export { Layout }
