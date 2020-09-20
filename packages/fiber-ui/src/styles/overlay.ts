import { OverlayProps } from '../hooks'

import { css } from 'styled-components'
import { rem } from 'polished'

export const wrapper = css<OverlayProps>`
  display: inline-block;
  position: relative;
  font-size: ${({ theme }) => theme.fontSizes.md};

  svg {
    width: ${({ theme }) => theme.fontSizes.md};
    height: ${({ theme }) => theme.fontSizes.md};
    vertical-align: middle;
  }
`

export const dropdown = css<OverlayProps>`
  position: absolute;
  z-index: 999;
  min-width: ${rem('160px')};
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: #fff;
`

export const popoverPosition = css<OverlayProps>`
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
export const trianglePosition = css<OverlayProps>`
  ${({ placement }) => {
    if (!placement) return null
    const offset = Math.sqrt(200) / 2 + 2
    let output = ''
    if (placement.includes('top') || placement.includes('bottom')) {
      if (placement.includes('bottom')) output += '\nbottom: calc(100% - 10px);'
      else output += '\ntop: 100%;'

      if (placement.includes('Left')) output += `\nleft: ${offset}px;`
      else if (placement.includes('Right')) {
        output += `\nleft: calc(100% - ${offset}px);`
      } else output += '\nleft: 50%;'
    } else {
      if (placement.includes('right')) output += '\nright: calc(100% - 10px);'
      else output += '\nleft: 100%;'

      if (placement.includes('Top')) output += `\ntop: ${offset}px;`
      else if (placement.includes('Bottom')) {
        output += `\ntop: calc(100% - ${offset}px);`
      } else output += '\ntop: 50%;'
    }

    return output
  }}
`

export const triangle = css`
  display: block;
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #fff;
  transform: translate(-50%, -50%) rotate(45deg);
`

export const popover = css<OverlayProps>`
  ${dropdown}
  ${popoverPosition}
  overflow: visible;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  p {
    margin: 0;
  }
  &::after {
    content: '';
    ${trianglePosition}
    ${triangle}
  }
  ${({ theme }) => theme.transition}
`
