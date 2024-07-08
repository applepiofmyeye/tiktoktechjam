import { Typography } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import React from "react";
import AddProductForm from "./AddProductForm";

export default function AddNewProduct() {
  return (
    <div className="py-8 space-y-2">
      <Typography variant={"label-md"} className="text-gray-600">
        {
          "Can't find what you're looking for? Add a new product so that others can add into their Shopping Lists."
        }
      </Typography>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add Product</Button>
        </DialogTrigger>
        <DialogContent>
          <AddProductForm />
        </DialogContent>
      </Dialog>
    </div>
  );
}
