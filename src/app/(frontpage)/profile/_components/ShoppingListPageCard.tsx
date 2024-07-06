"use client";

import { Typography } from "@/components/typography";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function ShoppingListPageCard({
  list,
  slug,
}: {
  list: {
    title: string;
    thumbnail: string;
  };
  slug: string;
}) {
  const pathName = usePathname();
  return (
    <div className="space-y-2">
      <Link href={`${pathName}/${slug}`} className="space-y-2">
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
      </Link>
    </div>
  );
}
