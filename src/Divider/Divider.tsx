import React, { ReactNode, FC } from 'react'
import styled, { css } from 'styled-components'

export interface DividerProps {
  type?: 'horizontal' | 'vertical'
  children?: ReactNode
  dashed?: boolean
}

const dividerStyle = css`
  border-color: ${(p) => p.theme.colors.gray3};
  color: ${(p) => p.theme.colors.gray3};
`

const dividerVariant = ({
  type = 'horizontal',
  dashed = false
}: DividerProps) => {
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
        margin: ${(p) => p.theme.space[3]} ${(p) => p.theme.space[2]};
        border: 0;
        border-top: ${(p) =>
          dashed ? p.theme.border.dashed : p.theme.border.md};
        transform: translateY(-50%);
      }
    `
  } else {
    return css`
      display: inline-block;
      position: relative;
      top: 50%;
      height: 90%;
      min-height: ${(p) => p.theme.heights.sm};
      margin: 0 ${(p) => p.theme.space[2]};
      border-right: ${(p) => p.theme.border.md};
      border-left: ${(p) => p.theme.border.md};
      background: ${(p) => p.theme.colors.gray3};
      vertical-align: middle;
    `
  }
}

const DividerWrapper = styled.div<DividerProps>`
  ${dividerStyle};
  ${dividerVariant};
`

const Divider: FC<DividerProps> = (props) => {
  const { type, children } = props
  const isVertical = type === 'vertical'

  return <DividerWrapper {...props}>{!isVertical && children}</DividerWrapper>
}

export { Divider }
