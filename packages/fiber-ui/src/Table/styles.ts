import { link } from '../styles'
import { Pagination as BasePagination } from '../Pagination'

import { RowProps } from './Table'

import styled from 'styled-components'

export const Wrapper = styled.div`
  display: block;
  max-width: 100%;
`

export const ContentContainer = styled.div``

export const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0;
  border-collapse: separate;
  font-size: ${({ theme }) => theme.fontSizes.md};
  text-align: left;
`

export const TableHead = styled.thead``

export const TableBody = styled.tbody``

export const TableCellHead = styled.th`
  position: relative;
  padding: ${({ theme }) => theme.paddings.md};
  border-bottom: ${({ theme }) => theme.border.md};
  border-color: ${({ theme }) => theme.colors.gray4};
  background: ${({ theme }) => theme.colors.gray2};
  color: ${({ theme }) => theme.colors.gray8};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
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
    background: ${({ selected, theme }) =>
      selected ? theme.colors.lightest : theme.colors.gray2};
  }
`

export const TableCellBody = styled.td`
  position: relative;
  padding: ${({ theme }) => theme.paddings.md};
  border-bottom: ${({ theme }) => theme.border.md};
  border-color: ${({ theme }) => theme.colors.gray4};
  overflow-wrap: break-word;

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
