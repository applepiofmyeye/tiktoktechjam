import React from "react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

export default function BottomNavBar() {
  return (
    <div className="sticky bottom-0 bg-white border-t h-[50px]">
      <nav className="h-10">
        <ul className="flex space-x-2">
          <li>
            <Link href="/" className={buttonVariants({ variant: "link" })}>
              home
            </Link>
          </li>
          <li>
            <Link href="/shop" className={buttonVariants({ variant: "link" })}>
              shop
            </Link>
          </li>
          <li>
            <Link href="/add" className={buttonVariants({ variant: "link" })}>
              add
            </Link>
          </li>
          <li>
            <Link
              href="/activity"
              className={buttonVariants({ variant: "link" })}
            >
              activity
            </Link>
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