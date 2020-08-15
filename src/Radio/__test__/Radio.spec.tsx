import { Radio } from '..'

import React from 'react'
import { render } from 'test/utils'

describe('Radio', () => {
  it('renders correctly', () => {
    const radio = render(
      <>
        <div>
          <Radio> Radio </Radio>
        </div>
      </>
    )

    expect(radio).toMatchSnapshot()
  })
})
