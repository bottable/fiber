---
id: checkbox
title: Checkbox
---

This is for checkbox

## Example

```js
import { Checkbox } from 'fiber-ui
```

### Regular

```js live
<Checkbox> Checkbox </Checkbox>
```

### Disabled

```js live
<Space direction='vertical'>
  <Checkbox defaultChecked={false} disabled />
  <Checkbox defaultChecked disabled />
</Space>
```

### Group

```js live
function GroupCheckboxes() {
  function onChange(checkedValues) {
    console.log('checked = ', checkedValues)
  }

  return (
    <Space direction='vertical'>
      <Checkbox.Group defaultValue={['Apple']} onChange={onChange}>
        <Checkbox value='Apple'>Apple</Checkbox>
        <Checkbox value='Pear'>Pear</Checkbox>
        <Checkbox value='Orange'>Orange</Checkbox>
      </Checkbox.Group>
      <Checkbox.Group defaultValue={['Apple']} onChange={onChange} disabled>
        <Checkbox value='Apple'>Apple</Checkbox>
        <Checkbox value='Pear'>Pear</Checkbox>
        <Checkbox value='Orange'>Orange</Checkbox>
      </Checkbox.Group>
      <Checkbox.Group defaultValue={['Tomato']} onChange={onChange} disabled>
        <Checkbox value='Tomato'>Tomato</Checkbox>
        <Checkbox value='Onion'>Onion</Checkbox>
        <Checkbox value='Lettuce'>Lettuce</Checkbox>
      </Checkbox.Group>
    </Space>
  )
}
```
