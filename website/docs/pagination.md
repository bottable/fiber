---
id: pagination
title: Pagination
---

This is for pagination.

## Example

```js
import { Pagination } from 'fiber-ui'
```

### Regular

```js live
<Pagination defaultCurrent={1} total={50} />
```

### More

```js live
<Pagination defaultCurrent={6} total={500} />
```

### Jumper

```js live
<Pagination showQuickJumper defaultCurrent={2} total={500} />
```

### Controlled

```js live
function ControlledPagination() {
  const [current, setCurrent] = useState(3)

  const onChange = (page) => {
    console.log(page)
    setCurrent(page)
  }

  return <Pagination current={current} onChange={onChange} total={50} />
}
```

### Total Number

```js live
<>
  <Pagination
    total={85}
    showTotal={(total) => `Total ${total} items`}
    defaultPageSize={20}
    defaultCurrent={1}
  />
  <br />
  <Pagination
    total={85}
    showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
    defaultPageSize={20}
    defaultCurrent={1}
  />
</>
```
