import BottomNavBar from "@/components/BottomNavBar";
import Image from "next/image";
import * as React from "react";
import Banner from "../_components/Banner";
import ProfileInfo from "../_components/ProfileInfo";
import ProfileTab from "../_components/ProfileTab";
import ShoppingListPage from "../_components/ShoppingListPage";

export default function page() {
  return (
    <div className="">
      <Banner />
      <ProfileInfo />
      <ProfileTab />
      <BottomNavBar />
      <ShoppingListPage />
    </div>
  );
}
