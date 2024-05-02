import { VideoHeader } from "./video/video_header";
import { Viewport } from "./video/video_player";
import { Description } from "./video/video_description";
import { Comments } from "./video/video_comments";
import { getAllPagesExceptCurrentPage, getPageData } from "./actions/getPageData";
import { Suggestions } from "./video/video_suggestions";

export default function HomePage() {
  const pageData = getPageData(undefined);
  const all_pages = getAllPagesExceptCurrentPage(undefined);
  return (
    <main className="flex-1 w-full max-w-[2000px] m-auto h-full overflow-y-auto">
      <VideoHeader author={pageData?.author} title={pageData?.title}/>
      <div id="suggestions" className="flex flex-col py-1 gap-5">
        <Suggestions all_pages={all_pages} />
      </div>
      <div id="video-content" className="flex flex-col justify-start items-center gap-5">
        <Viewport src={pageData?.video_src ?? ""}/>
        <Description props={pageData}/>
        <Comments/>
      </div>
    </main>
  );
}