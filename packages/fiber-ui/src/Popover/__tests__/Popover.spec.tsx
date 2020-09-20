import { Popover, Button } from '../..'

import React from 'react'
import { render } from 'test/utils'

describe('Popover', () => {
  it('renders correctly', () => {
    const popover = render(
      <Popover>
        <Button type='primary'>Hover me</Button>
      </Popover>
    )

    expect(popover).toMatchSnapshot()
  })
})
