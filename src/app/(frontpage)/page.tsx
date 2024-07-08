import BottomNavBar from "@/components/BottomNavBar";
import { Typography } from "@/components/typography";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="h-[100vh] py-4 px-2 gap-y-8 flex flex-col">
        <Typography variant={"display-sm"} weight={"semibold"}>
          welcome to my tiktok techjam project!
        </Typography>
        <div className="flex flex-col gap-y-4">
          <Typography variant={"body-md"} weight={"semibold"}>
            how to navigate this website:
          </Typography>
          <Typography variant={"body-sm"} className="text-gray-600">
            The left hand side of the screen has been designed to simulate a
            phone. <br /> You may use the buttons below to navigate around the
            website, and there are 3 demo flows in the README to follow if you
            would like. <br />
            First, please go to the tab `home` below to set a username.
          </Typography>
          <Link
            href="https://github.com/applepiofmyeye/tiktoktechjam#readme"
            className={buttonVariants({ variant: "default" })}
          >
            Read me! (Demo flows here)
          </Link>
        </div>
      </div>
      <BottomNavBar />
    </div>
  );
}
