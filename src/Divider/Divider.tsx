import { MergeElementProps } from '../utils'
import { Text } from '../Typography'

import { DividerWrapper } from './styles'

import React, { ReactNode, FC } from 'react'

export type DividerProps = MergeElementProps<
  'div',
  {
    type?: 'horizontal' | 'vertical'
    orientation?: 'left' | 'center' | 'right'
    children?: ReactNode
    dashed?: boolean
    fontSize?: number
  }
>

const Divider: FC<DividerProps> = (props) => {
  const { type, children } = props
  const isVertical = type === 'vertical'

  return (
    <DividerWrapper withText={!!children} {...props}>
      <Text {...props}>{!isVertical && children}</Text>
    </DividerWrapper>
  )
}

Divider.defaultProps = {
  type: 'horizontal',
  dashed: false,
  orientation: 'center'
}

export { Divider }
