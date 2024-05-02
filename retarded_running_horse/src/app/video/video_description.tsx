"use client"

import { useState } from "react";
import { ButtonComponent } from "../button";
import Link from "next/link";
import Image from "next/image";
import { CHART_LINK } from "../constants";
import { type PageProps } from "../types";

export const Description = ({ props }: { props?: PageProps["video"] }) => {
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [flagged, setFlagged] = useState(false);
  return (
    <div id="description" className={`relative video-data w-full ${expanded ? "" : "h-[200px]"} min-h-[200px]`}>
      <div id="header" className="flex flex-col gap-2 w-full">
        <div className="flex flex-row w-full xl:h-auto lg:h-auto h-7 xl:flex-1 lg:flex-1 flex-none gap-2">
          <ButtonComponent onClick={() => {disliked && !liked ? (setLiked(true), setDisliked(false)) : setLiked(!liked) }} text="Like" src="/icons/like.svg" className={`${liked ? "bg-green-400" : ""} h-full p-0 px-0"`}/>
          <ButtonComponent onClick={() => {liked && !disliked ? (setDisliked(true), setLiked(false)) : setDisliked(!disliked) }} src="/icons/like.svg"  className={`${disliked ? "bg-red-400" : ""} h-full rotate-180 aspect-square p-0 px-0`}/>
          <ButtonComponent onClick={() => null} text="Share" className="h-full p-0 px-0"/>
          <ButtonComponent onClick={() => setFlagged(!flagged)} src="/icons/flag.svg" className={`${flagged ? "bg-red-400" : ""} h-full aspect-square p-0 px-0`}/>
        </div>
        <p className="text-sm text-stone-700">Uploaded by <Link href="" className="text-blue-600">{props?.author?.username}</Link> on {props?.upload_data}</p>
      </div>
      <div id="description" className="overflow-hidden h-full relative pb-20">
        <div className="font-semibold text-stone-700 h-fit">
          {props?.description}
        </div>
        {!expanded && <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"/>}
      </div>
      <div id="statistics">
        <div id="views" className="flex flex-row justify-end items-start gap-5 xl:h-[50px] lg:h-[50px] h-[30px]">
          <h5 className="xl:text-4xl lg:text-4xl text-xl font-mono font-bold text-stone-700">{props?.views}</h5>
          <Link target="_blank" href={CHART_LINK} className="rounded-md flex flex-row gap-2 p-1 border-[1px] xl:h-5/6 lg:h-5/6 h-full border-[#00000020]">
            <div className="aspect-square h-full relative">
              <Image src="/icons/chart.svg" alt="" fill />
            </div>
          </Link>
        </div>
        <div id="like">
          <div className="h-2 w-full bg-green-700 rounded overflow-clip">
            <div className="bg-green-700" />
            <div className="bg-red-700" />
          </div>
          <p className="text-stone-500"><span className="font-mono">{props?.likes}</span> likes, <span className="font-mono">{props?.dislikes}</span> dislikes</p>
        </div>
      </div>
      <button onClick={() => setExpanded(!expanded)} className="absolute bottom-0 left-0 right-0 h-8 py-2 bg-gradient-to-b from-transparent to-stone-300 rounded-b-md shadow-sm shadow-[#00000050]">
        <div className="flex flex-row justify-center items-center gap-5 h-full">
          <p className="font-medium">{expanded ? "Show less" : "Show more"}</p>
          <div className="h-full aspect-square relative">
            <Image src="/icons/chevron.svg" alt="" fill className={expanded ? "rotate-180" : ""}/>
          </div>
        </div>
      </button>
    </div>
  )
}