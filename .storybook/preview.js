import React from 'react'
import { UIProvider } from 'fiber'
import themes from 'fiber/UIProvider/themes'
import { configure, addDecorator } from '@storybook/react'

const { light } = themes

addDecorator((storyFn) => <UIProvider theme={light}>{storyFn()}</UIProvider>)

configure(require.context('../docs', true, /\.js$/), module)
