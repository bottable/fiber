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
import { Settings } from '@material-ui/icons'
```

```js live
<>
  <Input addonBefore='http://' addonAfter='.com' />
  <br />
  <br />
  <Input addonAfter={<Settings />} />
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
<Input placeholder='Borderless' bordered={false} />
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
/>
```
