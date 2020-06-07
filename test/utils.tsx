import { UIProvider } from '../src'
import themes, { ThemeType } from '../src/UIProvider/themes'

import renderer from 'react-test-renderer'
import React, { ReactChild } from 'react'

const { blue } = themes

// Provides UI Context to tested components
export const render = (node: ReactChild, theme: ThemeType = blue) =>
  renderer.create(<UIProvider theme={theme}>{node}</UIProvider>).toJSON()
