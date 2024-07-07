"use server"

import { db } from "@/db"
import { products } from "@/db/schema"

import { eq } from "drizzle-orm"

export const getProduct = async (productId: string) => {
    try {

        const imageSrcData = await db.select().from(products).where(eq(products.id, productId))
        console.log("in getImage", imageSrcData);
        
        return imageSrcData.length > 0 ? imageSrcData[0] : null
    } catch (e) {
        if (e instanceof Error) {
            console.log(e.message);
        }
        console.log("error getting product");
        
    }

}