import { Menu, Text } from '../../'

import React from 'react'
import { render } from 'test/utils'

describe('Block Menu & Menu Items', () => {
  it('renders correctly', () => {
    const block = render(
      <Menu>
        <Menu.Item>
          <Text> Item 1 </Text>
        </Menu.Item>
        <Menu.Item>
          <Text> Item 2 </Text>
        </Menu.Item>
        <Menu.Item>
          <Text> Item 3 </Text>
        </Menu.Item>
      </Menu>
    )

    expect(block).toMatchSnapshot()
  })
})

describe('Inline Menu & Menu Items', () => {
  it('renders correctly', () => {
    const inline = render(
      <Menu inline>
        <Menu.Item>
          <Text> Item 1 </Text>
        </Menu.Item>
        <Menu.Item>
          <Text> Item 2 </Text>
        </Menu.Item>
        <Menu.Item>
          <Text> Item 3 </Text>
        </Menu.Item>
      </Menu>
    )

    expect(inline).toMatchSnapshot()
  })
})
