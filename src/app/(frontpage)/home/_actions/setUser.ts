"use server";

import { db } from "@/db";
import { users } from "@/db/schema";

   export async function setUser (username: string) {
    try {
        const id = await db.insert(users).values({
            userName: username,
          }).returning({id: users.id});
          return id
    } catch (e) {
        if (e instanceof Error) {
            console.log(e.message);
        }
        console.log("could not set user");
        
    }
   }   