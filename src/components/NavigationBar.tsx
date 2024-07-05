"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

export default function NavigationBar() {
  const router = useRouter();
  return (
    <div>
      <Button onClick={() => router.push("/profile")}>profile</Button>
    </div>
  );
}
