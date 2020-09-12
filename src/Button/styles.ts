import { button } from '../styles'

import { ButtonProps } from './'
import styled, { css } from 'styled-components'
import { rem } from 'polished'

const svgStyle = css<ButtonProps>`
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

export const BaseButton = styled.button<ButtonProps>`
  ${button}
`

export const Icon = styled.span<ButtonProps>`
  line-height: 1;
  svg {
    ${svgStyle}
  }
`

export const StartIcon = styled(Icon)`
  margin-right: ${rem('4px')};
`

export const EndIcon = styled(Icon)`
  margin-left: ${rem('4px')};
`

export const PrimaryButton = styled(BaseButton)`
  border-style: solid;
  border-color: ${({ disabled, theme }) =>
    theme.colors[disabled ? 'gray3' : 'primary']};
  background-color: ${({ ghost, disabled, theme }) => {
    if (ghost) return 'transparent'
    if (disabled) {
      return theme.colors.gray3
    } else {
      return theme.colors.primary
    }
  }};
  color: ${({ ghost, disabled, theme }) => {
    if (disabled) return theme.colors.gray5
    if (ghost) {
      return theme.colors.primary
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
      return `${theme.colors[ghost ? 'dark' : 'primary']}`
    }};
    background-color: ${({ ghost, disabled }) => {
      if (disabled || ghost) return null
      return 'white'
    }};
    color: ${({ ghost, disabled, theme }) => {
      if (disabled) return null
      return `${theme.colors[ghost ? 'dark' : 'primary']}`
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
      return theme.colors.primary
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
