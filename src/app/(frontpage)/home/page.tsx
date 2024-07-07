"use client";

import BottomNavBar from "@/components/BottomNavBar";
import { Typography } from "@/components/typography";
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const pages = [
    {
      slug: "this-or-that",
      title: "This Or That",
      description:
        "For users: Can't decide on which option to get? Ping your friends with a `This or That (or None)` and let them decide! For Tiktok: User preferences can be derived based on their options of `This or That (or None)`. When users share options to their friends, data of which products they're contemplating between provides insight into what items are similar (option A and B might be both enjoyed by a certain demographic). When users choose for their friends, their preferences can also be saved. ",
    },
    {
      slug: "friend-bday",
      title: "Friend's Birthday",
      description:
        "Finding the perfect gift for a friend can be very difficult at times. To get clothes, what size would fit? To get books, fiction, non-fiction, cookbooks?? It is a real headache. But with Shopping Lists, users can simply share their shopping lists with friends and let them know what is on their wishlist for their special day.",
    },
    {
      slug: "flash-deals",
      title: "Flash Deals",
      description:
        "For users: Want to know when there might be a flash sale for something u've been eyeing? This page pops up when any item you've saved has a flash sale! Remember though: buy it quick before the sale ends! For tiktok: When something sits in a Shopping List for a period of time, there could be `Flash Deals`, which would be displayed on the FYP card. It would encourage people to finally make that purchase after having it on a Shopping List for so long.",
    },
    {
      slug: "new-similar-item",
      title: "New Similar Item",
      description:
        "For Tiktok: Some products are not yet available on Tiktok shop, hence when a similar item is available, there could be a recommendation to let them know that there is something similar on the shop which they might like, and encourage them to get it on tiktok shop.",
    },
  ];
  const router = useRouter();
  return (
    <div className="gap-y-4 flex flex-col items-center px-4 py-6">
      <Typography variant={"title-md"} className="text-center">
        For You Page Cards
      </Typography>
      <Typography variant={"body-sm"} className="text-gray-500">
        Tiktok is currently using data to monitor activity and push different
        content of Tiktok Shop to different users based on their unique
        preferences. For example, someone who is inclined to engage with `Flash
        deals` would be pushed to see those more often while others may not.
        <br />
        <br />
        In the same vein, my idea aims to collect data on what products users
        are drawn to, and push those products to them when they enter the app.
      </Typography>
      <div className="gap-y-8 flex flex-col">
        {pages.map((page, idx) => (
          <div key={idx} className="flex flex-col items-center space-y-2">
            <Typography variant={"title-md"} className="text-center">
              {page.title}
            </Typography>
            <Typography variant={"body-sm"} className="text-gray-500">
              {page.description}
            </Typography>
            <Button
              key={idx}
              className="w-[80%]"
              onClick={() => router.push(`/home/${page.slug}`)}
            >
              Try now!
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
