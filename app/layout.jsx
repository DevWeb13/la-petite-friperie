import "@/styles/globals.css";
import Head from "./head";
import Header from "@/components/home/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />

      <body className="h-full">
        <Header />
        {children}
      </body>
    </html>
  );
}
