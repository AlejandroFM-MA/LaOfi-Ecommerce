import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner"



const urbanist = Urbanist({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "LaOfi",
  description: "Bienvenidos a laofi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={urbanist.className}>
          <Navbar/>
          {children}
          <Toaster />
          <Footer />
          </body>
    </html>
  );
}
