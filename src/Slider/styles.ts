import { SliderProps } from './Slider'

import styled from 'styled-components'

export const StyledSlider = styled.div<SliderProps>`
  position: relative;
  height: 4px;
  margin: 0;
  padding: 4px 0;
  cursor: pointer;
`

export const Rail = styled.div<SliderProps>`
  position: absolute;
  right: auto;
  left: 0;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.gray4};
`

export const Track = styled.div<SliderProps>`
  position: absolute;
  right: auto;
  left: 0;
  height: 4px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.base};
`

export const Thumb = styled.div<SliderProps>`
  position: relative;
  top: -5px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.base};
`
