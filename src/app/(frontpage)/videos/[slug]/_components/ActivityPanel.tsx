"use client";
import { Button } from "@/components/ui/button";
import {
  Bookmark,
  Heart,
  MessageCircle,
  ScrollText,
  Share2,
  ShoppingBasket,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Typography } from "@/components/typography";
import Image from "next/image";
import { setProduct } from "../_actions/setShoppingList";

export default function ActivityPanel({
  product,
}: {
  product: {
    name: string;
    price: string;
    imageUrl: string;
    id: string;
  };
}) {
  const [step, setStep] = useState(1);
  const onClickAddToList = () => setProduct(product.id, "");
  return (
    <div className="absolute right-2 text-white">
      <div className="flex flex-col items-center z-10 space-y-4">
        <Heart className="size-8 stroke-1" />
        <MessageCircle className="size-8 stroke-1" />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"link"}>
              <div className="rounded-full flex border-4 border-violet-500 size-10 items-center justify-center">
                <Bookmark className="size-8 stroke-1" />
              </div>
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="w-[46vh]">
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
                <Button onClick={onClickAddToList}>
                  {<ScrollText className="size-5" />}
                </Button>
              </div>
              <Typography variant={"label-sm"} className="text-gray-500">
                Insert description here and reviews or comments
              </Typography>
            </div>
          </SheetContent>
        </Sheet>
        <Share2 className="size-8 stroke-1 " />
      </div>
    </div>
  );
}
