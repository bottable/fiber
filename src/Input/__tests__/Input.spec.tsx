import { Input } from '..'

import React from 'react'
import { render } from 'test/utils'

describe('Input', () => {
  it('renders correctly', () => {
    const block = render(<Input />)

    expect(block).toMatchSnapshot()
  })
})
