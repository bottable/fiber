import { ReactNode } from 'react'
import styled, { css } from 'styled-components'

export interface DividerProps {
  type?: 'horizontal' | 'vertical'
  children?: ReactNode
}

const dividerStyle = css`
  width: 100%;
  min-width: 100%;
  margin: ${(p) => p.theme.space[3]} 0;
  color: ${(p) => p.theme.colors.gray3};
`

const dividerVariant = ({ type = 'horizontal' }: DividerProps) => {
  if (type === 'horizontal') {
    return css`
      display: flex;
      align-items: center;
      text-align: center;

      &::before,
      &::after {
        content: '';
        position: relative;
        top: 50%;
        width: 50%;
        border: 0;
        border-top: ${(p) => p.theme.border.md} ${(p) => p.theme.colors.gray3};
        transform: translateY(-50%);
      }
    `
  } else {
    return css`
      display: flex;
      flex-direction: column;
      height: 100%;

      & > * {
        display: none;
        color: 'green';
      }
    `
  }
}

const Divider = styled.div<DividerProps>`
  ${dividerStyle};
  ${dividerVariant};
`
export { Divider }
