import Image from "next/image";
import React from "react";
import Makeup1 from "/public/makeup1.jpeg";
import Makeup2 from "/public/makeup2.jpeg";
import Makeup3 from "/public/makeup3.jpeg";
import ShoppingListPageCard from "./ShoppingListPageCard";

export default function ShoppingListPage() {
  const shoppingLists = [
    {
      title: "makeup products i'm eyeing",
      thumbnail: Makeup1,
      images: [
        { source: "/public/makeup1.jpeg" },
        { source: "/public/makeup2.jpeg" },
        { source: "/public/makeup3.jpeg" },
        { source: "/public/makeup4.jpeg" },
        { source: "/public/makeup5.jpeg" },
        { source: "/public/makeup6.jpeg" },
      ],
    },
    {
      title: "lipsticks",
      thumbnail: Makeup2,
      images: [
        { source: "/public/makeup5.jpeg" },
        { source: "/public/makeup6.jpeg" },
        { source: "/public/makeup1.jpeg" },
        { source: "/public/makeup2.jpeg" },
      ],
    },
    {
      title: "blushes!!",
      thumbnail: Makeup3,
      images: [
        { source: "/public/makeup1.jpeg" },
        { source: "/public/makeup2.jpeg" },
        { source: "/public/makeup3.jpeg" },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-2 gap-y-4 p-4">
      {shoppingLists.map((list, i) => (
        <ShoppingListPageCard key={i} list={list} />
      ))}
      {shoppingLists.map((list, i) => (
        <ShoppingListPageCard key={i} list={list} />
      ))}
    </div>
  );
}
