import { Typography } from "@/components/typography";
import Image from "next/image";
import Link from "next/link";
import React, { useTransition } from "react";

export default function ProductCard({
  setOpen,
  setIsSelected,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const onClick = () => {
    setOpen(false);
    setIsSelected(true);
  };
  return (
    <div>
      <div className="space-y-2 cursor-pointer" onClick={onClick}>
        <Image
          src="https://m.media-amazon.com/images/I/61cVINNFA5L._AC_UF1000,1000_QL80_.jpg"
          alt="blush thumbnail"
          height={200}
          width={200}
          className="size-40 rounded-lg border-2 object-cover"
        />
        <div>
          <Typography variant={"label-md"} className="text-gray-500">
            Pixi Blush
          </Typography>
          <Typography variant={"body-md"} weight={"semibold"}>
            S$15.99
          </Typography>
        </div>
      </div>
    </div>
  );
}
