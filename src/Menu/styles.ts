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
  padding: 8px 10px;
  float: none;
  color: ${({ danger, theme }) =>
    danger ? theme.colors.danger : theme.colors.gray7};
  text-align: left;
  text-decoration: none;
  a {
    color: inherit;
    text-decoration: inherit;
  }

  &:hover {
    background: ${(props) => props.theme.colors.gray4};
    cursor: pointer;
  }
`
