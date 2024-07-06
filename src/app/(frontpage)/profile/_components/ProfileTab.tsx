import { Clapperboard, Heart, Lock, Repeat2, ScrollText } from "lucide-react";
import React from "react";

export default function ProfileTab() {
  return (
    <div className="px-5 py-2 border-b">
      <nav>
        <ul className="flex justify-between">
          <li>
            <Clapperboard className="size-5 text-gray-400" />
          </li>
          <li>
            <Lock className="size-5 text-gray-400" />
          </li>
          <li>
            <Repeat2 className="size-5 text-gray-400" />
          </li>
          <li>
            <Heart className="size-5 text-gray-400" />
          </li>
          <li>
            <ScrollText className="size-5" />
          </li>
        </ul>
      </nav>
    </div>
  );
}
