import { StepperProps } from './Stepper'
import { StepProps } from './Step'

import styled from 'styled-components'
import { rem } from 'polished'

export const StyledStepper = styled.div<StepperProps>`
  display: flex;
  flex-direction: ${({ vertical }) => (vertical ? 'column' : 'row')};
  width: 100%;
  margin: 0;
  padding: 0;
  font-size: 14px;
  line-height: 1.5715;
  list-style: none;
  text-align: initial;
`

export const StyledStep = styled.div<StepProps>`
  display: ${({ vertical }) => (vertical ? 'block' : 'inline-block')};
  flex: 1;
  padding-top: ${rem('4px')};
  overflow: hidden;
  vertical-align: top;
  &:not(:first-child) {
    padding-left: ${({ vertical }) => (vertical ? null : rem('16px'))};
  }
  &:last-child {
    flex: none;
  }
`

export const IconContainer = styled.div<StepProps>`
  display: inline-flex;
  position: relative;
  margin-right: ${rem('8px')};
  color: ${({ theme, status, icon }) =>
    status === 'wait'
      ? theme.colors.gray6
      : icon || status !== 'process'
      ? theme.colors.base
      : '#fff'};
  svg {
    width: ${rem('24px')};
    height: ${rem('24px')};
  }
  ${({ last, status, vertical, theme }) =>
    !last && vertical
      ? `
  &::after {
    position: absolute;
    top: 120%;
    left: ${rem('12px')};
    display: block;
    width: ${rem('1px')};
    height: 9999px;
    background: ${status === 'finish' ? theme.colors.base : theme.colors.gray4};
    content: '';
  }
    `
      : null}
  transition: color 0.3s;
`

export const ContentContainer = styled.div`
  display: inline-block;
  min-height: ${rem('48px')};
  vertical-align: top;
`

export const TitleContainer = styled.div<StepProps>`
  display: inline-block;
  position: relative;
  padding-right: ${rem('16px')};
  padding-bottom: ${({ vertical, subtitle }) =>
    vertical && !subtitle ? rem('6px') : null};
  color: ${({ theme }) => theme.colors.gray7};
  font-size: ${rem('16px')};
  ${({ last, status, vertical, theme }) =>
    !last && !vertical
      ? `
  &::after {
    position: absolute;
    top: ${rem('16px')};
    left: 100%;
    display: block;
    width: 9999px;
    height: ${rem('1px')};
    background: ${status === 'finish' ? theme.colors.base : theme.colors.gray4};
    content: '';
  }`
      : null}
`

export const SubtitleContainer = styled.div<StepProps>`
  display: block;
  position: relative;
  max-width: ${rem('140px')};
  padding-bottom: ${({ vertical }) => (vertical ? rem('6px') : null)};
  color: ${({ theme }) => theme.colors.gray6};
  font-size: ${rem('14px')};
`

export const Circle = styled.span<StepProps>`
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: ${rem('24px')};
  height: ${rem('24px')};
  border: ${rem('1px')} solid
    ${({ theme, status }) =>
      status === 'wait' ? theme.colors.gray6 : theme.colors.base};
  border-radius: 50%;
  background-color: ${({ theme, status }) =>
    status === 'wait'
      ? 'transparent'
      : status === 'process'
      ? theme.colors.base
      : '#fff'};
  transition: background-color 0.3s, border-color 0.3s;
`
