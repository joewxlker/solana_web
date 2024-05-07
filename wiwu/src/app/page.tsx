import Image from "next/image";
import { ImageCanvas } from "./components/image-canvas-component";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start text-black max-w-[2000px] m-auto">

      <div id="hero" className="w-screen bg-sky-300 relative h-screen xl:max-h-[800px] lg:max-h-[800px] max-h-[1200px] max-w-[2000px] mx-auto justify-center items-center flex xl:flex-row lg:flex-row flex-col">
          <Image src="/nobg.png" alt="" height={500} width={500} className="z-10" />
          <div className="flex flex-col gap-5 items-center justify-center z-10">
            <p className="font-heading xl:text-9xl lg:text-9xl text-6xl text-center text-white animate-bounce">$KITI</p>
            <audio id="music-player" src="/cafe.mp3" controls />
          </div>
          <Image src="/garden.png" alt="" fill />
      </div>

      <section className="min-h-80 w-full gap-5 flex flex-col justify-center items-center xl:px-5 lg:px-5 px-3 py-20">
        <p className="font-heading xl:text-3xl lg:text-3xl text-2xl text-center">ABOUT KITI</p>
        <div className="w-full flex xl:flex-row lg:flex-row flex-col-reverse justify-center items-center">
          <div className="h-80 aspect-square relative">
            <Image src="/nobg.png" alt="" height={500} width={500} />
          </div>
          <article className="flex-1 flex flex-col gap-6 p-5">
            <p className="text-xl font-body text-left">Once upon a quiet corner of the Solana blockchain lived KITI, the stylish cat. KITI adored wearing hats more than anything else in the world. Every day, he sported a different hat, ranging from vibrant fruit designs to whimsical fish shapes. While other cats lounged lazily, KITI strutted around, showcasing his unique headgear, oblivious to the hustle around him.</p>
            <p className="text-xl font-body text-left">One day, KITI&apos;s owner decided to create a digital representation of him on the Solana blockchain. KITI&apos;s digital counterpart, adorned with an array of eclectic hats, became a symbol of creativity in the fast-paced world of crypto. And so, KITI the fashionable cat, flaunted his fish and fruit hats, becoming a legend on the blockchain.</p>
          </article>
        </div>
      </section>

      <section className="bg-sky-300 min-h-80 w-full relative gap-3 flex flex-col justify-center items-center xl:px-5 lg:px-5 px-3 py-20">
        <p className="font-heading xl:text-3xl lg:text-3xl text-2xl text-center text-black z-10">$KITI VIDS</p>
        <div className="w-1/2 aspect-square z-10">
          <video src="/edit.mp4" className="h-full w-full" controls />
        </div>
        <Image src="/garden.png" alt="" fill />
      </section>

      <ImageCanvas />

    </main>
  );
}