import { Typography } from "@/components/typography";
import { ChevronRight, Earth, Ellipsis, Forward } from "lucide-react";
import React from "react";

export default function OtherSection() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between px-4">
        <div className="flex gap-2 items-center">
          <Earth className="size-4" />
          <Typography variant={"body-md"} weight={"semibold"}>
            {" "}
            Followers can view this post
          </Typography>
        </div>
        <ChevronRight className="size-[18px] text-gray-400" />
      </div>
      <div className="flex justify-between px-4">
        <div className="flex gap-2 items-center">
          <Ellipsis className="size-4" />
          <Typography variant={"body-md"} weight={"semibold"}>
            {" "}
            More options
          </Typography>
        </div>
        <ChevronRight className="size-[18px] text-gray-400" />
      </div>
      <div className="flex justify-between px-4">
        <div className="flex gap-2 items-center">
          <Forward className="size-4" />
          <Typography variant={"body-md"} weight={"semibold"}>
            {" "}
            Share to
          </Typography>
        </div>
        <ChevronRight className="size-[18px] text-gray-400" />
      </div>
    </div>
  );
}
