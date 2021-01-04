---
id: space
title: Space
---

This is for space.

## Example

```js
import { Space } from 'fiber-ui'
```

### Regular

```js live
<Space>
  <Button type='primary'>Primary</Button>
  <Button>Default</Button>
  <Button type='dashed'>Dashed</Button>
  <Button type='link'>Link</Button>
</Space>
```

### Vertical

```js live
<Space direction='vertical'>
  <Card title='Card' style={{ width: 300 }}>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
  <Card title='Card' style={{ width: 300 }}>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
</Space>
```

### Size

```js live
function SizedSpace() {
  const [size, setSize] = useState('sm')

  return (
    <React.Fragment>
      <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
        <Radio value='sm'>Small</Radio>
        <Radio value='md'>Middle</Radio>
        <Radio value='lg'>Large</Radio>
      </Radio.Group>
      <br />
      <br />
      <Space size={size}>
        <Button type='primary'>Primary</Button>
        <Button>Default</Button>
        <Button type='dashed'>Dashed</Button>
        <Button type='link'>Link</Button>
      </Space>
    </React.Fragment>
  )
}
```

### Align

```js live
function AlignSpace() {
  const directionBlockStyle = {
    margin: 0,
    padding: 4,
    flex: 'none',
    border: '1px solid blue'
  }
  const alignBlockStyle = {
    margin: '8px 4px',
    padding: 4,
    flex: 'none',
    border: '1px solid #40a9ff',
    fontSize: 14
  }
  const grayStyle = {
    display: 'inline-block',
    padding: '32px 8px 16px',
    background: 'rgba(150, 150, 150, 0.2)'
  }

  return (
    <div style={{ flexWrap: 'wrap', display: 'flex' }}>
      <div style={alignBlockStyle}>
        <Space align='center'>
          center
          <Button type='primary'>Primary</Button>
          <span style={grayStyle}>Block</span>
        </Space>
      </div>
      <div style={alignBlockStyle}>
        <Space align='start'>
          start
          <Button type='primary'>Primary</Button>
          <span style={grayStyle}>Block</span>
        </Space>
      </div>
      <div style={alignBlockStyle}>
        <Space align='end'>
          end
          <Button type='primary'>Primary</Button>
          <span style={grayStyle}>Block</span>
        </Space>
      </div>
      <div style={alignBlockStyle}>
        <Space align='baseline'>
          baseline
          <Button type='primary'>Primary</Button>
          <span style={grayStyle}>Block</span>
        </Space>
      </div>
    </div>
  )
}
```

### Custom Size

```js live
function CustomSizeSpace() {
  const [size, setSize] = useState(8)

  return (
    <>
      <Slider value={size} onChange={(value) => setSize(value)} />
      <br />
      <br />
      <Space size={size}>
        <Button type='primary'>Primary</Button>
        <Button>Default</Button>
        <Button type='dashed'>Dashed</Button>
        <Button type='link'>Link</Button>
      </Space>
    </>
  )
}
```
