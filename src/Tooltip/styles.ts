import { dropdown } from '../styles'

import { TooltipProps } from './Tooltip'

import styled, { css } from 'styled-components'

export const Wrapper = styled.div<TooltipProps>`
  display: inline-block;
  position: relative;
  font-size: ${({ theme }) => theme.fontSizes.md};

  svg {
    width: ${({ theme }) => theme.fontSizes.md};
    height: ${({ theme }) => theme.fontSizes.md};
    vertical-align: middle;
  }
`

export const tooltipPosition = css<TooltipProps>`
  ${({ placement }) => {
    let output = ''
    if (!placement) return null

    if (placement.includes('top') || placement.includes('bottom')) {
      if (placement.includes('bottom')) output += '\ntop: calc(100% + 10px);'
      else output += '\nbottom: calc(100% + 10px);'

      if (placement.includes('Right')) output += '\nright: 0;'
    } else {
      if (placement.includes('right')) output += '\nleft: calc(100% + 10px);'
      else output += '\nright: calc(100% + 10px);'

      if (placement.includes('Bottom')) output += '\nbottom: 0;'
      else if (placement.includes('Top')) output += '\ntop: 0;'
    }

    return output
  }}
`

export const trianglePosition = css<TooltipProps>`
  ${({ placement }) => {
    if (!placement) return null
    let output = ''
    if (placement.includes('top') || placement.includes('bottom')) {
      if (placement.includes('bottom')) output += '\ntop: calc(100% + 10px);'
      else output += '\nbottom: calc(100%);'

      output += '\nleft: 50%;'
    } else {
      if (placement.includes('right')) output += '\nleft: calc(100% + 10px);'
      else output += '\nright: calc(100%);'

      if (placement.includes('Top')) output += '\ntop: 25%;'
      else if (placement.includes('Bottom')) output += '\ntop: 75%;'
      else output += '\ntop: 50%;'
    }

    return output
  }}
`

export const TooltipWrapper = styled.div<TooltipProps>`
  ${dropdown}
  ${tooltipPosition}
  min-width: 0;
  padding: ${({ theme }) => `${theme.paddings.xs} ${theme.paddings.sm}`};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  background-color: ${({ theme }) => theme.colors.gray8};
  color: #fff;
  p {
    margin: 0;
  }
  ${({ theme }) => theme.transition}
`

export const Triangle = styled.div<TooltipProps>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  position: absolute;
  z-index: 1000;
  ${trianglePosition}
  width: 10px;
  height: 10px;
  background-color: ${({ theme }) => theme.colors.gray8};
  transform: translate(-50%, -50%) rotate(45deg);
`
