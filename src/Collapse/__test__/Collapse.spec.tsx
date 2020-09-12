import { Collapse } from '..'

import React from 'react'
import { render } from 'test/utils'

describe('Collapse', () => {
  it('renders correctly', () => {
    const collapse = render(<Collapse />)

    expect(collapse).toMatchSnapshot()
  })
})
