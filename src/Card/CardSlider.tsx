import { Card, CardProps } from './Card'
import { CardSliderContainer } from './styles'

import React, { FC } from 'react'

interface CardSliderCardProps extends CardProps {
  content: React.ReactNode
}

export type CardSliderProps = {
  cards: CardSliderCardProps[]
}

const CardSlider: FC<CardSliderProps> = ({ cards }) => {
  const cardsNode = cards.map(({ content, ...rest }, idx) => (
    <Card key={idx} {...rest}>
      {content}
    </Card>
  ))

  return <CardSliderContainer>{cardsNode}</CardSliderContainer>
}

export { CardSlider }
