import { wrapper, popover } from '../styles'

import { PopoverProps } from './Popover'

import styled from 'styled-components'

export const Wrapper = styled.div<PopoverProps>`
  ${wrapper}
`

export const PopoverWrapper = styled.div<PopoverProps>`
  ${popover}
  ${({ theme }) => theme.boxShadow}
`
