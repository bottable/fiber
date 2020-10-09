import { Menu } from '../Menu'
import { useControl } from '../hooks'

import {
  StyledPagination,
  PaginationItem,
  Button,
  Dropdown,
  Input
} from './styles'

import {
  MdNavigateBefore,
  MdNavigateNext,
  MdMoreHoriz,
  MdExpandMore
} from 'react-icons/md'
import React, { FC, useState } from 'react'

export type PaginationProps = {
  current?: number
  pageSize?: number
  defaultCurrent?: number
  defaultPageSize?: number
  total?: number
  pageSizeOptions?: number[]
  showQuickJumper?: boolean
  showSizeChanger?: boolean
  onChange?: (current: number) => void
  onShowSizeChange?: (size: number) => void
  showTotal?: (total: number, range: [number, number]) => string
  hideOnSinglePage?: boolean
}

const Pagination: FC<PaginationProps> = ({
  current: currentProps,
  pageSize: pageSizeProps,
  defaultCurrent,
  defaultPageSize,
  total,
  pageSizeOptions,
  showQuickJumper,
  showSizeChanger,
  onChange,
  onShowSizeChange,
  showTotal,
  hideOnSinglePage,
  ...props
}) => {
  const [jumper, setJumper] = useState<string>('')

  const { value: current, setValue: setCurrent } = useControl({
    value: currentProps,
    defaultValue: defaultCurrent,
    onChange: onChange as (newValue: unknown) => unknown
  }) as { value: number; setValue: (newValue: number) => void }

  const { value: pageSize, setValue: setPageSize } = useControl({
    value: pageSizeProps,
    defaultValue: defaultPageSize,
    onChange: onShowSizeChange as (newValue: unknown) => unknown
  }) as { value: number; setValue: (newValue: number) => void }

  const n = Math.ceil(total! / pageSize)

  if (n === 1 && hideOnSinglePage) return null

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
        <MdMoreHoriz />
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
        <MdMoreHoriz />
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
        endIcon={<MdExpandMore />}
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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setJumper(e.target.value)
        }}
        onPressEnter={onEnterJumper}
      />
    </PaginationItem>
  ) : null

  const totalNode = showTotal ? (
    <PaginationItem>
      {showTotal(total!, [
        (current - 1) * pageSize + 1,
        Math.min(total!, current * pageSize)
      ])}
    </PaginationItem>
  ) : null

  return (
    <StyledPagination {...props}>
      {totalNode}
      <PaginationItem>
        <Button
          selected={false}
          icon={<MdNavigateBefore />}
          onClick={() => {
            setCurrent(current - 1)
          }}
          disabled={current === 1}
        />
      </PaginationItem>
      {pageNumbersNode}
      <PaginationItem>
        <Button
          selected={false}
          icon={<MdNavigateNext />}
          onClick={() => {
            setCurrent(current + 1)
          }}
          disabled={current === n}
        />
      </PaginationItem>
      {total! > 50 || showSizeChanger ? pageSizeDropdownNode : null}
      {jumperNode}
    </StyledPagination>
  )
}

Pagination.defaultProps = {
  defaultPageSize: 10,
  defaultCurrent: 1,
  total: 0,
  pageSizeOptions: [10, 20, 50, 100]
}

export { Pagination }
