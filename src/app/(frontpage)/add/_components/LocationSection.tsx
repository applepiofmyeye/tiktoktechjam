import { Typography } from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, InfoIcon, MapPin } from "lucide-react";
import React from "react";

export default function LocationSection() {
  const countries = ["Ho Chi Minh City", "Landmark 81", "Binh Thanh"];
  return (
    <div className="px-4 gap-y-4 flex flex-col">
      <div className="flex justify-between items-center">
        <div className="gap-2 flex items-center">
          <MapPin className="size-4" />
          <div className="flex items-baseline gap-1">
            <Typography variant={"body-lg"} weight={"semibold"}>
              Location
            </Typography>

            <InfoIcon className="size-3 text-gray-400" />
          </div>
        </div>
        <ChevronRight className="size-[18px] text-gray-400" />
      </div>
      <div className="flex gap-2">
        {countries.map((country, idx) => (
          <Badge variant={"secondary"} key={idx} className="font-normal">
            {country}
          </Badge>
        ))}
      </div>
    </div>
  );
}
