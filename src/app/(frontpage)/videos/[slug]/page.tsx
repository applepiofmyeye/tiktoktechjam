import React from "react";
import { getProduct } from "./_actions/getVideo";
import Image from "next/image";
import ActivityPanel from "./_components/ActivityPanel";

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

  return (
    <div className="w-auto h-[100vh] flex items-center bg-gray-800 relative">
      {image && (
        <>
          <Image
            src={image}
            alt="video thumbnail tiktok"
            height={400}
            width={400}
            className="object-cover w-full "
          />
          <ActivityPanel product={product} />
        </>
      )}
    </div>
  );
}
