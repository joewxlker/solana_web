import Image from "next/image"
import { type PageProps } from "../types"
import Link from "next/link"

export const Suggestions = ({ all_pages }: { all_pages: PageProps["video"][]}) => {
    return (
        <div className="flex flex-col gap-5">
            <h2 className="text-stone-500 font-semibold border-b-[#00000050] border-b-[2px]">Suggestions</h2>
            {all_pages.map(({ id, title, author, views, thumbnail }) => (<Link href={`/${id}`} key={id} className="flex flex-row h-20 w-full gap-2">
                <div className="p-2 border-[1px] border-[#00000040]">
                    <div className="aspect-video h-full relative">
                        <Image src={thumbnail} alt="" fill />
                    </div>
                </div>
                <div className="flex-1 h-full flex flex-col">
                    <h6 className="text-md text-ellipsis w-full overflow-hidden text-blue-600 font-semibold">{title}</h6>
                    <p className="text-xs">by {author.username}</p>
                    <p className="text-xs">{views} views</p>
                </div>
            </Link>))}
        </div>
    )
}