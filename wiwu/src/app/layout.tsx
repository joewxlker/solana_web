import "~/styles/globals.css";

import { Gochi_Hand, Kablammo } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const heading = Kablammo({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

const body = Gochi_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "$PIPU",
  description: "Once upon a quiet corner of the Solana blockchain lived Pipu, the stylish cat.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const links = {
  telegram: "",
  twitter: "",
  chart: "",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" id="root">
      <body className={`font-sans bg-gradient-to-b bg-p1 ${heading.variable} ${body.variable}`}>
        <header className="flex flex-row w-screen h-12 bg-sky-400 shadow-shadow py-2 shadow-md fixed top-0 xl:px-5 lg:px-5 px-3 z-50">
          <div className="flex-1 h-full flex items-center">
            <p className="text-4xl text-white font-heading drop-shadow-md">KITI</p>
          </div>
          <div className="flex-1 flex flex-row justify-end items-center gap-5" title="telegram">
            <Link href={links.telegram} className="h-full aspect-square relative">
              <Image src="/icons/telegram.svg" className="drop-shadow-md" alt="" fill />
            </Link>
            <Link href={links.twitter} className="h-full aspect-square relative" title="twitter">
              <Image src="/icons/twitter.svg" className="drop-shadow-md" alt="" fill />
            </Link>
            <Link href={links.chart} className="h-full aspect-square relative" title="chart">
              <Image src="/icons/chart.svg" alt="" className="drop-shadow-md" fill />
            </Link>
          </div>
        </header>
        {children}
        <footer className="h-40 w-full bg-sky-400 flex flex-col items-center justify-center">
          <p className="font-heading xl:text-2xl lg:text-2xl text-md text-white text-center">CA: 63yW79f6d7xJhgBj6QF4bzm2btjMBMhcq391hL3Kij6J</p>
        </footer>
        </body>
    </html>
  );
}
