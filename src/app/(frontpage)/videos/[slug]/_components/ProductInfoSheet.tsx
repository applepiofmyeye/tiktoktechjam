import { Typography } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Loader2, ScrollText } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function ProductInfoSheet({
  product,
  onClick,
}: {
  product: {
    name: string;
    price: string;
    imageUrl: string;
    id: string;
  };
  onClick: () => void;
}) {
  return (
    <div className="space-y-4">
      <Image
        src={product.imageUrl}
        alt="product thumbnail"
        width={50}
        height={50}
        className="size-20 rounded-md object-cover"
      />
      <div className="flex justify-between">
        <div className="">
          <Typography variant={"body-md"} weight={"semibold"}>
            {product.name}
          </Typography>
          <Typography variant={"body-sm"}>{product.price}</Typography>
        </div>
        <Button onClick={onClick}>
          <ScrollText className="size-5" />
        </Button>
      </div>
      <Typography variant={"label-sm"} className="text-gray-500">
        Insert description here and reviews or comments
      </Typography>
    </div>
  );
}
