import { Typography } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function ProductListItem({
  setIsSelected,
}: {
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const onClick = () => {
    setIsSelected(false);
  };
  return (
    <div className="px-6 flex justify-between">
      <div className="flex gap-x-3 ">
        <Image
          src="https://m.media-amazon.com/images/I/61cVINNFA5L._AC_UF1000,1000_QL80_.jpg"
          alt="blush thumbnail list item"
          width={20}
          height={20}
          className="rounded-md w-7 object-cover"
        />
        <div className="gap-y-2">
          <Typography variant={"body-sm"} className="text-gray-400">
            Pixi Blush
          </Typography>
          <Typography variant={"body-lg"} weight={"semibold"}>
            S$15.99
          </Typography>
        </div>
      </div>
      <Button variant={"link"} onClick={onClick}>
        <Trash className="size-4" />
      </Button>
    </div>
  );
}
