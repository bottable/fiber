import { StepperProps } from './Stepper'
import { StepProps } from './Step'

import styled from 'styled-components'
import { rem } from 'polished'

export const StyledStepper = styled.div<StepperProps>`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 0;
  font-size: 14px;
  line-height: 1.5715;
  list-style: none;
  text-align: initial;
`

export const StyledStep = styled.div<StepProps>`
  display: inline-block;
  flex: 1;
  overflow: hidden;
  vertical-align: top;
`

export const IconContainer = styled.div<StepProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${rem('24px')};
  height: ${rem('24px')};
  margin-right: ${rem('8px')};
  border: ${rem('1px')} solid
    ${({ theme, status }) =>
      status === 'wait' ? theme.colors.gray6 : theme.colors.base};
  border-radius: 50%;
  background-color: ${({ theme, status }) =>
    status === 'wait' ? 'transparent' : theme.colors.base};
  color: ${({ theme, status }) =>
    status === 'wait' ? theme.colors.gray6 : '#fff'};
  svg {
    width: ${rem('24px')};
    height: ${rem('24px')};
  }
`

export const ContentContainer = styled.div`
  display: inline-block;
  vertical-align: top;
`

export const TitleContainer = styled.div<StepProps>`
  display: inline-block;
  position: relative;
  padding-right: ${rem('16px')};
  color: ${({ theme }) => theme.colors.gray7};
  font-size: ${rem('16px')};
`

export const SubtitleContainer = styled.div<StepProps>`
  display: block;
  position: relative;
  max-width: ${rem('140px')};
  color: ${({ theme }) => theme.colors.gray6};
  font-size: ${rem('14px')};
`
