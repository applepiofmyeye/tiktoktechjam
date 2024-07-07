"use client";

import { Typography } from "@/components/typography";
import { Card } from "@/components/ui/card";
import React, { useState } from "react";
import ProductCard from "./_components/ProductCardThisOrThat";
import { CommentSection } from "./_components/CommentSection";
import ProductCards from "./_components/ProductCardThisOrThat";
type Choice = "first" | "second" | "";
export default function ThisOrThatPage() {
  const [choice, setChoice] = useState();
  return (
    <div className="h-[100vh] bg-gradient-to-t from-cyan-200 to-orange-200 px-4 py-8 space-y-4">
      <Typography variant={"title-lg"}>
        <b>@chloelleqi</b> sent you a <br /> This Or That (or None)!
      </Typography>
      <ProductCards />

      <CommentSection />
    </div>
  );
}
