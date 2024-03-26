import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: [ "100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900" ]
});

export const metadata: Metadata = {
  title: "Carefood",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#F6F6F6] max-w-screen-2xl`}>
        <Navbar />
        {children}</body>
    </html>
  );
}
