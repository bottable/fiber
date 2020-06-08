import { SpaceProps } from './Space'

import styled from 'styled-components'

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
  margin: 0;
  padding: 0;
  div:last-child {
    margin: 0;
  }
`
