---
id: radio
title: Radio
---

This is for radio.

## Example

```js
import { Radio } from 'fiber-ui'
```

### Regular

```js live
<Radio> Radio </Radio>
```

### Radio Group

```js live
function RadioGroup() {
  const [value, setValue] = useState(0)

  const onChange = (e) => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
  }

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </Radio.Group>
  )
}
```

### Vertical Radio Group

```js live
function VerticalRadioGroup() {
  const [value, setValue] = useState(0)

  const onChange = (e) => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
  }

  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px'
  }

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio style={radioStyle} value={1}>
        Option A
      </Radio>
      <Radio style={radioStyle} value={2}>
        Option B
      </Radio>
      <Radio style={radioStyle} value={3}>
        Option C
      </Radio>
      <Radio style={radioStyle} value={4}>
        More...
        {value == 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
      </Radio>
    </Radio.Group>
  )
}
```

### Button Radio

```js live
<>
  <Radio.Group defaultValue='a'>
    <Radio.Button value='a'>Hangzhou</Radio.Button>
    <Radio.Button value='b'>Shanghai</Radio.Button>
    <Radio.Button value='c'>Beijing</Radio.Button>
    <Radio.Button value='d'>Chengdu</Radio.Button>
  </Radio.Group>
  <br />
  <Radio.Group defaultValue='b' buttonStyle='solid' style={{ marginTop: 10 }}>
    <Radio.Button value='a'>Hangzhou</Radio.Button>
    <Radio.Button value='b'>Shanghai</Radio.Button>
    <Radio.Button value='c'>Beijing</Radio.Button>
    <Radio.Button value='d'>Chengdu</Radio.Button>
  </Radio.Group>
  <br />
  <Radio.Group
    defaultValue='b'
    buttonStyle='solid'
    style={{ marginTop: 10 }}
    size='lg'
  >
    <Radio.Button value='a'>Hangzhou</Radio.Button>
    <Radio.Button value='b'>Shanghai</Radio.Button>
    <Radio.Button value='c'>Beijing</Radio.Button>
    <Radio.Button value='d'>Chengdu</Radio.Button>
  </Radio.Group>
</>
```

### Disabled

```js live
<>
  <Radio.Group defaultValue='c'>
    <Radio value='a'>A</Radio>
    <Radio value='b'>B</Radio>
    <Radio value='c' disabled>
      C
    </Radio>
    <Radio value='d'>D</Radio>
  </Radio.Group>
  <br />
  <Radio.Group defaultValue='c' style={{ marginTop: 10 }}>
    <Radio.Button value='a'>A</Radio.Button>
    <Radio.Button value='b'>B</Radio.Button>
    <Radio.Button value='c' disabled>
      C
    </Radio.Button>
    <Radio.Button value='d'>D</Radio.Button>
  </Radio.Group>
  <br />
  <Radio.Group defaultValue='c' disabled style={{ marginTop: 10 }}>
    <Radio.Button value='a'>A</Radio.Button>
    <Radio.Button value='b'>B</Radio.Button>
    <Radio.Button value='c'>C</Radio.Button>
    <Radio.Button value='d'>D</Radio.Button>
  </Radio.Group>
  <br />
  <Radio.Group defaultValue='c' buttonStyle='solid' style={{ marginTop: 10 }}>
    <Radio.Button value='a'>A</Radio.Button>
    <Radio.Button value='b'>B</Radio.Button>
    <Radio.Button value='c' disabled>
      C
    </Radio.Button>
    <Radio.Button value='d'>D</Radio.Button>
  </Radio.Group>
</>
```
