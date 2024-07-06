import React from "react";
import EditPostSection from "./_components/EditPostSection";
import LocationSection from "./_components/LocationSection";
import OtherSection from "./_components/OtherSection";
import { Button } from "@/components/ui/button";
import { ArrowUp, GalleryVerticalEnd } from "lucide-react";
import AddProductSection from "./_components/AddProductSection";

export default function Page() {
  return (
    <div className="h-[100vh] space-y-6">
      {/* description photo thumbnail
            hashtags mention
            
            location
            followers can view this pose
            more options
            share to logos
            */}
      <EditPostSection />
      <LocationSection />
      <OtherSection />

      <AddProductSection />

      <div className="h-[30vh]" />
      <div className="flex px-4 justify-between">
        <Button variant={"secondary"} className="w-[48%] gap-1">
          <GalleryVerticalEnd className="size-4" />
          Drafts
        </Button>
        <Button variant={"destructive"} className="w-[48%] gap-1">
          <ArrowUp className="size-4" />
          Post
        </Button>
      </div>
    </div>
  );
}
