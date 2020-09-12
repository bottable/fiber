import { RippleSpan } from '../styles'

import React, { useState } from 'react'

export type AddRipleprops = {
  event: React.MouseEvent
  width: number
  centered?: boolean
}

export const useRipple = () => {
  const [ripples, setRipples] = useState<React.ReactNode[]>([])

  const addRipple = ({ event, width, centered }: AddRipleprops) => {
    const element = event.currentTarget as HTMLElement

    const clientRect = element.getBoundingClientRect()

    const x = centered
      ? element.offsetWidth / 2
      : event.clientX - clientRect.left
    const y = centered
      ? element.offsetHeight / 2
      : event.clientY - clientRect.top

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
