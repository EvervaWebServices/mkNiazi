import './globals.css'
import type { Metadata } from 'next'
import localFont from '@next/font/local'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MK Niazi',
  description: 'Professional Graphic Designer',
}

const visby = localFont({
  src: [
    {
      path: '../public/visby/VisbyCF-DemiBold.otf',
      weight: '600'
    },
    {
      path: '../public/visby/VisbyCF-Medium.otf',
      weight: '400'
    }
  ],
  variable: '--font-visby'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={visby.className }>{children}</body>
    </html>
  )
}
