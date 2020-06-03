import React from 'react'
import { ExampleComponent, UIProvider } from 'fiber'

const App = () => {
  return (
    <UIProvider locale="zh_TW">
      <ExampleComponent mt="516px" background="pink" text='Create React Library Example 😄' />
    </UIProvider>
  )
}

export default App
