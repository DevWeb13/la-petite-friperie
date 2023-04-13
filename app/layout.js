import './globals.css'

export const metadata = {
  title: 'La petite friperie',
  description: 'Boutique solidaire de revente de vêtements de seconde main a prix réduit',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
