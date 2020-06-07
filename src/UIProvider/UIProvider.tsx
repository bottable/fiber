import themes, { ThemeType } from './themes'
import { LocaleProvider } from './locales'
import defaultLocale from './locales/locales/en_US'
import { GlobalStyle, fontStyle } from './styles'
import { Locale } from './locales/LocaleProvider'

import { Helmet } from 'react-helmet'
import React, { FC, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

const { blue: defaultTheme } = themes

interface UIProviderProps {
  children: ReactNode
  theme?: ThemeType
  locale?: Locale
}

export const UIProvider: FC<UIProviderProps> = ({
  children,
  theme = defaultTheme,
  locale = defaultLocale
}) => {
  return (
    <ThemeProvider theme={theme}>
      <LocaleProvider locale={locale}>
        <Helmet>{fontStyle}</Helmet>
        <GlobalStyle />
        {children}
      </LocaleProvider>
    </ThemeProvider>
  )
}
