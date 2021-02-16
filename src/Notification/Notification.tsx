import { MergeElementProps } from '../utils'
import { UIProvider } from '../UIProvider'

import {
  StyledNotification,
  MessageStyle,
  DescriptionStyle,
  CloseContainer
} from './styles'

import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import { MdClose } from 'react-icons/md'

export type NotificationProps = MergeElementProps<
  'div',
  {
    message?: string
    description?: string
    duration?: number
    offset?: number
    placement?:
      | 'topRight'
      | 'topCenter'
      | 'topLeft'
      | 'bottomRight'
      | 'bottomCenter'
      | 'bottomLeft'
    destroy?: () => void
    closeIcon?: React.ReactNode | boolean
    style?: React.CSSProperties & object
  }
>

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
      closeIcon,
      style: styleProps,
      ...props
    },
    ref
  ) => {
    const messageNode = message ? <MessageStyle>{message}</MessageStyle> : null
    const descriptionNode = description ? (
      <DescriptionStyle>{description}</DescriptionStyle>
    ) : null
    const closeNode =
      closeIcon === false ? null : React.isValidElement(closeIcon) ? (
        React.cloneElement(closeIcon, { onClick: destroy })
      ) : (
        <CloseContainer onClick={destroy}>
          <MdClose />
        </CloseContainer>
      )

    const style = {}
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
  topCenter: HTMLElement[]
  topLeft: HTMLElement[]
  bottomRight: HTMLElement[]
  bottomCenter: HTMLElement[]
  bottomLeft: HTMLElement[]
} = {
  topRight: [],
  topCenter: [],
  topLeft: [],
  bottomRight: [],
  bottomCenter: [],
  bottomLeft: []
}

const bottomMargin = 10

const open: (args: NotificationProps) => void = ({
  duration,
  placement,
  ...args
}) => {
  if (!placement) placement = 'topCenter'

  const div = document.createElement('div')
  document.body.appendChild(div)

  let xPlacement: 'left' | 'right' | undefined

  if (placement!.includes('Center')) {
    xPlacement = undefined
  } else if (placement!.includes('Right')) {
    xPlacement = 'right'
  } else {
    xPlacement = 'left'
  }

  const yPlacement = placement!.includes('top') ? 'top' : 'bottom'

  const notifications = notificationsObject[placement!]

  const destroy = () => {
    const destroyedNotification: any = div.children[0]
    if (!destroyedNotification) return
    if (xPlacement) {
      destroyedNotification.style[xPlacement] = '-336px'
    }
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
