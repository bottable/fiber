import { link } from '../styles'
import { Pagination as BasePagination } from '../Pagination'

import { RowProps, CellProps } from './Table'

import styled, { css } from 'styled-components'

const ellipsisStyle = css`
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: keep-all;
  white-space: nowrap;
`

export const Wrapper = styled.div`
  display: block;
  max-width: 100%;
`

export const ContentContainer = styled.div``

type TableStyleProps = {
  fixed?: boolean
}

export const StyledTable = styled.table<TableStyleProps>`
  display: table;
  width: 100%;
  table-layout: ${({ fixed }) => (fixed ? 'fixed' : 'auto')};
  border-spacing: 0;
  border-collapse: collapse;
  font-size: ${({ theme }) => theme.fontSizes.md};
  text-align: left;
`

export const TableHead = styled.thead``

export const TableBody = styled.tbody``

export const TableCellHead = styled.th`
  position: relative;
  padding: ${({ theme }) => `${theme.paddings.sm} ${theme.paddings.md}`};
  border: ${({ theme }) => theme.border.md};
  border-color: ${({ theme }) => theme.colors.gray4};
  color: ${({ theme }) => theme.colors.gray6};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: left;
  overflow-wrap: break-word;

  &:first-child {
    border-top-left-radius: ${({ theme }) => theme.radii.md};
  }

  &:last-child {
    border-top-right-radius: ${({ theme }) => theme.radii.md};
  }
`

export const TableRow = styled.tr<RowProps>`
  ${({ theme }) => theme.transition}

  background: ${({ selected, theme }) =>
    selected ? theme.colors.lightest : null};

  &:hover {
    background: ${({ selected, hover, theme }) =>
      selected ? theme.colors.lightest : hover ? theme.colors.gray2 : null};
  }
`

export const TableCellBody = styled.td<CellProps>`
  position: relative;
  padding: ${({ theme }) => `${theme.paddings.sm} ${theme.paddings.md}`};
  border: ${({ theme }) => theme.border.md};
  border-color: ${({ theme }) => theme.colors.gray4};
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};
  overflow-wrap: break-word;

  ${({ ellipsis }) => (ellipsis ? ellipsisStyle : null)};

  &:hover {
    background: ${({ selected, theme }) =>
      selected ? theme.colors.lightest : theme.colors.gray2};
  }

  ${link}
`

export const TableCellHeadSelector = styled(TableCellHead)`
  padding-right: ${({ theme }) => theme.paddings.xs};
  padding-left: ${({ theme }) => theme.paddings.xs};
  text-align: center;
`

export const TableCellBodySelector = styled(TableCellBody)`
  padding-right: ${({ theme }) => theme.paddings.xs};
  padding-left: ${({ theme }) => theme.paddings.xs};
  text-align: center;
`

export const PaginationWrapper = styled.div`
  display: block;
  margin-top: ${({ theme }) => theme.margins.xs};
  margin-bottom: ${({ theme }) => theme.margins.xs};
  float: right;
`

export const Pagination = styled(BasePagination)`
  margin-top: ${({ theme }) => theme.margins.xs};
  margin-bottom: ${({ theme }) => theme.margins.xs};
`
