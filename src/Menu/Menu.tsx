import { MenuItem } from './MenuItem'
import { MenuWrapper } from './styles'

import React, { FC } from 'react'

export type MenuProps = {
  inline?: boolean
  children?: React.ReactElement | React.ReactElement[]
}

type MenuFC<P> = FC<P> & {
  Item: FC<P>
}

const Menu: MenuFC<MenuProps> = ({ children, inline }) => {
  let childrenNode
  if (children) {
    if (Array.isArray(children)) {
      const childrenArray = children as React.ReactElement[]
      childrenNode = childrenArray.map(
        (child: React.ReactElement, idx: number) =>
          React.cloneElement(child, { inline: inline, key: idx })
      )
    } else {
      childrenNode = React.cloneElement(children, { inline: inline })
    }
  }

  return <MenuWrapper>{childrenNode}</MenuWrapper>
}

Menu.Item = MenuItem

export { Menu }
