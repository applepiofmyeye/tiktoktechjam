import React from "react";
import { getVideo } from "./_actions/getVideo";
import Image from "next/image";
import ActivityPanel from "./_components/ActivityPanel";
import { getShoppingLists } from "../../profile/_actions/getItems";
import BottomNavBar from "@/components/BottomNavBar";
import { getUsernameCookies } from "../../home/_actions/getUsernameCookies";
import { getProductsFromVideo } from "./_actions/getProductsFromVideo";

type ParamsProps = {
  params: {
    slug: string;
  };
};

export default async function VideoPage({ params }: ParamsProps) {
  const slug = params.slug;
  console.log(slug);

  const video = await getVideo(slug);
  const image = video?.imageUrl;
  const username = await getUsernameCookies();

  const lists = username ? await getShoppingLists(username) : [];
  console.log(JSON.stringify(lists));
  const products = await getProductsFromVideo(video?.id!);

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
              products={products}
              video={video}
              lists={lists}
              username={username}
            />
          </>
        )}
      </div>
    </div>
  );
}
