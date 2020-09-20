import { Button as BaseButton } from '../Button'
import { Dropdown as BaseDropdown } from '../Dropdown'
import { Input as BaseInput } from '../Input'

import styled from 'styled-components'
import { rem } from 'polished'

type ButtonProps = {
  selected: boolean
}

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
  width: ${rem('40px')};
  border-color: ${({ selected, theme }) =>
    selected ? theme.colors.base : null};
  color: ${({ selected, theme }) => (selected ? theme.colors.base : null)};
  transition: color 0s, border-color 0s;
`

export const Dropdown = styled(BaseDropdown)``

export const Input = styled(BaseInput)`
  width: ${({ theme }) => theme.space[4]};
  margin-left: ${({ theme }) => theme.margins.xs};
`
