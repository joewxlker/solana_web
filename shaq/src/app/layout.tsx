import "~/styles/globals.css";

import { Bangers, Gochi_Hand } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const heading = Bangers({
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
  title: "$SHEQ",
  description: "On teh gretest blokchane of all tiem, he stands as a monumint to teh glory of meme tokens, emboding the sprit of the game and beyond.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans bg-gradient-to-b bg-p1 ${heading.variable} ${body.variable}`}>
        <header className="flex flex-row w-screen h-12 bg-stone-900 shadow-shadow py-2 shadow-md fixed top-0 xl:px-5 lg:px-5 px-3 z-50">
          <div className="flex-1 h-full flex items-center">
            <p className="text-4xl text-white font-heading drop-shadow-md">SHEQ ONILL</p>
          </div>
          <div className="xl:h-20 lg:h-20 h-16 aspect-square relative shadow-shadow shadow-md border-stone-900 border-4">
              <Image src="/image.png" className="drop-shadow-md" alt="" fill />
          </div>
          <div className="flex-1 flex flex-row justify-end items-center gap-5" title="telegram">
            <Link href="https://t.me/SheqOfficial" className="h-full aspect-square relative">
              <Image src="/icons/telegram.svg" className="drop-shadow-md" alt="" fill />
            </Link>
            <Link href="https://x.com/OnillSheq" className="h-full aspect-square relative" title="twitter">
              <Image src="/icons/twitter.svg" className="drop-shadow-md" alt="" fill />
            </Link>
            <Link href="https://dexscreener.com/solana/s2kXZmC5Qojc23skh99zLwov7b8rFJZ4nDPKK2T4rDr" className="h-full aspect-square relative" title="chart">
              <Image src="/icons/chart.svg" alt="" className="drop-shadow-md" fill />
            </Link>
          </div>
        </header>
        {children}
        <footer className="h-40 w-full bg-stone-900 flex flex-col items-center justify-center">
          <p className="font-heading xl:text-2xl lg:text-2xl text-stone-400 text-center">CA: s2kXZmC5Qojc23skh99zLwov7b8rFJZ4nDPKK2T4rDr</p>
        </footer>
        </body>
    </html>
  );
}
