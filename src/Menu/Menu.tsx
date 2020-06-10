
import { StyleProps, styleComposition } from './styles'

import styled from 'styled-components'

export interface MenuProps extends StyleProps { }

const Menu = styled.div<MenuProps>`
  ${styleComposition}

  position: absolute;
  z-index: 999;
  min-width: 160px;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
`

export { Menu }
