import { Radio } from '../Radio'
import { Checkbox } from '../Checkbox'

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
  dataSource: object[]
  rowSelection?: {
    type?: 'checkbox' | 'radio'
  }
}

const Table: FC<TableProps> = ({
  columns,
  dataSource,
  rowSelection,
  ...props
}) => {
  let SelectorElement: any

  if (rowSelection) {
    const type = rowSelection.type || 'checkbox'
    SelectorElement = type === 'radio' ? Radio : Checkbox
  }

  const tableHeadNode = (
    <TableHead>
      <tr>
        {SelectorElement ? (
          <TableCellHeadSelector>
            {SelectorElement === Checkbox ? <SelectorElement /> : null}
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
            {SelectorElement ? (
              <TableCellBodySelector>
                <SelectorElement />
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
    <Wrapper {...props}>
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
