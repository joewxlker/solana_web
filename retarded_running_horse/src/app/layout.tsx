import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { LinkComponent } from "./link";
import { TELEGRAM_LINK, TWITTER_LINK } from "./constants";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "retarded running horse",
  description: "The retarded running horse meme token on the solana blockchain",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} bg-white text-black h-screen flex flex-col`}>
        <header className="flex flex-col h-16 w-screen items-center border-b-[1px] border-b-[#00000020] xl:px-5 lg:px-5 px-2">
          <div className="max-w-[2000px] w-full h-full flex flex-row justify-between">
            <div className="w-fit h-full p-2">
              <Link href="/" className="h-full aspect-video grid place-content-center relative overflow-clip ">
                <Image src="/youtube/logo.png" alt="" height={440} width={1105} />
              </Link>
            </div>
            <div className="xl:flex lg:flex flex-1 hidden flex-row gap-5 items-center py-5">
              <div className="w-1/2 flex flex-row">
                <input className="flex-1 border-[1px] border-[#00000050]"/>
                <button className={`shadow-[#00000020] bg-[#00000005] shadow-inner border-[#00000030] button border-[2px] h-full xl:w-auto lg:w-auto w-full px-2 rounded-e flex flex-row justify-center items-center`}>
                  <h4 className="text-lg text-stone-700 font-medium">Search</h4>
                </button>
              </div>
              <div className="h-full w-[2px] bg-stone-300"/>
              <LinkComponent target="_self" href="#about" text="Browse" />
              <div className="h-full w-[2px] bg-stone-300"/>
              <LinkComponent target="_self" href="#about" text="Movies" />
              <div className="h-full w-[2px] bg-stone-300"/>
              <LinkComponent target="_self" href="#about" text="Uploads" />
              <div className="h-full w-[2px] bg-stone-300"/>
            </div>
            <div className="h-full w-fit flex flex-row justify-end items-center gap-5 p-2">
              <LinkComponent target="_blank" href={TELEGRAM_LINK} text="Telegram" />
              <LinkComponent target="_blank" href={TWITTER_LINK} text="Twitter" />
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
