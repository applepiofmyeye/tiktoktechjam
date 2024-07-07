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
  product,
}: {
  username: string;
  product: {
    name: string;
    price: string;
    imageUrl: string;
    id: string;
  };
}) {
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
          <div className={"space-y-2 cursor-pointer"}>
            <div className="shadow-sm rounded-lg h-40 border-2 items-center flex justify-center">
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
            <NewListForm
              setLists={setLists}
              lists={lists}
              imageUrl={product.imageUrl}
            />
          </div>
        </DialogContent>
      </Dialog>
      {lists.map((list, idx) => (
        <ShoppingListOptionsCard list={list} productId={product.id} key={idx} />
      ))}
    </>
  );
}
