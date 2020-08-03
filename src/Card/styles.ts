import { CardProps } from './Card'

import styled from 'styled-components'
import { rem } from 'polished'

export const StyledCard = styled.div<CardProps>`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: ${rem('1px')} solid ${({ theme }) => theme.colors.gray4};
  border-radius: ${rem('2px')};
  background: #fff;
  color: ${({ theme }) => theme.colors.gray6};
  font-size: ${rem('14px')};
  line-height: 1.5715;
`

export const HeaderContainer = styled.div<CardProps>`
  display: flex;
  align-items: center;
  min-height: ${rem('48px')};
  margin-bottom: ${rem('-1px')};
  padding: 0 ${rem('24px')};
  border-bottom: ${rem('1px')} solid ${({ theme }) => theme.colors.gray4};
  border-radius: ${rem('2px')} ${rem('2px')} 0 0;
  background: 0 0;
  color: ${({ theme }) => theme.colors.gray8};
  font-size: ${rem('16px')};
  font-weight: 500;
`

export const TitleContainer = styled.div<CardProps>`
  display: inline-block;
  flex: 1;
  padding: ${rem('16px')} 0;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ExtraContainer = styled.div<CardProps>`
  margin-left: auto;
  padding: ${rem('16px')} 0;
  float: right;
  color: ${({ theme }) => theme.colors.base};
  font-size: ${rem('14px')};
  a {
    outline: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.base};
    text-decoration: none;
    cursor: pointer;
    ${({ theme }) => theme.transition}
  }

  a:hover {
    color: ${({ theme }) => theme.colors.light};
  }
`

export const ContentContainer = styled.div<CardProps>`
  padding: ${rem('24px')};
`

export const StyledMeta = styled.div<CardProps>``

export const StyledFooter = styled.div<CardProps>``
