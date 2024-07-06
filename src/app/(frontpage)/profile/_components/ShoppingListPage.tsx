"use client";
import React from "react";

import ShoppingListPageCard from "./ShoppingListPageCard";
import { getShoppingLists } from "../_actions/getItems";
import { ScrollArea } from "@/components/ui/scroll-area";
import { usePathname, useRouter } from "next/navigation";

export function titleToSlug(title: string): string {
  // Convert to lowercase
  let slug = title.toLowerCase();

  // Replace special characters with dashes
  slug = slug.replace(/[^a-z0-9]+/g, "-");

  // Remove leading and trailing dashes
  slug = slug.replace(/^-+|-+$/g, "");

  return slug;
}

export default function ShoppingListPage({
  lists,
}: {
  lists:
    | {
        id: string;
        title: string;
        thumbnail: string;
        userId: string;
        slug: string | null;
      }[]
    | undefined;
}) {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <ScrollArea className="p-4">
      <div className="grid grid-cols-2 gap-2 gap-y-4 min-h-[55vh] justify-items-center">
        {lists?.map((list, i) => (
          <ShoppingListPageCard
            key={i}
            list={{ title: list.title, thumbnail: list.thumbnail }}
            onClick={() =>
              router.push(`${pathName}/${titleToSlug(list.title)}`)
            }
          />
        ))}
      </div>
    </ScrollArea>
  );
}
