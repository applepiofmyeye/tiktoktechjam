import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { AtSign, Hash } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function EditPostSection() {
  return (
    <div>
      <div className="border-b p-4">
        <div className="flex justify-between h-[15vh] ">
          <textarea
            className="resize-none focus:outline-none"
            placeholder="Add description..."
          />
          <div className="w-[20%] h-auto">
            <Image
              src="https://picsum.photos/200/300"
              alt="placeholder image"
              className="rounded-lg object-cover size-24"
              width={50}
              height={50}
            />
          </div>
        </div>
        <div className="flex gap-x-2">
          <Badge variant={"secondary"}>
            <Hash className="size-3" /> Hashtags
          </Badge>
          <Badge variant={"secondary"}>
            <AtSign className="size-3" /> Mentions
          </Badge>
        </div>
      </div>
    </div>
  );
}
