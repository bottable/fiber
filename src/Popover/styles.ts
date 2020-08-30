import { wrapper, triangle, popover } from '../styles'

import { PopoverProps } from './Popover'

import styled from 'styled-components'

export const Wrapper = styled.div<PopoverProps>`
  ${wrapper}
`

export const PopoverWrapper = styled.div<PopoverProps>`
  ${popover}
`

export const Triangle = styled.div<PopoverProps>`
  ${triangle}
  background-color: #fff;
`
