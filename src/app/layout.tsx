import { Inter, Roboto_Mono } from 'next/font/google'
import Providers from '../components/Providers'
import '../styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export const metadata = {
  title: 'MCP Coin — The AI Context Economy',
  description: 'A revolutionary protocol for buying, selling, and managing AI context packages using blockchain technology.',
  keywords: ['AI', 'blockchain', 'context', 'NFT', 'Solana', 'cryptocurrency'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
} 