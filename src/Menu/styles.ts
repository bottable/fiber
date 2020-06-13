import { styleComposition } from '../utils/styles'

import styled, { css } from 'styled-components'

export interface ExpandProps {
  expand: boolean
}

export const TitleWrapper = styled.div<ExpandProps>`
  display: block;
  padding: 8px 10px;
  color: ${(props) => (props.expand ? props.theme.colors.light : null)};

  &:hover {
    color: ${(props) => props.theme.colors.light};
    cursor: pointer;
  }
`

export const SubMenuWrapper = styled.div<any>`
  display: block;
`

export const ItemWrapper = styled.ul`
  ${styleComposition}

  height: 100%;
  margin: 0;
  overflow: auto;
`

const ArrowDown = css`
  transform: rotate(45deg);
`

const ArrowUp = css`
  transform: rotate(-135deg);
`

export const Arrow = styled.i<ExpandProps>`
  display: inline-block;
  margin: 10px;
  padding: 3px;
  float: right;
  border: solid ${(props) => (props.expand ? props.theme.colors.light : null)};
  border-width: 0 3px 3px 0;

  ${(props) => (props.expand ? ArrowUp : ArrowDown)};

  ${TitleWrapper}:hover & {
    border: solid ${(props) => props.theme.colors.light};
    border-width: 0 3px 3px 0;
  }
`
