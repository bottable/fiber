import { StyledSlider } from './styles'

import React, { FC } from 'react'

export type SliderProps = {
  defaultValue?: number
  value?: number
}

const Slider: FC<SliderProps> = (props) => {
  return <StyledSlider type='range' {...props} />
}

export { Slider }
