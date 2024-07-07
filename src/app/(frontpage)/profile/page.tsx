import BottomNavBar from "@/components/BottomNavBar";
import Image from "next/image";
import * as React from "react";
import Banner from "./_components/Banner";
import ProfileInfo from "./_components/ProfileInfo";
import ProfileTab from "./_components/ProfileTab";
import ShoppingListPage from "./_components/ShoppingListPage";
import { getShoppingLists } from "./_actions/getItems";
import { getUsernameCookies } from "../home/_actions/getUsernameCookies";

export default async function Page() {
  const initialUsername = await getUsernameCookies();
  const lists = initialUsername ? await getShoppingLists(initialUsername) : [];

  return (
    <div className="">
      <Banner />
      <React.Suspense>
        <ProfileInfo initialUsername={initialUsername} />
      </React.Suspense>
      <ProfileTab />
      <ShoppingListPage lists={lists} />
      <BottomNavBar />
    </div>
  );
}
