import { TagProps } from './Tag'

import styled, { css } from 'styled-components'
import { rem } from 'polished'

export const StyledTag = styled.span<TagProps>`
  display: ${({ visible }) => (visible ? 'inline-flex' : 'none')};
  box-sizing: border-box;
  align-items: center;
  height: ${rem('22px')};
  margin-right: ${rem('8px')};
  padding: ${`${rem('4px')} ${rem('8px')}`};
  border-radius: ${({ theme }) => theme.radii.md};
  border-color: ${({ color, theme }) =>
    color
      ? !theme.colors[color]
        ? color
        : theme.colors[color].light
      : theme.colors.gray4};
  background: ${({ color, theme }) =>
    color
      ? !theme.colors[color]
        ? color
        : theme.colors[color].lightest
      : theme.colors.gray3};
  color: ${({ color, theme }) =>
    color
      ? !theme.colors[color]
        ? '#fff'
        : theme.colors[color].base
      : theme.colors.gray7};
  font-size: ${({ theme }) => theme.fontSizes.md};
  text-align: center;
  transform: ${({ shrink }) => (shrink ? 'scale(0)' : 'scale(1)')};
  transform-origin: center;
  transition: transform 100ms ease;

  cursor: default;

  a {
    outline: none;
    background-color: transparent;
    color: ${({ color, theme }) =>
      color
        ? !theme.colors[color]
          ? color
          : theme.colors[color].base
        : theme.colors.gray7};
    text-decoration: none;
    cursor: pointer;
  }

  &:hover {
    opacity: 0.8;
  }
`

const baseContainerStyle = css<TagProps>`
  display: inline-block;
  color: ${({ color, theme }) =>
    color
      ? !theme.colors[color]
        ? '#fff'
        : theme.colors[color].base
      : theme.colors.gray7};
  font-size: ${rem('10px')};
  vertical-align: middle;
  cursor: pointer;
`

export const IconContainer = styled.span<TagProps>`
  ${baseContainerStyle}
  width: ${rem('12px')};
  height: ${rem('12px')};
  margin-right: ${rem('3px')};
  svg {
    width: ${rem('12px')};
    height: ${rem('12px')};
    float: left;
  }
`

export const CloseContainer = styled.span<TagProps>`
  ${baseContainerStyle}
  width: ${rem('10px')};
  height: ${rem('10px')};
  margin-left: ${rem('3px')};
  svg {
    width: ${rem('10px')};
    height: ${rem('10px')};
    float: left;
  }
`
