import {
  StyledCard,
  HeaderContainer,
  TitleContainer,
  ExtraContainer,
  ContentContainer
} from './styles'

import React, { FC } from 'react'

export type CardProps = {
  title?: string
  extra?: React.ReactNode
  size?: 'md' | 'sm'
  bordered?: boolean
  hoverable?: boolean
}

const Card: FC<CardProps> = ({ children, ...props }) => {
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

Card.defaultProps = {
  bordered: true
}

export { Card }
