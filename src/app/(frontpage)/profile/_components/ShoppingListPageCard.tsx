"use client";

import { Typography } from "@/components/typography";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function titleToSlug(title: string): string {
  // Convert to lowercase
  let slug = title.toLowerCase();

  // Replace special characters with dashes
  slug = slug.replace(/[^a-z0-9]+/g, "-");

  // Remove leading and trailing dashes
  slug = slug.replace(/^-+|-+$/g, "");

  return slug;
}

export default function ShoppingListPageCard({
  list,
}: {
  list: {
    title: string;
    thumbnail: string;
  };
}) {
  const pathName = usePathname();
  const shoppingListSlug = titleToSlug(list.title);
  return (
    <div className="space-y-2">
      <Link href={`${pathName}/${shoppingListSlug}`}>
        <Image
          src={list.thumbnail}
          alt="product list cover picture"
          width={0}
          height={0}
          className="shadow-sm rounded-xl size-40 object-cover border-2"
        />
        <Typography className="text-gray-400" variant={"body-sm"}>
          {list.title}
        </Typography>
      </Link>
    </div>
  );
}
