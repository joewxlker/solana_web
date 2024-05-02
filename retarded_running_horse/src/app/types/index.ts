export interface PageProps {
    video: {
        id: number;
        title: string;
        author: {
            video_count: number;
            username: string;
        };
        thumbnail: string;
        video_src: string;
        views: string;
        description: string;
        upload_data: string;
        likes: number;
        dislikes: number;
    }
}