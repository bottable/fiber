import { UIProvider } from '../UIProvider'

import {
  StyledNotification,
  MessageStyle,
  DescriptionStyle,
  CloseContainer
} from './styles'

import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import CloseIcon from '@material-ui/icons/Close'

export type NotificationProps = {
  message?: string
  description?: string
  duration?: number
  destroy: () => void
}

const Notification: FC<NotificationProps> = ({
  message,
  description,
  destroy,
  ...props
}) => {
  const messageNode = message ? <MessageStyle>{message}</MessageStyle> : null
  const descriptionNode = description ? (
    <DescriptionStyle>{description}</DescriptionStyle>
  ) : null
  const closeNode = (
    <CloseContainer onClick={destroy}>
      <CloseIcon />
    </CloseContainer>
  )

  return (
    <StyledNotification {...props} destroy={destroy}>
      {messageNode}
      {descriptionNode}
      {closeNode}
    </StyledNotification>
  )
}

const open: (args: NotificationProps) => void = ({ duration, ...args }) => {
  const div = document.createElement('div')
  document.body.appendChild(div)
  const destroy = () => {
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }
  ReactDOM.render(
    <UIProvider>
      <Notification {...args} destroy={destroy} />
    </UIProvider>,
    div
  )
  if (duration === 0) return
  if (typeof duration === 'number') {
    setTimeout(destroy, duration * 1000)
  } else {
    setTimeout(destroy, 5000)
  }
}

const notification = {
  open: open
}

export { notification, Notification }
