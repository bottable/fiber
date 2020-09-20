---
id: notification
title: Notification
---

This is for notification.

## Examples

```js
import { notification } from 'fiber-ui
```

### Regular

```js live
function RegularNotification() {
  const openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
    })
  }

  return (
    <Button type='primary' onClick={openNotification}>
      Open the notification box
    </Button>
  )
}
```

### Duration

```js live
function DurationNotification() {
  const openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'If you set duration to zero, the notification will never close automatically. This is a purposely very very long description that has many many characters and words.',
      duration: 0
    })
  }

  return (
    <Button type='primary' onClick={openNotification}>
      Open the notification box
    </Button>
  )
}
```

### Placement

```js live
function PlacementNotification() {
  const openNotification = (placement) => {
    notification.open({
      message: `Notification ${placement}`,
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      placement
    })
  }

  return (
    <div>
      <Space>
        <Button type='primary' onClick={() => openNotification('topLeft')}>
          topLeft
        </Button>
        <Button type='primary' onClick={() => openNotification('topCenter')}>
          topCenter
        </Button>
        <Button type='primary' onClick={() => openNotification('topRight')}>
          topRight
        </Button>
      </Space>
      <Divider />
      <Space>
        <Button type='primary' onClick={() => openNotification('bottomLeft')}>
          bottomLeft
        </Button>
        <Button type='primary' onClick={() => openNotification('bottomCenter')}>
          bottomCenter
        </Button>
        <Button type='primary' onClick={() => openNotification('bottomRight')}>
          bottomRight
        </Button>
      </Space>
    </div>
  )
}
```

### No Close Icon

```js live
function NoCloseIconNotification() {
  const openNotification = () => {
    notification.open({
      description: 'Selector is on. Click anything on the page to track.',
      closeIcon: false
    })
  }

  return (
    <Button type='primary' onClick={openNotification}>
      No close icon
    </Button>
  )
}
```
