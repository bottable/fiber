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
        <Step title='first' subtitle='subtitle'></Step>
        <Step title='second' subtitle='subtitle'></Step>
        <Step title='third' subtitle='subtitle'></Step>
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
        <Step title='first' subtitle='subtitle'>
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
        </Step>
        <Step title='second' subtitle='subtitle'>
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
        </Step>
        <Step title='third' subtitle='subtitle'>
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
        </Step>
      </Steps>
      <br />
    </>
  )
}
```

### Customizable Icons

```js
import {
  Person,
  VerifiedUser,
  Payment,
  InsertEmoticon
} from '@material-ui/icons'
```

```js live
function CustomizableIconsSteps() {
  const [current, setCurrent] = useState(0)

  return (
    <>
      <Steps current={current}>
        <Step title='Login' icon={<Person />}></Step>
        <Step title='Verification' icon={<VerifiedUser />}></Step>
        <Step title='Pay' icon={<Payment />}></Step>
        <Step title='Done' icon={<InsertEmoticon />}></Step>
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
        <Step title='first' subtitle='subtitle'></Step>
        <Step title='second' subtitle='subtitle'></Step>
        <Step title='third' subtitle='subtitle'></Step>
      </Steps>
    </React.Fragment>
  )
}
```