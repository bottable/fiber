import { Input } from '..'

import React from 'react'
import { render } from 'test/utils'
import { MdSettings } from 'react-icons/md'

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
          <Input addonAfter={<MdSettings />} />
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
      </>
    )

    expect(block).toMatchSnapshot()
  })
})
