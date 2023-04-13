import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-pink-900">


      <div className="border">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/Logo.svg"
          alt=" Logo"
          width={480}
          height={57}
          priority
        />
      </div>

   
    </main>
  )
}
