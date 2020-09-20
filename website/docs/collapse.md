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

### Extra Node

```js
import { Settings } from '@material-ui/icons'
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
        extra={<Settings />}
      >
        <p>{text}</p>
      </Collapse.Panel>
      <Collapse.Panel
        header='This is panel header 2'
        key='2'
        extra={<Settings />}
      >
        <p>{text}</p>
      </Collapse.Panel>
      <Collapse.Panel
        header='This is panel header 3'
        key='3'
        extra={<Settings />}
      >
        <p>{text}</p>
      </Collapse.Panel>
    </Collapse>
  )
}
```
