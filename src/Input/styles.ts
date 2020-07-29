import { InputProps } from './'
import styled from 'styled-components'
import { rem } from 'polished'

export const BaseInput = styled.input<InputProps>`
  display: inline-flex;
  padding: ${`${rem('4px')} ${rem('11px')}`};
  border: ${rem('1px')} solid #d9d9d9;
  border-radius: ${rem('2px')};
  color: rgb(0, 0, 0, 0.6);
  font-size: ${rem('14px')};
  &:focus,
  &:hover {
    border-color: ${({ theme }) => theme.colors.base};
    outline: none;
  }
`
