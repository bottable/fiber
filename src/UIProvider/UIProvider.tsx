import themes, { ThemeType } from './themes'
import { LocaleProvider } from './locales'
import defaultLocale from './locales/locales/zh_TW';
import GlobalStyle from './GlobalStyle'
import React, { FC, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { Locale } from './locales/LocaleProvider';

const { light: defaultTheme } = themes

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
        <GlobalStyle />
        {children}
      </LocaleProvider>
    </ThemeProvider>
  )
}
