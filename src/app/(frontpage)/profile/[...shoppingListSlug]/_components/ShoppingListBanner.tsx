"use client";
import { Typography } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { getListName } from "../_actions/getItems";

export default function ShoppingListBanner({ title }: { title: string }) {
  const router = useRouter();

  return (
    <div className="w-full">
      <Button
        variant={"link"}
        onClick={() => router.push("/profile")}
        className=""
      >
        Back
      </Button>
      <Typography variant={"display-sm"} className="p-4 text-center">
        {title}
      </Typography>
      <div className="block w-[100px]" />
    </div>
  );
}
