import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DevHouse | Selected Works',
  description: 'Software house boutique. Desenvolvemos produtos digitais sólidos e escaláveis.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="selection:bg-neutral-900 selection:text-white">
        {children}
      </body>
    </html>
  )
}
