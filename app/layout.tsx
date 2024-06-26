import type { Metadata } from "next";
import localFont from "next/font/local";

import { Footer, Header } from "@/components/shared";
import "./globals.css";

const clashGrotesk = localFont({
  src: [
    {
      path: '../fonts/ClashGrotesk-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/ClashGrotesk-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/ClashGrotesk-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/ClashGrotesk-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/ClashGrotesk-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Makoko",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-main text-black/70 ${clashGrotesk.className} transition-all ease-in-out`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
