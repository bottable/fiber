import { ButtonStyleProps } from '../Button'

import { css } from 'styled-components'
import { rem } from 'polished'

export const button = css<ButtonStyleProps>`
  display: inline-flex;
  position: relative;
  justify-content: center;
  width: ${({ block }) => (block ? '100%' : null)};
  ${({ theme }) => theme.transition};
  min-width: ${({ shape, size }) => {
    if (shape !== 'circle') return null
    switch (size) {
      case 'lg':
        return rem('44px')
      case 'sm':
        return rem('30px')
      default:
        return rem('38px')
    }
  }};
  height: ${({ size }) => {
    switch (size) {
      case 'lg':
        return rem('44px')
      case 'sm':
        return rem('30px')
      default:
        return rem('38px')
    }
  }};
  padding: ${({ size }) => {
    switch (size) {
      case 'lg':
        return `${rem('12px')} ${rem('18px')}`
      case 'sm':
        return `${rem('6px')} ${rem('12px')}`
      default:
        return `${rem('10px')} ${rem('16px')}`
    }
  }};
  padding-right: ${({ shape }) => (shape === 'circle' ? rem('0px') : null)};
  padding-left: ${({ shape }) => (shape === 'circle' ? rem('0px') : null)};
  overflow: hidden;
  border-width: ${rem('1px')};
  border-style: solid;
  border-radius: ${({ shape }) =>
    shape === 'circle' ? '50%' : shape === 'round' ? rem('40px') : rem('4px')};
  border-top-left-radius: ${({ addon }) => (addon ? 0 : null)};
  border-bottom-right-radius: ${({ dropdown }) => (dropdown ? 0 : null)};
  border-bottom-left-radius: ${({ addon, dropdown }) =>
    addon || dropdown ? 0 : null};
  border-color: ${({ ghost, theme }) => {
    if (ghost) {
      return 'white'
    } else {
      return `${theme.colors.gray4}`
    }
  }};
  outline: none;
  background-color: ${({ ghost, disabled, theme }) => {
    if (ghost) return 'transparent'
    if (disabled) {
      return theme.colors.gray3
    } else {
      return 'white'
    }
  }};
  color: ${({ ghost, disabled, theme }) => {
    if (disabled) return theme.colors.gray5
    if (ghost) {
      return 'white'
    } else {
      return theme.colors.gray7
    }
  }};
  font-size: ${({ size }) => (size === 'lg' ? rem('16px') : rem('14px'))};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    border-color: ${({ ghost, disabled, theme }) => {
      if (disabled) return null
      return `${theme.colors[ghost ? 'dark' : 'primary']}`
    }};
    background-color: ${({ ghost, disabled }) => {
      if (disabled || ghost) return null
      return 'white'
    }};
    color: ${({ ghost, disabled, theme }) => {
      if (disabled) return null
      if (ghost) {
        return theme.colors.dark
      } else {
        return theme.colors.primary
      }
    }};
  }
`
