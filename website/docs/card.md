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
  <p style={{ margin: 0 }}>Card content</p>
  <p style={{ margin: 0 }}>Card content</p>
  <p style={{ margin: 0 }}>Card content</p>
</Card>
```

### Header

```js live
<Card
  title='Default size card'
  extra={<a href='#'>More</a>}
  style={{ width: 300 }}
>
  <p style={{ margin: 0 }}>Card content</p>
  <p style={{ margin: 0 }}>Card content</p>
  <p style={{ margin: 0 }}>Card content</p>
</Card>
```

#### Title with Icon

```js
import { MdCreate } from 'react-icons/md'
```

```js live
<Card
  title={
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Text strong style={{ marginRight: 10 }}>
        Category 1
      </Text>
      <MdCreate />
    </div>
  }
  style={{ width: 300 }}
>
  <p style={{ margin: 0 }}>Card content</p>
  <p style={{ margin: 0 }}>Card content</p>
  <p style={{ margin: 0 }}>Card content</p>
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
import { MdSettings, MdCreate, MdMoreHoriz } from 'react-icons/md'
```

```js live
<Card
  title='Actions'
  style={{ width: 300 }}
  actions={[<MdSettings />, <MdCreate />, <MdMoreHoriz />]}
>
  <p style={{ margin: 0 }}>Card content</p>
  <p style={{ margin: 0 }}>Card content</p>
  <p style={{ margin: 0 }}>Card content</p>
</Card>
```

### Card Slider

```js
import { AiFillPushpin, AiOutlinePushpin } from 'react-icons/ai'
```

```js live
function CardSlider() {
  const { CardSlider } = Card

  const [dropdownValue, setDropdownValue] = useState('has changed')
  const menuArray = ['has changed', 'has increased', 'has decreased']
  const menu = (
    <Menu>
      {menuArray.map((menuItem, idx) => (
        <Menu.Item
          onClick={() => {
            setDropdownValue(menuItem)
          }}
          key={idx}
        >
          {menuItem}
        </Menu.Item>
      ))}
    </Menu>
  )
  const cardOne = {
    title: (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Text strong style={{ marginRight: 10 }}>
          Category 1
        </Text>
        <AiFillPushpin />
      </div>
    ),
    style: { width: '300px' },
    content: (
      <>
        <Text>Notify me when selected value</Text>
        <div
          style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            padding: '8px 12px',
            margin: '10px 0px',
            background: '#ebebeb',
            borderRadius: '4px',
            color: 'rgb(32, 32, 32)'
          }}
        >
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed
            nisi eget nunc tristique gravida. Cras ullamcorper libero a dapibus
            ullamcorper. Quisque malesuada molestie lorem non dignissim. Cras
            luctus sodales libero viverra mollis. Praesent fermentum felis eget
            augue lacinia rutrum. Nunc sit amet lacus nisi. In in erat
            fringilla, varius diam sit amet, consectetur tellus. Morbi et purus
            odio.
          </Text>
        </div>
        <Dropdown.Button
          overlay={menu}
          style={{ width: '100%' }}
          button={{
            endIcon: <MdExpandMore />,
            block: true
          }}
        >
          {dropdownValue}
        </Dropdown.Button>
      </>
    )
  }
  const cardTwo = {
    title: (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Text strong style={{ marginRight: 10 }}>
          Category 2
        </Text>
        <AiFillPushpin />
      </div>
    ),
    style: { width: '300px' },
    content: (
      <>
        <Text>Notify me when selected value</Text>
        <div
          style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            padding: '8px 12px',
            margin: '10px 0px',
            background: '#ebebeb',
            borderRadius: '4px',
            color: 'rgb(32, 32, 32)'
          }}
        >
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed
            nisi eget nunc tristique gravida. Cras ullamcorper libero a dapibus
            ullamcorper. Quisque malesuada molestie lorem non dignissim. Cras
            luctus sodales libero viverra mollis. Praesent fermentum felis eget
            augue lacinia rutrum. Nunc sit amet lacus nisi. In in erat
            fringilla, varius diam sit amet, consectetur tellus. Morbi et purus
            odio.
          </Text>
        </div>
        <Dropdown.Button
          overlay={menu}
          style={{ width: '100%' }}
          button={{
            endIcon: <MdExpandMore />,
            block: true
          }}
        >
          {dropdownValue}
        </Dropdown.Button>
      </>
    )
  }
  const cardThree = {
    title: (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Text strong style={{ marginRight: 10 }}>
          Category 3
        </Text>
        <AiFillPushpin />
      </div>
    ),
    style: { width: '300px' },
    content: (
      <>
        <Text>Notify me when selected value</Text>
        <div
          style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            padding: '8px 12px',
            margin: '10px 0px',
            background: '#ebebeb',
            borderRadius: '4px',
            color: 'rgb(32, 32, 32)'
          }}
        >
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed
            nisi eget nunc tristique gravida. Cras ullamcorper libero a dapibus
            ullamcorper. Quisque malesuada molestie lorem non dignissim. Cras
            luctus sodales libero viverra mollis. Praesent fermentum felis eget
            augue lacinia rutrum. Nunc sit amet lacus nisi. In in erat
            fringilla, varius diam sit amet, consectetur tellus. Morbi et purus
            odio.
          </Text>
        </div>
        <Dropdown.Button
          overlay={menu}
          style={{ width: '100%' }}
          button={{
            endIcon: <MdExpandMore />,
            block: true
          }}
        >
          {dropdownValue}
        </Dropdown.Button>
      </>
    )
  }
  return <CardSlider cards={[cardOne, cardTwo, cardThree]} />
}
```
