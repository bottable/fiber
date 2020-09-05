import { StyledPagination, PaginationItem, Button } from './styles'

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import React, { FC, useState } from 'react'

export type ButtonProps = {
  selected: boolean
}

export type PaginationProps = {
  defaultCurrent?: number
  defaultPageSize?: number
  total?: number
}

const Pagination: FC<PaginationProps> = ({
  defaultCurrent,
  defaultPageSize,
  total
}) => {
  const [current, setCurrent] = useState<number>(defaultCurrent || 0)

  const n = Math.ceil(total! / defaultPageSize!)

  const pageNumbersNode: React.ReactElement[] = []

  for (let i = 1; i <= n; i++) {
    pageNumbersNode.push(
      <PaginationItem
        onClick={() => {
          setCurrent(i)
        }}
      >
        <Button selected={current === i}>{i}</Button>
      </PaginationItem>
    )
  }

  return (
    <StyledPagination>
      <PaginationItem>
        <Button
          selected={false}
          icon={<NavigateBeforeIcon />}
          onClick={() => {
            setCurrent((prevCurrent) => prevCurrent - 1)
          }}
          disabled={current === 1}
        />
      </PaginationItem>
      {pageNumbersNode}
      <PaginationItem>
        <Button
          selected={false}
          icon={<NavigateNextIcon />}
          onClick={() => {
            setCurrent((prevCurrent) => prevCurrent + 1)
          }}
          disabled={current === n}
        />
      </PaginationItem>
    </StyledPagination>
  )
}

Pagination.defaultProps = {
  defaultPageSize: 10,
  total: 0
}

export { Pagination }
