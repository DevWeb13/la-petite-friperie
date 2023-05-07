import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <main className="flex  flex-col ">
      <div style={{ width: "100%", height: "100%", border: "1px solid red" }}>
        test
        {/* <Image
          src="/test.jpg"
          width={1920}
          height={1080}
          style={{
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
          }}
          alt="Picture of the author"
        /> */}
      </div>
    </main>
  );
};

export default Home;
