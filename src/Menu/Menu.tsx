import { StyleProps, styleComposition } from '../utils/styles'
import { withProperties } from '../utils'

import { MenuItem } from './MenuItem'

import styled from 'styled-components'

export interface MenuProps extends StyleProps {
  test: string
}

const MenuWrapper = styled.div<MenuProps>`
  ${styleComposition}
`

const Menu = withProperties(MenuWrapper, { Item: MenuItem })

export { Menu }
