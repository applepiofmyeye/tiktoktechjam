"use client";
import { Typography } from "@/components/typography";
import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
type Select = "none" | "a" | "b" | "both";

export default function ProductCards() {
  const [selectA, setSelectA] = useState(false);
  const [selectB, setSelectB] = useState(false);
  const onClick = (name: string, option: "a" | "b") => {
    toast({
      title: "You chose:",
      description: name,
    });
    if (option == "a") {
      setSelectA(!selectA);
    } else {
      setSelectB(!selectB);
    }
  };
  return (
    <div className="grid grid-cols-2 gap-2">
      <Card
        className={cn(
          "p-3 cursor-pointer",
          selectA ? "bg-green-200" : "bg-white"
        )}
        onClick={() => onClick("Rhode Lipstick in Raspberry", "a")}
      >
        <div className="space-y-2">
          <div className="w-full">
            <Image
              src="https://p16-va.lemon8cdn.com/tos-maliva-v-ac5634-us/ocbvAUQ9AK2ELAPiyRAZiB8b9OivUQGsDBI0i~tplv-tej9nj120t-origin.webp"
              alt="product thumbnail"
              width={200}
              height={100}
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <Typography variant={"label-md"} className="text-gray-500">
              Rhode Lipstick in Raspberry
            </Typography>
            <Typography variant={"body-md"} weight={"semibold"}>
              S$32.00
            </Typography>
          </div>
        </div>
      </Card>
      <Card
        className={cn(
          "p-3 cursor-pointer",
          selectB ? "bg-green-200" : "bg-white"
        )}
        onClick={() => onClick("Rhode Lipstick in Raspberry", "b")}
      >
        <div className="space-y-2">
          <div className="w-full">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4bKfLDb5Q4BXk0xFsRl9jYCzr0Zo7w8hFUg&s"
              alt="product thumbnail"
              width={200}
              height={100}
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <Typography variant={"label-md"} className="text-gray-500">
              Revlon Super Lustress Glass Shine Lipstick
            </Typography>
            <Typography variant={"body-md"} weight={"semibold"}>
              S$40.00
            </Typography>
          </div>
        </div>
      </Card>
    </div>
  );
}
