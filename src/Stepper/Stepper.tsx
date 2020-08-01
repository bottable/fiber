import { StyleProps } from '../utils/styles'

import { StyledStepper } from './styles'

import React, { FC } from 'react'

export interface StepperProps extends StyleProps {
  // custom props here
}

const Stepper: FC<StepperProps> = ({ children, ...props }) => {
  return <StyledStepper {...props}>{children}</StyledStepper>
}

export { Stepper }
