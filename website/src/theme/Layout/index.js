import { UIProvider } from '../../../../src'

import AnnouncementBar from '@theme/AnnouncementBar'
import Footer from '@theme/Footer'
import Head from '@docusaurus/Head'
import Navbar from '@theme/Navbar'
import React from 'react'
import ThemeProvider from '@theme/ThemeProvider'
import UserPreferencesProvider from '@theme/UserPreferencesProvider'
import useBaseUrl from '@docusaurus/useBaseUrl'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

function Providers({ children }) {
  return (
    <ThemeProvider>
      <UserPreferencesProvider>{children}</UserPreferencesProvider>
    </ThemeProvider>
  )
}

function Layout(props) {
  const { siteConfig = {} } = useDocusaurusContext()
  const {
    favicon,
    title: siteTitle,
    themeConfig: { image: defaultImage },
    url: siteUrl
  } = siteConfig
  const {
    children,
    title,
    noFooter,
    description,
    image,
    keywords,
    permalink,
    version
  } = props
  const metaTitle = title ? `${title} | ${siteTitle}` : siteTitle
  const metaImage = image || defaultImage
  const metaImageUrl = useBaseUrl(metaImage, {
    absolute: true
  })
  const faviconUrl = useBaseUrl(favicon)

  return (
    <Providers>
      <Head>
        {/* TODO: Do not assume that it is in english language */}
        <html lang='en' />

        {metaTitle && <title>{metaTitle}</title>}
        {metaTitle && <meta property='og:title' content={metaTitle} />}
        {favicon && <link rel='shortcut icon' href={faviconUrl} />}
        {description && <meta name='description' content={description} />}
        {description && (
          <meta property='og:description' content={description} />
        )}
        {version && <meta name='docsearch:version' content={version} />}
        {keywords && keywords.length && (
          <meta name='keywords' content={keywords.join(',')} />
        )}
        {metaImage && <meta property='og:image' content={metaImageUrl} />}
        {metaImage && <meta property='twitter:image' content={metaImageUrl} />}
        {metaImage && (
          <meta name='twitter:image:alt' content={`Image for ${metaTitle}`} />
        )}
        {permalink && <meta property='og:url' content={siteUrl + permalink} />}
        {permalink && <link rel='canonical' href={siteUrl + permalink} />}
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <AnnouncementBar />
      <Navbar />
      <UIProvider>{children}</UIProvider>
      {!noFooter && <Footer />}
    </Providers>
  )
}

export default Layout
