import { InputProps } from './'
import styled from 'styled-components'
import { rem } from 'polished'

export const BaseInput = styled.input<InputProps>`
  display: inline-flex;
  padding: ${rem('5px')};
  border: ${rem('1px')} solid #c4c4c4;
  border-radius: ${rem('4px')};
  &:focus,
  &:hover {
    border-color: ${({ theme }) => theme.colors.base};
  }
`
