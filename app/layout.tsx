import type { Metadata } from 'next'
import Providers from './providers'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { ThemeToggle } from '@/components/ThemeToggle'

export const metadata: Metadata = {
  title: "Pranava Institute",
  description: "Yoga and Wellness Training",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
