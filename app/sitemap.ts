import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const baseUrl = 'https://lumierestudio.nl';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: '2025-01-15',
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/over-ons`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/diensten`,
      lastModified: '2025-01-15',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/diensten/laser-ontharing`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/diensten/gelnagels`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/diensten/gezichtsbehandelingen`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/galerij`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/getuigenissen`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: '2025-01-15',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/algemene-voorwaarden`,
      lastModified: '2025-01-15',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
