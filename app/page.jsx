import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <main className="flex  flex-col items-center justify-center ">
      <Link href="/articles">Articles</Link>
    </main>
  );
};

export default Home;
