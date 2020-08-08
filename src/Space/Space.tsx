import { StyledBlock } from './styles'

import styled, { css } from 'styled-components'
import toArray from 'rc-util/lib/Children/toArray'
import React, { FC } from 'react'
import { rem } from 'polished'

export interface SpaceProps {
  size?: 'sm' | 'md' | 'lg' | number
  direction?: 'horizontal' | 'vertical'
  align?: 'start' | 'end' | 'center' | 'baseline'
}

const spaceVariant = ({
  size = 'sm',
  direction = 'horizontal'
}: SpaceProps) => {
  let margin = '8px'

  if (typeof size === 'number') {
    margin = `${size}px`
  } else {
    switch (size) {
      case 'sm':
        margin = '8px'
        break
      case 'md':
        margin = '16px'
        break
      case 'lg':
        margin = '24px'
        break
    }
  }

  let cssMargin

  if (direction === 'vertical') {
    cssMargin = css`
      margin-bottom: ${rem(margin)};
    `
  } else {
    cssMargin = css`
      margin-right: ${rem(margin)};
    `
  }

  return css`
    display: inline-block;
    ${cssMargin}
  `
}

const StyledChildDiv = styled.div<SpaceProps>`
  ${spaceVariant};
`

export const Space: FC<SpaceProps> = ({ children, ...props }) => {
  const items = toArray(children)
  const len = items.length

  if (len === 0) {
    return null
  }

  return (
    <StyledBlock {...props}>
      {items.map((child, idx) => {
        const style: any = {}
        if (idx === items.length - 1) {
          style.margin = 0
        }
        return (
          <StyledChildDiv key={idx} {...props} style={style}>
            {child}
          </StyledChildDiv>
        )
      })}
    </StyledBlock>
  )
}
