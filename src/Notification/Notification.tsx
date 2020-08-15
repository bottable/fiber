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
  offset?: number
  placement?: 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft'
  destroy?: () => void
}

const Notification: FC<NotificationProps> = React.forwardRef<
  HTMLDivElement,
  NotificationProps
>(({ message, description, destroy, offset, ...props }, ref) => {
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
    <StyledNotification {...props} ref={ref} style={{ top: offset! + 16 }}>
      {messageNode}
      {descriptionNode}
      {closeNode}
    </StyledNotification>
  )
})

Notification.defaultProps = {
  placement: 'topRight'
}

const rightNotifications: HTMLElement[] = []
const leftNotifications: HTMLElement[] = []

const bottomMargin = 10

const open: (args: NotificationProps) => void = ({
  duration,
  placement,
  ...args
}) => {
  const div = document.createElement('div')
  document.body.appendChild(div)

  const xPlacement = placement!.includes('Right') ? 'right' : 'left'

  let notifications: HTMLElement[]
  if (xPlacement === 'right') notifications = rightNotifications
  else notifications = leftNotifications

  const destroy = () => {
    const destroyedNotification: any = div.children[0]
    if (!destroyedNotification) return
    destroyedNotification.style[xPlacement] = '-336px'

    setTimeout(() => {
      const offset = destroyedNotification.offsetHeight + bottomMargin
      const idx = notifications.findIndex((element) => element === div)

      for (let i = idx + 1; i < notifications.length; i++) {
        const element = notifications[i]
        const notification: any = element.children[0]
        notification.style.top = `${
          +notification.style.top.substring(
            0,
            notification.style.top.length - 2
          ) - offset
        }px`
      }

      notifications.splice(idx, 1)
      ReactDOM.unmountComponentAtNode(div)
      div.remove()
    }, 100)
  }

  const offset = notifications.reduce((totalOffset, element) => {
    const notification: any = element.children[0]
    return totalOffset + notification.offsetHeight + bottomMargin
  }, 0)

  ReactDOM.render(
    <UIProvider>
      <Notification
        {...args}
        destroy={destroy}
        offset={offset}
        placement={placement}
      />
    </UIProvider>,
    div
  )

  notifications.push(div)

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
