"use client";

import { Typography } from "@/components/typography";
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

export default function ShoppingListPageCard({
  list,
  onClick,
}: {
  list: {
    title: string;
    thumbnail: string;
  };
  onClick: () => void;
}) {
  return (
    <div className="space-y-2">
      <div onClick={onClick} className="space-y-2 cursor-pointer">
        <Image
          src={list.thumbnail}
          alt="product list cover picture"
          width={100}
          height={100}
          className="shadow-sm rounded-lg size-40 object-cover border-2"
        />
        <Typography className="text-gray-400" variant={"body-sm"}>
          {list.title}
        </Typography>
      </div>
    </div>
  );
}
