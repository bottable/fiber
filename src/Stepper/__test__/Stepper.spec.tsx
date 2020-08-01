import { Stepper } from '..'

import React from 'react'
import { render } from 'test/utils'

describe('Stepper', () => {
  it('renders correctly', () => {
    const stepper = render(<Stepper />)

    expect(stepper).toMatchSnapshot()
  })
})
