import { Card } from '..'

import React from 'react'
import { render } from 'test/utils'

describe('Card', () => {
  it('renders correctly', () => {
    const card = render(<Card />)

    expect(card).toMatchSnapshot()
  })
})
