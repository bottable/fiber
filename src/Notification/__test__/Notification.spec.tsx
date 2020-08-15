import { Notification } from '..'

import React from 'react'
import { render } from 'test/utils'

describe('Notification', () => {
  it('renders correctly', () => {
    const notification = render(
      <>
        <div>
          <Notification destroy={() => {}} />
        </div>
      </>
    )

    expect(notification).toMatchSnapshot()
  })
})
