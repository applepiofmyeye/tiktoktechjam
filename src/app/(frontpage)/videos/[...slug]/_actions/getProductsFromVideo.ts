import { db } from "@/db";
import { products, productsToVideos, videos } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getProductsFromVideo(videoId: string) {
    try {
        const allProductsVideoRelationFromVideo = await db.select().from(productsToVideos).where(eq(productsToVideos.videoId, videoId))
        console.log(allProductsVideoRelationFromVideo);
        
        const allProductIds = allProductsVideoRelationFromVideo.map(relation => relation.productId)
        console.log(allProductIds);
        
        const allProducts = allProductIds.map(async id => (await db.select().from(products).where(eq(products.id, id)))[0])
        return Promise.all(allProducts)
    } catch (e) {
        if (e instanceof Error) {
            console.log(e.message);
            
        }
        console.log("errir getting products from video");
        
    }
}