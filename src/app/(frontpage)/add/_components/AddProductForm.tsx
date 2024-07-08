"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

import { toast } from "@/components/ui/use-toast";

import { uploadFile } from "../_actions/uploadImage";
import { setNewProduct } from "../_actions/setNewProduct";

const NewProductFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Product name must be at least 1 character" }),
  price: z.string().min(4, { message: "Price should be in the format: X.XX" }),
});

export default function AddProductForm() {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof NewProductFormSchema>>({
    resolver: zodResolver(NewProductFormSchema),
  });
  function onSubmit(data: z.infer<typeof NewProductFormSchema>) {
    startTransition(async () => {
      const imageUrl = "https://picsum.photos/200/300";
      await setNewProduct(data.name, imageUrl, data.price);
      toast({
        title: `${data.name} has been added to Tiktok!`,
        description: "The product can be reviewed for validity",
      });
      form.reset();
    });
  }
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6 flex flex-col items-center"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-[80%]">
                <FormControl>
                  <Input placeholder="Enter a name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="w-[80%]">
                <FormControl>
                  <Input placeholder="Enter a price" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-[80%] space-x-2"
            disabled={isPending}
          >
            Create {isPending && <Loader2 className="size-4" />}
          </Button>
        </form>
      </Form>
    </>
  );
}
