import { StyledStepper } from './styles'

import React, { FC } from 'react'

export type StepperProps = {
  current?: number
  direction?: 'horizontal' | 'vertical'
  progressDot?: boolean
  onChange?: (current: number) => void
  children?: React.ReactElement[]
}

const Stepper: FC<StepperProps> = ({ children, ...props }) => {
  const { current = 0 } = props

  const status = (idx: number) => {
    if (idx < current) return 'finish'
    else if (idx > current) return 'wait'
    return 'process'
  }

  return (
    <StyledStepper>
      {
        children?.map((step: React.ReactElement, idx: number) =>
          React.cloneElement(step, {
            status: step.props.status || status(idx),
            number: idx + 1,
            key: idx
          })
        )!
      }
    </StyledStepper>
  )
}

export { Stepper }
