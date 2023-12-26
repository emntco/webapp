import type { Metadata } from 'next'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  siteName: 'EMINENT',
  title: 'EMINENT',
  description: 'Esports community hosting events and producing media.',
  images: [
    {
      url: 'https://emnt.co/_next/image?url=https%3A%2F%2Femnt.co%2Fmedia%2Fsl-csgo-splash.png&w=3840&q=75',
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
