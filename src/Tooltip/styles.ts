import { wrapper, popover, triangle } from '../styles'

import { TooltipProps, TriangleProps } from './Tooltip'

import styled, { css } from 'styled-components'
import { rem } from 'polished'

export const Wrapper = styled.div<TooltipProps>`
  ${wrapper}
`

const inlineStyle = css<TooltipProps>`
  display: none;
  position: relative;
  margin-top: ${rem('10px')};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const TooltipWrapper = styled.div<TooltipProps>`
  ${({ inline }) => (inline ? inlineStyle : popover)}
  min-width: 0;
  padding: ${({ theme }) => `${theme.paddings.xs} ${theme.paddings.sm}`};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ color, theme }) =>
    color
      ? !theme.colors[color]
        ? color
        : theme.colors[color].base
      : theme.colors.gray3};
  color: ${({ color, theme }) => (!color ? theme.colors.gray8 : '#fff')};
  white-space: nowrap;
  &::after {
    background-color: ${({ color, theme }) =>
      color
        ? !theme.colors[color]
          ? color
          : theme.colors[color].base
        : theme.colors.gray3};
  }
`

export const Triangle = styled.div<TriangleProps>`
  ${triangle}
  z-index: 1000;
  bottom: ${rem('-20px')};
  left: ${({ xTriangle }) => rem(`${xTriangle}px`)};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  background-color: ${({ color, theme }) =>
    color
      ? !theme.colors[color]
        ? color
        : theme.colors[color].base
      : theme.colors.gray3};
`

export const RelativeSpan = styled.span`
  position: relative;
`
