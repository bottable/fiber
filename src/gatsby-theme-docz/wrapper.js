import React from 'react'
import { Helmet } from 'react-helmet-async'
import { UIProvider } from 'fiber'

export default ({ children }) => (
  <UIProvider>
    <Helmet>
      <link
        rel='icon'
        type='image/png'
        href='https://image.flaticon.com/icons/svg/2115/2115916.svg'
      />
    </Helmet>
    {children}
  </UIProvider>
)
