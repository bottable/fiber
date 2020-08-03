import { StyledCard, ContentContainer } from './styles'
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
  return (
    <StyledCard {...props}>
      <ContentContainer>{children}</ContentContainer>
    </StyledCard>
  )
}

Card.Meta = Meta
Card.Footer = Footer

export { Card }
