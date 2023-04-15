import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const  Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-pink-800">


      <div className="p-9  rounded-3xl shadow shadow-zinc-800 bg-pink-300 ">
        tests
        <Image
          className="relative dark:invert"
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

export default Home