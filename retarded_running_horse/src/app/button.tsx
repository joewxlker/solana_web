import Image from "next/image";
import Link from "next/link"
import { type HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    text?: string;
    src?: string;
}

export const ButtonComponent = ({ onClick, src, text, ...rest }: ButtonProps) => {
    return (
        <button onClick={onClick} disabled={!onClick} {...rest} className={`xl:text-md lg:text-md text-xs font-semibold text-stone-700 shadow-[#00000020] shadow-inner border-[#00000030] button border-[2px] h-full xl:w-auto lg:w-auto w-full rounded flex flex-row justify-center items-center gap-2 ${rest.className}`}>
            {text && <h4 className="">{text}</h4>}
            {src && <div className="h-full aspect-square p-1"><div className="relative h-full w-full"><Image src={src} alt="" fill /></div></div>}
        </button>
    )
}

export const ButtonLinkComponent = ({ href, text }: { href: string, text: string }) => {
    return (
        <Link className={`shadow-[#00000020] shadow-inner border-[#00000030] button border-[2px] h-full xl:w-auto lg:w-auto w-full px-8 rounded flex flex-row justify-center items-center`} href={href}>
            <h4 className="xl:text-lg lg:text-lg text-sm text-stone-700 font-semibold">{text}</h4>
        </Link>
    )
}