import { StyledPagination } from './styles'

import React, { FC } from 'react'

export type PaginationProps = {
  // custom props here
}

const Pagination: FC<PaginationProps> = ({ children, ...props }) => {
  return <StyledPagination {...props}>{children}</StyledPagination>
}

export { Pagination }
