import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "@/lib/Providers";
import Navbar from "@/components/Shared/Navbar/Navbar";
import BottomMenu from "@/components/Shared/BottomMenu/BottomMenu";

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
  title: "Recipedia | Recipe sharing app",
  description:
    "An application for sharing recipe you can get subscription to hide ad and get premium content",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="max-h-screen">

          <Navbar />
          <div className="overflow-y-hidden h-[80%]">
            <Providers>{children}</Providers>
          </div>
          <BottomMenu />
        </div>
      </body>
    </html>
  );
}
