"use client";

import { Typography } from "@/components/typography";
import { AutoComplete, type Option } from "@/components/ui/autocomplete";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, Loader2, Trash } from "lucide-react";
import { useState, useTransition } from "react";
import ProductCard from "./ProductCard";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import AddNewProduct from "./AddNewProduct";
import { ScrollArea } from "@/components/ui/scroll-area";

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
    value: product,
    label: product.name,
  }));
  const [open, setOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<Option[]>([]);
  const [isPending, startTransition] = useTransition();
  const onClick = (product: Option) => {
    startTransition(() => {
      console.log(JSON.stringify(selectedProducts));
      const indexOfItem = selectedProducts.findIndex((x) => x == product);
      console.log(indexOfItem);

      selectedProducts.splice(indexOfItem, 1);

      setSelectedProducts(selectedProducts);
      console.log(JSON.stringify(selectedProducts));
    });
  };

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
        <SheetContent
          side={"bottom"}
          className="w-[46vh] h-[55vh] overflow-y-auto"
        >
          {/* <Input type="search" placeholder="Search any product" /> */}
          <ScrollArea>
            <AutoComplete
              options={PRODUCTS}
              emptyMessage="No results."
              placeholder="Find any product"
              onValueChange={setValue}
              value={value}
            />
            <div className="mt-6 grid grid-cols-2 gap-2">
              {value?.label && (
                <ProductCard
                  setOpen={setOpen}
                  selectedProducts={selectedProducts}
                  setSelectedProducts={setSelectedProducts}
                  product={value}
                />
              )}
            </div>
            <AddNewProduct />
          </ScrollArea>
        </SheetContent>
      </Sheet>
      {selectedProducts.map((product, idx) => (
        <div key={idx} className="px-6 flex justify-between">
          <div className="flex gap-x-3 items-start">
            <Image
              src={product.value.imageUrl}
              alt="thumbnail list item"
              width={20}
              height={20}
              className="rounded-md size-10 object-cover"
            />
            <div className="gap-y-2">
              <Typography variant={"body-sm"} className="text-gray-400">
                {product.label}
              </Typography>
              <Typography variant={"body-lg"} weight={"semibold"}>
                S${product.value.price}
              </Typography>
            </div>
          </div>
          <Button variant={"link"} onClick={() => onClick(product)}>
            {isPending ? (
              <Loader2 className="size-4" />
            ) : (
              <Trash className="size-4" />
            )}
          </Button>
        </div>
      ))}
    </>
  );
}
