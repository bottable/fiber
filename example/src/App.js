import React from 'react'
import { ExampleComponent, UIProvider, zh_TW } from 'fiber'

const App = () => {
  return (
    <UIProvider locale={zh_TW}>
      <ExampleComponent locale={{welcome: 'locale overwrite'}} mt="516px" background="pink" text="text" />
    </UIProvider>
  )
}

export default App
