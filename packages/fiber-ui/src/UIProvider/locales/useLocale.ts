import { LocaleContext } from './LocaleProvider'

import { useContext } from 'react'

export const useLocale = () => useContext(LocaleContext)
