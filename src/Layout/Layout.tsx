import { Header, HeaderProps } from './Header'
import { Content, ContentProps } from './Content'
import { Footer, FooterProps } from './Footer'
import { Sider, SiderProps } from './Sider'
import { StyledLayout } from './styles'

import React, { FC } from 'react'

export type LayoutProps = {
  children?: React.ReactNode | React.ReactNode[]
  style?: React.CSSProperties & object
}

export type StyledLayoutProps = {
  hasSider?: boolean
}

type LayoutFC<P> = FC<P> & {
  Header: FC<HeaderProps>
  Content: FC<ContentProps>
  Footer: FC<FooterProps>
  Sider: FC<SiderProps>
}

const Layout: LayoutFC<LayoutProps> = ({ children, ...props }) => {
  let hasSider = false

  if (Array.isArray(children)) {
    const arrayChildren = children as React.ReactElement[]
    for (let i = 0; i < arrayChildren.length; i++) {
      const child = arrayChildren[i]
      if (typeof child !== 'string' && child!.type === Sider) {
        hasSider = true
        break
      }
    }
  }
  return (
    <StyledLayout hasSider={hasSider} {...props}>
      {children}
    </StyledLayout>
  )
}

Layout.Header = Header
Layout.Content = Content
Layout.Footer = Footer
Layout.Sider = Sider

export { Layout }
