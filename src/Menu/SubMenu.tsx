import { StyleProps } from '../utils/styles'

import { Arrow, TitleWrapper, SubMenuWrapper, ItemWrapper } from './styles'

import React, { FC, ReactElement, useState } from 'react'

export type TitleFunc = () => React.ReactElement

export interface SubMenuProps extends StyleProps {
  title: ReactElement | TitleFunc;
}

const SubMenu: FC<SubMenuProps> = ({ children, title }) => {
  const [expand, setExpand] = useState<boolean>(false)

  const titleNode = typeof title === 'function' ? (title as TitleFunc)() : title

  return (
    <SubMenuWrapper>
      <TitleWrapper expand={expand} onClick={() => setExpand(!expand)}>
        {titleNode}
        <Arrow expand={expand} />
      </TitleWrapper>
      <ItemWrapper>
        {expand ? children : null}
      </ItemWrapper>
    </SubMenuWrapper>
  )
}

export { SubMenu }
