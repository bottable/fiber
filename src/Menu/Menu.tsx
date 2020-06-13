import { styleComposition } from '../utils/styles'

import { SubMenu } from './Submenu'
import { MenuItem } from './MenuItem'
import { MenuProps, MenuContext } from './useMenu'

import React, { FC } from 'react'
import styled from 'styled-components'

type MenuFC<P> = FC<P> & {
  Item: FC
  Sub: FC<any>
}

const MenuWrapper = styled.ul<MenuProps>`
  ${styleComposition}

  height: 100%;
  margin: 0;
  padding: 0;
  overflow: auto;
  list-style-type: none;
  border-right: solid 1px ${(props) => props.theme.colors.gray3};
`

const Menu: MenuFC<MenuProps> = ({ children, inline }) => {
  return (
    <MenuContext.Provider value={{ inline }}>
      <MenuWrapper>{children}</MenuWrapper>
    </MenuContext.Provider>
  )
}

Menu.Item = MenuItem
Menu.Sub = SubMenu

export { Menu }
