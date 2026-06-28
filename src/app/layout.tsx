import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Maël Gdr — Coach sportif à Rennes & Montfort-sur-Meu',
  description:
    'Coach sportif diplômé STAPS EAPA et CQP Personal Trainer. Coaching individuel, perte de poids, trail et programme Cap retraite autour de Rennes Ouest et Montfort-sur-Meu.',
  keywords: [
    'coach sportif Rennes',
    'personal trainer Montfort-sur-Meu',
    'coaching trail Bretagne',
    'perte de poids coach',
    'activité physique adaptée retraite',
    'STAPS EAPA',
  ],
  authors: [{ name: 'Maël Gdr' }],
  creator: 'Maël Gdr',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    title: 'Maël Gdr — Coach sportif à Rennes & Montfort-sur-Meu',
    description:
      'Coaching individuel, trail, perte de poids et Cap retraite. Premier échange offert.',
    siteName: 'Maël Gdr Coach',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={manrope.variable}>
      <body className="font-sans antialiased text-[#1d1d1f] bg-white overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
