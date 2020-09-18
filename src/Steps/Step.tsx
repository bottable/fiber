import {
  StyledStep,
  IconContainer,
  ContentContainer,
  TitleContainer,
  SubtitleContainer,
  VerticalChildrenContainer
} from './styles'

import React, { FC, useState, useEffect, useRef } from 'react'
import Filter1Icon from '@material-ui/icons/Filter1'
import Filter2Icon from '@material-ui/icons/Filter2'
import Filter3Icon from '@material-ui/icons/Filter3'
import Filter4Icon from '@material-ui/icons/Filter4'
import Filter5Icon from '@material-ui/icons/Filter5'
import Filter6Icon from '@material-ui/icons/Filter6'
import Filter7Icon from '@material-ui/icons/Filter7'
import Filter8Icon from '@material-ui/icons/Filter8'
import Filter9Icon from '@material-ui/icons/Filter9'
import Filter9PlusIcon from '@material-ui/icons/Filter9Plus'

const icons = [
  <Filter1Icon key={1} />,
  <Filter2Icon key={2} />,
  <Filter3Icon key={3} />,
  <Filter4Icon key={4} />,
  <Filter5Icon key={5} />,
  <Filter6Icon key={6} />,
  <Filter7Icon key={7} />,
  <Filter8Icon key={8} />,
  <Filter9Icon key={9} />,
  <Filter9PlusIcon key={10} />
]

export type StepProps = {
  icon?: React.ReactNode
  status?: 'wait' | 'process' | 'finish'
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

  const [height, setHeight] = useState<number | undefined>(undefined)

  const collapseRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (collapseRef.current && height === undefined) {
      setHeight(collapseRef.current.offsetHeight)
    }
  }, [collapseRef])

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
    return icons[Math.min(number! - 1, icons.length - 1)]
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
        {vertical && (
          <VerticalChildrenContainer
            height={height}
            collapsed={status !== 'process'}
            ref={collapseRef}
          >
            {children}
          </VerticalChildrenContainer>
        )}
      </ContentContainer>
    </StyledStep>
  )
}

export { Step }
