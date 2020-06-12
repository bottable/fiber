import { StyleProps, styleComposition } from '../utils/styles'

import { useMenu } from './useMenu'

import styled from 'styled-components'
import React, { FC } from 'react'

export interface MenuItemProps extends StyleProps {}

const BlockMenuItem = styled.li<any>`
  ${styleComposition}

  display: block;
  padding: 8px 10px;
  float: none;
  border-right: solid ${(props) => props.theme.colors.gray3} 0.5px;
  color: ${(props) => props.color};

  text-align: left;
  text-decoration: none;

  &:hover {
    background: ${(props) => props.theme.colors.gray3};
    cursor: pointer;
  }
`

const InlineMenuItem = styled(BlockMenuItem)<any>`
  display: inline-block;
  float: left;
`

const MenuItem: FC<MenuItemProps> = ({ children, ...props }) => {
  const { inline } = useMenu()

  const Item = inline ? InlineMenuItem : BlockMenuItem

  return <Item {...props}>{children}</Item>
}

export { MenuItem }
