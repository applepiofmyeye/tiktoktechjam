
"use server"
import { cookies } from "next/headers";

export async function getUsernameCookies () {
    return cookies().get("username")?.value
}

export async function getIdCookies () {
    return cookies().get("id")?.value
}