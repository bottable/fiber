import { Button as BaseButton } from '../Button'

import { ButtonProps } from './Pagination'

import styled from 'styled-components'

export const StyledPagination = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

export const PaginationItem = styled.li`
  display: inline-block;
  list-style: none;
  &:not(:last-child) {
    margin-right: ${({ theme }) => theme.margins.xs};
  }
`

export const Button = styled(BaseButton)<ButtonProps>`
  border-color: ${({ selected, theme }) =>
    selected ? theme.colors.base : null};
  color: ${({ selected, theme }) => (selected ? theme.colors.base : null)};
`
