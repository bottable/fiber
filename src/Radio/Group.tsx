import { StyledGroup } from './styles'

import React, { FC } from 'react'

export type GroupProps = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  value?: number
}

const Group: FC<GroupProps> = ({ children, ...props }) => {
  return <StyledGroup {...props}>{children}</StyledGroup>
}

export default Group
