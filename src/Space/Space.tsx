import { StyledBlock } from './styles'

import toArray from 'rc-util/lib/Children/toArray'
import { SpaceProps, HeightProps } from 'styled-system'
import React, { FC } from 'react'

export interface SpaceComponentProps extends HeightProps, SpaceProps {
  size?: 'small' | 'middle' | 'large'
  direction?: 'horizontal' | 'vertical'
  align?: 'start' | 'end' | 'center' | 'baseline'
}

export const Space: FC<SpaceComponentProps> = ({ children, ...props }) => {
  const items = toArray(children)
  const len = items.length

  if (len === 0) {
    return null
  }

  return (
    <StyledBlock {...props}>
      {items.map((child, i) => (
        <StyledBlock {...props} key={i}>
          {child}
        </StyledBlock>
      ))}
    </StyledBlock>
  )
}
