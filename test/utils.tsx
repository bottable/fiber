import { UIProvider } from '../src'
import themes from '../src/UIProvider/themes'

import renderer from 'react-test-renderer'
import React, { ReactChild } from 'react'

const { blue } = themes

// Provides UI Context to tested components
export const render = (node: ReactChild, theme: typeof blue = blue) =>
  renderer.create(<UIProvider theme={theme}>{node}</UIProvider>).toJSON()
