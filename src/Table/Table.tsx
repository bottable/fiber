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

import React, { FC } from 'react'

type columnItem = {
  title: string
  dataIndex: string
  render?: (text: any, record: object) => React.ReactNode
}

export type TableProps = {
  columns: columnItem[]
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
  }
}

const Table: FC<TableProps> = ({ columns, dataSource, rowSelection }) => {
  let SelectorElement: any

  const handleChange = (e: any) => {
    if (!rowSelection || !rowSelection.onChange) return
    const selectedRowKeys = rowSelection.type === 'radio' ? [e.target.value] : e
    const selectedRows = dataSource.filter(({ key }) =>
      selectedRowKeys.includes(key)
    )
    rowSelection.onChange(selectedRowKeys, selectedRows)
  }

  const {
    value: selection,
    setValue: setSelection,
    handleChange: handleSelectionChange
  } = useGroup({
    type: (rowSelection && rowSelection.type) || 'checkbox',
    onChange: handleChange
  })

  const handleSelectionHeaderChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.checked) {
      const enabledRecords = dataSource.filter((record) => {
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
      setSelection(enabledRecords.map(({ key }) => key))
    } else setSelection([])
  }

  if (rowSelection) {
    const type = rowSelection.type || 'checkbox'
    SelectorElement = type === 'radio' ? Radio : Checkbox
  }

  const tableHeadNode = (
    <TableHead>
      <tr>
        {SelectorElement ? (
          <TableCellHeadSelector>
            {SelectorElement === Checkbox ? (
              <SelectorElement onChange={handleSelectionHeaderChange} />
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
            {SelectorElement && rowSelection ? (
              <TableCellBodySelector>
                <SelectorElement
                  checked={
                    rowSelection.type === 'radio'
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
