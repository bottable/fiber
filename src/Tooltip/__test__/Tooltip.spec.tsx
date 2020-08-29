import { Tooltip } from '..'

import React from 'react'
import { render } from 'test/utils'

describe('Tooltip', () => {
  it('renders correctly', () => {
    const tooltip = render(
      <Tooltip>
        <span>Tooltip</span>
      </Tooltip>
    )

    expect(tooltip).toMatchSnapshot()
  })
})
