import { db } from "@/db";
import { products } from "@/db/schema";

export async function getAllVideoIds () {
    try {
        const allProducts = await db.select().from(products)
        const allImageIds = allProducts.map(product => product.id)
        return allImageIds

    } catch (e) {
        if (e instanceof Error) {
            console.log(e.message);
            
        }
    }
}