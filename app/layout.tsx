import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aurora Studio - Custom Software Solutions',
  description: 'Custom software solutions, built fast and done right. Web development, WordPress, automation, and support services.',
  keywords: ['web development', 'WordPress development', 'automation', 'software agency', 'custom software'],
  authors: [{ name: 'Aurora Studio' }],
  openGraph: {
    title: 'Aurora Studio - Custom Software Solutions',
    description: 'Custom software solutions, built fast and done right.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
