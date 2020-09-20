import { SpaceProps } from './Space'

import styled, { css } from 'styled-components'
import { rem } from 'polished'

export const StyledBlock = styled.div<SpaceProps>`
  display: inline-flex;

  flex-direction: ${({ direction }) => {
    let flexdirection = 'row'
    switch (direction) {
      case 'horizontal':
        flexdirection = 'row'
        break
      case 'vertical':
        flexdirection = 'column'
        break
    }
    return flexdirection
  }};

  align-items: ${({ align }) => {
    let alignitems = 'center'
    switch (align) {
      case 'start':
        alignitems = 'flex-start'
        break
      case 'end':
        alignitems = 'flex-end'
        break
      case 'center':
        alignitems = 'center'
        break
      case 'baseline':
        alignitems = 'baseline'
        break
    }
    return alignitems
  }};
`

const horizontalMargin = css<SpaceProps>`
  margin-right: ${({ size, theme }) => {
    let margin = theme.margins.md
    if (typeof size === 'number') {
      margin = rem(`${size}px`)
    } else {
      switch (size) {
        case 'sm':
          margin = theme.margins.xs
          break
        case 'md':
          margin = theme.margins.md
          break
        case 'lg':
          margin = theme.margins.xl
          break
      }
    }
    return margin
  }};
`

const verticalMargin = css<SpaceProps>`
  margin-bottom: ${({ size, theme }) => {
    let margin = theme.margins.md
    if (typeof size === 'number') {
      margin = rem(`${size}px`)
    } else {
      switch (size) {
        case 'sm':
          margin = theme.margins.xs
          break
        case 'md':
          margin = theme.margins.md
          break
        case 'lg':
          margin = theme.margins.xl
          break
      }
    }
    return margin
  }};
`

export const StyledChildDiv = styled.div<SpaceProps>`
  display: inline-block;
  ${({ direction }) =>
    direction === 'vertical' ? verticalMargin : horizontalMargin}

  &:last-child {
    margin: 0;
  }
`
