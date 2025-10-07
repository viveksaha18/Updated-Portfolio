import { Inter } from "next/font/google";
import "./globals.css"
import Navbar from "@/_components/Navbar";
import Footer from "@/_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vivek | Portfolio",
  description: "Professional portfolio built with Next.js and shadcn/ui",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
