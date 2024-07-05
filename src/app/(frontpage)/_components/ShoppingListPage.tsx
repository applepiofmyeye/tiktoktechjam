import Image from "next/image";
import React from "react";
import Makeup1 from "/public/makeup1.jpeg";
import Makeup2 from "/public/makeup2.jpeg";
import Makeup3 from "/public/makeup3.jpeg";

export default function ShoppingListPage() {
  const shoppingLists = [
    {
      title: "makeup products i'm eyeing",
      images: [
        { source: "/public/makeup1.jpeg" },
        { source: "/public/makeup2.jpeg" },
        { source: "/public/makeup3.jpeg" },
        { source: "/public/makeup4.jpeg" },
        { source: "/public/makeup5.jpeg" },
        { source: "/public/makeup6.jpeg" },
      ],
      setting: [],
    },
    {
      title: "lipsticks",
      images: [
        { source: "/public/makeup5.jpeg" },
        { source: "/public/makeup6.jpeg" },
        { source: "/public/makeup1.jpeg" },
        { source: "/public/makeup2.jpeg" },
      ],
    },
    {
      title: "blushes!!",
      images: [
        { source: "/public/makeup1.jpeg" },
        { source: "/public/makeup2.jpeg" },
        { source: "/public/makeup3.jpeg" },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-2 p-4">
      <div className="col-span-1">
        <Image
          src={Makeup1}
          alt="blush product"
          className="shadow-md rounded-xl size-40 object-cover"
        />

        <Image
          src={Makeup2}
          alt="blush product"
          className="shadow-md rounded-xl size-40 object-cover"
        />
      </div>
      <div className="grid-cols-2">
        <Image
          src={Makeup3}
          alt="blush product"
          className="size-40 rounded-xl shadow-md object-cover"
        />
      </div>
    </div>
  );
}
