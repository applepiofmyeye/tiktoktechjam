import { Typography } from "@/components/typography";
import Image, { StaticImageData } from "next/image";
import React from "react";

export default function ShoppingListPageCard({
  list,
}: {
  list: {
    title: string;
    thumbnail: StaticImageData;
    images: {
      source: string;
    }[];
  };
}) {
  return (
    <div className="space-y-2">
      <Image
        src={list.thumbnail}
        alt="product list cover picture"
        className="shadow-sm rounded-xl size-40 object-cover border-2"
      />
      <Typography className="text-gray-400" variant={"body-sm"}>
        {list.title}
      </Typography>
    </div>
  );
}
