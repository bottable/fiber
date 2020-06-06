import { UIProvider } from '../src'
import themes, { ThemeType } from '../src/UIProvider/themes'

import renderer from 'react-test-renderer'
import React, { ReactChild } from 'react'

const { light } = themes

// Provides UI Context to tested components
export const render = (node: ReactChild, theme: ThemeType = light) =>
  renderer.create(<UIProvider theme={theme}>{node}</UIProvider>).toJSON()
