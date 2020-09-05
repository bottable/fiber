import { Button as BaseButton } from '../Button'
import { Dropdown as BaseDropdown } from '../Dropdown'
import { Input as BaseInput } from '../Input'

import { ButtonProps } from './Pagination'

import styled from 'styled-components'

export const StyledPagination = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

export const PaginationItem = styled.li`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSizes.md};
  list-style: none;
  &:not(:last-child) {
    margin-right: ${({ theme }) => theme.margins.xs};
  }

  svg {
    vertical-align: middle;
  }
`

export const Button = styled(BaseButton)<ButtonProps>`
  border-color: ${({ selected, theme }) =>
    selected ? theme.colors.base : null};
  color: ${({ selected, theme }) => (selected ? theme.colors.base : null)};
`

export const Dropdown = styled(BaseDropdown)``

export const Input = styled(BaseInput)`
  width: ${({ theme }) => theme.space[4]};
  margin-left: ${({ theme }) => theme.margins.xs};
`
