import Image from "next/image";
import Link from "next/link";

const TELEGRAM = "https://t.me/dipshit_portal";
const TWITTER = "https://twitter.com/dipshitsolana";
const TELEGRAM_ICON = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png";
const TWITTER_ICON = "https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.1827530304.1713571200&semt=ais";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#202020] to-[#202020] text-white">
      <header className="w-screen h-14 flex flex-row fixed top-0 p-2 xl:px-12 lg:px-12 md:px-12 z-50 max-w-[2000px]">
        <div className="flex-1 h-full">
          <div className="aspect-square h-full relative rounded-full overflow-clip">
            <Image src="https://i.ibb.co/3fMhgJF/file.jpg " alt="" fill />
          </div>
        </div>
        <div className="flex-1 flex flex-row justify-end items-center h-full">
          <Link href="#about" className="h-full px-5 flex justify-center items-center">
            <h3 className="font-heading text-white text-xl">
              ABOUT
            </h3>
          </Link>
        </div>
      </header>

      <div className="flex-1 flex flex-col max-w-[2000px] w-full">
        <div className="h-screen max-h-[800px] w-full flex xl:flex-row lg:flex-row md:flex-row flex-col-reverse justify-center items-center xl:px-12 lg:px-12 md:px-12">
          <div className="flex-1 h-full w-full flex flex-col xl:items-start lg:items-start md:items-start items-center justify-center gap-5">
            <h1 className="text-2xl xl:text-left lg:text-left md:text-left text-center">
              WELCOME TO <br/><span className="text-7xl">DIPSHITSOLANA</span>
            </h1>
            <Link href={TELEGRAM} className="px-5 flex flex-col justify-center items-start group">
              <h3 className="font-heading text-white text-xl">
                TELEGRAM
              </h3>
              <div className="h-[2px] bg-white group-hover:w-full w-0 transition-all duration-300"/>
            </Link>
            <Link href={TWITTER} className="px-5 flex flex-col justify-center items-start group">
              <h3 className="font-heading text-white text-xl">
                TWITTER
              </h3>
              <div className="h-[2px] bg-white group-hover:w-full w-0 transition-all duration-300"/>
            </Link>
          </div>
          <div id="retarded-characters" className="flex-1 h-full w-full relative flex items-center justify-center">
          </div>
        </div>

        <section id="about" className="min-h-60 w-full xl:py-40 lg:py-40 md:py-40 py-0">
          <div className="bg-white h-full w-full flex xl:flex-row lg:flex-row xl:px-12 lg:px-12 md:px-12 gap-20 py-20 md:flex-row flex-col justify-evenly items-center">
            <article className="flex-1 flex flex-col gap-5">
              <h2 className="text-black text-3xl">TOKEN LAUNCH</h2>
              <p className="flex-1 text-black">
                SOLANA BLOCKCHAIN
              </p>
            </article>
            <article className="flex-1 flex flex-col gap-5">
              <h2 className="text-black text-3xl">TOTAL SUPPLY</h2>
              <p className="flex-1 text-black">
                100M
              </p>
            </article>
            <article className="flex-1 flex flex-col gap-5">
              <p className="flex-1 text-black">
                MINT WILL BE REVOKED <br/>
                LIQUIDITY WILL BE BURNED <br/>
              </p>
            </article>
          </div>
        </section>
      </div>

      <footer className="w-screen h-14 flex flex-row items-center justify-between p-2 xl:px-12 lg:px-12 md:px-12 max-w-[2000px]">
        <p className="text-2xl">FIND US ON SOCIAL MEDIA</p>
        <div className=" flex flex-row justify-end items-center gap-5 h-full">
          <Link href={TELEGRAM} className="h-full relative aspect-square px-5 rounded-full overflow-clip grayscale hover:scale-105 transition-transform duration-300 flex justify-center items-center">
            <Image src={TELEGRAM_ICON} alt="" fill />
          </Link>
          <Link href={TWITTER} className="h-full relative aspect-square px-5 rounded-full overflow-clip grayscale hover:scale-105 transition-transform duration-300 flex justify-center items-center">
            <Image src={TWITTER_ICON} alt="" fill />
          </Link>
        </div>
      </footer>
    </main>
  );
}
