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
  style?: React.CSSProperties & object
}

const Notification: FC<NotificationProps> = React.forwardRef<
  HTMLDivElement,
  NotificationProps
>(
  (
    {
      message,
      description,
      destroy,
      offset,
      placement,
      style: styleProps,
      ...props
    },
    ref
  ) => {
    const messageNode = message ? <MessageStyle>{message}</MessageStyle> : null
    const descriptionNode = description ? (
      <DescriptionStyle>{description}</DescriptionStyle>
    ) : null
    const closeNode = (
      <CloseContainer onClick={destroy}>
        <CloseIcon />
      </CloseContainer>
    )

    const style: {[key: string]: number} = {}
    style[placement!.includes('top') ? 'top' : 'bottom'] = offset! + 16

    return (
      <StyledNotification
        {...props}
        ref={ref}
        placement={placement}
        style={{ ...style, ...styleProps }}
      >
        {messageNode}
        {descriptionNode}
        {closeNode}
      </StyledNotification>
    )
  }
)

Notification.defaultProps = {
  placement: 'topRight'
}

const notificationsObject: {
  topRight: HTMLElement[]
  topLeft: HTMLElement[]
  bottomRight: HTMLElement[]
  bottomLeft: HTMLElement[]
} = {
  topRight: [],
  topLeft: [],
  bottomRight: [],
  bottomLeft: []
}

const bottomMargin = 10

const open: (args: NotificationProps) => void = ({
  duration,
  placement,
  ...args
}) => {
  if (!placement) placement = 'topRight'

  const div = document.createElement('div')
  document.body.appendChild(div)

  const xPlacement = placement!.includes('Right') ? 'right' : 'left'
  const yPlacement = placement!.includes('top') ? 'top' : 'bottom'

  const notifications = notificationsObject[placement!]

  const destroy = () => {
    const destroyedNotification: any = div.children[0]
    if (!destroyedNotification) return
    destroyedNotification.style[xPlacement] = '-336px'
    destroyedNotification.style.opacity = '0'

    setTimeout(() => {
      const offset = destroyedNotification.offsetHeight + bottomMargin
      const idx = notifications.findIndex((element) => element === div)

      for (let i = idx + 1; i < notifications.length; i++) {
        const element = notifications[i]
        const notification: any = element.children[0]
        notification.style[yPlacement] = `${
          +notification.style[yPlacement].substring(
            0,
            notification.style[yPlacement].length - 2
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
