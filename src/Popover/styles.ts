import { dropdown } from '../styles'

import { PopoverProps } from './Popover'

import styled, { css } from 'styled-components'

export const Wrapper = styled.div<PopoverProps>`
  display: inline-block;
  position: relative;
  color: ${({ theme }) => theme.colors.base};
  font-size: ${({ theme }) => theme.fontSizes.md};
  &:hover {
    color: ${({ theme }) => theme.colors.dark};
  }

  svg {
    width: ${({ theme }) => theme.fontSizes.md};
    height: ${({ theme }) => theme.fontSizes.md};
    vertical-align: middle;
  }

  ${({ theme }) => theme.transition}
`

export const popoverPosition = css<PopoverProps>`
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

export const trianglePosition = css<PopoverProps>`
  ${({ placement }) => {
    if (!placement) return null
    let output = ''
    if (placement.includes('top') || placement.includes('bottom')) {
      if (placement.includes('bottom')) output += '\ntop: calc(100% + 5px);'
      else output += '\nbottom: calc(100% + 5px);'

      output += '\nleft: 50%;'
    } else {
      if (placement.includes('right')) output += '\nleft: calc(100% + 10px);'
      else output += '\nright: calc(100%);'

      output += '\ntop: 50%;'
    }

    return output
  }}
`

export const PopoverWrapper = styled.div<PopoverProps>`
  ${dropdown}
  ${popoverPosition}
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  p {
    margin: 0;
  }
  ${({ theme }) => theme.transition}
`

export const Triangle = styled.div<PopoverProps>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  position: absolute;
  z-index: 1000;
  ${trianglePosition}
  width: 10px;
  height: 10px;
  background-color: #fff;
  transform: translateX(-50%) rotate(45deg);
`
