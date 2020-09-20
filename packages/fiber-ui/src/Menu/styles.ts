import { MenuProps } from './Menu'
import { ItemProps } from './Item'

import styled from 'styled-components'

export const MenuWrapper = styled.ul<MenuProps>`
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: auto;
  list-style-type: none;
`

export const StyledItem = styled.li<ItemProps>`
  display: ${({ inline }) => (inline ? 'inline-block' : 'block')};
  padding: ${({ theme }) => `${theme.paddings.xs} ${theme.paddings.sm}`};
  float: none;
  color: ${({ danger, disabled, theme }) =>
    disabled
      ? theme.colors.gray6
      : danger
      ? theme.colors.danger
      : theme.colors.gray7};
  text-align: left;
  text-decoration: none;
  a {
    color: inherit;
    text-decoration: inherit;
    cursor: auto;
  }

  &:hover {
    background: ${({ disabled, theme }) =>
      disabled ? null : theme.colors.gray4};
  }

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`
