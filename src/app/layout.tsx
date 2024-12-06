import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav1 from "@/components/nav1";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Nav2 from "@/components/nav2";
import Footer from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Exclusive",
  description: "Ecommerce app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav1 />
        <Nav2 />
        <div className="w-full h-[1px] mt-[20px] opacity-[0.3] bg-black">

        </div>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
