import React from "react";
import { getAllVideoIds } from "./_actions/getAllVideoIds";
import VideoPage from "./[...slug]/page";

export default async function VideoHomepage() {
  const allImageIds = await getAllVideoIds();
  return (
    <div>
      {allImageIds?.map((id, index) => (
        <VideoPage
          params={{
            slug: id,
          }}
          key={index}
        />
      ))}
    </div>
  );
}
