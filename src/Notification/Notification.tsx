import { UIProvider } from '../UIProvider'

import { StyledNotification, MessageStyle, DescriptionStyle } from './styles'

import React, { FC } from 'react'
import ReactDOM from 'react-dom'

export type NotificationProps = {
  message?: string
  description?: string
  duration?: number
}

const Notification: FC<NotificationProps> = ({
  message,
  description,
  ...props
}) => {
  return (
    <StyledNotification {...props}>
      <MessageStyle>{message}</MessageStyle>
      <DescriptionStyle>{description}</DescriptionStyle>
    </StyledNotification>
  )
}

const open: (args: NotificationProps) => void = ({ duration, ...args }) => {
  const div = document.createElement('div')
  document.body.appendChild(div)
  ReactDOM.render(
    <UIProvider>
      <Notification {...args} />
    </UIProvider>,
    div
  )
  if (duration === 0) return
  if (typeof duration === 'number') {
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(div)
    }, duration * 1000)
  } else {
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(div)
    }, 5000)
  }
}

const notification = {
  open: open
}

export { notification, Notification }
