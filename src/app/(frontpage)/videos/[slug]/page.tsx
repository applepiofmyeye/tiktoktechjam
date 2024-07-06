import React from "react";
import { getProduct } from "./_actions/getVideo";
import Image from "next/image";
import ActivityPanel from "./_components/ActivityPanel";
import { getShoppingLists } from "../../profile/_actions/getItems";
import BottomNavBar from "@/components/BottomNavBar";

type ParamsProps = {
  params: {
    slug: string;
  };
};

export default async function VideoPage({ params }: ParamsProps) {
  const slug = params.slug;
  console.log(slug);

  const product = await getProduct(slug);
  const image = product?.imageUrl;
  const lists = await getShoppingLists("joeylleyi");

  return (
    <div className="w-auto h-[100vh] bg-gray-400 relative">
      <div className="flex items-center h-[100vh]">
        {image && (
          <>
            <Image
              src={image}
              alt="video thumbnail tiktok"
              height={400}
              width={400}
              className="object-cover h-full"
            />
            <ActivityPanel product={product} lists={lists} />
          </>
        )}
      </div>
      <BottomNavBar />
    </div>
  );
}
