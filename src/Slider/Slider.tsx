import { StyleProps } from '../utils/styles'

import { StyledSlider } from './styles'

import React, { FC } from 'react'

export interface SliderProps extends StyleProps {
  // custom props here
}

const Slider: FC<SliderProps> = ({ children, ...props }) => {
  return <StyledSlider {...props}>{children}</StyledSlider>
}

export { Slider }
