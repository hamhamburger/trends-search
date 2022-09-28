import type { NextPage } from 'next'
import Head from 'next/head'

type Props = {
  title?: string
  description?: string
  faviconUrl?: string
}
const SITENAME = 'Trends'
const SITEFAVICONURL = 'http://localhost'
const SITEDESCRIPTION = 'hogehoge'

const MyHead: NextPage = ({ title, description, faviconUrl }: Props): JSX.Element => {
  const pageTitle = title ? `${SITENAME} - ${title}` : SITENAME
  const pageFaviconUrl = faviconUrl ? faviconUrl : SITEFAVICONURL
  const pageDescription = description ? description : SITEDESCRIPTION

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta content={pageTitle} property='og:title' />
      <meta content={pageFaviconUrl} property='og:image' />
      <meta content={pageDescription} property='og:description' />
    </Head>
  )
}
export default MyHead
