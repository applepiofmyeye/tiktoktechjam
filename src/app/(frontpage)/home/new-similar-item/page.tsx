import { Typography } from "@/components/typography";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

export default function NewItemPage() {
  return (
    <div className="min-h-[100vh] bg-gradient-to-tr from-red-300 to-green-300 px-4 py-8 space-y-8">
      <Typography
        variant={"display-sm"}
        weight={"semibold"}
        className="text-gray-800"
      >
        we found something you might like
      </Typography>
      <div className="flex justify-between gap-x-2">
        <Card className="w-fit p-3 space-y-2 items-center justify-center flex flex-col">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnil3coonqnTWlbwjXgPQoyw3k7d2JMbD_BQ&s"
            alt="blush promo tiktok"
            width={100}
            height={200}
            className="w-full h-auto rounded-xl"
          />
          <div className="">
            <Typography variant={"body-md"} weight={"semibold"}>
              Pixi Blush On The Glow
            </Typography>
            <Typography variant={"label-sm"} className="text-gray-600">
              Not available on TikTok Shop
            </Typography>
          </div>
        </Card>
        <Card className="w-fit p-3 space-y-2 items-center justify-center flex flex-col">
          <Image
            src="https://www.pixibeauty.com/cdn/shop/files/On-the-Glow---BLUSH---CheekTone---01FEB24_large.jpg?v=1706889919"
            alt="blush promo tiktok"
            width={100}
            height={200}
            className="w-full h-auto rounded-xl"
          />
          <div className="">
            <Typography variant={"label-md"} weight={"semibold"}>
              Pixi On-The-Glow Blush
            </Typography>
            <Typography variant={"body-lg"} weight={"semibold"}>
              S$15.99
            </Typography>
            <div className="flex gap-2">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6drfgSAEoya-LpnQDF0Bj-q9r1S8Vzs5Ufg&s"
                alt="pixi logo"
                width={32}
                height={32}
                className="size-6 rounded-full border-2"
              />
              <Typography variant={"label-sm"} className="text-gray-600">
                Now available on TikTok Shop, by Pixi
              </Typography>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
