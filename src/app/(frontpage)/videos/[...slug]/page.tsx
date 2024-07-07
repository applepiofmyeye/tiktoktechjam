import React from "react";
import { getProduct } from "./_actions/getVideo";
import Image from "next/image";
import ActivityPanel from "./_components/ActivityPanel";
import { getShoppingLists } from "../../profile/_actions/getItems";
import BottomNavBar from "@/components/BottomNavBar";
import { getUsernameCookies } from "../../home/_actions/getUsernameCookies";

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
  const username = await getUsernameCookies();

  const lists = username ? await getShoppingLists(username) : [];
  console.log(JSON.stringify(lists));

  return (
    <div className="w-auto h-[100vh] bg-gray-950 relative">
      <div className="flex items-center h-[100vh]">
        {image && (
          <>
            <Image
              src={image}
              alt="video thumbnail tiktok"
              height={400}
              width={400}
              className="object-cover w-full"
            />
            <ActivityPanel
              product={product}
              lists={lists}
              username={username}
            />
          </>
        )}
      </div>
    </div>
  );
}
