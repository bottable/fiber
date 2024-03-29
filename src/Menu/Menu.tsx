import { MergeElementProps } from '../utils'

import { MenuWrapper } from './styles'
import Item, { ItemProps } from './Item'

import React, { FC } from 'react'

export type MenuProps = MergeElementProps<
  'ul',
  {
    inline?: boolean
    children?: React.ReactElement | React.ReactElement[]
    collapse?: () => void
    style?: React.CSSProperties & object
  }
>

type MenuFC<P> = FC<P> & {
  Item: React.FC<ItemProps>
}

const Menu: MenuFC<MenuProps> = ({
  children,
  inline,
  collapse,
  style,
  ...props
}) => {
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

  return (
    <MenuWrapper style={style} {...props}>
      {childrenNode}
    </MenuWrapper>
  )
}

Menu.Item = Item

export { Menu }
