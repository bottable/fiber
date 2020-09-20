import { SliderProps } from './Slider'

import styled, { css } from 'styled-components'
import { rem } from 'polished'

const horizontalSlider = css`
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
  top: auto;
  bottom: 0;
  width: ${rem('4px')};
  height: 100%;
`

const horizontalTrack = css`
  right: auto;
  left: 0;
  height: ${rem('4px')};
`

const verticalTrack = css`
  top: auto;
  bottom: 0;
  width: ${rem('4px')};
`

const horizontalThumb = css`
  top: ${rem('-5px')};
`

const verticalThumb = css`
  left: ${rem('-5px')};
`

const horizontalMark = css`
  top: ${rem('20px')};
  transform: translateX(-50%);
  &::after {
    content: '';
    display: block;
    width: ${rem('1px')};
    height: ${rem('8px')};
    margin-top: ${rem('-27px')};
    margin-left: calc(50% - 0.5px);
    background: black;
  }
`

const verticalMark = css`
  left: ${rem('25px')};
  &::after {
    content: '';
    display: block;
    width: ${rem('8px')};
    height: ${rem('1px')};
    margin-top: ${rem('-11.5px')};
    margin-left: ${rem('-11px')};
    background: black;
  }
`

export const StyledSlider = styled.div<SliderProps>`
  ${({ vertical }) => (vertical ? verticalSlider : horizontalSlider)}
  position: relative;
  margin: ${({ marks }) => (marks ? rem('30px') : null)};
  margin-top: 0;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  touch-action: manipulation;
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
  ${({ vertical }) => (vertical ? verticalThumb : horizontalThumb)}
  position: relative;
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
  transition: left 0s;
`

export const Mark = styled.span<SliderProps>`
  ${({ vertical }) => (vertical ? verticalMark : horizontalMark)}
  position: absolute;
  font-size: ${rem('14px')};
`
