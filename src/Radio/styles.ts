import { RadioProps } from './Radio'

import styled from 'styled-components'

export const Wrapper = styled.label<RadioProps>`
  display: inline-block;
  position: relative;
  padding: 0;
  color: ${({ theme }) => theme.colors.gray7};
  font-size: ${({ theme }) => theme.fontSizes.md};
  cursor: pointer;
`

export const RadioContainer = styled.span<RadioProps>`
  display: inline-block;
  top: 0;
  margin: 0;
  outline: none;
  vertical-align: sub;
`

export const LabelContainer = styled.span<RadioProps>`
  padding-right: ${({ theme }) => theme.paddings.xs};
  padding-left: ${({ theme }) => theme.paddings.xs};
`

export const RadioInput = styled.input<RadioProps>`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
`

export const StyledRadio = styled.span<RadioProps>`
  display: block;
  position: relative;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  border: ${({ theme }) => theme.border.md};
  border-radius: 50%;
  border-color: ${({ theme }) => theme.colors.gray4};
  background-color: #fff;
  ${({ theme }) => theme.transition}
`
