import "@/styles/globals.css";
import Head from "./head";
import Header from "@/components/home/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />

      <body
        className="bg-green-300 h-full bg-[url('/illustration.jpg')] bg-no-repeat bg-cover
      "
      >
        <Header />

        {children}
      </body>
    </html>
  );
}
