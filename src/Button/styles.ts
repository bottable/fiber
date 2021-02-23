import { button, ButtonStyleProps } from '../styles'

import styled, { css } from 'styled-components'
import { rem } from 'polished'

const svgStyle = css<ButtonStyleProps>`
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
  vertical-align: middle;
`

export const BaseButton = styled.button<ButtonStyleProps>`
  ${button}
`

export const Icon = styled.span<ButtonStyleProps>`
  line-height: 1;
  svg {
    ${svgStyle}
  }
`

export const StartIcon = styled(Icon)`
  margin-right: ${({ block }) => (block ? 'auto' : '10px')};
`

export const EndIcon = styled(Icon)`
  margin-left: ${({ block }) => (block ? 'auto' : '10px')};
`

export const PrimaryButton = styled(BaseButton)`
  border: ${({ ghost }) => (ghost ? null : 'none')};
  border-style: ${({ ghost }) => (ghost ? 'solid' : null)};
  border-color: ${({ disabled, ghost, theme }) =>
    ghost ? theme.colors[disabled ? 'gray3' : 'base'] : null};
  background-color: ${({ ghost, disabled, theme }) => {
    if (ghost) return 'transparent'
    if (disabled) {
      return theme.colors.gray3
    } else {
      return theme.colors.base
    }
  }};
  color: ${({ ghost, disabled, theme }) => {
    if (disabled) return theme.colors.gray5
    if (ghost) {
      return theme.colors.base
    } else {
      return 'white'
    }
  }};

  &:hover {
    border-color: ${({ disabled, theme }) => {
      if (disabled) return null
      return `${theme.colors.dark}`
    }};
    background-color: ${({ ghost, disabled, theme }) => {
      if (disabled || ghost) return null
      return theme.colors.dark
    }};
    color: ${({ ghost, disabled, theme }) => {
      if (disabled) return null
      if (ghost) {
        return theme.colors.dark
      } else {
        return 'white'
      }
    }};
  }
`

export const DefaultButton = styled(BaseButton)``

export const DashedButton = styled(BaseButton)`
  border-style: dashed;
  border-color: ${({ ghost, theme }) => {
    if (ghost) {
      return 'white'
    } else {
      return `${theme.colors.gray4}`
    }
  }};
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

  &:hover {
    border-color: ${({ ghost, disabled, theme }) => {
      if (disabled) return null
      return `${theme.colors[ghost ? 'dark' : 'base']}`
    }};
    background-color: ${({ ghost, disabled }) => {
      if (disabled || ghost) return null
      return 'white'
    }};
    color: ${({ ghost, disabled, theme }) => {
      if (disabled) return null
      return `${theme.colors[ghost ? 'dark' : 'base']}`
    }};
  }
`

export const TextButton = styled(BaseButton)`
  border-style: solid;
  border-color: white;
  background-color: ${({ ghost }) => {
    if (ghost) return 'transparent'
    return 'white'
  }};
  color: ${({ ghost, disabled, theme }) => {
    if (disabled) return theme.colors.gray5
    if (ghost) {
      return 'white'
    } else {
      return theme.colors.gray7
    }
  }};

  &:hover {
    border-color: ${({ ghost, disabled, theme }) => {
      if (disabled) return null
      if (ghost) {
        return 'transparent'
      } else {
        return `${theme.colors.gray2}`
      }
    }};
    background-color: ${({ ghost, disabled, theme }) => {
      if (disabled || ghost) return null
      return theme.colors.gray2
    }};
    color: ${({ disabled, theme }) => {
      if (disabled) return null
      return theme.colors.gray7
    }};
  }
`

export const LinkButton = styled(BaseButton)`
  border-style: solid;
  border-color: ${({ ghost }) => {
    if (ghost) {
      return 'transparent'
    } else {
      return 'white'
    }
  }};
  background-color: ${({ ghost }) => {
    if (ghost) return 'transparent'
    return 'white'
  }};
  color: ${({ ghost, disabled, theme }) => {
    if (disabled) return theme.colors.gray5
    if (ghost) {
      return 'white'
    } else {
      return theme.colors.base
    }
  }};

  &:hover {
    border-color: ${({ ghost, disabled }) => {
      if (disabled) return null
      if (ghost) {
        return 'transparent'
      } else {
        return 'white'
      }
    }};
    background-color: ${({ ghost, disabled }) => {
      if (disabled || ghost) return null
      return 'white'
    }};
    color: ${({ ghost, disabled, theme }) => {
      if (disabled) return null
      return theme.colors[ghost ? 'dark' : 'light']
    }};
  }
`
