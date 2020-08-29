import { dropdown } from '../styles'

import { PopoverProps } from './Popover'

import styled from 'styled-components'

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

export const PopoverWrapper = styled.div<PopoverProps>`
  ${dropdown}
  bottom: calc(100% + 10px);
  p {
    margin: 0;
  }
`

export const Triangle = styled.div<PopoverProps>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  position: absolute;
  z-index: 1000;
  bottom: calc(100% + 5px);
  left: 50%;
  width: 10px;
  height: 10px;
  background-color: #fff;
  transform: translateX(-50%) rotate(45deg);
`
