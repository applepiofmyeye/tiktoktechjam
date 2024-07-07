"use client";

import { Typography } from "@/components/typography";
import { AutoComplete, type Option } from "@/components/ui/autocomplete";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "lucide-react";
import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductListItem from "./ProductListItem";

export default function AddProductSection({
  products,
}: {
  products: {
    id: string;
    name: string;
    price: string;
    imageUrl: string;
  }[];
}) {
  const [value, setValue] = useState<Option>();
  const PRODUCTS = products?.map((product) => ({
    value: product.name.toLowerCase(),
    label: product.name,
  }));
  const [open, setOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  // hardcoded the search function because it is manageable but not necessary for this demo.
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <div className="flex justify-between px-4 cursor-pointer">
            <div className="flex gap-2 items-center">
              <Link className="size-4" />
              <Typography variant={"body-md"} weight={"semibold"}>
                {" "}
                Link products
              </Typography>
              <Badge className="bg-green-200 text-green-700 hover:bg-green-200">
                new!
              </Badge>
            </div>

            <div className="w-1" />
          </div>
        </SheetTrigger>
        <SheetContent side={"bottom"} className="w-[46vh] h-[50vh]">
          {/* <Input type="search" placeholder="Search any product" /> */}
          <div className="">
            <AutoComplete
              options={PRODUCTS}
              emptyMessage="No results."
              placeholder="Find any product"
              onValueChange={setValue}
              value={value}
            />
            <div className="mt-6">
              {value?.label == "Pixi Blush" ? (
                <ProductCard setOpen={setOpen} setIsSelected={setIsSelected} />
              ) : (
                <Typography>
                  No such product found. Try typing `Pixi Blush`
                </Typography>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
      {isSelected && <ProductListItem setIsSelected={setIsSelected} />}
    </>
  );
}
