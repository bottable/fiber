import { StyledStep } from './styles'

import React, { FC } from 'react'

export type StepProps = {
  description?: React.ReactNode
  icon?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLElement>
  status?: 'wait' | 'process' | 'finish' | 'error'
  disabled?: boolean
  title?: React.ReactNode
  subTitle?: React.ReactNode
}

const Step: FC<StepProps> = ({ children, ...props }) => {
  return <StyledStep {...props}>{children}</StyledStep>
}

export { Step }
