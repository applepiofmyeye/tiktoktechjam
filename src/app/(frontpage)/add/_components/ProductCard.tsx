import { Typography } from "@/components/typography";
import { Option } from "@/components/ui/autocomplete";
import Image from "next/image";
import Link from "next/link";
import React, { useTransition } from "react";

export default function ProductCard({
  setOpen,
  setSelectedProducts,
  selectedProducts,
  product,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedProducts: Option[];
  setSelectedProducts: React.Dispatch<React.SetStateAction<Option[]>>;
  product: Option;
}) {
  const onClick = () => {
    setOpen(false);
    setSelectedProducts([...selectedProducts, product]);
  };

  return (
    <div>
      <div className="space-y-2 cursor-pointer" onClick={onClick}>
        <Image
          src={product.value.imageUrl}
          alt="blush thumbnail"
          height={200}
          width={200}
          className="size-40 rounded-lg border-2 object-cover"
        />
        <div>
          <Typography
            variant={"label-md"}
            className="text-gray-500 text-ellipsis"
          >
            {product.label}
          </Typography>
          <Typography variant={"body-md"} weight={"semibold"}>
            S${product.value.price}
          </Typography>
        </div>
      </div>
    </div>
  );
}
