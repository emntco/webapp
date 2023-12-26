import type { Metadata } from 'next'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  siteName: 'EMINENT',
  title: 'EMINENT',
  description: 'Esports community hosting events and producing media.',
  images: [
    {
      url: 'https://payloadcms.com/images/og-image.jpg',
    },
  ],
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
