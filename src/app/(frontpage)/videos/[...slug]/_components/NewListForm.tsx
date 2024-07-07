"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { setNewList } from "../_actions/setNewList";
import { getIdCookies } from "@/app/(frontpage)/home/_actions/getUsernameCookies";
import { toast } from "@/components/ui/use-toast";
const NewListFormSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Username must be at least 1 character" }),
});

export default function NewListForm({
  setLists,
  lists,
  imageUrl,
}: {
  setLists: React.Dispatch<
    React.SetStateAction<
      {
        title: string;
        thumbnail: string;
        id: string;
      }[]
    >
  >;
  lists: {
    title: string;
    thumbnail: string;
    id: string;
  }[];
  imageUrl: string;
}) {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof NewListFormSchema>>({
    resolver: zodResolver(NewListFormSchema),
    defaultValues: {
      title: "",
    },
  });
  function onSubmit(data: z.infer<typeof NewListFormSchema>) {
    startTransition(async () => {
      const userId = await getIdCookies();
      const listId = await setNewList(data.title, imageUrl, userId!);
      setLists([
        ...lists,
        {
          title: data.title,
          thumbnail: imageUrl,
          id: listId!,
        },
      ]);
      toast({
        title: `${data.title} has been added to your Shopping Lists!`,
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
            name="title"
            render={({ field }) => (
              <FormItem className="w-[80%]">
                <FormControl>
                  <Input placeholder="Enter a title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-[80%]" disabled={isPending}>
            Create {isPending && <Loader2 className="size-4" />}
          </Button>
        </form>
      </Form>
    </>
  );
}
