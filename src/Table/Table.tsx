import { StyledTable } from './styles'

import React, { FC } from 'react'

export type TableProps = {
  // custom props here
}

const Table: FC<TableProps> = ({ children, ...props }) => {
  return <StyledTable {...props}>{children}</StyledTable>
}

export { Table }
