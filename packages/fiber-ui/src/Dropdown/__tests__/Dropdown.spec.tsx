import { Dropdown, Menu, Text } from '../../'

import React from 'react'
import { render } from 'test/utils'

describe('Menu & Menu Items', () => {
  it('renders correctly', () => {
    const menu = (
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

    const dropdown = render(
      <Dropdown overlay={menu} trigger='hover'>
        <Text> Hover Me </Text>
      </Dropdown>
    )

    expect(dropdown).toMatchSnapshot()
  })
})
