import { Radio } from '../Radio'
import { Checkbox } from '../Checkbox'
import { useGroup } from '../hooks'

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
  TableCellBodySelector
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
}

const Table: FC<TableProps> = ({ columns, dataSource, rowSelection }) => {
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

  const tableBodyNode = (
    <TableBody onChange={handleSelectionChange}>
      {dataSource.map((record, idx) => {
        let checkboxProps
        if (rowSelection && rowSelection.getCheckboxProps) {
          checkboxProps = rowSelection.getCheckboxProps(record)
        }
        return (
          <TableRow key={idx}>
            {rowSelection ? (
              <TableCellBodySelector>
                <SelectorElement
                  checked={
                    type === 'radio'
                      ? selection === record.key
                      : selection.includes(record.key)
                  }
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
      })}
    </TableBody>
  )

  return (
    <Wrapper>
      <ContentContainer>
        <StyledTable>
          {tableHeadNode}
          {tableBodyNode}
        </StyledTable>
      </ContentContainer>
    </Wrapper>
  )
}

export { Table }
