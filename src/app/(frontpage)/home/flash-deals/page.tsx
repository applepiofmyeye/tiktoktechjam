import { Typography } from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import React from "react";
import ProductCard from "../../profile/[...shoppingListSlug]/_components/ProductCard";
import { getAllProducts } from "../_actions/getAllProducts";
import Masonry from "@mui/lab/Masonry";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import BottomNavBar from "@/components/BottomNavBar";

export default async function FlashDealPage() {
  const allProducts = await getAllProducts();
  return (
    <div className="min-h-[100vh] px-6 py-8 bg-gradient-to-b from-cyan-200 to-red-300 space-y-4">
      <div className="flex gap-x-4 items-center">
        <Typography
          variant={"display-sm"}
          weight={"semibold"}
          className="text-gray-700"
        >
          Flash Sale
        </Typography>
        <Badge variant={"destructive"} className=" text-nowrap">
          80% off!
        </Badge>
      </div>
      <div className="w-[40%] flex space-x-2 text-white">
        <div className="bg-gray-600 rounded-sm p-2">03</div>
        <div className="bg-gray-600 rounded-sm p-2">21</div>
        <div className="bg-gray-600 rounded-sm p-2">14</div>
      </div>
      <Typography variant={"body-sm"} className="text-gray-600">
        You recently loved these..
      </Typography>
      <div className="w-full flex justify-center">
        {allProducts && (
          <Masonry columns={2} spacing={2}>
            {allProducts.map((product, idx) => (
              <Card key={idx} className="p-3">
                <ProductCard
                  name={product.name}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  id={product.id}
                />
              </Card>
            ))}
          </Masonry>
        )}
      </div>
    </div>
  );
}
