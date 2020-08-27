import { DropdownProps } from './Dropdown'

import styled, { css } from 'styled-components'
import { rem } from 'polished'

export const Wrapper = styled.div<DropdownProps>`
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

const border = css<DropdownProps>`
  padding: ${({ theme }) => `${theme.radii.md}`} 0;
  border-top: ${({ theme }) => theme.border.md} #fff;
  border-bottom: ${({ theme }) => theme.border.md} #fff;
`

export const dropdown = css<DropdownProps>`
  position: absolute;
  z-index: 999;
  width: ${({ width }) => (width ? rem(`${width}px`) : null)};
  min-width: ${({ width }) => (width ? null : rem('160px'))};
  max-height: ${({ visible, n }) => {
    if (!visible) return '0'
    return rem(`${n}px`)
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
  ${({ visible }) => (visible ? border : null)}
  border-radius: ${({ theme }) => theme.radii.md};
  border-top-left-radius: ${({ topped }) => (topped ? 0 : null)};
  border-top-right-radius: ${({ topped }) => (topped ? 0 : null)};
  background-color: #fff;
  ${({ theme }) => theme.boxShadow}
  transition: max-height 100ms ease;
`

export const DropdownWrapper = styled.div<DropdownProps>`
  ${dropdown}
`

export const Description = styled.div`
  color: ${({ theme }) => theme.colors.gray6};
  text-align: center;
`
