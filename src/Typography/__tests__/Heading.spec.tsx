import { Heading } from '..'

import React from 'react'
import { render } from 'test/utils'

describe('Heading', () => {
  it('renders correctly', () => {
    const HeadingGroup = render(
      <>
        <Heading size={1}> Heading 1 </Heading>
        <Heading size={2}> Heading 2 </Heading>
        <Heading size={3}> Heading 3 </Heading>
        <Heading size={4}> Heading 4 </Heading>
        <Heading size={5}> Heading 5 </Heading>
        <Heading size={6}> Heading 6 </Heading>
        <Heading size={7}> Heading 7 </Heading>
        <Heading size={8}> Heading 8 </Heading>
      </>
    )

    expect(HeadingGroup).toMatchSnapshot()
  })
})
