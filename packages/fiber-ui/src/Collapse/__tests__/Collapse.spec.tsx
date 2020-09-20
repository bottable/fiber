import { Collapse } from '..'

import React from 'react'
import { render } from 'test/utils'

describe('Collapse', () => {
  it('renders correctly', () => {
    const collapse = render(
      <Collapse>
        <Collapse.Panel header='This is panel header 1' key='1'>
          <p>Hello</p>
        </Collapse.Panel>
        <Collapse.Panel header='This is panel header 2' key='2'>
          <p>Hello</p>
        </Collapse.Panel>
        <Collapse.Panel header='This is panel header 3' key='3'>
          <p>Hello</p>
        </Collapse.Panel>
      </Collapse>
    )

    expect(collapse).toMatchSnapshot()
  })
})
