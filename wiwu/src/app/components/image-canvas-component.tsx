"use client";

import React, { useEffect } from "react";
import { ImageClass } from "./image-canvas";
import { Music } from "./music";

export const ImageCanvas = () => {
    useEffect(() => {
        const image_class = new ImageClass();
        return () => image_class.destroy(); 
    }, []);
    
    useEffect(() => {
        const music = new Music();
        return () => music.destroy(); 
    }, []);
    return <canvas className="absolute top-0 z-40 pointer-events-none" id="image_canvas" />
}