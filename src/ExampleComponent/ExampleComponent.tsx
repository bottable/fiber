import { ThemeType } from '../UIProvider/themes'
import { useLocale } from '../UIProvider/locales'

import { StyledBlock } from './styles'

import { SpaceProps, HeightProps } from 'styled-system'
import React, { FC } from 'react'

export interface ExampleComponentLocale {
  welcome: string
  subText: string
}

export interface ExampleComponentProps
  extends HeightProps,
    SpaceProps,
    ThemeType {
  text?: string
  background?: string
  // allow overwrite to default locale
  locale?: ExampleComponentLocale
}

export const ExampleComponent: FC<ExampleComponentProps> = ({
  locale,
  text,
  ...props
}) => {
  const { locale: contextLocale } = useLocale()

  // Combine both locales to overwrite default
  const exampleComponentLocale = {
    ...contextLocale.ExampleComponent,
    ...locale
  } as ExampleComponentLocale
  const { welcome, subText } = exampleComponentLocale

  return (
    <StyledBlock {...props}>
      {welcome} {text} {subText}{' '}
    </StyledBlock>
  )
}
