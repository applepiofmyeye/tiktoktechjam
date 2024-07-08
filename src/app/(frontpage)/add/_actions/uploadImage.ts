"use server";
import fs from "node:fs/promises";
import { revalidatePath } from "next/cache";

export async function uploadFile(file: File) {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  await fs.writeFile(`./public/uploads/${file.name}`, buffer);
  revalidatePath("/add")
  return `./public/uploads/${file.name}`
}