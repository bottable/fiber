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
  const cardsNode = cards.map(({ content, ...rest }, idx) => {
    let style = rest.style
    if (idx !== 0) {
      style = {
        boxShadow: '-4px 0px 10px rgba(0, 0, 0, 0.25)',
        marginLeft: -40,
        zIndex: idx,
        ...rest.style
      }
    }
    return (
      <Card key={idx} {...rest} style={style}>
        {content}
      </Card>
    )
  })

  return <CardSliderContainer>{cardsNode}</CardSliderContainer>
}

export { CardSlider }
