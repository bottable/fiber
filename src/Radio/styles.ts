import { baseStyle, defaultStyle } from '../Button/styles'

import { RadioProps } from './Radio'
import { GroupProps } from './Group'
import { ButtonProps } from './Button'

import styled from 'styled-components'
import { rem } from 'polished'

export const Wrapper = styled.label`
  display: inline-block;
  position: relative;
  padding: 0;
  color: ${({ theme }) => theme.colors.gray7};
  font-size: ${({ theme }) => theme.fontSizes.md};
  cursor: pointer;
`

export const RadioContainer = styled.span`
  display: inline-block;
  top: 0;
  margin: 0;
  outline: none;
  vertical-align: sub;
`

export const LabelContainer = styled.span`
  padding-right: ${({ theme }) => theme.paddings.xs};
  padding-left: ${({ theme }) => theme.paddings.xs};
`

export const RadioInput = styled.input`
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
`

export const StyledRadio = styled.span<RadioProps>`
  display: block;
  position: relative;
  top: 0;
  left: 0;
  width: ${rem('16px')};
  height: ${rem('16px')};
  border: ${({ theme }) => theme.border.md};
  border-radius: 50%;
  border-color: ${({ checked, theme }) =>
    checked ? theme.colors.base : theme.colors.gray4};
  background-color: #fff;
  ${({ theme }) => theme.transition}

  &::after {
    content: ' ';
    display: table;
    position: absolute;
    top: 3px;
    left: 3px;
    width: ${rem('10px')};
    height: ${rem('10px')};
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.base};
    transform: ${({ checked }) => (checked ? 'scale(1)' : 'scale(0)')};
    ${({ theme }) => theme.transition}
  }

  &:hover {
    border-color: ${({ checked, theme }) =>
      !checked ? theme.colors.light : null};
  }
`

export const StyledGroup = styled.div<GroupProps>`
  display: inline-block;
  label {
    margin-right: ${({ theme }) => theme.margins.xs};
  }
`

export const StyledRadioButton = styled.label<ButtonProps>`
  position: relative;
  ${baseStyle}
  ${defaultStyle};
  height: ${rem('16px')};
  border-color: ${({ checked, theme }) => (checked ? theme.colors.base : null)};
  color: ${({ checked, theme }) => (checked ? theme.colors.base : null)};
  line-height: 1;
  &:hover {
    border-color: ${({ checked, theme }) =>
      !checked ? theme.colors.gray4 : null};
  }
  &:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  &:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  ${({ theme }) => theme.transition}
`