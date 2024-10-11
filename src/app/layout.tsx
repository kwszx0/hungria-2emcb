import type { Metadata, Viewport } from 'next'
import { inter } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hungria - 2EMCB',
  description: 'Portfólio informativo --- VIII JIMM',
  icons: {
    icon: '/assets/image-05.png',
    shortcut: '/assets/image-05.png',
    apple: '/assets/image-05.png',
  },
  alternates: {
    canonical: 'https://hungria-2emcb.vercel.app/',
  },
  openGraph: {
    title: 'Hungria - 2EMCB',
    description: 'Portfólio informativo --- VIII JIMM',
    url: 'https://hungria-2emcb.vercel.app/',
    siteName: 'Hungria - 2EMCB',
    images: [
      {
        url: 'https://hungria-2emcb.vercel.app/assets/image-05.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'pt-BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hungria - 2EMCB',
    description: 'Portfólio informativo --- VIII JIMM',
    creator: '@szxkw0',
    images: [
      {
        url: 'https://hungria-2emcb.vercel.app/assets/image-05.jpg',
        width: 800,
        height: 600,
      },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#4D6130',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
