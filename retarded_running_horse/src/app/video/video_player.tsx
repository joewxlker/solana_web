"use client"

import Image from "next/image";
import { type ChangeEvent, type HTMLAttributes, useEffect, useRef, useState } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    icon_css?: string;
    src: string;
}
const ControlButton = ({ src, icon_css, onClick }: ButtonProps) => {
    return (
    <button onClick={onClick} disabled={!onClick} className={`h-full aspect-square p-2  bg-gradient-to-b from-white to-stone-400 border-b-[#00000040] border-b-[2px] border-x-[#00000030] border-x-[1px]`}>
        <div className="relative h-full w-full">
            <Image src={src} alt="" fill className={icon_css}/>
        </div>
    </button>
    )
}

export const Viewport = ({ src }: { src: string }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                void videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleVideoProgress = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
        }
    };

    const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTime = e.target.value;
        if (videoRef.current) {
            videoRef.current.currentTime = parseInt(newTime);
            setCurrentTime(parseInt(newTime));
        }
    };

    const toggleFullscreen = () => {
        if (videoRef.current) {
            if (document.fullscreenElement) {
                void document.exitFullscreen();
            } else {
                void videoRef.current.requestFullscreen();
            }
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
            }
        }, 100);

        if(!isPlaying){
            clearInterval(interval);
        }
        
        return () => clearInterval(interval);
    }, [src, isPlaying]);

    useEffect(() => {
    if (videoRef.current) {
        if(Number.isNaN(videoRef.current.duration) || typeof videoRef.current.duration !== 'number'){
            return;
        }
        setDuration(videoRef.current.duration);
    }
    }, [src, videoRef]);

    return (
        <div id="viewport" className="w-full h-fit">
            <video 
            ref={videoRef} 
            className="aspect-video w-full bg-black"
            onTimeUpdate={handleVideoProgress}
            onPause={() => setIsPlaying(false)}
            >
                <source src={src} type="video/mp4" />
            </video>
            <div id="control-panel" className="h-10 w-full flex flex-row">
                {!isPlaying && <ControlButton src="/icons/triangle.svg" icon_css={`rotate-180`} onClick={togglePlay} />}
                {isPlaying && <ControlButton src="/icons/pause.svg" onClick={togglePlay} />}
                <div id="slider" className="flex-1 bg-gradient-to-b from-white to-stone-400 border-b-[#00000040] border-b-[2px] border-x-[#00000030] border-x-[1px] flex flex-row items-center px-5">
                    <input
                        type="range"
                        min="0"
                        max={duration}
                        value={currentTime}
                        onChange={handleSliderChange}
                        className="flex-1 h-3 bg-gradient-to-b from-stone-400 to-stone-300 border-b-[1px] border-b-stone-100 border-x-[1px] border-x-stone-400"
                    />
                </div>
                <ControlButton src="/icons/expand.svg" onClick={toggleFullscreen} />
            </div>
        </div>
    );
};