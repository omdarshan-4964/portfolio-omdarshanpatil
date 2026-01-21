import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://portfolio-omdarshanpatil.vercel.app'
  
  const routes = [
    '',
    '/#about',
    '/#projects',
    '/#skills',
    '/#education',
    '/#certifications',
    '/#awards',
    '/#contact',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
