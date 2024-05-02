"use client"

import { useState } from "react";
import { LinkComponent } from "../link";
import { ButtonComponent } from "../button";
import { type PageProps } from "../types";

export const VideoHeader = ({ title, author }: { title?: string, author?: PageProps["video"]["author"]}) => {
  const [subscribed, setSubscribed] = useState(false);
  return (
    <div id="video-header" className="flex flex-col justify-center gap-2 items-start">
      <h1 className="text-3xl font-bold text-stone-800">{title}</h1>
      <div className="flex flex-row gap-2 items-center xl:justify-start lg:justify-start justify-between w-full">
        <LinkComponent target="_self" href="/" text="pepedeployer" className="font-bold" />
        <div className="rounded-md flex flex-row gap-2 p-1 border-[1px] xl:h-full lg:h-full border-[#00000020] h-8">
          <p className="">{`${(author?.video_count ?? 0)} videos`}</p>
          <ButtonComponent onClick={() => null} src="/icons/chevron.svg" className="h-full aspect-square p-0 px-0"/>
        </div>
        {!subscribed && <ButtonComponent onClick={() => setSubscribed(true)} text="Subscribe" className="px-1  w-auto" />}
        {subscribed && <ButtonComponent text="Subscribed" className="px-1 bg-red-500 text-white font-normal w-auto" />}
      </div>
    </div>
  )
}