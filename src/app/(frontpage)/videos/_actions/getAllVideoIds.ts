import { db } from "@/db";
import { videos } from "@/db/schema";

export async function getAllVideoIds () {
    try {
        const allVideos = await db.select().from(videos)
        const allVideoIds = allVideos.map(video => video.id)
        return allVideoIds

    } catch (e) {
        if (e instanceof Error) {
            console.log(e.message);
            
        }
    }
}