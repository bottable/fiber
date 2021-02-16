import { DividerProps } from './Divider'

import styled, { css } from 'styled-components'

export interface StyledDividerProps extends DividerProps {
  withText: boolean
}

const horizontalStyle = css<StyledDividerProps>`
  display: flex;
  align-items: center;
  text-align: center;

  &::before,
  &::after {
    content: '';
    position: relative;
    top: 50%;
    width: 50%;
    margin: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[2]};
    border: 0;
    border-top: ${({ dashed, theme }) =>
      dashed ? theme.border.dashed : theme.border.md};
    transform: translateY(-50%);
  }

  ${({ orientation, withText }) => {
    if (orientation === 'center' && withText) return

    return css`
      &::before {
        flex: ${orientation === 'left' ? undefined : 1};
        width: ${orientation === 'left' ? '5%' : undefined};
        ${!withText &&
        css`
          margin-right: 0;
        `}
      }

      &::after {
        flex: ${orientation === 'left' ? 1 : undefined};
        width: ${orientation === 'left' ? 'undefined' : '5%'};
        ${!withText &&
        css`
          margin-left: 0;
        `}
      }
    `
  }}
`

const verticalStyle = css`
  display: inline-block;
  position: relative;
  top: 50%;
  height: 90%;
  min-height: ${({ theme }) => theme.heights.sm};
  margin: 0 ${({ theme }) => theme.space[2]};
  border-right: ${({ theme }) => theme.border.md};
  border-left: ${({ theme }) => theme.border.md};
  background: ${({ theme }) => theme.colors.gray3};
  vertical-align: middle;
`

export const DividerWrapper = styled.div<StyledDividerProps>`
  border-color: ${({ theme }) => theme.colors.gray3};
  color: ${({ theme }) => theme.colors.gray3};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : null)};
  ${({ type }) => (type === 'horizontal' ? horizontalStyle : verticalStyle)};
`
