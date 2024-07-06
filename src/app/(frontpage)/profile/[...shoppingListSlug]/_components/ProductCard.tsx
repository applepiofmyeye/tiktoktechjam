import { Typography } from "@/components/typography";
import Image from "next/image";
import React from "react";

export default function ProductCard({
  name,
  price,
  imageUrl,
}: {
  name: string;
  price: string;
  imageUrl: string;
}) {
  return (
    <div className="space-y-2">
      <div className="w-full">
        <Image
          src={imageUrl}
          alt="product thumbnail"
          width={200}
          height={100}
          className="object-cover rounded-lg"
        />
      </div>
      <div>
        <Typography variant={"label-md"} className="text-gray-500">
          {name}
        </Typography>
        <Typography variant={"body-md"} weight={"semibold"}>
          S${price}
        </Typography>
      </div>
    </div>
  );
}
