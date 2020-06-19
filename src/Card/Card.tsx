import { StyleProps } from '../utils/styles'

import { StyledCard } from './styles'

import React, { FC } from 'react'

export interface CardProps extends StyleProps {
  // custom props here
}

const Card: FC<CardProps> = ({ children, ...props }) => {
  return <StyledCard {...props}>{children}</StyledCard>
}

export { Card }
