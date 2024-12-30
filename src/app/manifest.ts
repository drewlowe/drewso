import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Drew Lowe - Software Architect',
        short_name: 'Drew Lowe',
        description: 'The personal website of Drew Lowe to showcase software projects and writing.',
        start_url: '/',
        display: 'standalone',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}