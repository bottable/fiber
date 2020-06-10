import { Menu, MenuItem, Text } from '../../'

import React from 'react'
import { render } from 'test/utils'

describe('Menu & Menu Items', () => {
  it('renders correctly', () => {
    const menu = render(
      <Menu>
        <MenuItem>
          <Text> Item 1 </Text>
        </MenuItem>
        <MenuItem>
          <Text> Item 2 </Text>
        </MenuItem>
        <MenuItem>
          <Text> Item 3 </Text>
        </MenuItem>
      </Menu>
    )

    expect(menu).toMatchSnapshot()
  })
})
