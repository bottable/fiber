import { InputProps } from './'
import styled, { css } from 'styled-components'
import { rem } from 'polished'

const baseStyle = css<InputProps>`
  display: ${({ addon }) => (addon ? 'table-cell' : 'inline-block')};
  float: ${({ addon }) => (addon ? 'left' : null)};
  border: ${({ bordered }) =>
    bordered === false ? 'none' : `${rem('1px')} solid #d9d9d9;`};
  border-radius: ${rem('2px')};
  border-top-left-radius: ${({ addonBefore }) => (addonBefore ? 0 : null)};
  border-top-right-radius: ${({ addonAfter }) => (addonAfter ? 0 : null)};
  border-bottom-right-radius: ${({ addonAfter }) => (addonAfter ? 0 : null)};
  border-bottom-left-radius: ${({ addonBefore }) => (addonBefore ? 0 : null)};
  background-color: ${({ disabled }) => (disabled ? '#f5f5f5' : null)};
  color: ${({ disabled }) =>
    disabled ? 'rgb(0, 0, 0, 0.25)' : 'rgb(0, 0, 0, 0.6)'};
  &:focus,
  &:hover {
    border-color: ${({ theme, disabled }) =>
      disabled ? null : theme.colors.base};
    outline: none;
  }
  line-height: 1.5715;
  &::placeholder {
    color: #d9d9d9;
  }
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : null)};
`

const fixInputStyle = css<InputProps>`
  padding: 0;
  border: none;
  outline: none;
  background-color: ${({ disabled }) => (disabled ? '#f5f5f5' : null)};
  color: rgb(0, 0, 0, 0.6);
`

export const BaseInput = styled.input<InputProps>`
  ${({ fix }) => (!fix ? baseStyle : fixInputStyle)}
`

export const SmallInput = styled(BaseInput)`
  padding: ${({ fix }) => (!fix ? `0 ${rem('7px')}` : null)};
  font-size: ${rem('14px')};
`

export const MediumInput = styled(BaseInput)`
  padding: ${({ fix }) => (!fix ? `${rem('4px')} ${rem('11px')}` : null)};
  font-size: ${rem('14px')};
`

export const LargeInput = styled(BaseInput)`
  padding: ${({ fix }) => (!fix ? `${rem('6.5px')} ${rem('11px')}` : null)};
  font-size: ${rem('16px')};
`

export const Addon = styled.span<InputProps>`
  display: table-cell;
  width: ${rem('1px')};
  padding: ${`0 ${rem('11px')}`};
  border: ${rem('1px')} solid #d9d9d9;
  border-radius: ${rem('2px')};
  background-color: #fafafa;
  color: rgba(0, 0, 0, 0.65);
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

export const Fix = styled.span<InputProps>`
  &:first-child {
    margin-right: ${rem('4px')};
  }
  &:last-child {
    margin-left: ${rem('4px')};
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

export const TableSpan = styled.span`
  display: table;
  margin: 0;
  padding: 0;
`

export const BlockSpan = styled.span`
  display: inline-block;
  text-align: start;
  vertical-align: top;
`

export const InputSpan = styled.span`
  ${baseStyle}
  padding: ${({ size }) => {
    switch (size) {
      case 'sm':
        return `0 ${rem('7px')}`
      case 'lg':
        return `${rem('6.5px')} ${rem('11px')}`
      default:
        return `${rem('4px')} ${rem('11px')}`
    }
  }};
  font-size: ${({ size }) => (size === 'lg' ? rem('16px') : rem('14px'))};
`
