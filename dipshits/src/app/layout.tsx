import "~/styles/globals.css";

import { Architects_Daughter } from "next/font/google";

const inter = Architects_Daughter({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "dipshit",
  description: "Welcome to the amazing dipshit token on solana. Immerse yourself in a community of top tier dipshits as we set out to build our dipshit army.",
  icons: [{ rel: "icon", url: "/favicon.webp" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>{children}</body>
    </html>
  );
}
