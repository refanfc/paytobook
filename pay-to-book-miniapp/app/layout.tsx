
import './globals.css'
import { DynamicProvider } from '../lib/dynamic'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <DynamicProvider>{children}</DynamicProvider>
      </body>
    </html>
  )
}
