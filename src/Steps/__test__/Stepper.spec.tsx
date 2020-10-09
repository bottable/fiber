import { Steps } from '..'

import React from 'react'
import { render } from 'test/utils'
import {
  MdPerson,
  MdVerifiedUser,
  MdPayment,
  MdInsertEmoticon
} from 'react-icons/md'

describe('Steps', () => {
  it('renders correctly', () => {
    const steps = render(
      <>
        <Steps current={1}>
          <Steps.Step title='first' subtitle='subtitle' />
          <Steps.Step title='second' subtitle='subtitle' />
          <Steps.Step title='third' subtitle='subtitle' />
        </Steps>
        <Steps current={1} vertical>
          <Steps.Step title='first' subtitle='subtitle'>
            <div
              style={{
                width: 200,
                border: '1px solid black',
                padding: 25
              }}
            >
              First Content
            </div>
          </Steps.Step>
          <Steps.Step title='second' subtitle='subtitle'>
            <div
              style={{
                width: 200,
                border: '1px solid black',
                padding: 25
              }}
            >
              Second Content
            </div>
          </Steps.Step>
          <Steps.Step title='third' subtitle='subtitle'>
            <div
              style={{
                width: 200,
                border: '1px solid black',
                padding: 25
              }}
            >
              Third Content
            </div>
          </Steps.Step>
        </Steps>
        <Steps current={1}>
          <Steps.Step title='Login' icon={<MdPerson />} />
          <Steps.Step title='Verification' icon={<MdVerifiedUser />} />
          <Steps.Step title='Pay' icon={<MdPayment />} />
          <Steps.Step title='Done' icon={<MdInsertEmoticon />} />
        </Steps>
      </>
    )

    expect(steps).toMatchSnapshot()
  })
})
