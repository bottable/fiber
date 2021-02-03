import {
  StyledCard,
  HeaderContainer,
  TitleContainer,
  ExtraContainer,
  ContentContainer,
  ActionsContainer,
  Action
} from './styles'

import React, { FC } from 'react'

export type CardProps = {
  title?: string | React.ReactNode
  extra?: React.ReactNode
  size?: 'md' | 'sm'
  bordered?: boolean
  hoverable?: boolean
  actions?: React.ReactNode[]
  width?: number
  style?: React.CSSProperties & object
}

const Card: FC<CardProps> = ({ children, ...props }) => {
  const { title, ...rest } = props
  const { extra, size, actions } = props

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

  const actionsNode = actions ? (
    <ActionsContainer>
      {actions.map((action, idx) => (
        <Action key={idx}>{action}</Action>
      ))}
    </ActionsContainer>
  ) : null

  return (
    <StyledCard {...rest}>
      {header}
      <ContentContainer size={size}>{children}</ContentContainer>
      {actionsNode}
    </StyledCard>
  )
}

Card.defaultProps = {
  bordered: true
}

export { Card }
