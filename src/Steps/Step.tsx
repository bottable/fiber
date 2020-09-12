import {
  StyledStep,
  IconContainer,
  ContentContainer,
  TitleContainer,
  SubtitleContainer,
  Circle
} from './styles'

import React, { FC, useState } from 'react'
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'

export type StepProps = {
  icon?: React.ReactNode
  status?: 'wait' | 'process' | 'finish' | 'error'
  title?: React.ReactNode
  subtitle?: React.ReactNode
  number?: number
  last?: boolean
  vertical?: boolean
  clickable?: boolean
  hover?: boolean
  handleChange?: (current: number) => void
}

const Step: FC<StepProps> = ({ children, ...props }) => {
  const { title, ...rest } = props
  const {
    subtitle,
    icon,
    status,
    number,
    vertical,
    clickable,
    handleChange
  } = props

  const [hover, setHover] = useState<boolean>(false)

  const titleNode = (
    <TitleContainer {...rest} hover={hover}>
      {title}
    </TitleContainer>
  )
  const subtitleNode = (
    <SubtitleContainer {...rest} hover={hover}>
      {subtitle}
    </SubtitleContainer>
  )

  const renderIcon = () => {
    if (icon) return icon
    let node
    if (status === 'process' || status === 'wait') {
      node = number
    } else if (status === 'finish') node = <CheckIcon />
    else node = <CloseIcon />
    return (
      <Circle {...rest} hover={hover}>
        {node}
      </Circle>
    )
  }

  return (
    <StyledStep
      {...rest}
      onMouseEnter={() => setHover(Boolean(true && clickable))}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        setHover(false)
        if (handleChange) handleChange(number! - 1)
      }}
      hover={hover}
    >
      <IconContainer {...rest} hover={hover}>
        {renderIcon()}
      </IconContainer>
      <ContentContainer {...rest}>
        {title && titleNode}
        {subtitle && subtitleNode}
        {vertical && status === 'process' && children}
      </ContentContainer>
    </StyledStep>
  )
}

export { Step }
