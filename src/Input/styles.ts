import { InputProps } from './Input'

import styled, { css } from 'styled-components'
import { rem } from 'polished'

const baseStyle = css<InputProps>`
  box-sizing: border-box;
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.gray2 : '#fff'};
  color: ${({ disabled, theme }) =>
    disabled ? theme.colors.gray5 : theme.colors.gray7};
  line-height: 1.5715;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : null)};
  ${({ theme }) => theme.transition};
  &::placeholder {
    color: ${({ disabled, theme }) =>
      disabled ? theme.colors.gray5 : theme.colors.gray6};
  }
  &::selection {
    background-color: #dfc5de;
  }
`

const inputStyle = css<InputProps>`
  ${baseStyle}
  display: ${({ addonBefore, addonAfter }) =>
    addonBefore || addonAfter ? 'table-cell' : 'inline-block'};
  float: ${({ addonBefore, addonAfter }) =>
    addonBefore || addonAfter ? 'left' : null};
  border: ${({ bordered, camouflage, theme }) =>
    bordered === false || camouflage
      ? 'none'
      : `${theme.border.md} ${theme.colors.gray5};`};
  border-radius: ${({ theme }) => theme.radii.md};
  border-top-left-radius: ${({ addonBefore }) => (addonBefore ? 0 : null)};
  border-top-right-radius: ${({ addonAfter }) => (addonAfter ? 0 : null)};
  border-bottom-right-radius: ${({ addonAfter, dropdown }) =>
    addonAfter || dropdown ? 0 : null};
  border-bottom-left-radius: ${({ addonBefore, dropdown }) =>
    addonBefore || dropdown ? 0 : null};
  &:focus,
  &:hover {
    border-color: ${({ theme, disabled }) =>
      disabled ? null : theme.colors.base};
    outline: none;
    background-color: ${({ camouflage, theme }) =>
      camouflage ? theme.colors.gray2 : null};
  }
`

const fixInputStyle = css<InputProps>`
  ${baseStyle}
  flex-grow: 1;
  padding: 0;
  border: none;
  outline: none;

  &:not(:first-child) {
    margin-left: ${rem('4px')};
  }

  &:not(:last-child) {
    margin-right: ${rem('4px')};
  }
`

export const BaseInput = styled.input<InputProps>`
  ${({ fix }) => (!fix ? inputStyle : fixInputStyle)}
`

export const SmallInput = styled(BaseInput)`
  padding: ${({ fix }) => (!fix ? `${rem('3px')} ${rem('12px')}` : null)};
  font-size: ${rem('14px')};
`

export const MediumInput = styled(BaseInput)`
  padding: ${({ fix }) => (!fix ? `${rem('7px')} ${rem('16px')}` : null)};
  font-size: ${rem('14px')};
`

export const LargeInput = styled(BaseInput)`
  padding: ${({ fix }) => (!fix ? `${rem('9px')} ${rem('18px')}` : null)};
  font-size: ${rem('16px')};
`

const svgStyle = css<InputProps>`
  align-self: center;
  width: ${({ size }) => {
    switch (size) {
      case 'lg':
        return rem('19px')
      default:
        return rem('18px')
    }
  }};
  height: ${({ size }) => {
    switch (size) {
      case 'lg':
        return rem('19px')
      default:
        return rem('18px')
    }
  }};
`

export const Addon = styled.span<InputProps>`
  display: table-cell;
  width: ${rem('1px')};
  padding: ${({ button }) => (button ? 'none' : `0 ${rem('11px')}`)};
  border: ${({ button, theme }) =>
    button ? 'none' : `${rem('1px')} solid ${theme.colors.gray5}`};
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: ${({ theme }) => theme.colors.gray2};
  color: ${({ theme }) => theme.colors.gray7};
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
    ${svgStyle}
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
  ${inputStyle}
  display: inline-flex;
  flex-wrap: wrap;
  align-content: space-between;
  padding: ${({ size }) => {
    switch (size) {
      case 'lg':
        return `${rem('9px')} ${rem('18px')}`
      case 'sm':
        return `${rem('3px')} ${rem('12px')}`
      default:
        return `${rem('7px')} ${rem('16px')}`
    }
  }};
  font-size: ${({ size }) => (size === 'lg' ? rem('16px') : rem('14px'))};

  svg {
    ${svgStyle}
  }
`

export const TagInputSpan = styled(InputSpan)`
  padding-top: 0;
  padding-bottom: 0;
`

export const TagInput = styled.input<InputProps>`
  ${fixInputStyle}
  margin: ${rem('7px')} 0;
  font-size: ${rem('14px')};
`
