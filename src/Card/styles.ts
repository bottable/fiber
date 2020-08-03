import { CardProps } from './Card'

import styled from 'styled-components'

export const StyledCard = styled.div<CardProps>`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 1px solid #f0f0f0;
  border-radius: 2px;
  background: #fff;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.5715;
`

export const ContentContainer = styled.div<CardProps>`
  padding: 24px;
`

export const StyledMeta = styled.div<CardProps>``

export const StyledFooter = styled.div<CardProps>``
