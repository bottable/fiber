import { MenuWrapper } from './styles'
import Item, { ItemProps } from './Item'

import React, { FC } from 'react'

export type MenuProps = {
  inline?: boolean
  children?: React.ReactElement | React.ReactElement[]
  collapse?: () => void
}

type MenuFC<P> = FC<P> & {
  Item: React.FC<ItemProps>
}

const Menu: MenuFC<MenuProps> = ({ children, inline, collapse }) => {
  let childrenNode
  if (children) {
    if (Array.isArray(children)) {
      const childrenArray = children as React.ReactElement[]
      childrenNode = childrenArray.map(
        (child: React.ReactElement, idx: number) =>
          React.cloneElement(child, {
            inline: inline,
            collapse: collapse,
            key: idx
          })
      )
    } else {
      childrenNode = React.cloneElement(children, {
        inline: inline,
        collapse: collapse
      })
    }
  }

  return <MenuWrapper>{childrenNode}</MenuWrapper>
}

Menu.Item = Item

export { Menu }
