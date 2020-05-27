import themes, { ThemeType } from './themes'
import locales, { LocaleType, LocaleProvider } from './locales'
import GlobalStyle from './GlobalStyle'

import React, { FC, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

const { light: defaultTheme } = themes
const { en_US: defaultLocale } = locales

interface UIProviderProps {
  children: ReactNode
  theme?: ThemeType
  locale?: LocaleType
}

export const UIProvider: FC<UIProviderProps> = ({
  children,
  theme = defaultTheme,
  locale = defaultLocale
}) => {
  return (
    <ThemeProvider theme={theme}>
      <LocaleProvider locale={locale}>
        <GlobalStyle />
        {children}
      </LocaleProvider>
    </ThemeProvider>
  )
}
