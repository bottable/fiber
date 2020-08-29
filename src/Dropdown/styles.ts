import { DropdownProps } from '../hooks'
import { dropdown } from '../styles'

import styled, { css } from 'styled-components'
import { rem } from 'polished'

const border = css<DropdownProps>`
  padding: ${({ theme }) => `${theme.radii.md}`} 0;
  border-top: ${({ theme }) => theme.border.md} #fff;
  border-bottom: ${({ theme }) => theme.border.md} #fff;
`

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
  max-height: ${({ visible, n }) => {
    if (!visible) return '0'
    if (n) return rem(`${n}px`)
    return null
  }};
  transition: max-height 100ms ease;
`

export const Description = styled.div`
  color: ${({ theme }) => theme.colors.gray6};
  text-align: center;
`
