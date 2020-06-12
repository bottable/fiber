import { styleComposition } from '../utils/styles'

import { MenuItem } from './MenuItem'
import { MenuProps, MenuContext } from './useMenu'

import React, { FC } from 'react'
import styled from 'styled-components'

type MenuFC<P> = FC<P> & {
  Item: FC
}

const MenuWrapper = styled.ul<MenuProps>`
  ${styleComposition}

  height: 100%;
  margin: 0;
  padding: 0;
  overflow: auto;
  list-style-type: none;
`

const Menu: MenuFC<MenuProps> = ({ children, inline }) => {
  return (
    <MenuContext.Provider value={{ inline }}>
      <MenuWrapper>{children}</MenuWrapper>
    </MenuContext.Provider>
  )
}

Menu.Item = MenuItem

export { Menu }
