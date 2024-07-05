import React from "react";

type ParamsProps = {
  params: {
    shoppingListSlug: string;
  };
};

export default function ShoppingListSlugPage({ params }: ParamsProps) {
  const slug = params.shoppingListSlug;
  return <div>{slug}</div>;
}
