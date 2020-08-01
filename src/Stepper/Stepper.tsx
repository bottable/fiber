import { StyledStepper } from './styles'

import React, { FC } from 'react'

export type StepperProps = {
  current?: number
  vertical?: boolean
  onChange?: (current: number) => void
  children?: React.ReactElement[]
}

const Stepper: FC<StepperProps> = ({ children, ...props }) => {
  const { current = 0, vertical } = props

  const status = (idx: number) => {
    if (idx < current) return 'finish'
    else if (idx > current) return 'wait'
    return 'process'
  }

  return (
    <StyledStepper vertical={vertical}>
      {children?.map((step: React.ReactElement, idx: number) =>
        React.cloneElement(step, {
          status: step.props.status || status(idx),
          number: idx + 1,
          last: idx === children.length - 1,
          vertical: vertical,
          key: idx
        })
      )}
    </StyledStepper>
  )
}

export { Stepper }
