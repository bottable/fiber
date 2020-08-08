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

const Border = css<DropdownProps>`
  padding: ${({ theme }) => `${theme.radii.md}`} 0;
  border-top: ${({ theme }) => theme.border.md} #fff;
  border-bottom: ${({ theme }) => theme.border.md} #fff;
  border-radius: ${({ theme }) => theme.radii.md};
  border-top-left-radius: ${({ topped }) => (topped ? 0 : null)};
  border-top-right-radius: ${({ topped }) => (topped ? 0 : null)};
`

export const DropdownWrapper = styled.div<DropdownProps>`
  position: absolute;
  z-index: 999;
  width: ${({ width }) => (width ? rem(`${width}px`) : null)};
  min-width: ${rem('160px')};
  height: ${({ expand }) => (expand ? null : '0')};
  overflow: hidden;
  ${({ placement }) => {
    let output = ''
    if (!placement) return null

    if (placement.includes('bottom')) output += '\ntop: 100%;'
    else output += '\nbottom: 100%;'

    if (placement.includes('Right')) output += '\nright: 0;'
    return output
  }}
  ${({ expand }) => (expand ? Border : null)}
  background-color: #fff;
  ${({ theme }) => theme.boxShadow}
`

export const Description = styled.div`
  color: ${({ theme }) => theme.colors.gray6};
  text-align: center;
`
