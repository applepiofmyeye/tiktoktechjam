
"use server"
import { db } from "@/db";
import { shoppingLists } from "@/db/schema";

export async function setNewList (title: string, thumbnail: string, userId: string, slug:string) {
    try {
        const list = await db.insert(shoppingLists).values({
            title: title,
            thumbnail: thumbnail,
            userId: userId,
            slug: slug
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