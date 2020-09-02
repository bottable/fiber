import { link } from '../styles'

import { TableProps } from './Table'

import styled from 'styled-components'

export const Wrapper = styled.div<TableProps>``

export const ContentContainer = styled.div<TableProps>``

export const StyledTable = styled.table<TableProps>`
  width: 100%;
  border-spacing: 0;
  border-collapse: separate;
  text-align: left;
`

export const TableHead = styled.thead<TableProps>``

export const TableBody = styled.tbody<TableProps>``

export const TableCellHead = styled.th<TableProps>`
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

export const TableRow = styled.tr<TableProps>`
  ${({ theme }) => theme.transition}

  &:hover {
    background: ${({ theme }) => theme.colors.gray2};
  }
`

export const TableCellBody = styled.td<TableProps>`
  position: relative;
  padding: ${({ theme }) => theme.paddings.md};
  border-bottom: ${({ theme }) => theme.border.md};
  border-color: ${({ theme }) => theme.colors.gray4};
  overflow-wrap: break-word;

  ${link}
`
