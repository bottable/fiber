import { Text } from '../Typography'

import React, { ReactNode, FC } from 'react'
import styled, { css } from 'styled-components'
import {
  compose,
  space,
  typography,
  SpaceProps,
  TypographyProps
} from 'styled-system'

export interface DividerProps extends SpaceProps, TypographyProps {
  type?: 'horizontal' | 'vertical'
  orientation?: 'left' | 'center' | 'right'
  children?: ReactNode
  dashed?: boolean
}

export interface StyledDividerProps extends DividerProps {
  withText: boolean
}

const dividerStyle = css`
  border-color: ${(p) => p.theme.colors.gray3};
  color: ${(p) => p.theme.colors.gray3};
`

const dividerVariant = ({
  withText,
  type = 'horizontal',
  dashed = false,
  orientation = 'center'
}: StyledDividerProps) => {
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

      ${() => {
        if (orientation === 'center' && withText) return

        return css`
          &::before {
            flex: ${orientation === 'left' ? undefined : 1};
            width: ${orientation === 'left' ? '5%' : undefined};
            margin-right: 0;
          }

          &::after {
            flex: ${orientation === 'left' ? 1 : undefined};
            width: ${orientation === 'left' ? 'undefined' : '5%'};
            margin-left: 0;
          }
        `
      }}
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

const DividerWrapper = styled.div<StyledDividerProps>`
  ${dividerStyle};
  ${dividerVariant};
  ${compose(space, typography)}
`

const Divider: FC<DividerProps> = (props) => {
  const { type, children } = props
  const isVertical = type === 'vertical'

  return (
    <DividerWrapper withText={!!children} {...props}>
      <Text {...props}>{!isVertical && children}</Text>
    </DividerWrapper>
  )
}

export { Divider }
