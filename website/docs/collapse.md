---
id: collapse
title: Collapse
---

This is for collapse

## Example

```js
import { Collapse } from 'fiber-ui'
```

### Regular

```js live
function RegularCollapse() {
  const callback = (key) => {
    console.log(key)
  }

  const text = `
      A dog is a type of domesticated animal.
      Known for its loyalty and faithfulness,
      it can be found as a welcome guest in many households across the world.
    `

  return (
    <Collapse defaultActiveKey={['1']} onChange={callback}>
      <Collapse.Panel header='This is panel header 1' key='1'>
        <p>{text}</p>
      </Collapse.Panel>
      <Collapse.Panel header='This is panel header 2' key='2'>
        <p>{text}</p>
      </Collapse.Panel>
      <Collapse.Panel header='This is panel header 3' key='3'>
        <p>{text}</p>
      </Collapse.Panel>
    </Collapse>
  )
}
```

### Custom Header

```js
import { MdDelete } from 'react-icons/md'
```

```js live
function CustomHeaderCollapse() {
  const text = `
      A dog is a type of domesticated animal.
      Known for its loyalty and faithfulness,
      it can be found as a welcome guest in many households across the world.
    `

  return (
    <Collapse style={{ width: 500 }}>
      <Collapse.Panel
        header={
          <Input
            defaultValue='Category'
            camouflage
            style={{ width: '100%', fontWeight: 700 }}
          />
        }
        extra={<MdDelete />}
        key='1'
      >
        <p>{text}</p>
      </Collapse.Panel>
    </Collapse>
  )
}
```

### Extra Node

```js
import { MdSettings } from 'react-icons/md'
```

```js live
function ExtraNodeCollapse() {
  const callback = (key) => {
    console.log(key)
  }

  const text = `
      A dog is a type of domesticated animal.
      Known for its loyalty and faithfulness,
      it can be found as a welcome guest in many households across the world.
    `

  return (
    <Collapse defaultActiveKey={['1']} onChange={callback}>
      <Collapse.Panel
        header='This is panel header 1'
        key='1'
        extra={<MdSettings />}
      >
        <p>{text}</p>
      </Collapse.Panel>
      <Collapse.Panel
        header='This is panel header 2'
        key='2'
        extra={<MdSettings />}
      >
        <p>{text}</p>
      </Collapse.Panel>
      <Collapse.Panel
        header='This is panel header 3'
        key='3'
        extra={<MdSettings />}
      >
        <p>{text}</p>
      </Collapse.Panel>
    </Collapse>
  )
}
```
