import { wrapper, triangle, popover } from '../styles'

import { TooltipProps } from './Tooltip'

import styled from 'styled-components'

export const Wrapper = styled.div<TooltipProps>`
  ${wrapper}
`

export const TooltipWrapper = styled.div<TooltipProps>`
  ${popover}
  min-width: 0;
  padding: ${({ theme }) => `${theme.paddings.xs} ${theme.paddings.sm}`};
  background: ${({ color, theme }) =>
    color
      ? !theme.colors[color]
        ? color
        : theme.colors[color].base
      : theme.colors.gray8};
  color: #fff;
`

export const Triangle = styled.div<TooltipProps>`
  ${triangle}
  background-color: ${({ color, theme }) =>
    color
      ? !theme.colors[color]
        ? color
        : theme.colors[color].base
      : theme.colors.gray8};
`

export const Title = styled.div``
