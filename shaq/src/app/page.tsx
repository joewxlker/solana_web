import Image from "next/image";
import { ShaqComponent } from "./components/shaq-component";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start text-white max-w-[2000px] m-auto">

      <div id="hero" className="w-screen relative h-screen xl:max-h-[800px] lg:max-h-[800px] max-h-[1200px] max-w-[2000px] mx-auto">
        <div className="inset-0 z-10 absolute flex flex-row items-center xl:px-5 lg:px-5 px-3">
          <div className="flex xl:w-1/2 lg:w-1/2 w-full flex-col xl:items-stretch lg:items-stretch items-center gap-2">
            <div className="w-full aspect-square relative xl:hidden lg:hidden block">
              <Image src="/shaq-nobg.png" alt="" fill />
            </div>
            <h1 className="font-heading xl:text-8xl lg:text-6xl text-5xl text-white drop-shadow-md lg:text-left text-center bg-p2 shadow-shadow shadow-md p-2">
              The stats win nothing. <span id="text">I’m still sexy.</span> I’m still great.
            </h1>
            <p className="font-body text-xl lg:text-left text-center bg-p2 shadow-shadow shadow-xl p-2 text-stone-800">~ SHEQ ONILL</p>
          </div>
        </div>
        <Image src="/hero.png" className="xl:block lg:block hidden" alt="" fill />
      </div>

      <section className="min-h-80 w-full gap-3 bg-p2 shadow-shadow shadow-md flex flex-col justify-center items-center xl:px-5 lg:px-5 px-3 py-20">
        <p className="font-heading text-4xl text-center">WELCOME TO SHEQ ONILL ON SOLANA</p>
        <video className="aspect-video w-full border-white border-8" src="/vid.mp4" controls />
      </section>

      <section className="min-h-80 w-full gap-3 shadow-shadow shadow-md flex flex-col justify-center items-center xl:px-5 lg:px-5 px-3 py-20">
        <p className="font-heading text-4xl text-center">ABOUT SHEQ</p>
        <div className="w-full flex xl:flex-row lg:flex-row flex-col-reverse justify-center items-center">
          <div className="h-80 aspect-square relative">
            <Image src="/graphics/head_8.png" alt="" fill/>
          </div>
          <article className="flex-1">
            <p className="text-2xl font-body text-left">On teh gretest blokchane of all tiem, he stands as a monumint to teh glory of meme tokens, emboding the sprit of the game and beyond. As a towering figer on teh cort, 
            his dunks are lyke thunder from teh sky, shakin teh very foundatons of teh arena. In short, Sheq Onill isn’t just a sports icon; he’s a multi-faceted entertainer, lighting up teh blockchain with his unique 
            blend of talent and charisma, a true meme token hero in the world of crypto!</p>
          </article>
        </div>
      </section>

      <ShaqComponent />

    </main>
  );
}

