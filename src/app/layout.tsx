import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'boco.ai',
  description: 'The ultimate AI-powered SaaS platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-primary text-secondary antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
