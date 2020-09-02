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
  render?: (rawData: any, dataItem: object) => React.ReactNode
}

export type TableProps = {
  columns: columnItem[]
  dataSource: {
    key: string
  }[]
  rowSelection?: {
    type?: 'checkbox' | 'radio'
  }
}

const Table: FC<TableProps> = ({ columns, dataSource, rowSelection }) => {
  let SelectorElement: any

  const {
    value: selection,
    setValue: setSelection,
    handleChange: handleSelectionChange
  } = useGroup({
    type: (rowSelection && rowSelection.type) || 'checkbox'
  })

  const handleSelectionHeaderChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.checked) {
      setSelection(dataSource.map(({ key }) => key))
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
              <SelectorElement
                onChange={handleSelectionHeaderChange}
                value='head'
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
    <TableBody>
      {dataSource.map((dataItem, idx) => {
        return (
          <TableRow key={idx}>
            {SelectorElement && rowSelection ? (
              <TableCellBodySelector>
                <SelectorElement
                  checked={
                    rowSelection.type === 'radio'
                      ? selection === dataItem.key
                      : selection.includes(dataItem.key)
                  }
                  value={dataItem.key}
                />
              </TableCellBodySelector>
            ) : null}
            {columns.map(({ dataIndex, render }, i) => {
              let dataNode
              if (render) {
                dataNode = render(dataItem[dataIndex], dataItem)
              } else dataNode = dataItem[dataIndex]

              return <TableCellBody key={i}>{dataNode}</TableCellBody>
            })}
          </TableRow>
        )
      })}
    </TableBody>
  )

  return (
    <Wrapper onChange={handleSelectionChange}>
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
