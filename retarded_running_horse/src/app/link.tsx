import Link from "next/link"
import { type HTMLAttributes } from "react";

interface LinkProps extends HTMLAttributes<HTMLHeadingElement> { 
    href: string;
    text: string;
    target: "_self" | "_blank" 
};

export const LinkComponent = ({ href, text, target, ...rest }: LinkProps) => {
    return (
      <Link target={target} className="" href={href}>
        <h4 {...rest} className={`text-lg text-blue-700 ${rest.className}`}>{text}</h4>
      </Link>
    )
  }