import { Button } from '..'

import React from 'react'
import { render } from 'test/utils'
import { MdDelete } from 'react-icons/md'

describe('Button', () => {
  it('renders correctly', () => {
    const ButtonGroup = render(
      <>
        <div>
          <Button type='primary' disabled>
            Primary Button
          </Button>
          <Button disabled>Default Button</Button>
          <Button type='dashed' disabled>
            Dashed Button
          </Button>
          <Button type='text' disabled>
            Text Button
          </Button>
          <Button type='link' disabled>
            Link Button
          </Button>
        </div>
        <div style={{ backgroundColor: 'rgb(190, 200, 200)', paddingTop: 12 }}>
          <Button type='primary' ghost>
            Primary Button
          </Button>
          <Button ghost>Default Button</Button>
          <Button type='dashed' ghost>
            Dashed Button
          </Button>
          <Button type='text' ghost>
            Text Button
          </Button>
          <Button type='link' ghost>
            Link Button
          </Button>
        </div>
        <div
          style={{
            width: 200,
            border: '1px solid black',
            padding: 25,
            margin: 10
          }}
        >
          <Button type='primary' block>
            Primary Button
          </Button>
          <Button block>Default Button</Button>
          <Button type='dashed' block>
            Dashed Button
          </Button>
          <Button type='text' block>
            Text Button
          </Button>
          <Button type='link' block>
            Link Button
          </Button>
        </div>
        <div>
          <Button icon={<MdDelete />} />
          <Button icon={<MdDelete />} shape='circle' />
          <Button icon={<MdDelete />} shape='round' />
        </div>
        <div>
          <Button icon={<MdDelete />} size='lg'>
            Trash
          </Button>
          <Button icon={<MdDelete />}>Trash</Button>
          <Button icon={<MdDelete />} size='sm'>
            Trash
          </Button>
        </div>
      </>
    )

    expect(ButtonGroup).toMatchSnapshot()
  })
})
