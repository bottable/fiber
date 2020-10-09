---
id: input
title: Input
---

This is for input.

## Example

```js
import { Input } from 'fiber-ui'
```

### Regular

```js live
<Input />
```

### Size

```js live
<>
  <Input size='lg' placeholder='Large Input' />
  <br />
  <br />
  <Input placeholder='Medium Input' />
  <br />
  <br />
  <Input size='sm' placeholder='Small Input' />
</>
```

### Addon

```js
import { MdSettings } from 'react-icons/md'
```

```js live
<>
  <Input addonBefore='http://' addonAfter='.com' />
  <br />
  <br />
  <Input addonAfter={<MdSettings />} />
</>
```

### Prefix and Suffix

```js live
<>
  <Input prefix='￥' suffix='RMB' />
  <br />
  <br />
  <Input prefix='￥' suffix='RMB' disabled />
  <br />
  <br />
  <Input addonBefore='http://' suffix='.com' />
</>
```

### Borderless

```js live
<>
  <div style={{ backgroundColor: '#f2f2f2', padding: 12 }}>
    <Input placeholder='Borderless' bordered={false} />
  </div>
  <div style={{ padding: 12 }}>
    <Input
      placeholder='Borderless'
      bordered={false}
      style={{ backgroundColor: '#efefef' }}
    />
  </div>
</>
```

### Camouflage

```js live
<Input defaultValue='Category' camouflage style={{ fontWeight: 700 }} />
```

### Disabled

```js live
<Input placeholder='Disabled' disabled />
```

### Password

```js live
<Input.Password placeholder='Password' />
```

### Search

```js live
<Input.Search
  placeholder='Search'
  onSearch={(value) => console.log(value)}
  enterButton
/>
```

### Tag

```js live
<div style={{ backgroundColor: '#f2f2f2', padding: 12 }}>
  <Input.Tag
    placeholder='Enter tags'
    onChange={(values) => {
      console.log(values)
    }}
    defaultValue={['Amazon', 'Apple']}
    tagProps={(value) => {
      if (value === 'Amazon') return { color: '#ff9900' }
      else if (value === 'Apple') return { color: '#999999' }
      return {}
    }}
    bordered={false}
  />
</div>
```
