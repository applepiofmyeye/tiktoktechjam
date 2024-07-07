import { Typography } from "@/components/typography";
import Image from "next/image";
import React from "react";
import { getAllProducts } from "../_actions/getAllProducts";
import ProductCard from "../../profile/[...shoppingListSlug]/_components/ProductCard";
import Masonry from "@mui/lab/Masonry";
import { Card } from "@/components/ui/card";

export default async function FriendBdayPage() {
  const allProducts = await getAllProducts();

  return (
    <div className="h-full gap-y-4 relative flex flex-col bg-gradient-to-tl from-orange-300 to-purple-300 px-4 py-6">
      <div className="gap-y-2 flex flex-col">
        <Typography
          variant={"title-lg"}
          weight={"semibold"}
          className="text-orange-900"
        >
          {"It's Mochi's birthday this week!"}
        </Typography>
        <Typography variant={"label-lg"} className="text-orange-900">
          {"These are some things he's been eyeing..."}
        </Typography>
      </div>
      <div className="flex justify-center">
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
