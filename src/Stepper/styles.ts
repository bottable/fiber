import { StepperProps } from './Stepper'
import { StepProps } from './Step'

import Stepper from 'rc-steps'
import styled from 'styled-components'
import { rem } from 'polished'

export const StyledStepper = styled(Stepper)<StepperProps>``

export const StyledStep = styled(Stepper.Step)<StepProps>``

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
