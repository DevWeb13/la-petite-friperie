import '@/styles/globals.css'
import Head from './head'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head/>
      <body className='h-full'>{children}</body>
    </html>
  )
}
