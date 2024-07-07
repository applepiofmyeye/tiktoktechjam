"use client";

import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Typography } from "@/components/typography";
import { Card } from "@/components/ui/card";

const FormSchema = z.object({
  comment: z.string().min(1, {
    message: "Comment must be at least 1 character.",
  }),
});

export function CommentSection() {
  const [comments, setComments] = useState<string[]>([]);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      comment: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setComments([...comments, data.comment]);
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Add a comment..." {...field} />
                </FormControl>
                <FormDescription>
                  Let your friends know what you think!
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Send
          </Button>
        </form>
      </Form>
      <Card className="py-4 px-2 flex flex-col gap-y-2 mb-10">
        <Typography variant={"body-lg"} weight={"semibold"}>
          Comments:
        </Typography>
        {comments.map((comment, idx) => {
          return (
            <div className="border-b py-2" key={idx}>
              <Typography variant={"body-sm"} weight={"semibold"}>
                @joeylleyi
              </Typography>
              <Typography variant={"body-sm"}>{comment}</Typography>
            </div>
          );
        })}
      </Card>
    </>
  );
}
