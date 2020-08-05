import { SliderProps } from './Slider'

import styled from 'styled-components'
import { rem } from 'polished'

export const StyledSlider = styled.div<SliderProps>`
  position: relative;
  height: ${rem('4px')};
  margin: 0;
  padding: ${rem('4px')} 0;
  cursor: pointer;
`

export const Rail = styled.div<SliderProps>`
  position: absolute;
  right: auto;
  left: 0;
  width: 100%;
  height: ${rem('4px')};
  border-radius: ${rem('2px')};
  background-color: ${({ theme }) => theme.colors.gray4};
`

export const Track = styled.div<SliderProps>`
  position: absolute;
  right: auto;
  left: 0;
  height: ${rem('4px')};
  border-radius: ${rem('2px')};
  background-color: ${({ theme }) => theme.colors.base};
`

export const Thumb = styled.div<SliderProps>`
  position: relative;
  top: ${rem('-5px')};
  width: ${rem('14px')};
  height: ${rem('14px')};
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.base};
`
