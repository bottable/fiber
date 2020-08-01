import {
  StyledStep,
  IconContainer,
  ContentContainer,
  TitleContainer,
  SubtitleContainer
} from './styles'

import React, { FC } from 'react'
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'

export type StepProps = {
  description?: React.ReactNode
  icon?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLElement>
  status?: 'wait' | 'process' | 'finish' | 'error'
  disabled?: boolean
  title?: React.ReactNode
  subTitle?: React.ReactNode
  number?: number
  last?: boolean
  vertical?: boolean
}

const Step: FC<StepProps> = (props) => {
  const { title, ...rest } = props
  const { subTitle, icon, status, number } = props

  const renderIcon = () => {
    if (status === 'process' || status === 'wait') {
      return number
    } else if (status === 'finish') return <CheckIcon />
    else return <CloseIcon />
  }

  return (
    <StyledStep {...rest}>
      <IconContainer {...rest}>{icon || renderIcon()}</IconContainer>
      <ContentContainer {...rest}>
        <TitleContainer {...rest}>{title}</TitleContainer>
        <SubtitleContainer {...rest}>{subTitle}</SubtitleContainer>
      </ContentContainer>
    </StyledStep>
  )
}

export { Step }
