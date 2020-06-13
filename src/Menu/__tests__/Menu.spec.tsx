import { Menu, Text, Divider } from '../../'

import React from 'react'
import { render } from 'test/utils'

describe('Block Menu & Menu Items', () => {
  it('renders correctly', () => {
    const block = render(
      <Menu>
        <Menu.Sub title={<span> Sub Menu 1 </span>}>
          <Menu.Sub title={<span> Sub Menu 1.1 </span>}>
            <Menu.Item>
              Item 1
            </Menu.Item>
            <Menu.Item>
              Item 2
            </Menu.Item>
          </Menu.Sub>
          <Menu.Item>
            Item 3
          </Menu.Item>
        </Menu.Sub>
        <Menu.Sub title={<span> Sub Menu 2 </span>}>
          <Menu.Item>
            Item 4
          </Menu.Item>
          <Menu.Item>
            Item 5
          </Menu.Item>
          <Menu.Item>
            Item 6
          </Menu.Item>
        </Menu.Sub>
        <Divider />
        <Menu.Item>
          Item 3
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
