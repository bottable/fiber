import React from 'react'
import { ExampleComponent } from 'fiber'

export default {
  title: 'Sample'
}

export const Example = () => (
  <ExampleComponent
    locale={{ welcome: 'locale overwrite' }}
    mt='516px'
    background='black'
    text='text'
  />
)

Example.story = {
  name: 'Example Component'
}
