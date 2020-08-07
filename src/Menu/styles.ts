import { MenuProps } from './Menu'
import { MenuItemProps } from './MenuItem'

import styled from 'styled-components'

export const MenuWrapper = styled.ul<MenuProps>`
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: auto;
  list-style-type: none;
`

export const StyledMenuItem = styled.li<MenuItemProps>`
  display: block;
  padding: 8px 10px;
  float: none;
  border: none;
  border-right: solid ${(props) => props.theme.colors.gray3} 0.5px;
  color: ${({ danger, theme }) =>
    danger ? theme.colors.danger : theme.colors.gray7};
  text-align: left;
  text-decoration: none;
  a {
    color: inherit;
    text-decoration: inherit;
  }

  &:hover {
    background: ${(props) => props.theme.colors.gray3};
    cursor: pointer;
  }
`
