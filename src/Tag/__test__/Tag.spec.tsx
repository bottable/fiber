import { Tag } from '..'

import React from 'react'
import { render } from 'test/utils'

describe('Tag', () => {
  it('renders correctly', () => {
    const tag = render(<Tag />)

    expect(tag).toMatchSnapshot()
  })
})
