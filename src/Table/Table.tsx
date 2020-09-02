import {
  Wrapper,
  ContentContainer,
  StyledTable,
  TableHead,
  TableBody,
  TableRow,
  TableCellHead,
  TableCellBody
} from './styles'

import React, { FC } from 'react'

type columnItem = {
  title: string
  key: string
  dataIndex?: string
  render?: (rawData: any, dataItem: object) => React.ReactNode
}

export type TableProps = {
  columns?: columnItem[]
  dataSource?: object[]
}

const Table: FC<TableProps> = ({ columns, dataSource, ...props }) => {
  let tableHeadNode
  let tableBodyNode

  if (columns) {
    tableHeadNode = (
      <TableHead>
        <tr>
          {columns.map(({ title }, idx) => {
            return <TableCellHead key={idx}>{title}</TableCellHead>
          })}
        </tr>
      </TableHead>
    )
  }

  if (dataSource && columns) {
    tableBodyNode = (
      <TableBody>
        {dataSource.map((dataItem, idx) => {
          return (
            <TableRow key={idx}>
              {columns.map(({ key, render }, i) => {
                let dataNode
                if (render) {
                  dataNode = render(dataItem[key], dataItem)
                } else dataNode = dataItem[key]

                return <TableCellBody key={i}>{dataNode}</TableCellBody>
              })}
            </TableRow>
          )
        })}
      </TableBody>
    )
  }

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
