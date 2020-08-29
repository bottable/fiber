import { DropdownProps } from '../hooks'

import { css } from 'styled-components'
import { rem } from 'polished'

export const dropdown = css<DropdownProps>`
  position: absolute;
  z-index: 999;
  width: ${({ width }) => (width ? rem(`${width}px`) : null)};
  min-width: ${({ width }) => (width ? null : rem('160px'))};
  max-height: ${({ visible, n }) => {
    if (!visible) return '0'
    if (n) return rem(`${n}px`)
    return null
  }};
  overflow: hidden;
  ${({ placement }) => {
    let output = ''
    if (!placement) return null

    if (placement.includes('bottom')) output += '\ntop: 100%;'
    else output += '\nbottom: 100%;'

    if (placement.includes('Right')) output += '\nright: 0;'
    return output
  }}
  border-radius: ${({ theme }) => theme.radii.md};
  border-top-left-radius: ${({ topped }) => (topped ? 0 : null)};
  border-top-right-radius: ${({ topped }) => (topped ? 0 : null)};
  background-color: #fff;
  ${({ theme }) => theme.boxShadow}
  transition: max-height 100ms ease;
`
