import { css } from 'styled-components'
import { rem } from 'polished'

export const headingStyle = css`
  color: ${(p) => p.theme.colors.title};
`

export const paragraphStyle = css`
  margin-bottom: ${rem('10px')};
  color: #000;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`

export const codeStyle = css`
  margin: ${rem('3px')} ${rem('5px')};
  padding: 0.2em 0.4em 0.1em;
  border: ${rem('1px')} solid ${(p) => p.theme.colors.gray4};
  border-radius: ${rem('3px')};
  background: #f4f4f4;
  color: #eb5757;
  font-family: Courier, monospace;
  font-size: 85%;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`
