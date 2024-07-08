"use server"

import { db } from "@/db"
import { products, videos } from "@/db/schema"

import { eq } from "drizzle-orm"

export const getVideo = async (videoId: string) => {
    try {

        const imageSrcData = await db.select().from(videos).where(eq(videos.id, videoId))
        console.log("in getProduct", imageSrcData);
        
        return imageSrcData.length > 0 ? imageSrcData[0] : null
    } catch (e) {
        if (e instanceof Error) {
            console.log(e.message);
        }
        console.log("error getting product");
        
    }

}