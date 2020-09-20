---
id: card
title: Card
---

This is for cards.

## Example

```js
import { Card } from 'fiber-ui'
```

### Regular

```js live
<Card style={{ width: 300 }}>
  <p>Card content</p>
  <p>Card content</p>
  <p>Card content</p>
</Card>
```

### Header

```js live
<Card
  title='Default size card'
  extra={<a href='#'>More</a>}
  style={{ width: 300 }}
>
  <p>Card content</p>
  <p>Card content</p>
  <p>Card content</p>
</Card>
```

### Size

```js live
<>
  <Card title='Medium card' style={{ width: 300 }}>
    <p style={{ margin: 0 }}>Card content</p>
    <p style={{ margin: 0 }}>Card content</p>
    <p style={{ margin: 0 }}>Card content</p>
  </Card>
  <br />
  <Card title='Small card' size='sm' style={{ width: 300 }}>
    <p style={{ margin: 0 }}>Card content</p>
    <p style={{ margin: 0 }}>Card content</p>
    <p style={{ margin: 0 }}>Card content</p>
  </Card>
</>
```

### Bordered

```js live
<div style={{ background: 'rgb(236, 236, 236)', padding: 30 }}>
  <Card title='No borders' style={{ width: 300 }} bordered={false}>
    <p style={{ margin: 0 }}>Card content</p>
    <p style={{ margin: 0 }}>Card content</p>
    <p style={{ margin: 0 }}>Card content</p>
  </Card>
</div>
```

### Hoverable

```js live
<Card title='Hoverable' style={{ width: 300 }} hoverable={true}>
  <p style={{ margin: 0 }}>Card content</p>
  <p style={{ margin: 0 }}>Card content</p>
  <p style={{ margin: 0 }}>Card content</p>
</Card>
```

### Actions

```js
import { Settings, Create, MoreHoriz } from '@material-ui/icons'
```

```js live
<Card
  title='Actions'
  style={{ width: 300 }}
  actions={[<Settings />, <Create />, <MoreHoriz />]}
>
  <p style={{ margin: 0 }}>Card content</p>
  <p style={{ margin: 0 }}>Card content</p>
  <p style={{ margin: 0 }}>Card content</p>
</Card>
```
