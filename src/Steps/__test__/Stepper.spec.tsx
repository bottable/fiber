import { Steps, Step } from '..'

import React from 'react'
import { render } from 'test/utils'
import PersonIcon from '@material-ui/icons/Person'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import PaymentIcon from '@material-ui/icons/Payment'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'

describe('Steps', () => {
  it('renders correctly', () => {
    const steps = render(
      <>
        <Steps current={1}>
          <Step title='first' subtitle='subtitle' />
          <Step title='second' subtitle='subtitle' />
          <Step title='third' subtitle='subtitle' />
        </Steps>
        <Steps current={1} vertical>
          <Step title='first' subtitle='subtitle'>
            <div
              style={{
                width: 200,
                border: '1px solid black',
                padding: 25
              }}
            >
              First Content
            </div>
          </Step>
          <Step title='second' subtitle='subtitle'>
            <div
              style={{
                width: 200,
                border: '1px solid black',
                padding: 25
              }}
            >
              Second Content
            </div>
          </Step>
          <Step title='third' subtitle='subtitle'>
            <div
              style={{
                width: 200,
                border: '1px solid black',
                padding: 25
              }}
            >
              Third Content
            </div>
          </Step>
        </Steps>
        <Steps current={1}>
          <Step title='Login' icon={<PersonIcon />} />
          <Step title='Verification' icon={<VerifiedUserIcon />} />
          <Step title='Pay' icon={<PaymentIcon />} />
          <Step title='Done' icon={<InsertEmoticonIcon />} />
        </Steps>
      </>
    )

    expect(steps).toMatchSnapshot()
  })
})
