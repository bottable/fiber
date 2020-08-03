import { TagProps } from './Tag'

import styled from 'styled-components'
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
  border-color: ${({ theme }) => theme.colors.gray4};
  background: ${({ theme }) => theme.colors.gray2};
  color: ${({ theme }) => theme.colors.gray7};
  font-size: ${rem('12px')};
  line-height: ${rem('20px')};
  cursor: default;
  a {
    outline: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.gray7};
    text-decoration: none;
    cursor: pointer;
  }

  &:hover {
    opacity: 0.8;
  }
`

export const IconContainer = styled.span`
  display: inline-block;
  width: ${rem('10px')};
  height: ${rem('10px')};
  margin-left: ${rem('3px')};
  color: ${({ theme }) => theme.colors.gray7};
  font-size: ${rem('10px')};
  vertical-align: middle;
  cursor: pointer;
  svg {
    width: ${rem('10px')};
    height: ${rem('10px')};
    float: left;
  }
`
