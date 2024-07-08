"use client";
import { Typography } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Bookmark,
  Heart,
  MessageCircle,
  Plus,
  Share2,
  ShoppingBag,
} from "lucide-react";
import { useState, useTransition } from "react";
import ProductInfoSheet from "./ProductInfoSheet";
import ShoppingListOptionsCard from "./ShoppingListOptionsCard";
import AddNewList from "./AddNewList";
import { ScrollArea } from "@/components/ui/scroll-area";
export type Product = {
  name: string;
  price: string;
  imageUrl: string;
  id: string;
};
export default function ActivityPanel({
  products,
  video,
  lists,
  username,
}: {
  products: Product[] | undefined;

  video: {
    id: string;
    description: string;
    imageUrl: string;
  };
  lists:
    | {
        id: string;
        title: string;
        thumbnail: string;
        userId: string;
        slug: string | null;
      }[]
    | undefined;
  username: string | undefined;
}) {
  const [step, setStep] = useState(1);
  const [open, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isPending, startTransition] = useTransition();
  const onClickStep1 = (product: Product) => {
    startTransition(() => {
      setStep(2);
      setSelectedProduct(product);
    });
  };

  return (
    <div className="absolute right-2 text-white">
      <div className="flex flex-col items-center z-10 space-y-4">
        <Heart fill="gray" className="size-8 stroke-2" />
        <MessageCircle fill="gray" className="size-8 stroke-2" />

        <Bookmark fill="gray" className="size-8 stroke-2 text-white" />

        <Sheet
          open={open}
          onOpenChange={(open: boolean) => {
            if (!open) {
              setIsOpen(false);
              setStep(1);
            }
          }}
        >
          <SheetTrigger asChild>
            <Button variant={"link"} onClick={() => setIsOpen(true)}>
              <ShoppingBag
                fill="green"
                className="text-white size-8 stroke-2"
              />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="bottom"
            className="w-[46vh] h-[56vh] overflow-y-auto"
          >
            <ScrollArea>
              {step == 1 ? (
                <div>
                  {products?.map((product, idx) => (
                    <ProductInfoSheet
                      key={idx}
                      product={product}
                      onClick={() => onClickStep1(product)}
                    />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  <Typography variant={"body-lg"} weight={"semibold"}>
                    Add to shopping list
                  </Typography>
                  <div className="grid grid-cols-2 justify-center gap-4">
                    {username && selectedProduct && (
                      <AddNewList video={video} product={selectedProduct} />
                    )}
                    {lists &&
                      selectedProduct &&
                      lists.map((list, idx) => (
                        <ShoppingListOptionsCard
                          key={idx}
                          productId={selectedProduct.id}
                          list={list}
                        />
                      ))}
                    {lists?.length == 0 && !username && (
                      <Typography className="text-gray-600" variant={"body-sm"}>
                        {
                          "Please enter a username in the 'home' page before you continue."
                        }{" "}
                      </Typography>
                    )}
                  </div>
                </div>
              )}
            </ScrollArea>
          </SheetContent>
        </Sheet>
        <Share2 fill="gray" className="size-8 stroke-2 " />
      </div>
    </div>
  );
}
