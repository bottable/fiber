import { Radio } from '../Radio'
import { Checkbox } from '../Checkbox'
import { useGroup } from '../hooks'
import { PaginationProps } from '../Pagination'

import {
  Wrapper,
  ContentContainer,
  StyledTable,
  TableHead,
  TableBody,
  TableRow,
  TableCellHead,
  TableCellBody,
  TableCellHeadSelector,
  TableCellBodySelector,
  Pagination
} from './styles'

import React, { FC, useState } from 'react'

type column = {
  title: string
  dataIndex: string
  render?: (text: any, record: object) => React.ReactNode
}

export type TableProps = {
  columns: column[]
  dataSource: {
    key: string
  }[]
  rowSelection?: {
    type?: 'checkbox' | 'radio'
    getCheckboxProps?: (
      record: object
    ) => {
      disabled?: boolean
    }
    onChange?: (selectedRowKeys: string[], selectedRows: object[]) => void
    selectedRowKeys?: string[]
  }
  pagination?: PaginationProps
}

export type RowProps = {
  selected?: boolean
}

const Table: FC<TableProps> = ({
  columns,
  dataSource,
  rowSelection,
  pagination
}) => {
  let SelectorElement: typeof Radio | typeof Checkbox
  let type: 'checkbox' | 'radio'

  if (rowSelection) {
    type = rowSelection.type === 'radio' ? 'radio' : 'checkbox'
    SelectorElement = type === 'radio' ? Radio : Checkbox
  }

  const getEnabledRows = () =>
    dataSource.filter((record) => {
      if (!rowSelection || !rowSelection.getCheckboxProps) {
        return true
      }
      const checkboxProps = rowSelection.getCheckboxProps(record)
      if (checkboxProps.disabled) {
        return false
      } else {
        return true
      }
    })

  const handleChange = (e: any) => {
    if (!rowSelection || !rowSelection.onChange) return
    const selectedRowKeys = type === 'radio' ? [e.target.value] : e
    const selectedRows = dataSource.filter(({ key }) =>
      selectedRowKeys.includes(key)
    )
    rowSelection.onChange(selectedRowKeys, selectedRows)

    const enabledRows = getEnabledRows()
    if (selectedRows.length >= enabledRows.length) setSelectionHeader(true)
    else setSelectionHeader(false)
  }

  const handleSelectionHeaderChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectionHeader(e.target.checked)

    if (e.target.checked) {
      const enabledRows = getEnabledRows()
      setSelection(enabledRows.map(({ key }) => key))
    } else setSelection([])
  }

  const {
    value: selection,
    setValue: setSelection,
    handleChange: handleSelectionChange
  } = useGroup({
    onChange: handleChange,
    value:
      rowSelection && rowSelection.selectedRowKeys
        ? type! === 'radio'
          ? rowSelection.selectedRowKeys[0]
          : rowSelection.selectedRowKeys
        : undefined,
    type: type!
  })

  const [selectionHeader, setSelectionHeader] = useState<boolean>(false)
  const [page, setPage] = useState<number>(
    (pagination && pagination.defaultCurrent) || 1
  )
  const [pageSize, setPageSize] = useState<number>(
    (pagination && pagination.defaultPageSize) || 10
  )

  const handlePageChange = (page: number, pageSize: number) => {
    setPage(page)
    setPageSize(pageSize)
    if (pagination && pagination.onChange) pagination.onChange(page, pageSize)
  }

  const tableHeadNode = (
    <TableHead>
      <tr>
        {rowSelection ? (
          <TableCellHeadSelector>
            {SelectorElement! === Checkbox ? (
              <SelectorElement
                onChange={handleSelectionHeaderChange}
                checked={selectionHeader}
              />
            ) : null}
          </TableCellHeadSelector>
        ) : null}
        {columns.map(({ title }, idx) => {
          return <TableCellHead key={idx}>{title}</TableCellHead>
        })}
      </tr>
    </TableHead>
  )

  const pageRecords: React.ReactElement[] = []
  for (
    let idx = (page - 1) * pageSize;
    idx < Math.min(page * pageSize, dataSource.length);
    idx++
  ) {
    const record = dataSource[idx]
    let checkboxProps
    if (rowSelection && rowSelection.getCheckboxProps) {
      checkboxProps = rowSelection.getCheckboxProps(record)
    }
    const checked = rowSelection
      ? type! === 'radio'
        ? selection === record.key
        : selection.includes(record.key)
      : undefined
    pageRecords.push(
      <TableRow key={idx} selected={checked}>
        {SelectorElement! === Checkbox || SelectorElement! === Radio ? (
          <TableCellBodySelector>
            <SelectorElement
              checked={checked}
              {...checkboxProps}
              value={record.key}
            />
          </TableCellBodySelector>
        ) : null}
        {columns.map(({ dataIndex, render }, i) => {
          let dataNode
          if (render) {
            dataNode = render(record[dataIndex], record)
          } else dataNode = record[dataIndex]
          return <TableCellBody key={i}>{dataNode}</TableCellBody>
        })}
      </TableRow>
    )
  }

  const tableBodyNode = (
    <TableBody onChange={handleSelectionChange}>{pageRecords}</TableBody>
  )

  const paginationNode = (
    <Pagination
      total={dataSource.length}
      onChange={handlePageChange}
      {...pagination}
    />
  )

  return (
    <Wrapper>
      <ContentContainer>
        <StyledTable>
          {tableHeadNode}
          {tableBodyNode}
        </StyledTable>
      </ContentContainer>
      {paginationNode}
    </Wrapper>
  )
}

export { Table }
