import { Slider } from '..'

import React from 'react'
import { render } from 'test/utils'

describe('Slider', () => {
  it('renders correctly', () => {
    const slider = render(<Slider />)

    expect(slider).toMatchSnapshot()
  })
})
