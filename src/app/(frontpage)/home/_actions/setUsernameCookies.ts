"use server"
import { cookies } from "next/headers";

export async function setUsernameCookies (username: string, userId: string) {
    cookies().set("id", userId);
      cookies().set("username", username);
}