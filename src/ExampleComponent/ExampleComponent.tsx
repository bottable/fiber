import { StyledBlock } from './styles'
import { SpaceProps, HeightProps } from 'styled-system'
import { ThemeType } from '../UIProvider/themes'
import { LocaleContext } from '../UIProvider/locales/LocaleProvider';

import React from 'react'

export interface ExampleComponentProps extends HeightProps, SpaceProps, ThemeType {
  text?: string
  background?: string
}

export const ExampleComponent = (props: ExampleComponentProps) => {
  return (
    <LocaleContext.Consumer>
      {({locale: ctx}) =>
        <StyledBlock {...props} >{ctx.locale === 'en_US' ? "Example Components" : "範例"} {props.text}</StyledBlock>
      }
    </LocaleContext.Consumer>
  )
}
