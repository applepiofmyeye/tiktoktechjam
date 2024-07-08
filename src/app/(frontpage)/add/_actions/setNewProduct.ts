"use server"

import { db } from "@/db";
import { products } from "@/db/schema";

export async function setNewProduct(name: string, imageUrl: string, price: string) {
    try {
        await db.insert(products).values({
            name: name,
            imageUrl: imageUrl,
            price: price
        })
    } catch (e) {
        if (e instanceof Error) {
            console.log(e.message);
        }
        console.log("error setting new product");
        
    }

}