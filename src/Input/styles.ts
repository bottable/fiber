import { InputProps } from './'
import styled from 'styled-components'
import { rem } from 'polished'

export const BaseInput = styled.input<InputProps>`
  display: ${({ span }) => (span ? 'table-cell' : 'inline-flex')};
  float: ${({ span }) => (span ? 'left' : null)};
  border: ${rem('1px')} solid #d9d9d9;
  border-radius: ${rem('2px')};
  border-top-left-radius: ${({ addonBefore }) => (addonBefore ? 0 : null)};
  border-top-right-radius: ${({ addonAfter }) => (addonAfter ? 0 : null)};
  border-bottom-right-radius: ${({ addonAfter }) => (addonAfter ? 0 : null)};
  border-bottom-left-radius: ${({ addonBefore }) => (addonBefore ? 0 : null)};
  color: rgb(0, 0, 0, 0.6);
  font-size: ${rem('14px')};
  &:focus,
  &:hover {
    border-color: ${({ theme }) => theme.colors.base};
    outline: none;
  }
`

export const SmallInput = styled(BaseInput)`
  padding: ${`0 ${rem('7px')}`};
`

export const MediumInput = styled(BaseInput)`
  padding: ${`${rem('4px')} ${rem('11px')}`};
`

export const LargeInput = styled(BaseInput)`
  padding: ${`${rem('6.5px')} ${rem('11px')}`};
  font-size: ${rem('16px')};
`

export const Addon = styled.span<InputProps>`
  display: table-cell;
  width: ${rem('1px')};
  padding: ${`0 ${rem('11px')}`};
  border: ${rem('1px')} solid #d9d9d9;
  border-radius: ${rem('2px')};
  background-color: #fafafa;
  font-size: ${({ size }) => {
    switch (size) {
      case 'lg':
        return rem('16px')
      default:
        return rem('14px')
    }
  }};
  text-align: center;
  vertical-align: middle;

  &:first-child {
    border-right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  &:last-child {
    border-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  svg {
    width: ${({ size }) => {
      switch (size) {
        case 'lg':
          return rem('16px')
        default:
          return rem('14px')
      }
    }};
    height: ${({ size }) => {
      switch (size) {
        case 'lg':
          return rem('16px')
        default:
          return rem('14px')
      }
    }};
    vertical-align: middle;
  }
`

export const StyledSpan = styled.span<InputProps>`
  display: table;
  margin: 0;
  padding: 0;
`
