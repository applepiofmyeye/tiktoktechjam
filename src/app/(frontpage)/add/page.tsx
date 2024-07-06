import React from "react";
import EditPostSection from "./_components/EditPostSection";
import LocationSection from "./_components/LocationSection";
import OtherSection from "./_components/OtherSection";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowUp, GalleryVerticalEnd } from "lucide-react";
import AddProductSection from "./_components/AddProductSection";
import BottomNavBar from "@/components/BottomNavBar";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
      <AddProductSection />
      <LocationSection />
      <OtherSection />

      <div className="h-[25vh]" />
      <div className="flex px-4 justify-between">
        <Button variant={"secondary"} className="w-[48%] gap-1">
          <GalleryVerticalEnd className="size-4" />
          Drafts
        </Button>
        <Link
          href="/videos/2e8e18ee-eb05-4bc1-bfbf-698a5c03f8ba"
          className={cn(
            "w-[48%] gap-1",
            buttonVariants({ variant: "destructive" })
          )}
        >
          <ArrowUp className="size-4" />
          Post
        </Link>
      </div>
      <BottomNavBar />
    </div>
  );
}
