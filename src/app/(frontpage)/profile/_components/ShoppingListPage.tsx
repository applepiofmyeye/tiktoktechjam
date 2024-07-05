import Image from "next/image";
import React from "react";

import ShoppingListPageCard from "./ShoppingListPageCard";
import { getShoppingLists } from "../_actions/getItems";

export default async function ShoppingListPage() {
  const lists = await getShoppingLists("joeylleyi");
  return (
    <div className="grid grid-cols-2 gap-2 gap-y-4 p-4 min-h-[55vh]">
      {lists?.map((list, i) => (
        <ShoppingListPageCard
          key={i}
          list={{ title: list.title, thumbnail: list.thumbnail }}
        />
      ))}
    </div>
  );
}
