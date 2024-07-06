import { db } from "@/db"
import { shoppingLists, shoppingListsProducts } from "@/db/schema"

export const setProduct = async (productId: string, shoppingListId: string) => {
    db.insert(shoppingListsProducts).values({
        productId: productId,
        shoppingListId: shoppingListId
    })
}