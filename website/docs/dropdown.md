---
id: dropdown
title: Dropdown
---

This is for dropdown.

## Example

```js
import { Dropdown } from 'fiber-ui'
```

### Hover

```js
import { ExpandMore } from '@material-ui/icons'
```

```js live
function HoverDropdown() {
  const menu = (
    <Menu>
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item>2nd menu item</Menu.Item>
      <Menu.Item>3rd menu item</Menu.Item>
      <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
  )

  return (
    <Dropdown overlay={menu}>
      Hover me <ExpandMore />
    </Dropdown>
  )
}
```

### Click

```js live
function ClickDropdown() {
  const menu = (
    <Menu>
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item>2nd menu item</Menu.Item>
      <Menu.Item>3rd menu item</Menu.Item>
    </Menu>
  )

  return (
    <Dropdown overlay={menu} trigger={'click'}>
      <Button> Click Me </Button>
    </Dropdown>
  )
}
```

### Description

```js
import { ExpandMore } from '@material-ui/icons'
```

```js live
function DescriptionDropdown() {
  const menu = (
    <Menu>
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item>2nd menu item</Menu.Item>
      <Menu.Item>3rd menu item</Menu.Item>
    </Menu>
  )

  return (
    <Dropdown overlay={menu} description='Menu of items'>
      Hover me <ExpandMore />
    </Dropdown>
  )
}
```

### Placement

```js live
function PlacementDropdown() {
  const menu = (
    <Menu>
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item>2nd menu item</Menu.Item>
      <Menu.Item>3rd menu item</Menu.Item>
    </Menu>
  )

  return (
    <Space>
      <Dropdown overlay={menu} placement='bottomLeft'>
        <Button>bottomLeft</Button>
      </Dropdown>
      <Dropdown overlay={menu} placement='bottom'>
        <Button>bottom</Button>
      </Dropdown>
      <Dropdown overlay={menu} placement='bottomRight'>
        <Button>bottomRight</Button>
      </Dropdown>
      <Dropdown overlay={menu} placement='topLeft'>
        <Button>topLeft</Button>
      </Dropdown>
      <Dropdown overlay={menu} placement='top'>
        <Button>top</Button>
      </Dropdown>
      <Dropdown overlay={menu} placement='topRight'>
        <Button>topRight</Button>
      </Dropdown>
    </Space>
  )
}
```

### Disabled Menu Item

```js live
function DisabledMenuItemDropdown() {
  const menu = (
    <Menu>
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item>2nd menu item</Menu.Item>
      <Menu.Item disabled>3rd menu item</Menu.Item>
    </Menu>
  )

  return (
    <Dropdown overlay={menu}>
      Hover me <ExpandMore />
    </Dropdown>
  )
}
```

### Button Dropdown

```js live
function ButtonDropdown() {
  const menu = (
    <Menu>
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item>2nd menu item</Menu.Item>
      <Menu.Item>3rd menu item</Menu.Item>
    </Menu>
  )

  return (
    <Dropdown.Button overlay={menu} button={{ endIcon: <ExpandMore /> }}>
      Button Dropdown
    </Dropdown.Button>
  )
}
```

### Input Dropdown

```js live
function InputDropdown() {
  const [value, setValue] = useState('')
  const menuArray = ['1st menu item', '2nd menu item', '3rd menu item']

  const menu = (
    <Menu>
      {menuArray.map((menuItem, idx) => (
        <Menu.Item
          onClick={() => {
            setValue(menuItem)
          }}
          key={idx}
        >
          {menuItem}
        </Menu.Item>
      ))}
    </Menu>
  )

  return (
    <Dropdown.Input
      overlay={menu}
      input={{
        value: value,
        onChange: (event) => setValue(event.target.value)
      }}
    />
  )
}
```
