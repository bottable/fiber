import { SliderProps } from './Slider'

import styled, { css } from 'styled-components'
import { rem } from 'polished'

const horizontalSlider = css`
  width: 100%;
  height: ${rem('4px')};
  padding: ${rem('5px')} 0;
`

const verticalSlider = css`
  width: ${rem('4px')};
  height: 100%;
  padding: 0 ${rem('5px')};
`

const horizontalRail = css`
  right: auto;
  left: 0;
  width: 100%;
  height: ${rem('4px')};
`

const verticalRail = css`
  top: 0;
  bottom: auto;
  width: ${rem('4px')};
  height: 100%;
`

const horizontalTrack = css`
  right: auto;
  left: 0;
  height: ${rem('4px')};
`

const verticalTrack = css`
  top: 0;
  bottom: auto;
  width: ${rem('4px')};
`

export const StyledSlider = styled.div<SliderProps>`
  ${({ vertical }) => (vertical ? verticalSlider : horizontalSlider)}
  position: relative;
  margin: 0;
  opacity: ${({ hover, focus }) => (hover || focus ? 1 : 0.6)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  ${({ theme }) => theme.transition}
`

export const Rail = styled.div<SliderProps>`
  ${({ vertical }) => (vertical ? verticalRail : horizontalRail)}
  position: absolute;
  border-radius: ${rem('2px')};
  background-color: ${({ theme }) => theme.colors.gray4};
`

export const Track = styled.div<SliderProps>`
  ${({ vertical }) => (vertical ? verticalTrack : horizontalTrack)}
  position: absolute;
  border-radius: ${rem('2px')};
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.gray6 : theme.colors.base};
`

export const Thumb = styled.div<SliderProps>`
  position: relative;
  top: ${rem('-5px')};
  left: ${({ vertical }) => (vertical ? rem('-5px') : null)};
  width: ${rem('14px')};
  height: ${rem('14px')};
  border-radius: 50%;
  background: ${({ focus, disabled, theme }) =>
    disabled
      ? theme.colors.gray6
      : focus
      ? theme.colors.dark
      : theme.colors.base};
  &:hover {
    background: ${({ disabled, theme }) =>
      disabled ? null : theme.colors.dark};
  }
  ${({ theme }) => theme.transition}
  transition: left 0s
`
