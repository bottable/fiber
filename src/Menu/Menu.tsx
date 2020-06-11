import { StyleProps, styleComposition } from '../utils/styles'
import { withProperties } from '../utils'

import { MenuItem } from './MenuItem'

import styled from 'styled-components'

export interface MenuProps extends StyleProps {}

const MenuWrapper = styled.div<MenuProps>`
  ${styleComposition}

  position: absolute;
  z-index: 999;
  min-width: 160px;
  background-color: #f9f9f9;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
`

const Menu = withProperties(MenuWrapper, { Item: MenuItem })

export { Menu }
