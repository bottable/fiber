import { Size } from '../types'

import { StyledBlock } from './styles'

import styled, { css } from 'styled-components'
import toArray from 'rc-util/lib/Children/toArray'
import React, { FC } from 'react'
import { rem } from 'polished'

export interface SpaceProps {
  size?: Size | number
  direction?: 'horizontal' | 'vertical'
  align?: 'start' | 'end' | 'center' | 'baseline'
  style?: React.CSSProperties & object
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

export const Space: FC<SpaceProps> = ({ children, style, ...props }) => {
  const items = toArray(children)
  const len = items.length

  if (len === 0) {
    return null
  }

  return (
    <StyledBlock style={style} {...props}>
      {items.map((child, idx) => {
        const itemStyle: any = {}
        if (idx === items.length - 1) {
          itemStyle.margin = 0
        }
        return (
          <StyledChildDiv key={idx} style={itemStyle} {...props}>
            {child}
          </StyledChildDiv>
        )
      })}
    </StyledBlock>
  )
}
