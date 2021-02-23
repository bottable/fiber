---
id: slider
title: Slider
---

This is for slider.

## Example

```js
import { Slider } from 'fiber-ui'
```

### Regular

```js live
function RegularSlider() {
  const [value, setValue] = useState(30)

  return (
    <>
      <Slider defaultValue={30} />
      <br />
      <Slider
        value={value}
        onChange={(value) => {
          console.log(value)
          setValue(value)
        }}
      />
    </>
  )
}
```

### Size

```js live
<>
  <Text>Medium Slider</Text>
  <Slider defaultValue={30} size='md' />
  <br />
  <Text>Large Slider</Text>
  <Slider defaultValue={30} size='lg' />
</>
```

### Step

```js live
<>
  <Text>Step = 2</Text>
  <Slider defaultValue={30} step={2} />
  <br />
  <Text>Step = 10</Text>
  <Slider defaultValue={30} step={10} />
</>
```

### Disabled

```js live
<Slider defaultValue={30} disabled />
```

### Vertical Slider

```js live
<div style={{ height: 300 }}>
  <Slider defaultValue={30} vertical />
</div>
```

### Marks

```js live
<>
  <Slider
    defaultValue={30}
    marks={{
      0: '0°C',
      26: '26°C',
      37: '37°C',
      100: {
        style: {
          color: '#f50'
        },
        label: <strong>100°C</strong>
      }
    }}
  />
  <br />
  <div style={{ height: 300 }}>
    <Slider
      defaultValue={30}
      vertical
      marks={{
        0: '0°C',
        26: '26°C',
        37: '37°C',
        100: {
          style: {
            color: '#f50'
          },
          label: <strong>100°C</strong>
        }
      }}
    />
  </div>
</>
```

### Display Slider Value

```js live
function DisplayValueSlider() {
  const [value, setValue] = useState(12)

  return (
    <div
      style={{
        borderRadius: 4,
        backgroundColor: '#e0e0e0',
        display: 'flex',
        alignItems: 'center',
        padding: 15,
        width: 250
      }}
    >
      <Slider
        value={value}
        onChange={(value) => {
          console.log(value)
          setValue(value)
        }}
        style={{ flex: 7 }}
        min={1}
        max={24}
        size='lg'
      />
      <Text strong style={{ flex: 3 }} textAlign='right'>
        {value} Hr
      </Text>
    </div>
  )
}
```
