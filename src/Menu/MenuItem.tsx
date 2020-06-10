import { StyleProps, styleComposition } from '../utils/styles'

import styled from 'styled-components'

export interface MenuItemProps extends StyleProps {}

const MenuItem = styled.a<MenuItemProps>`
  ${styleComposition}

  display: block;
  padding: 8px 10px;
  float: none;
  color: black;
  text-align: left;
  text-decoration: none;
`

export { MenuItem }
