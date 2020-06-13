import { StyleProps } from '../utils/styles'

import { createContext, useContext } from 'react'

export interface MenuProps extends StyleProps {
  inline?: boolean
}

export const MenuContext = createContext<MenuProps>({
  inline: true
})

export const useMenu = () => useContext(MenuContext)
