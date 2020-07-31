import { Dropdown } from '..'

import React from 'react'
import { render } from 'test/utils'

describe('Dropdown', () => {
  it('renders correctly', () => {
    const dropdown = render(<Dropdown />)

    expect(dropdown).toMatchSnapshot()
  })
})
