---
id: button
title: Button
---

To trigger an operation.

## Examples

```js
import { Button } from 'fiber-ui'
```

### Type

```jsx live
<Space>
  <Button type='primary'>Primary Button</Button>
  <Button>Default Button</Button>
  <Button type='dashed'>Dashed Button</Button>
  <Button type='text'>Text Button</Button>
  <Button type='link'>Link Button</Button>
</Space>
```

### Size

```jsx live
<Space>
  <Button size='lg'>Large Button</Button>
  <Button>Medium Button</Button>
  <Button size='sm'>Small Button</Button>
</Space>
```

### Shape

```jsx live
<Space>
  <Button>Default Shape</Button>
  <Button shape='circle'>O</Button>
  <Button shape='round'>Round Shape</Button>
</Space>
```

### Disabled

```jsx live
<Space>
  <Button type='primary' disabled>
    Primary Button
  </Button>
  <Button disabled>Default Button</Button>
  <Button type='dashed' disabled>
    Dashed Button
  </Button>
  <Button type='text' disabled>
    Text Button
  </Button>
  <Button type='link' disabled>
    Link Button
  </Button>
</Space>
```

### Ghost

```jsx live
<Space>
  <Button type='primary' ghost>
    Primary Button
  </Button>
  <Button ghost>Default Button</Button>
  <Button type='dashed' ghost>
    Dashed Button
  </Button>
  <Button type='text' ghost>
    Text Button
  </Button>
  <Button type='link' ghost>
    Link Button
  </Button>
</Space>
```

### Block

```jsx live
<div style={{ width: 200, border: '1px solid black', padding: 25, margin: 10 }}>
  <Button type='primary' block>
    Primary Button
  </Button>
  <br />
  <br />
  <Button block>Default Button</Button>
  <br />
  <br />
  <Button type='dashed' block>
    Dashed Button
  </Button>
  <br />
  <br />
  <Button type='text' block>
    Text Button
  </Button>
  <br />
  <br />
  <Button type='link' block>
    Link Button
  </Button>
</div>
```

### Icon

```js
import { MdDelete } from 'react-icons/md'
```

```jsx live
<>
  <div>
    <Space>
      <Button icon={<MdDelete />} />
      <Button icon={<MdDelete />} shape='circle' />
      <Button icon={<MdDelete />} shape='round' />
    </Space>
  </div>
  <br />
  <div>
    <Space>
      <Button startIcon={<MdDelete />} size='lg'>
        Trash
      </Button>
      <Button startIcon={<MdDelete />}>Trash</Button>
      <Button startIcon={<MdDelete />} size='sm'>
        Trash
      </Button>
    </Space>
  </div>
</>
```
