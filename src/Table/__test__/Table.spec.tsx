import { Table } from '..'

import React from 'react'
import { render } from 'test/utils'

describe('Table', () => {
  it('renders correctly', () => {
    const table = render(<Table />)

    expect(table).toMatchSnapshot()
  })
})
