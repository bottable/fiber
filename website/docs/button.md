---
id: button
title: Button
---

To trigger an operation.

## Examples

```js
import { Button } from 'fiber-ui';
```

### Type

```jsx live
<>
  <Button type='primary'>Primary Button</Button>
  <Button>Default Button</Button>
  <Button type='dashed'>Dashed Button</Button>
  <Button type='text'>Text Button</Button>
  <Button type='link'>Link Button</Button>
</>
```

### Size

```jsx live
<>
  <Button size='lg'>Large Button</Button>
  <Button>Medium Button</Button>
  <Button size='sm'>Small Button</Button>
</>
```

### Shape

```jsx live
<>
  <Button>Default Shape</Button>
  <Button shape='circle'>O</Button>
  <Button shape='round'>Round Shape</Button>
</>
```

### Disabled 

```jsx live
<>
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
</>
```

### Ghost

```jsx live
<>
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
</>
```

### Block

```jsx live
<div
  style={{ width: 200, border: '1px solid black', padding: 25, margin: 10 }}
>
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

```jsx
import DeleteIcon from '@material-ui/icons/Delete'
```

```jsx live
<>
  <div>
    <Space>
      <Button icon={<DeleteIcon />} />
      <Button icon={<DeleteIcon />} shape='circle' />
      <Button icon={<DeleteIcon />} shape='round' />
    </Space>
  </div>
  <br />
  <div>
    <Space>
      <Button startIcon={<DeleteIcon />} size='lg'>
        Trash
      </Button>
      <Button startIcon={<DeleteIcon />}>Trash</Button>
      <Button startIcon={<DeleteIcon />} size='sm'>
        Trash
      </Button>
    </Space>
  </div>
</>
```