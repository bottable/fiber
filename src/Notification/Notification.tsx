import { StyledNotification } from './styles'

import React, { FC } from 'react'

export type NotificationProps = {
  // custom props here
}

const Notification: FC<NotificationProps> = ({ children, ...props }) => {
  return <StyledNotification {...props}>{children}</StyledNotification>
}

export { Notification }
