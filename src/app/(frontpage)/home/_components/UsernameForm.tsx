"use client";

import React, { useState, useTransition } from "react";
import { z } from "zod";
import { setUser } from "../_actions/setUser";
import { setUsernameCookies } from "../_actions/setUsernameCookies";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Loader2 } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Typography } from "@/components/typography";
import Link from "next/link";
const UsernameFormSchema = z.object({
  username: z
    .string()
    .min(4, { message: "Username must be at least 4 characters" }),
});

export default function UsernameForm({
  initialUsername,
}: {
  initialUsername: string | undefined;
}) {
  const [username, setUsername] = useState("");
  const [showForm, setShowForm] = useState(!initialUsername);
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof UsernameFormSchema>>({
    resolver: zodResolver(UsernameFormSchema),
    defaultValues: {
      username: "",
    },
  });
  function onSubmit(data: z.infer<typeof UsernameFormSchema>) {
    setUsername(data.username);
    setShowForm(false);
    startTransition(async () => {
      const userId = await setUser(data.username);
      await setUsernameCookies(data.username, userId![0].id);
    });
    form.reset();
  }
  return (
    <>
      {initialUsername ? (
        <>
          <Typography variant={"body-lg"} weight={"semibold"}>
            hi @{initialUsername}!
          </Typography>
          <Link
            href={"/videos"}
            className={buttonVariants({ variant: "secondary" })}
          >
            Scroll Tiktok
          </Link>
        </>
      ) : (
        username && (
          <>
            <Typography variant={"body-lg"} weight={"semibold"}>
              hi @{username}
            </Typography>
            <Link
              href={"/videos"}
              className={buttonVariants({ variant: "secondary" })}
            >
              Scroll Tiktok
            </Link>
          </>
        )
      )}
      {showForm && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6 flex flex-col items-center"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter a username" {...field} />
                  </FormControl>
                  <FormDescription>
                    Do not use special characters please. Only alphanumeric.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-[80%]" disabled={isPending}>
              Send {isPending && <Loader2 className="size-4" />}
            </Button>
          </form>
        </Form>
      )}
    </>
  );
}
