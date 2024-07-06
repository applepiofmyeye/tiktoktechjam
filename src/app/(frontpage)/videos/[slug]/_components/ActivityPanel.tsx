"use client";
import { Typography } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Bookmark, Heart, MessageCircle, Share2 } from "lucide-react";
import { useState } from "react";
import ProductInfoSheet from "./ProductInfoSheet";
import ShoppingListOptionsCard from "./ShoppingListOptionsCard";

export default function ActivityPanel({
  product,
  lists,
}: {
  product: {
    name: string;
    price: string;
    imageUrl: string;
    id: string;
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
}) {
  const [step, setStep] = useState(1);
  const [open, setIsOpen] = useState(false);
  const onClickStep1 = () => setStep(2);
  const onClickStep2 = () => setStep(3);

  return (
    <div className="absolute right-2 text-white">
      <div className="flex flex-col items-center z-10 space-y-4">
        <Heart className="size-8 stroke-1" />
        <MessageCircle className="size-8 stroke-1" />
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
              <div className="rounded-full flex border-4 border-gray-200 size-10 items-center justify-center">
                <Bookmark className="size-8 stroke-1 text-white" />
              </div>
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="w-[46vh]">
            {step == 1 ? (
              <ProductInfoSheet product={product} onClick={onClickStep1} />
            ) : (
              <div className="space-y-4">
                <Typography variant={"body-lg"} weight={"semibold"}>
                  Add to shopping list
                </Typography>
                <div className="grid grid-cols-2">
                  {lists &&
                    lists.map((list, idx) => (
                      <ShoppingListOptionsCard
                        key={idx}
                        productId={product.id}
                        list={list}
                      />
                    ))}
                </div>
              </div>
            )}
          </SheetContent>
        </Sheet>
        <Share2 className="size-8 stroke-1 " />
      </div>
    </div>
  );
}
