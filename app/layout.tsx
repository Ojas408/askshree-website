import './styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AskShree Solutions - Transforming Leads Into Predictable Revenue',
  description: 'AskShree Solutions — Lead generation, appointment setting, and growth systems for technology companies.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
