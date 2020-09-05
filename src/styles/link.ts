import { css } from 'styled-components'

export const link = css`
  a {
    outline: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.base};
    text-decoration: none;
    cursor: pointer;
    ${({ theme }) => theme.transition}

    &:hover {
      color: ${({ theme }) => theme.colors.light};
    }
  }
`
