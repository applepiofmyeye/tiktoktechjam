import { db } from "@/db"
import { products } from "@/db/schema"

import { eq } from "drizzle-orm"

export const getProduct = async (productId: string) => {
    const imageSrcData = await db.select().from(products).where(eq(products.id, productId))
    console.log("in getImage", imageSrcData);
    
    return imageSrcData.length > 0 ? imageSrcData[0] : null

}