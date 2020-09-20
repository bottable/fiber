import { Checkbox } from '..'

import React from 'react'
import { render } from 'test/utils'

describe('Checkbox', () => {
  it('renders correctly', () => {
    const checkbox = render(<Checkbox />)

    expect(checkbox).toMatchSnapshot()
  })
})
