import { MergeElementProps } from '../utils'
import { Size } from '../types'

import { StyledBlock, StyledChildDiv } from './styles'

import toArray from 'rc-util/lib/Children/toArray'
import React, { FC } from 'react'

export type SpaceProps = MergeElementProps<
  'div',
  {
    size?: Size | number
    direction?: 'horizontal' | 'vertical'
    align?: 'start' | 'end' | 'center' | 'baseline'
    style?: React.CSSProperties & object
  }
>

const Space: FC<SpaceProps> = ({ children, style, ...props }) => {
  const items = toArray(children)
  const len = items.length

  if (len === 0) {
    return null
  }

  return (
    <StyledBlock style={style} {...props}>
      {items.map((child, idx) => {
        return (
          <StyledChildDiv
            key={idx}
            style={child.props && child.props.style}
            {...props}
          >
            {child}
          </StyledChildDiv>
        )
      })}
    </StyledBlock>
  )
}

Space.defaultProps = {
  size: 'md',
  direction: 'horizontal'
}

export { Space }
