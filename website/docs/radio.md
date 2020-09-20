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
