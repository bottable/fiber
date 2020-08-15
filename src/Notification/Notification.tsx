import { UIProvider } from '../UIProvider'

import { StyledNotification, MessageStyle, DescriptionStyle } from './styles'

import React, { FC } from 'react'
import ReactDOM from 'react-dom'

export type NotificationProps = {
  message?: string
  description?: string
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

const open: (args: NotificationProps) => void = (args) => {
  const div = document.createElement('div')
  document.body.appendChild(div)
  ReactDOM.render(
    <UIProvider>
      <Notification {...args} />
    </UIProvider>,
    div
  )
}

const notification = {
  open: open
}

export { notification, Notification }
