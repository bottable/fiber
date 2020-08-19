import { Popover } from '..'

import React from 'react'
import { render } from 'test/utils'

describe('Popover', () => {
  it('renders correctly', () => {
    const popover = render(<Popover />)

    expect(popover).toMatchSnapshot()
  })
})
