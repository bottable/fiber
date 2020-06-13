import { StyleProps, styleComposition } from '../utils/styles'

import { useMenu } from './useMenu'

import styled, { css } from 'styled-components'
import React, { FC, useState } from 'react'

export interface MenuItemProps extends StyleProps { }

const selectedItem = css`
  color: white;
  background: ${(props) => props.theme.colors.lightest};
  border-right: solid 3.5px ${(props) => props.theme.colors.light};
`
const BlockMenuItem = styled.li<any>`
  ${styleComposition}

  display: block;
  padding: 8px 10px;
  float: none;
  color: ${(props) => props.color};
  text-align: left;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.light};
    cursor: pointer;
  }

  ${(props) => props.selected ? selectedItem : null};
`

const InlineMenuItem = styled(BlockMenuItem) <any>`
  display: inline-block;
  float: left;
`

const MenuItem: FC<MenuItemProps> = ({ children, ...props }) => {
  const { inline } = useMenu()
  const [selected, setSelected] = useState<boolean>(false)

  const Item = inline ? InlineMenuItem : BlockMenuItem

  return <Item {...props} selected={selected} onClick={() => setSelected(!selected)}>{children}</Item>
}

export { MenuItem }
