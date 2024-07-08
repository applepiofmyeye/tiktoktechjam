import { Typography } from "@/components/typography";
import React from "react";
import { getListName, getProducts } from "./_actions/getItems";
import ProductCard from "./_components/ProductCard";
import Masonry from "@mui/lab/Masonry";
import { Button } from "@/components/ui/button";
import ShoppingListBanner from "./_components/ShoppingListBanner";
import {
  getIdCookies,
  getUsernameCookies,
} from "../../home/_actions/getUsernameCookies";

type ParamsProps = {
  params: {
    shoppingListSlug: string;
  };
};

export default async function ShoppingListSlugPage({ params }: ParamsProps) {
  const slug = params.shoppingListSlug;
  const id = await getIdCookies();
  const username = await getUsernameCookies();
  const products = await getProducts(slug, username!);
  const title = await getListName(slug, id!);
  console.log(products);

  return (
    <div className="flex flex-col p-4 items-center space-y-6 h-[100vh]">
      {title && <ShoppingListBanner title={title} />}
      <div className="w-full flex justify-center">
        {products && (
          <Masonry columns={2} spacing={2} sequential>
            {products.map((product, idx) => (
              <ProductCard
                key={idx}
                name={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
                id={product.id}
              />
            ))}
          </Masonry>
        )}
      </div>
    </div>
  );
}
