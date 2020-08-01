import { StyledStep, NumberIcon } from './styles'

import React, { FC } from 'react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import CancelIcon from '@material-ui/icons/Cancel'

export type StepProps = {
  description?: React.ReactNode
  icon?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLElement>
  status?: 'wait' | 'process' | 'finish' | 'error'
  disabled?: boolean
  title?: React.ReactNode
  subTitle?: React.ReactNode
  number?: number
}

const Step: FC<StepProps> = (props) => {
  const { title, subTitle, icon, status, number, ...rest } = props

  const renderIcon = () => {
    if (status === 'process' || status === 'wait') {
      return <NumberIcon status={status}>{number}</NumberIcon>
    } else if (status === 'finish') return <CheckCircleIcon />
    else return <CancelIcon />
  }

  return (
    <StyledStep {...rest}>
      {icon || renderIcon()}
      {title}
      {subTitle}
    </StyledStep>
  )
}

export { Step }
