import { Typography } from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "lucide-react";
import React, { useState } from "react";

export default function AddProductSection() {
  // hardcoded the search function because it is manageable but not necessary for this demo.
  const [value, setValue] = useState("");
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <div className="flex justify-between px-4 cursor-pointer">
            <div className="flex gap-2 items-center">
              <Link className="size-4" />
              <Typography
                variant={"body-lg"}
                weight={"semibold"}
                className="gap-2 flex"
              >
                {" "}
                Link products
                <Badge className="bg-green-200 text-green-700 hover:bg-green-200">
                  new!
                </Badge>
              </Typography>
            </div>
            <div className="w-1" />
          </div>
        </SheetTrigger>
        <SheetContent side={"bottom"} className="w-[46vh]">
          <Input type="search" placeholder="Search any product" value={value} />
        </SheetContent>
      </Sheet>
    </>
  );
}
