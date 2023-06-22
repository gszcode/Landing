import './globals.scss'
import { Barlow } from 'next/font/google'

const barlow = Barlow({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Landing Page',
  description: 'Landing Page - Notimation',
  themeColor: '#fff'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={barlow.className}>{children}</body>
    </html>
  )
}
