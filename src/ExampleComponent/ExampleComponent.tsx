import { StyledBlock } from './styles'
import { SpaceProps, HeightProps } from 'styled-system'
import { ThemeType } from '../UIProvider/themes'
import { LocaleContext } from '../UIProvider/locales/LocaleProvider';
import defaultLocale from '../UIProvider/locales/locales/en_US';

import React, { useContext } from 'react'

export interface ExampleComponentProps extends HeightProps, SpaceProps, ThemeType {
  text?: string
  background?: string
  //allow overwrite to default locale
  locale?: ExampleComponentLocale
}

export interface ExampleComponentLocale {
  welcome: string;
  subText: string;
}

export const ExampleComponent = (props: ExampleComponentProps) => {
  const { locale, text } = props
  const { locale: contextLocale = defaultLocale } = useContext(LocaleContext);
  const tableLocale = { ...contextLocale.ExampleComponent, ...locale } as ExampleComponentLocale;
  const { welcome, subText } = tableLocale || {};
  return (
    <StyledBlock {...props} >{welcome} {text} {subText} </StyledBlock>
  )
}
