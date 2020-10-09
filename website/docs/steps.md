---
id: steps
title: Steps
---

This is for steps.

## Example

```js
import { Steps, Step } from 'fiber-ui'
```

### Regular

```js live
function RegularSteps() {
  const [current, setCurrent] = useState(0)

  return (
    <>
      <Steps current={current}>
        <Steps.Step title='first' subtitle='subtitle'></Steps.Step>
        <Steps.Step title='second' subtitle='subtitle'></Steps.Step>
        <Steps.Step title='third' subtitle='subtitle'></Steps.Step>
      </Steps>
      <br />
      <Space>
        <Button
          onClick={() => {
            setCurrent((prevCurrent) => Math.max(prevCurrent - 1, 0))
          }}
        >
          Previous
        </Button>
        <Button
          onClick={() => {
            setCurrent((prevCurrent) => Math.min(prevCurrent + 1, 2))
          }}
        >
          Next
        </Button>
      </Space>
    </>
  )
}
```

### Vertical Steps

```js live
function VerticalSteps() {
  const [current, setCurrent] = useState(0)

  return (
    <>
      <Steps current={current} vertical>
        <Steps.Step title='first' subtitle='subtitle'>
          <div
            style={{
              width: 250,
              border: '1px solid black',
              padding: 25
            }}
          >
            First Content
            <Space>
              <Button
                onClick={() => {
                  setCurrent((prevCurrent) => Math.max(prevCurrent - 1, 0))
                }}
              >
                Previous
              </Button>
              <Button
                onClick={() => {
                  setCurrent((prevCurrent) => Math.min(prevCurrent + 1, 2))
                }}
              >
                Next
              </Button>
            </Space>
          </div>
        </Steps.Step>
        <Steps.Step title='second' subtitle='subtitle'>
          <div
            style={{
              width: 250,
              border: '1px solid black',
              padding: 25
            }}
          >
            Second Content
            <Space>
              <Button
                onClick={() => {
                  setCurrent((prevCurrent) => Math.max(prevCurrent - 1, 0))
                }}
              >
                Previous
              </Button>
              <Button
                onClick={() => {
                  setCurrent((prevCurrent) => Math.min(prevCurrent + 1, 2))
                }}
              >
                Next
              </Button>
            </Space>
          </div>
        </Steps.Step>
        <Steps.Step title='third' subtitle='subtitle'>
          <div
            style={{
              width: 250,
              border: '1px solid black',
              padding: 25
            }}
          >
            Third Content
            <Space>
              <Button
                onClick={() => {
                  setCurrent((prevCurrent) => Math.max(prevCurrent - 1, 0))
                }}
              >
                Previous
              </Button>
              <Button
                onClick={() => {
                  setCurrent((prevCurrent) => Math.min(prevCurrent + 1, 2))
                }}
              >
                Next
              </Button>
            </Space>
          </div>
        </Steps.Step>
      </Steps>
      <br />
    </>
  )
}
```

### Customizable Icons

```js
import {
  MdPerson,
  MdVerifiedUser,
  MdPayment,
  MdInsertEmoticon
} from 'react-icons/md'
```

```js live
function CustomizableIconsSteps() {
  const [current, setCurrent] = useState(0)

  return (
    <>
      <Steps current={current}>
        <Steps.Step title='Login' icon={<MdPerson />}></Step>
        <Steps.Step title='Verification' icon={<MdVerifiedUser />}></Step>
        <Steps.Step title='Pay' icon={<MdPayment />}></Step>
        <Steps.Step title='Done' icon={<MdInsertEmoticon />}></Step>
      </Steps>
      <br />
      <Space>
        <Button
          onClick={() => {
            setCurrent((prevCurrent) => Math.max(prevCurrent - 1, 0))
          }}
        >
          Previous
        </Button>
        <Button
          onClick={() => {
            setCurrent((prevCurrent) => Math.min(prevCurrent + 1, 3))
          }}
        >
          Next
        </Button>
      </Space>
    </>
  )
}
```

### Clickable

```js live
function ClickableSteps() {
  const [current, setCurrent] = useState(0)
  const onChange = (newCurrent) => {
    console.log(newCurrent)
    setCurrent(newCurrent)
  }

  return (
    <React.Fragment>
      <Steps current={current} onChange={onChange}>
        <Steps.Step title='first' subtitle='subtitle'></Steps.Step>
        <Steps.Step title='second' subtitle='subtitle'></Steps.Step>
        <Steps.Step title='third' subtitle='subtitle'></Steps.Step>
      </Steps>
    </React.Fragment>
  )
}
```
