import { StyleProps } from '../utils/styles'

import { StyledDropdown } from './styles'

import React, { FC } from 'react'

export interface DropdownProps extends StyleProps {
  // custom props here
}

const Dropdown: FC<DropdownProps> = ({ children, ...props }) => {
  return <StyledDropdown {...props}>{children}</StyledDropdown>
}

export { Dropdown }
