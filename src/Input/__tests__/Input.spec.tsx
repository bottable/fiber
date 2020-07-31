import { Input, PasswordInput, SearchInput } from '..'

import React from 'react'
import { render } from 'test/utils'
import SettingsIcon from '@material-ui/icons/Settings'

describe('Input', () => {
  it('renders correctly', () => {
    const block = render(
      <>
        <Input />
        <div>
          <Input size='lg' placeholder='Large Input' />
          <br />
          <br />
          <Input placeholder='Medium Input' />
          <br />
          <br />
          <Input size='sm' placeholder='Small Input' />
        </div>
        <div>
          <Input addonBefore='http://' addonAfter='.com' />
          <br />
          <br />
          <Input addonAfter={<SettingsIcon />} />
        </div>
        <div>
          <Input prefix='￥' suffix='RMB' />
          <br />
          <br />
          <Input prefix='￥' suffix='RMB' disabled />
          <br />
          <br />
          <Input addonBefore='http://' suffix='.com' />
        </div>

        <div>
          <Input placeholder='Borderless' bordered={false} />
        </div>

        <div>
          <Input placeholder='Disabled' disabled />
        </div>

        <div>
          <PasswordInput placeholder='Password' />
        </div>
        <div>
          <SearchInput
            placeholder='Search'
            onSearch={(value) => console.log(value)}
            enterButton
          />
          <br />
        </div>
      </>
    )

    expect(block).toMatchSnapshot()
  })
})
