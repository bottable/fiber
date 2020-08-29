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

    if (placement.includes('bottom')) output += '\ntop: calc(100% + 10px);'
    else output += '\nbottom: calc(100% + 10px);'

    if (placement.includes('Right')) output += '\nright: 0;'
    return output
  }}
`

export const trianglePosition = css<PopoverProps>`
  ${({ placement }) => {
    if (!placement) return null
    const property = placement.includes('bottom') ? 'top' : 'bottom'
    return `${property}: calc(100% + 5px);`
  }}
`

export const PopoverWrapper = styled.div<PopoverProps>`
  ${dropdown}
  ${popoverPosition}
  p {
    margin: 0;
  }
`

export const Triangle = styled.div<PopoverProps>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  position: absolute;
  z-index: 1000;
  ${trianglePosition}
  left: 50%;
  width: 10px;
  height: 10px;
  background-color: #fff;
  transform: translateX(-50%) rotate(45deg);
`
