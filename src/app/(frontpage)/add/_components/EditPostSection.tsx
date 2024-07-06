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
              src="https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/09/vong-deo-tay-van-cleef-arpels-sweet-alhambra-bracelet-vcarf68800-mau-vang-gold-6322d37e43832-15092022142550.jpg"
              alt="bracelet placeholder"
              className="rounded-lg object-cover"
              width={100}
              height={150}
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
