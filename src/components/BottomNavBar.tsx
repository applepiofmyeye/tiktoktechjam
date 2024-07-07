import React from "react";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";

export default function BottomNavBar() {
  return (
    <div className="sticky bottom-0 bg-white border-t h-[50px] ">
      <nav className="h-10">
        <ul className="flex justify-between px-2">
          <li>
            <Link href="/home" className={buttonVariants({ variant: "link" })}>
              home
            </Link>
          </li>
          <li>
            <Button variant={"link"} disabled>
              shop
            </Button>
          </li>
          <li>
            <Link href="/add" className={buttonVariants({ variant: "link" })}>
              add
            </Link>
          </li>
          <li>
            <Button variant={"link"} disabled>
              activity
            </Button>
          </li>
          <li>
            <Link
              href="/profile"
              className={buttonVariants({ variant: "link" })}
            >
              profile
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
