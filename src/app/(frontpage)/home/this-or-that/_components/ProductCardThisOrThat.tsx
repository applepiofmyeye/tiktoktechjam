"use client";
import { Typography } from "@/components/typography";
import { toast } from "@/components/ui/use-toast";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductCard({
  name,
  price,
  imageUrl,
  id,
}: {
  name: string;
  price: string;
  imageUrl: string;
  id: string;
}) {
  const onClick = () => {
    toast({
      title: "You chose:",
      description: name,
    });
  };
  return (
    <div className="space-y-2" onClick={onClick}>
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
