import {
  StyledStep,
  IconContainer,
  ContentContainer,
  TitleContainer,
  SubtitleContainer,
  Circle
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
  subtitle?: React.ReactNode
  number?: number
  last?: boolean
  vertical?: boolean
}

const Step: FC<StepProps> = ({ children, ...props }) => {
  const { title, ...rest } = props
  const { subtitle, icon, status, number, vertical } = props

  const titleNode = <TitleContainer {...rest}>{title}</TitleContainer>
  const subtitleNode = (
    <SubtitleContainer {...rest}>{subtitle}</SubtitleContainer>
  )

  const renderIcon = () => {
    if (icon) return icon
    let node
    if (status === 'process' || status === 'wait') {
      node = number
    } else if (status === 'finish') node = <CheckIcon />
    else node = <CloseIcon />
    return <Circle {...rest}>{node}</Circle>
  }

  return (
    <StyledStep {...rest}>
      <IconContainer {...rest}>{renderIcon()}</IconContainer>
      <ContentContainer {...rest}>
        {title && titleNode}
        {subtitle && subtitleNode}
        {vertical && status === 'process' && children}
      </ContentContainer>
    </StyledStep>
  )
}

export { Step }
