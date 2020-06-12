import { CodegenSample } from '..'

import React from 'react'
import { render } from 'test/utils'

describe('CodegenSample', () => {
  it('renders correctly', () => {
    const codegenSample = render(<CodegenSample />)

    expect(codegenSample).toMatchSnapshot()
  })
})
