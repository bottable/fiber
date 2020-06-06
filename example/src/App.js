/* eslint-disable camelcase */
import React from 'react'
import { Space, UIProvider, zh_TW } from 'fiber'

const App = () => {
  return (
    <UIProvider locale={zh_TW}>
      <Space>
        <h1>Hello</h1>
        <h1>Hello</h1>
      </Space>
      <h1>Hello</h1>
    </UIProvider>
  )
}

export default App
