import { ButtonProps, RippleProps, StyleProps } from './'
import styled, { css, keyframes } from 'styled-components'
import { rem } from 'polished'

export const baseStyle = css<StyleProps>`
  display: inline-flex;
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
  border-width: ${rem('1px')};
  border-radius: ${({ shape }) =>
    shape === 'circle' ? '50%' : shape === 'round' ? rem('40px') : rem('4px')};
  border-top-left-radius: ${({ addon }) => (addon ? 0 : null)};
  border-bottom-right-radius: ${({ dropdown }) => (dropdown ? 0 : null)};
  border-bottom-left-radius: ${({ addon, dropdown }) =>
    addon || dropdown ? 0 : null};
  outline: none;
  font-size: ${({ size }) => (size === 'lg' ? rem('16px') : rem('14px'))};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`

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
  ${baseStyle}
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

export const primaryStyle = css<StyleProps>`
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

export const defaultStyle = css<StyleProps>`
  border-style: solid;
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
      if (ghost) {
        return theme.colors.dark
      } else {
        return theme.colors.primary
      }
    }};
  }
`

export const PrimaryButton = styled(BaseButton)`
  ${primaryStyle}
`

export const DefaultButton = styled(BaseButton)`
  ${defaultStyle}
`

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

const rippleAnimation = ({
  width,
  top,
  right,
  bottom,
  left,
  shape
}: RippleProps) => {
  const fromInset = `inset(${rem(`${-top}px`)} ${rem(`${-right}px`)} ${rem(
    `${-bottom}px`
  )} ${rem(`${-left}px`)} round ${
    shape === 'circle' ? '50%' : shape === 'round' ? rem('40px') : rem('4px')
  })`

  const toInset = `inset(${rem(`${-top + width / 2}px`)} ${rem(
    `${-right + width / 2}px`
  )} ${rem(`${-bottom + width / 2}px`)} ${rem(
    `${-left + width / 2}px`
  )} round ${
    shape === 'circle' ? '50%' : shape === 'round' ? rem('40px') : rem('4px')
  })`

  return keyframes`
    from {
      width: 0;
      height: 0;
      opacity: 0.5;
      clip-path: ${fromInset}
    }
    to {
      width: ${rem(`${width}px`)};
      height: ${rem(`${width}px`)};
      opacity: 0;
      clip-path: ${toInset}
    }
`
}

export const RippleSpan = styled.span<RippleProps>`
  position: absolute;
  top: ${({ y }) => rem(`${y}px`)};
  left: ${({ x }) => rem(`${x}px`)};
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gray7};
  transform: translate(-50%, -50%);
  animation: ${rippleAnimation} 0.5s linear 1;
  pointer-events: none;
`
