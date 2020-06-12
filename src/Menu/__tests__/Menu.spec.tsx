import { Menu, Text } from '../../'

import React from 'react'
import { render } from 'test/utils'

describe('Menu & Menu Items', () => {
  it('renders correctly', () => {
    const menu = render(
      <Menu>
        <Menu.Inline>
          <Text> Item 1 </Text>
        </Menu.Inline>
        <Menu.Inline>
          <Text> Item 2 </Text>
        </Menu.Inline>
        <Menu.Inline>
          <Text> Item 3 </Text>
        </Menu.Inline>
      </Menu>
    )

    expect(menu).toMatchSnapshot()
  })
})
