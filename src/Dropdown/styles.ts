import { DropdownProps } from './Dropdown'

import styled from 'styled-components'
import { rem } from 'polished'

export const Wrapper = styled.div<DropdownProps>`
  display: inline-block;
  position: relative;
  color: ${({ theme }) => theme.colors.base};
  font-size: ${({ theme }) => theme.fontSizes.md};
  &:hover {
    color: ${({ theme }) => theme.colors.dark};
  }

  cursor: pointer;

  svg {
    width: ${({ theme }) => theme.fontSizes.md};
    height: ${({ theme }) => theme.fontSizes.md};
    vertical-align: middle;
  }

  ${({ theme }) => theme.transition}
`

export const DropdownWrapper = styled.div<DropdownProps>`
  display: ${({ expand }) => (expand ? null : 'none')};
  position: absolute;
  z-index: 999;
  top: 100%;
  min-width: ${rem('160px')};
  padding: ${({ theme }) => `${theme.radii.md}`} 0;
  border-top: ${({ theme }) => theme.border.md} #fff;
  border-bottom: ${({ theme }) => theme.border.md} #fff;
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: #fff;
  box-shadow: ${({ theme }) => `0 8px 16px 0 ${theme.colors.gray4}`};
`
