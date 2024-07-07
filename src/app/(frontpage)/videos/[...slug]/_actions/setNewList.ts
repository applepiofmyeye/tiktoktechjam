
"use server"
import { titleToSlug } from "@/app/(frontpage)/profile/_components/ShoppingListPage";
import { db } from "@/db";
import { shoppingLists } from "@/db/schema";

export async function setNewList (title: string, thumbnail: string, userId: string) {
    try {
        const list = await db.insert(shoppingLists).values({
            title: title,
            thumbnail: thumbnail,
            userId: userId,
            slug: titleToSlug(title)
        }).returning({
            id: shoppingLists.id
        })
        return list[0].id

    } catch (e) {
        if (e instanceof Error) {
            console.log(e.message);
            
        }
        console.log("error setting new list");
        
    }

}