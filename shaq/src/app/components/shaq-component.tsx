"use client";

import React, { useEffect, useState } from "react";
import { Shaq } from "./shaq";

export const ShaqComponent = () => {

    useEffect(() => {
        const shaq = new Shaq();
        return () => shaq.destroy(); 
    }, []);

    return <canvas className="absolute top-0 z-40" id="shaq_canvas" />
}