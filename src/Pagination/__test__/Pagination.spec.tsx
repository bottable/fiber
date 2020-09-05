import { Pagination } from '..'

import React from 'react'
import { render } from 'test/utils'

describe('Pagination', () => {
  it('renders correctly', () => {
    const pagination = render(<Pagination />)

    expect(pagination).toMatchSnapshot()
  })
})
