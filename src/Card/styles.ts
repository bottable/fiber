import { link } from '../styles'

import { CardProps } from './Card'

import styled from 'styled-components'
import { rem } from 'polished'

export const StyledCard = styled.div<CardProps>`
  border: ${({ bordered, theme }) => (bordered ? theme.border.md : null)};
  border-radius: ${({ theme }) => theme.radii.xl};
  border-color: ${({ theme }) => theme.colors.gray4};
  background: #fff;
  color: ${({ theme }) => theme.colors.gray6};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.5715;
  &:hover {
    ${({ hoverable, theme }) => (hoverable ? theme.boxShadow : null)}
  }
  ${({ theme }) => theme.transition}
`

export const HeaderContainer = styled.div<CardProps>`
  display: flex;
  align-items: center;
  margin-bottom: ${rem('-1px')};
  padding: ${({ size, theme }) =>
    size === 'sm' ? theme.paddings.sm : theme.paddings.md};
  padding-bottom: 0;
  color: ${({ theme }) => theme.colors.gray8};
  font-size: ${({ size }) => (size === 'sm' ? rem('14px') : rem('16px'))};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

export const TitleContainer = styled.div<CardProps>`
  display: inline-block;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;

  svg {
    width: ${rem('18px')};
    height: ${rem('18px')};
  }
`

export const ExtraContainer = styled.div<CardProps>`
  margin-left: auto;
  float: right;
  color: ${({ theme }) => theme.colors.base};
  font-size: ${({ theme }) => theme.fontSizes.md};
  ${link}

  a:hover {
    color: ${({ theme }) => theme.colors.light};
  }
`

export const ContentContainer = styled.div<CardProps>`
  padding: ${({ size, theme }) =>
    size === 'sm' ? theme.paddings.sm : theme.paddings.md};
  &:not(:first-child) {
    padding-top: ${({ theme }) => theme.paddings.xs};
  }
`

export const ActionsContainer = styled.div<CardProps>`
  display: flex;
  border-top: ${rem('1px')} solid ${({ theme }) => theme.colors.gray4};
`

export const Action = styled.div<CardProps>`
  flex: 1;
  height: ${rem('24px')};
  margin: ${rem('12px')} 0;
  text-align: center;
  &:hover {
    color: ${({ theme }) => theme.colors.light};
    cursor: pointer;
  }
  &:not(:last-child) {
    border-right: ${({ theme }) => `${rem('1px')} solid ${theme.colors.gray4}`};
  }
  svg {
    width: ${rem('24px')};
    height: ${rem('24px')};
  }
  ${({ theme }) => theme.transition}
`
