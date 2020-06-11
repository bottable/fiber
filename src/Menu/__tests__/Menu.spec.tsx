import { Menu, Text } from '../../'

import React from 'react'
import { render } from 'test/utils'

describe('Menu & Menu Items', () => {
  it('renders correctly', () => {
    const menu = render(
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

    expect(menu).toMatchSnapshot()
  })
})
