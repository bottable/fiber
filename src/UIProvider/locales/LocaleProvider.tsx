/* eslint-disable camelcase */
import locales, { _LocaleType } from './locales'

import React, { FC, ReactNode, createContext } from 'react'

const { en_US } = locales

interface LocaleProviderProps {
  children: ReactNode
  locale: _LocaleType
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
