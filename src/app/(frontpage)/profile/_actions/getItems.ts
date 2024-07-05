import { db } from "@/db";
import { shoppingLists, users } from "@/db/schema";
import { eq } from "drizzle-orm";



export const getShoppingLists = async (username:string) => {
    try {
        const user = await db.select().from(users)
        console.log(JSON.stringify(user))
        const lists = await db.select().from(shoppingLists).where(eq(shoppingLists.userId, user[0].id))
        return lists

    } catch (e){
        if (e instanceof Error) 
        console.log("error getting shopping lists", e.message);
    }
}