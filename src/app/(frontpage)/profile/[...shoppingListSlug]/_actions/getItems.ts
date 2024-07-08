import { db } from "@/db"
import { products, shoppingLists, shoppingListsProducts, users } from "@/db/schema"
import { and, eq } from "drizzle-orm"

export const getProducts = async (slug: string | undefined, userName: string) => {
    if (slug == undefined) {
        return
    } 
    try {
        const user = await db
            .select()
            .from(users)
            .where(eq(users.userName, userName))
            console.log(user);
            
        const shoppingList = await db
            .select()
            .from(shoppingLists)
            .where(and(eq(shoppingLists.userId, user[0].id), eq(shoppingLists.slug, slug)))
            console.log(shoppingList);
    
        const productShoppingList = await db
            .select()
            .from(shoppingListsProducts)
            .where(eq(shoppingListsProducts.shoppingListId, shoppingList[0].id))
            console.log(productShoppingList);
        if (productShoppingList.length == 0) {
            return
        } 

        const productData = await Promise.all(
            productShoppingList.map(async productShoppingListRow => {
              const result =  await db
                .select()
                .from(products)
                .where(eq(products.id, productShoppingListRow.productId));
                return result[0]
            })
          );
          
          return productData

    } catch (e) {
        if (e instanceof Error) {
            console.log(e.message);
            
        }
        console.log("problem getting products");
        
    }
}

export const getListName = async (slug: string, id: string) => {
    const shoppingList = await db.select().from(shoppingLists).where(and(eq(shoppingLists.slug, slug), eq(shoppingLists.userId, id)))
    if (shoppingList.length == 0) return
    const shoppingListName = shoppingList[0].title
    return shoppingListName
}