"use client";

import { Typography } from "@/components/typography";
import Image from "next/image";
import { setProduct } from "../_actions/setShoppingList";
import { useTransition } from "react";
import { Loader2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function ShoppingListOptionsCard({
  list,
  productId,
}: {
  list: {
    id: string;
    title: string;
    thumbnail: string;
  };
  productId: string;
}) {
  const [isPending, startTransition] = useTransition();
  const onClick = () => {
    if (isPending) {
      return;
    }
    startTransition(async () => await setProduct(productId, list.id));
  };
  return (
    <div className="space-y-2">
      <div
        className={isPending ? "space-y-2" : "space-y-2 cursor-pointer"}
        onClick={onClick}
      >
        {isPending ? (
          <div className="shadow-sm rounded-lg size-40 border-2 items-center flex justify-center">
            <Loader2 className="size-10 animate-spin" />
          </div>
        ) : (
          <Image
            src={list.thumbnail}
            alt="product list cover picture"
            width={100}
            height={100}
            className="shadow-sm rounded-lg size-40 object-cover border-2"
          />
        )}
        <Typography className="text-gray-400" variant={"body-sm"}>
          {list.title}
        </Typography>
      </div>
    </div>
  );
}
