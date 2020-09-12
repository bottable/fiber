import { StyledSteps } from './styles'

import React, { FC, useState, useEffect } from 'react'

export type StepsProps = {
  current?: number
  vertical?: boolean
  onChange?: (current: number) => void
  children?: React.ReactElement[]
}

const Steps: FC<StepsProps> = ({ children, ...props }) => {
  const { current: currentProps, vertical, onChange } = props
  const [current, setCurrent] = useState<number>(currentProps!)

  useEffect(() => {
    setCurrent(currentProps!)
  }, [currentProps])

  const status = (idx: number) => {
    if (idx < current) return 'finish'
    else if (idx > current) return 'wait'
    return 'process'
  }

  const handleChange = (idx: number) => {
    if (!onChange || idx === current) return
    setCurrent(idx)
    onChange(idx)
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
          handleChange: handleChange,
          key: idx
        })
      )}
    </StyledSteps>
  )
}

export { Steps }
