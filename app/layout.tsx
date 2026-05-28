import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "آکادمی تحلیل‌گر | آموزش مدرن برنامه‌نویسی",
  description: "مرجع آموزش وردپرس هدلس و Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${inter.className} bg-[#030303] antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
