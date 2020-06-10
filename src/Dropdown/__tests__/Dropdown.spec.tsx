import { Dropdown, Menu, MenuItem, Text } from '../../'

import React from 'react'
import { render } from 'test/utils'

describe('Menu & Menu Items', () => {
  it('renders correctly', () => {
    const menu = (
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

    const dropdown = render(
      <Dropdown menu={menu} trigger='hover'>
        <Text> Hover Me </Text>
      </Dropdown >
    )

    expect(dropdown).toMatchSnapshot()
  })
})
