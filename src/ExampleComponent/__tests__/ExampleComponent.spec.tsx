import { ExampleComponent } from '..'

import React from 'react'
import { render } from 'test/utils'

describe('ExampleComponent', () => {
  it('renders correctly', () => {
    const exampleComponent = render(
      <ExampleComponent
        locale={{ welcome: 'locale overwrite' }}
        mt='516px'
        background='pink'
        text='text'
      />
    )

    expect(exampleComponent).toMatchSnapshot()
  })
})
