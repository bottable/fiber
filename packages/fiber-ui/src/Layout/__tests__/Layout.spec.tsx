import { Layout } from '..'

import React from 'react'
import { render } from 'test/utils'

describe('Layout', () => {
  it('renders correctly', () => {
    const layout = render(<Layout />)

    expect(layout).toMatchSnapshot()
  })
})
