import { StyledStepper, NumberIcon } from './styles'

import React, { FC } from 'react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import CancelIcon from '@material-ui/icons/Cancel'

export type StepperProps = {
  current?: number
  direction?: 'horizontal' | 'vertical'
  progressDot?: boolean
  onChange?: (current: number) => void
}

const icons = {
  finish: <CheckCircleIcon />,
  error: <CancelIcon />
}

const stepIconRender = ({
  node,
  status
}: {
  node: React.ReactNode
  index: number
  status: string
  title: string | React.ReactNode
  description: string | React.ReactNode
}) => {
  if (status === 'process' || status === 'wait') {
    return <NumberIcon status={status}>{node}</NumberIcon>
  }
  return node
}

const Stepper: FC<StepperProps> = ({ children, ...props }) => {
  return (
    <StyledStepper {...props} icons={icons} stepIcon={stepIconRender}>
      {children}
    </StyledStepper>
  )
}

export { Stepper }
