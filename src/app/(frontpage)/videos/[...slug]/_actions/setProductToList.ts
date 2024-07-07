"use server"

import { db } from "@/db"
import { shoppingListsProducts } from "@/db/schema"

export const setProduct = async (productId: string, shoppingListId: string) => {
    try {
        console.log("in setProduct", productId, shoppingListId);
        
        await db.insert(shoppingListsProducts).values({
            productId: productId,
            shoppingListId: shoppingListId
        })
    } catch (e) {
        if (e instanceof Error) {
            console.log(e.message);
            
        }
        console.log("error setting product to list.");
        
    }
}