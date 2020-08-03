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
  size?: 'md' | 'sm'
}

const Card: CardFC<CardProps> = ({ children, ...props }) => {
  const { title, ...rest } = props
  const { extra, size } = props

  const titleNode = title ? (
    <TitleContainer size={size}>{title}</TitleContainer>
  ) : null
  const extraNode = extra ? (
    <ExtraContainer size={size}>{extra}</ExtraContainer>
  ) : null

  const header =
    title || extra ? (
      <HeaderContainer size={size}>
        {titleNode}
        {extraNode}
      </HeaderContainer>
    ) : null

  return (
    <StyledCard {...rest}>
      {header}
      <ContentContainer size={size}>{children}</ContentContainer>
    </StyledCard>
  )
}

Card.Meta = Meta
Card.Footer = Footer

export { Card }
