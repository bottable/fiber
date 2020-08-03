import { TagProps } from './Tag'

import styled, { css } from 'styled-components'
import { rem } from 'polished'

export const StyledTag = styled.span<TagProps>`
  display: ${({ visible }) => (visible ? 'inline-block' : 'none')};
  box-sizing: border-box;
  height: auto;
  margin-right: ${rem('8px')};
  padding: ${`0 ${rem('7px')}`};
  border-width: ${rem('1px')};
  border-style: solid;
  border-radius: ${rem('2px')};
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
      : theme.colors.gray2};
  color: ${({ color, theme }) =>
    color
      ? !theme.colors[color]
        ? '#fff'
        : theme.colors[color].base
      : theme.colors.gray7};
  font-size: ${rem('12px')};
  line-height: ${rem('20px')};
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
