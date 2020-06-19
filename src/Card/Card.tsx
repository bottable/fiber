import { StyleProps } from '../utils/styles'

import { StyledCard } from './styles'
import Meta from './Meta'
import Footer from './Footer'

import React, { FC } from 'react'

type CardFC<P> = FC<P> & {
  Meta: FC
  Footer: FC
}

export interface CardProps extends StyleProps {
  // custom props here
}

const Card: CardFC<CardProps> = ({ children, ...props }) => {
  return <StyledCard {...props}>{children}</StyledCard>
}

Card.Meta = Meta
Card.Footer = Footer

export { Card }
