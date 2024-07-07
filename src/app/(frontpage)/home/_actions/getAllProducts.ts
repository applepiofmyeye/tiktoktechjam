import { db } from "@/db"
import { products } from "@/db/schema"

export const getAllProducts = async () => {
    try{
        const allProducts = await db.select().from(products)
        return allProducts
    } catch (e) {
        if (e instanceof Error) {
            console.log(e.message);
        }
        console.log("error getting all products");
        

    }
}