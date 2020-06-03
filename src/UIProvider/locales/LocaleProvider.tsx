/* eslint-disable camelcase */
import { ExampleComponentLocale } from '../../ExampleComponent'

import locales from './locales'

import React, { FC, ReactNode, createContext } from 'react'

const { en_US } = locales

interface LocaleProviderProps {
  children: ReactNode
  locale: Locale
}

export interface Locale {
  locale: string
  ExampleComponent: ExampleComponentLocale
}

export const LocaleContext = createContext({ locale: en_US })

export const LocaleProvider: FC<LocaleProviderProps> = ({
  children,
  locale
}) => {
  return (
    <LocaleContext.Provider value={{ locale }}>
      {children}
    </LocaleContext.Provider>
  )
}
