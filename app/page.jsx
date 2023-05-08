import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <main
      className="flex  flex-col  "
      style={{ height: "calc(100vh - 6rem)", width: "100vw" }}
    ></main>
  );
};

export default Home;
