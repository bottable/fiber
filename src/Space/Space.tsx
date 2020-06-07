import { StyledBlock } from './styles'

import styled, { css } from 'styled-components'
import toArray from 'rc-util/lib/Children/toArray'
import React, { FC } from 'react'
import { rem } from 'polished'

export interface SpaceProps {
  size?: 'small' | 'middle' | 'large'
  direction?: 'horizontal' | 'vertical'
  align?: 'start' | 'end' | 'center' | 'baseline'
}

const spaceVariant = ({ size }: SpaceProps) => {
  let marginright = '10px'

  switch (size) {
    case 'small':
      marginright = '8px'
      break
    case 'middle':
      marginright = '16px'
      break
    case 'large':
      marginright = '24px'
      break
  }

  return css`
    display: inline-block;
    margin-right: ${rem(marginright)};
  `
}

const StyledChildDiv = styled.div<SpaceProps>`
  ${spaceVariant};
`

export const Space: FC<SpaceProps> = ({ children, size, ...props }) => {
  const items = toArray(children)
  const len = items.length

  if (len === 0) {
    return null
  }

  return (
    <StyledBlock {...props}>
      {items.map((child, i) => (
        <StyledChildDiv key={i} size={size}>
          {child}
        </StyledChildDiv>
      ))}
    </StyledBlock>
  )
}
