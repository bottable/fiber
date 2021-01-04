---
id: popover
title: Popover
---

This is for popover.

## Examples

```js
import { Popover } from 'fiber-ui
```

### Regular

```js live
function RegularPopover() {
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  )

  return (
    <Popover content={content} title='Title'>
      <Button type='primary'>Hover me</Button>
    </Popover>
  )
}
```

### Trigger

```js live
function TriggerPopover() {
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  )

  return (
    <Space>
      <Popover content={content} title='Title' trigger='hover'>
        <Button>Hover me</Button>
      </Popover>
      <Popover content={content} title='Title' trigger='click'>
        <Button>Click me</Button>
      </Popover>
    </Space>
  )
}
```

### Placement

```js live
function PlacementPopover() {
  const buttonWidth = 70
  const text = <span>Title</span>
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  )

  return (
    <div>
      <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
        <Popover placement='topLeft' title={text} content={content}>
          <Button style={{ width: buttonWidth }}>TL</Button>
        </Popover>
        <Popover placement='top' title={text} content={content}>
          <Button style={{ width: buttonWidth }}>Top</Button>
        </Popover>
        <Popover placement='topRight' title={text} content={content}>
          <Button style={{ width: buttonWidth }}>TR</Button>
        </Popover>
      </div>
      <div style={{ width: buttonWidth, float: 'left' }}>
        <Popover placement='leftTop' title={text} content={content}>
          <Button style={{ width: buttonWidth }}>LT</Button>
        </Popover>
        <Popover placement='left' title={text} content={content}>
          <Button style={{ width: buttonWidth }}>Left</Button>
        </Popover>
        <Popover placement='leftBottom' title={text} content={content}>
          <Button style={{ width: buttonWidth }}>LB</Button>
        </Popover>
      </div>
      <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 }}>
        <Popover placement='rightTop' title={text} content={content}>
          <Button style={{ width: buttonWidth }}>RT</Button>
        </Popover>
        <Popover placement='right' title={text} content={content}>
          <Button style={{ width: buttonWidth }}>Right</Button>
        </Popover>
        <Popover placement='rightBottom' title={text} content={content}>
          <Button style={{ width: buttonWidth }}>RB</Button>
        </Popover>
      </div>
      <div
        style={{
          marginLeft: buttonWidth,
          clear: 'both',
          whiteSpace: 'nowrap'
        }}
      >
        <Popover placement='bottomLeft' title={text} content={content}>
          <Button style={{ width: buttonWidth }}>BL</Button>
        </Popover>
        <Popover placement='bottom' title={text} content={content}>
          <Button style={{ width: buttonWidth }}>Bottom</Button>
        </Popover>
        <Popover placement='bottomRight' title={text} content={content}>
          <Button style={{ width: buttonWidth }}>BR</Button>
        </Popover>
      </div>
    </div>
  )
}
```
