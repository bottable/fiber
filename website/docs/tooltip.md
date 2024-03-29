---
id: tooltip
title: Tooltip
---

This is for tooltip.

## Example

```js
import { Tooltip } from 'fiber-ui'
```

### Regular

```js live
<Tooltip title='prompt text'>
  <span>Tooltip will show on mouse enter.</span>
</Tooltip>
```

### Placement

```js live
function PlacementTooltips() {
  const text = <span>Title</span>
  const buttonWidth = 70

  return (
    <div>
      <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
        <Tooltip placement='topLeft' title={text}>
          <Button style={{ width: buttonWidth }}>TL</Button>
        </Tooltip>
        <Tooltip placement='top' title={text}>
          <Button style={{ width: buttonWidth }}>Top</Button>
        </Tooltip>
        <Tooltip placement='topRight' title={text}>
          <Button style={{ width: buttonWidth }}>TR</Button>
        </Tooltip>
      </div>
      <div style={{ width: buttonWidth, float: 'left' }}>
        <Tooltip placement='leftTop' title={text}>
          <Button style={{ width: buttonWidth }}>LT</Button>
        </Tooltip>
        <Tooltip placement='left' title={text}>
          <Button style={{ width: buttonWidth }}>Left</Button>
        </Tooltip>
        <Tooltip placement='leftBottom' title={text}>
          <Button style={{ width: buttonWidth }}>LB</Button>
        </Tooltip>
      </div>
      <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 }}>
        <Tooltip placement='rightTop' title={text}>
          <Button style={{ width: buttonWidth }}>RT</Button>
        </Tooltip>
        <Tooltip placement='right' title={text}>
          <Button style={{ width: buttonWidth }}>Right</Button>
        </Tooltip>
        <Tooltip placement='rightBottom' title={text}>
          <Button style={{ width: buttonWidth }}>RB</Button>
        </Tooltip>
      </div>
      <div
        style={{
          marginLeft: buttonWidth,
          clear: 'both',
          whiteSpace: 'nowrap'
        }}
      >
        <Tooltip placement='bottomLeft' title={text}>
          <Button style={{ width: buttonWidth }}>BL</Button>
        </Tooltip>
        <Tooltip placement='bottom' title={text}>
          <Button style={{ width: buttonWidth }}>Bottom</Button>
        </Tooltip>
        <Tooltip placement='bottomRight' title={text}>
          <Button style={{ width: buttonWidth }}>BR</Button>
        </Tooltip>
      </div>
    </div>
  )
}
```

### Colors

```js live
function ColoredTooltips() {
  const colors = [
    'blue',
    'green',
    'magenta',
    'neutral',
    'orange',
    'purple',
    'red',
    'teal',
    'yellow'
  ]
  const customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9']

  return (
    <>
      <Divider orientation='left'>Presets</Divider>
      <Space size='sm'>
        {colors.map((color) => (
          <Tooltip title='prompt text' color={color} key={color}>
            <Button>{color}</Button>
          </Tooltip>
        ))}
      </Space>
      <Divider orientation='left'>Custom</Divider>
      <Space size='sm'>
        {customColors.map((color) => (
          <Tooltip title='prompt text' color={color} key={color}>
            <Button>{color}</Button>
          </Tooltip>
        ))}
      </Space>
    </>
  )
}
```

### Inline

```js
import { MdDelete, MdInfo, MdExpandMore } from 'react-icons/md'
```

```js live
function InlineTooltip() {
  const [dropdownValue, setDropdownValue] = useState('has changed')
  const menuArray = ['has changed', 'has increased', 'has decreased']
  const menu = (
    <Menu>
      {menuArray.map((menuItem, idx) => (
        <Menu.Item
          onClick={() => {
            setDropdownValue(menuItem)
          }}
          key={idx}
        >
          {menuItem}
        </Menu.Item>
      ))}
    </Menu>
  )
  return (
    <Collapse style={{ width: 300 }}>
      <Collapse.Panel
        header={
          <Input
            defaultValue='Category'
            camouflage
            style={{ width: '100%', fontWeight: 700 }}
          />
        }
        extra={<MdDelete />}
      >
        <Space direction='vertical' style={{ width: '100%', color: '#828282' }}>
          <Text style={{ width: '100%' }}>
            Notify me when selected value
            <Tooltip
              title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed nisi eget nunc tristique gravida. Cras ullamcorper libero a dapibus ullamcorper. Quisque malesuada molestie lorem non dignissim. Cras luctus sodales libero viverra mollis. Praesent fermentum felis eget augue lacinia rutrum. Nunc sit amet lacus nisi. In in erat fringilla, varius diam sit amet, consectetur tellus. Morbi et purus odio.'
              inline
              trigger='click'
            >
              <MdInfo
                style={{
                  color: 'black',
                  width: 12,
                  height: 12,
                  verticalAlign: 'top',
                  cursor: 'pointer'
                }}
              />
            </Tooltip>
          </Text>
          <Dropdown.Button
            overlay={menu}
            style={{ width: '100%' }}
            button={{
              endIcon: <MdExpandMore />,
              block: true
            }}
          >
            {dropdownValue}
          </Dropdown.Button>
        </Space>
      </Collapse.Panel>
    </Collapse>
  )
}
```
