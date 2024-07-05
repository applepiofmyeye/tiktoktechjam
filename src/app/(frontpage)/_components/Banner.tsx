import { Typography } from "@/components/typography";
import React from "react";
import { Footprints, Menu } from "lucide-react";

export default function Banner() {
  return (
    <div className="flex justify-between p-4 items-center">
      <div className="block  w-14" />
      <Typography variant={"label-lg"} weight={"semibold"}>
        joey
      </Typography>
      <div className="flex gap-4">
        <Footprints className="size-5" />
        <Menu className="size-5" />
      </div>
    </div>
  );
}
