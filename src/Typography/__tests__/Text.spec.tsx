import { Text } from '..'

import React from 'react'
import { render } from 'test/utils'

describe('Text', () => {
  it('renders correctly', () => {
    const TextGroup = render(
      <>
        <Text> This is a text </Text>
        <Text strong> This is a strong text </Text>
        <Text highlight> This is a highlighted text </Text>
        <Text code> const fiber = "hello world" </Text>
        <Text size={4}> This is a text of size 4. </Text>
        <Text size={5} highlight code>
          This is a code of size 5, highlighted.
        </Text>
      </>
    )

    expect(TextGroup).toMatchSnapshot()
  })
})
