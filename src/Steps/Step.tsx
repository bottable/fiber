import { MergeElementProps } from '../utils'
import { useCollapse } from '../hooks'

import {
  StyledStep,
  IconContainer,
  ContentContainer,
  TitleContainer,
  SubtitleContainer
} from './styles'

import React, { FC, useState } from 'react'
import {
  MdFilter1,
  MdFilter2,
  MdFilter3,
  MdFilter4,
  MdFilter5,
  MdFilter6,
  MdFilter7,
  MdFilter8,
  MdFilter9,
  MdFilter9Plus
} from 'react-icons/md'

const icons = [
  <MdFilter1 key={1} />,
  <MdFilter2 key={2} />,
  <MdFilter3 key={3} />,
  <MdFilter4 key={4} />,
  <MdFilter5 key={5} />,
  <MdFilter6 key={6} />,
  <MdFilter7 key={7} />,
  <MdFilter8 key={8} />,
  <MdFilter9 key={9} />,
  <MdFilter9Plus key={10} />
]

export type StepProps = MergeElementProps<
  'div',
  {
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
    style?: React.CSSProperties & object
  }
>

const Step: FC<StepProps> = ({ children, ...props }) => {
  const { title, style, ...rest } = props
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

  const { childrenNode } = useCollapse({
    children: children,
    collapsed: status !== 'process'
  })

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
        if (handleChange && status !== 'process') handleChange(number! - 1)
      }}
      hover={hover}
      style={style}
    >
      <IconContainer {...rest} hover={hover}>
        {renderIcon()}
      </IconContainer>
      <ContentContainer {...rest}>
        {title && titleNode}
        {subtitle && subtitleNode}
        {vertical && childrenNode}
      </ContentContainer>
    </StyledStep>
  )
}

export { Step }
