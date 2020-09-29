import { useControl } from '../hooks'

import { StyledSteps } from './styles'
import { StepProps, Step } from './Step'

import React, { FC } from 'react'

export type StepsProps = {
  current?: number
  initial?: number
  vertical?: boolean
  onChange?: (current: number) => void
  children?: React.ReactElement[]
}

type Steps<P> = FC<P> & {
  Step: React.FC<StepProps>
}

const Steps: Steps<StepsProps> = ({ children, ...props }) => {
  const { current: currentProps, initial, vertical, onChange } = props

  const { value: current, setValue: setCurrent } = useControl({
    value: currentProps,
    defaultValue: initial,
    onChange: onChange as (newValue: unknown) => unknown
  }) as { value: number; setValue: (newValue: number) => void }

  const status = (idx: number) => {
    if (idx < current) return 'finish'
    else if (idx > current) return 'wait'
    return 'process'
  }

  return (
    <StyledSteps vertical={vertical}>
      {children?.map((step: React.ReactElement, idx: number) =>
        React.cloneElement(step, {
          status: step.props.status || status(idx),
          number: idx + 1,
          last: idx === children.length - 1,
          vertical: vertical,
          clickable: Boolean(onChange && current !== idx),
          handleChange: setCurrent,
          key: idx
        })
      )}
    </StyledSteps>
  )
}

Steps.Step = Step

Steps.defaultProps = {
  initial: 0
}

export { Steps }
