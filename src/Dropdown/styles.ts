import { wrapper, dropdown } from '../styles'

import { DropdownProps } from './Dropdown'

import styled, { css } from 'styled-components'
import { rem } from 'polished'

const border = css<DropdownProps>`
  padding: ${({ theme }) => `${theme.radii.md}`} 0;
  border-top: ${({ theme }) => theme.border.md} #fff;
  border-bottom: ${({ theme }) => theme.border.md} #fff;
`

export const Wrapper = styled.div<DropdownProps>`
  ${wrapper}
`

export const DropdownWrapper = styled.div<DropdownProps>`
  ${dropdown}
  ${({ placement }) => {
    let output = ''
    if (!placement) return null

    if (placement.includes('bottom')) output += '\ntop: 100%;'
    else output += '\nbottom: 100%;'

    if (placement.includes('Right')) output += '\nright: 0;'
    return output
  }}
  ${({ visible }) => (visible ? border : null)}
  width: ${({ width }) => (width ? rem(`${width}px`) : null)};
  max-height: ${({ visible, n }) => {
    if (!visible) return '0'
    if (n) return rem(`${n}px`)
    return null
  }};
  border-top-left-radius: ${({ topped }) => (topped ? 0 : null)};
  border-top-right-radius: ${({ topped }) => (topped ? 0 : null)};
  transition: max-height 100ms ease;
`

export const Description = styled.div`
  color: ${({ theme }) => theme.colors.gray6};
  text-align: center;
`
