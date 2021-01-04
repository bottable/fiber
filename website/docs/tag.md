---
id: tag
title: Tag
---

This is for tags.

## Example

```js
import { Tag } from 'fiber-ui'
```

### Regular

```js live
function RegularTags() {
  const preventDefault = (e) => {
    e.preventDefault()
    console.log('Default Prevented')
  }

  return (
    <>
      <Tag>Tag 1</Tag>
      <Tag>
        <a href='https://github.com/bottable/fiber'>Link</a>
      </Tag>
      <Tag closable>Tag 2</Tag>
      <Tag closable onClose={preventDefault}>
        Prevent Default
      </Tag>
    </>
  )
}
```

### Color

```js live
<>
  <div>
    <Tag color='blue'>Blue</Tag>
    <Tag color='green'>Green</Tag>
    <Tag color='magenta'>Magenta</Tag>
    <Tag color='orange'>Orange</Tag>
    <Tag color='purple'>Purple</Tag>
    <Tag color='red'>Red</Tag>
    <Tag color='teal'>Teal</Tag>
    <Tag color='yellow'>Yellow</Tag>
  </div>
  <Divider orientation='left'>Custom</Divider>
  <div>
    <Tag color='#f50'>#f50</Tag>
    <Tag color='#2db7f5'>#2db7f5</Tag>
    <Tag color='#87d068'>#87d068</Tag>
    <Tag color='#108ee9'>#108ee9</Tag>
  </div>
</>
```

### Icon

```js
import { AiFillFacebook, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'
```

```js live
<>
  <Tag icon={<AiFillFacebook />} color='#3b5999'>
    Facebook
  </Tag>
  <Tag icon={<AiOutlineTwitter />} color='#cd201f'>
    YouTube
  </Tag>
  <Tag icon={<AiFillYoutube />} color='#55acee'>
    Twitter
  </Tag>
</>
```
