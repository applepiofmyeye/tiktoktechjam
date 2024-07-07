import { Typography } from "@/components/typography";
import { Card } from "@/components/ui/card";
import React from "react";
import ProductCard from "./_components/ProductCardThisOrThat";
import { CommentSection } from "./_components/CommentSection";

export default function ThisOrThatPage() {
  return (
    <div className="h-[100vh] bg-gradient-to-t from-cyan-200 to-orange-200 px-4 py-6 space-y-4">
      <Typography variant={"title-lg"}>
        <b>@chloelleqi</b> sent you a <br /> This Or That (or None)!
      </Typography>
      <div className="grid grid-cols-2 gap-2">
        <Card className="p-3">
          <ProductCard
            name="Rhode Lipstick in Raspberry"
            imageUrl="https://p16-va.lemon8cdn.com/tos-maliva-v-ac5634-us/ocbvAUQ9AK2ELAPiyRAZiB8b9OivUQGsDBI0i~tplv-tej9nj120t-origin.webp"
            price="32.00"
            id="35bb680c-0eed-4b2f-b59e-c50490d3e029"
          />
        </Card>
        <Card className="p-3">
          <ProductCard
            name="Revlon Super Lustress Glass Shine Lipstick"
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4bKfLDb5Q4BXk0xFsRl9jYCzr0Zo7w8hFUg&s"
            price="40.00"
            id="d8b2f575-2c01-4909-a812-ba24e92eac82"
          />
        </Card>
      </div>
      <CommentSection />
    </div>
  );
}
