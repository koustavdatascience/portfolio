const DEFAULT_METADATA = {
  siteTitle: 'Koustav Roy | Data Analyst',
  siteDescription:
    'Koustav Roy is an aspiring Data Analyst who turns data into clear insights and meaningful decisions.',
  siteUrl: 'https://github.com/koustavdatascience/portfolio',
  openGraphTitle: 'Koustav Roy | Data Analyst',
  openGraphDescription:
    'Data, projects, creativity, and things I am building.',
  defaultOgImageUrl: '/twittercard.png',
  defaultOgImageAlt: 'Koustav Roy — Data Analyst',
  keywords: [
    'product engineer',
    'design first software engineer',
    'creative technologist',
    'UX focused developer',
    'startup engineer',
    'full stack builder',
    'systems thinker',
  ],
}

export type SiteMetadata = {
  siteTitle: string
  siteDescription: string
  siteUrl: string
  openGraphTitle: string
  openGraphDescription: string
  defaultOgImageUrl: string
  defaultOgImageAlt: string
  keywords: string[]
  twitterHandle?: string
}

export async function getSiteMetadata(): Promise<SiteMetadata> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.NEXT_PUBLIC_SANITY_DATASET) {
    return DEFAULT_METADATA as SiteMetadata
  }
  try {
    const { client } = await import('./client')
    const { urlFor } = await import('./image')
    const data = await client.fetch<{
      siteTitle?: string
      siteDescription?: string
      siteUrl?: string
      openGraphTitle?: string
      openGraphDescription?: string
      defaultOgImage?: { asset?: { _ref?: string }; alt?: string }
      keywords?: string[]
      twitterHandle?: string
    } | null>(
      `*[_type == "siteSettings"][0]{
        siteTitle,
        siteDescription,
        siteUrl,
        openGraphTitle,
        openGraphDescription,
        defaultOgImage,
        keywords,
        twitterHandle
      }`
    )

    if (!data) {
      return DEFAULT_METADATA as SiteMetadata
    }

    const ogImageUrl = data.defaultOgImage
      ? urlFor(data.defaultOgImage).width(1200).height(630).url()
      : DEFAULT_METADATA.defaultOgImageUrl

    const ogImageAlt =
      (data.defaultOgImage as { alt?: string } | undefined)?.alt ??
      DEFAULT_METADATA.defaultOgImageAlt

    return {
      siteTitle: data.siteTitle ?? DEFAULT_METADATA.siteTitle,
      siteDescription: data.siteDescription ?? DEFAULT_METADATA.siteDescription,
      siteUrl: data.siteUrl ?? DEFAULT_METADATA.siteUrl,
      openGraphTitle: data.openGraphTitle ?? data.siteTitle ?? DEFAULT_METADATA.openGraphTitle,
      openGraphDescription:
        data.openGraphDescription ?? data.siteDescription ?? DEFAULT_METADATA.openGraphDescription,
      defaultOgImageUrl: ogImageUrl,
      defaultOgImageAlt: ogImageAlt,
      keywords: Array.isArray(data.keywords) ? data.keywords : DEFAULT_METADATA.keywords,
      twitterHandle: data.twitterHandle,
    }
  } catch {
    return DEFAULT_METADATA as SiteMetadata
  }
}
