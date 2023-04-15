import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import UserLoggedOut from "@/components/auth/UserLoggedOut";
import UserLoggedIn from "@/components/auth/UserLoggedIn";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <main className="flex  flex-col items-center justify-center ">
      <Link href="/articles">Articles</Link>
      <div className="p-9  rounded-3xl shadow shadow-zinc-800 bg-pink-300 ">
        tests
        <Image
          className="relative dark:invert"
          src="/Logo.svg"
          alt=" Logo"
          width={50}
          height={50}
          priority
        />
      </div>
      <UserLoggedOut />
      <UserLoggedIn />
    </main>
  );
};

export default Home;
