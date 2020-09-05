import { StyledPagination, PaginationItem, Button } from './styles'

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
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
  const n = Math.ceil(total! / defaultPageSize!)
  const more = n >= 8

  const [current, setCurrent] = useState<number>(defaultCurrent || 0)

  const getRange: () => [number, number] = () => {
    if (!more) return [1, n]

    if (current <= 3) return [1, 5]
    else if (current >= n - 2) return [n - 4, n]
    return [current - 2, current + 2]
  }

  const range = getRange()

  const pageNumbersNode: React.ReactElement[] = []

  if (range[0] - 1 > 0) {
    pageNumbersNode.push(
      <PaginationItem>
        <Button
          selected={false}
          onClick={() => {
            setCurrent(1)
          }}
        >
          1
        </Button>
      </PaginationItem>
    )
  }
  if (range[0] - 1 > 1) {
    pageNumbersNode.push(
      <PaginationItem>
        <MoreHorizIcon />
      </PaginationItem>
    )
  }

  for (let i = range[0]; i <= range[1]; i++) {
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

  if (n - range[1] > 1) {
    pageNumbersNode.push(
      <PaginationItem>
        <MoreHorizIcon />
      </PaginationItem>
    )
  }
  if (n - range[1] > 0) {
    pageNumbersNode.push(
      <PaginationItem>
        <Button
          selected={false}
          onClick={() => {
            setCurrent(n)
          }}
        >
          {n}
        </Button>
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
