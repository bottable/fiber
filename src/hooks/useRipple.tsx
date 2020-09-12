import { RippleSpan } from '../styles'

import React, { useState } from 'react'

export type RippleProps = {
  component: HTMLElement
  centered?: boolean
}

export type RippleStyleProps = {
  x: number
  y: number
  width: number
}

export const useRipple = ({ component, centered }: RippleProps) => {
  const [ripples, setRipples] = useState<React.ReactNode[]>([])

  const addRipple = ({ x, y, width }: RippleStyleProps) => {
    x = centered ? component.offsetWidth / 2 : x
    y = centered ? component.offsetHeight / 2 : y

    setRipples((prevRipples) => [
      ...prevRipples!,
      <RippleSpan
        x={x}
        y={y}
        width={width}
        onAnimationEnd={() => {
          setRipples((prevRipples) => prevRipples?.slice(1)!)
        }}
        key={`${new Date().getTime()}`}
      />
    ])
  }

  return { ripples, addRipple }
}
