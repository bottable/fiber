import { Menu } from '../Menu'

import {
  StyledPagination,
  PaginationItem,
  Button,
  Dropdown,
  Input
} from './styles'

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import React, { FC, useState } from 'react'

export type ButtonProps = {
  selected: boolean
}

export type PaginationProps = {
  defaultCurrent?: number
  defaultPageSize?: number
  total?: number
  pageSizeOptions?: number[]
  showQuickJumper?: boolean
}

const Pagination: FC<PaginationProps> = ({
  defaultCurrent,
  defaultPageSize,
  total,
  pageSizeOptions,
  showQuickJumper
}) => {
  const [pageSize, setPageSize] = useState<number>(defaultPageSize!)
  const [current, setCurrent] = useState<number>(defaultCurrent || 0)
  const [jumper, setJumper] = useState<string>('')

  const n = Math.ceil(total! / pageSize)
  const more = n >= 8

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
      <PaginationItem key='1'>
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
      <PaginationItem key='ellipsis1'>
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
        key={i.toString()}
      >
        <Button selected={current === i}>{i}</Button>
      </PaginationItem>
    )
  }

  if (n - range[1] > 1) {
    pageNumbersNode.push(
      <PaginationItem key='ellipsis2'>
        <MoreHorizIcon />
      </PaginationItem>
    )
  }
  if (n - range[1] > 0) {
    pageNumbersNode.push(
      <PaginationItem key={n.toString()}>
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

  const pageSizeDropdownMenu = (
    <Menu>
      {pageSizeOptions?.map((pageSizeOption, idx) => (
        <Menu.Item
          key={idx}
          onClick={() => {
            setPageSize(pageSizeOption)
          }}
        >
          {pageSizeOption} / Page
        </Menu.Item>
      ))}
    </Menu>
  )

  const pageSizeDropdownNode = (
    <PaginationItem>
      <Dropdown.Button
        endIcon={<ExpandMoreIcon />}
        overlay={pageSizeDropdownMenu}
      >
        {pageSize} / Page
      </Dropdown.Button>
    </PaginationItem>
  )

  const onEnterJumper = () => {
    if (/^\d+$/.test(jumper) && +jumper >= 1 && +jumper <= n) {
      setCurrent(+jumper)
    }
    setJumper('')
  }

  const jumperNode = showQuickJumper ? (
    <PaginationItem>
      Go to
      <Input
        value={jumper}
        onChange={(e) => {
          setJumper(e.target.value)
        }}
        onPressEnter={onEnterJumper}
      />
    </PaginationItem>
  ) : null

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
      {total! > 50 ? pageSizeDropdownNode : null}
      {jumperNode}
    </StyledPagination>
  )
}

Pagination.defaultProps = {
  defaultPageSize: 10,
  total: 0,
  pageSizeOptions: [10, 20, 50, 100]
}

export { Pagination }
