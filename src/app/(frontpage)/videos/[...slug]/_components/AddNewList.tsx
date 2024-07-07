"use client";

import { Typography } from "@/components/typography";
import { Plus } from "lucide-react";

import React, { useState, useTransition } from "react";
import { setNewList } from "../_actions/setNewList";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import NewListForm from "./NewListForm";
import ShoppingListOptionsCard from "./ShoppingListOptionsCard";

export default function AddNewList({
  username,
  productId,
}: {
  username: string;
  productId: string;
}) {
  const [isPending, startTransition] = useTransition();
  const [title, setTitle] = useState("");
  const onClick = () => {
    startTransition(async () => {
      await setNewList(title, "https://picsum.photos/200/300", username);
    });
  };
  const [lists, setLists] = useState<
    {
      title: string;
      thumbnail: string;
      id: string;
    }[]
  >([]);

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className={isPending ? "space-y-2" : "space-y-2 cursor-pointer"}>
            <div className="shadow-sm rounded-lg size-40 border-2 items-center flex justify-center">
              <Plus className="size-10" />
            </div>
            {
              <Typography className="text-gray-400" variant={"body-sm"}>
                Add a new list
              </Typography>
            }
          </div>
        </DialogTrigger>
        <DialogContent>
          <div className="">
            <NewListForm setLists={setLists} lists={lists} />
          </div>
        </DialogContent>
      </Dialog>
      {lists.map((list, idx) => (
        <ShoppingListOptionsCard list={list} productId={productId} key={idx} />
      ))}
    </>
  );
}
