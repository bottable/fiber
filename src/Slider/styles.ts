import { SliderProps } from './Slider'

import styled, { css } from 'styled-components'
import { rem } from 'polished'

const horizontalSlider = css<SliderProps>`
  height: ${rem('4px')};
  margin: ${({ marks }) => (marks ? `0 ${rem('10px')}` : null)};
  padding: ${({ size }) =>
    size === 'lg'
      ? `${rem('8px')} 0 ${rem('15px')} 0`
      : `${rem('6px')} 0 ${rem('10px')} 0`};
`

const verticalSlider = css<SliderProps>`
  width: ${rem('4px')};
  height: 100%;
  padding: ${({ size }) =>
    size === 'lg'
      ? `0 ${rem('15px')} 0 ${rem('8px')}`
      : `0 ${rem('10px')} 0 ${rem('6px')}`};
`

const horizontalRail = css<SliderProps>`
  right: auto;
  left: 0;
  width: 100%;
  height: ${({ size, theme: { space } }) =>
    size === 'lg' ? space[2] : space[1]};
`

const verticalRail = css<SliderProps>`
  top: auto;
  bottom: 0;
  width: ${({ size, theme: { space } }) =>
    size === 'lg' ? space[2] : space[1]};
  height: 100%;
`

const horizontalTrack = css<SliderProps>`
  right: auto;
  left: 0;
  height: ${({ size, theme: { space } }) =>
    size === 'lg' ? space[2] : space[1]};
`

const verticalTrack = css<SliderProps>`
  top: auto;
  bottom: 0;
  width: ${({ size, theme: { space } }) =>
    size === 'lg' ? space[2] : space[1]};
`

const horizontalThumb = css<SliderProps>`
  top: ${({ size }) => (size === 'lg' ? rem('-7px') : rem('-5px'))};
`

const verticalThumb = css<SliderProps>`
  left: ${({ size }) => (size === 'lg' ? rem('-7px') : rem('-5px'))};
`

const horizontalMark = css`
  top: ${rem('15px')};
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
  margin-top: ${rem('2px')};
  &::after {
    content: '';
    display: block;
    width: ${rem('8px')};
    height: ${rem('1px')};
    margin-top: ${rem('-8px')};
    margin-left: ${rem('-20px')};
    background: black;
  }
`

export const StyledSlider = styled.div<SliderProps>`
  ${({ vertical }) => (vertical ? verticalSlider : horizontalSlider)}
  position: relative;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  touch-action: manipulation;
  ${({ theme }) => theme.transition}
`

export const VerticalContainer = styled.div<SliderProps>`
  display: flex;
  height: 100%;
  margin: ${rem('10px')} 0;
`

const horizontalMarksContainerStyle = css`
  margin: 0 ${rem('10px')} ${rem('30px')} ${rem('10px')};
`

const verticalMarksContainerStyle = css`
  height: 100%;
  float: left;
`

export const MarksContainer = styled.div<SliderProps>`
  ${({ vertical }) =>
    vertical ? verticalMarksContainerStyle : horizontalMarksContainerStyle}
  position: relative;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`

export const Rail = styled.div<SliderProps>`
  ${({ vertical }) => (vertical ? verticalRail : horizontalRail)}
  position: absolute;
  border-radius: ${({ size }) => (size === 'lg' ? rem('4px') : rem('8px'))};
  background-color: ${({ theme }) => theme.colors.gray4};
`

export const Track = styled.div<SliderProps>`
  ${({ vertical }) => (vertical ? verticalTrack : horizontalTrack)}
  position: absolute;
  border-radius: ${({ size }) => (size === 'lg' ? rem('4px') : rem('8px'))};
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.gray6 : theme.colors.base};
`

export const Thumb = styled.div<SliderProps>`
  ${({ vertical }) => (vertical ? verticalThumb : horizontalThumb)}
  position: relative;
  width: ${({ size }) => (size === 'lg' ? rem('22px') : rem('14px'))};
  height: ${({ size }) => (size === 'lg' ? rem('22px') : rem('14px'))};
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

  user-select: none;
`
