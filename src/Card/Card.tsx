import {
  StyledCard,
  HeaderContainer,
  TitleContainer,
  ExtraContainer,
  ContentContainer
} from './styles'
import Meta from './Meta'
import Footer from './Footer'

import React, { FC } from 'react'

type CardFC<P> = FC<P> & {
  Meta: FC
  Footer: FC
}

export type CardProps = {
  title?: string
  extra?: React.ReactNode
}

const Card: CardFC<CardProps> = ({ children, ...props }) => {
  const { title, extra } = props

  const titleNode = title ? <TitleContainer>{title}</TitleContainer> : null
  const extraNode = extra ? <ExtraContainer>{extra}</ExtraContainer> : null

  const header =
    title || extra ? (
      <HeaderContainer>
        {titleNode}
        {extraNode}
      </HeaderContainer>
    ) : null

  return (
    <StyledCard {...props}>
      {header}
      <ContentContainer>{children}</ContentContainer>
    </StyledCard>
  )
}

Card.Meta = Meta
Card.Footer = Footer

export { Card }
