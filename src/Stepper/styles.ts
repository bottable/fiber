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
  color: rgba(0, 0, 0, 0.65);
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

export const NumberIcon = styled.span<StepProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${rem('20px')};
  height: ${rem('20px')};
  border: ${rem('1px')} solid
    ${({ theme, status }) =>
      status === 'process' ? theme.colors.base : theme.colors.gray6};
  border-radius: 50%;
  background-color: ${({ theme, status }) =>
    status === 'process' ? theme.colors.base : 'transparent'};
  color: ${({ theme, status }) =>
    status === 'process' ? '#fff' : theme.colors.gray6};
`
