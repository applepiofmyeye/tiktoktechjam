import React from "react";
import DefaultPfp from "/public/default-pfp.png";
import Image from "next/image";
import { Typography } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { ShoppingCart, UserRoundPlus } from "lucide-react";

export default function ProfileInfo() {
  const profileStatistics = [
    {
      key: 0,
      label: "following",
      number: "213",
    },
    {
      key: 1,
      label: "followers",
      number: "1,972",
    },
    {
      key: 2,
      label: "likes",
      number: "2.1K",
    },
  ];
  return (
    <div className="items-center flex flex-col space-y-6 border-b pb-6">
      <div className="space-y-2">
        <div className="size-24">
          <Image
            src={DefaultPfp}
            alt="default profile picture"
            className=" object-cover"
          />
        </div>
        <Typography className="text-center" weight={"semibold"}>
          @j.oeyylee
        </Typography>
      </div>
      <div className="flex space-x-4">
        {profileStatistics.map((stats) => {
          return (
            <div
              key={stats.key}
              className="items-center flex flex-col w-[50px] "
            >
              <Typography variant={"label-md"} weight={"bold"}>
                {stats.number}
              </Typography>
              <Typography variant={"body-sm"}>{stats.label}</Typography>
            </div>
          );
        })}
      </div>
      <div className="flex gap-1 items-center">
        <Button variant={"secondary"}>Edit Profile</Button>
        <Button variant={"secondary"}>Share Profile</Button>
        <Button variant={"secondary"}>
          <UserRoundPlus className="size-5" />
        </Button>
      </div>
      <div className="flex gap-2 items-center">
        <ShoppingCart className="size-4" />
        <Typography variant={"label-md"} weight={"semibold"}>
          Your orders
        </Typography>
      </div>
    </div>
  );
}
