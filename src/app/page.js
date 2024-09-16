"use client"
import * as React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import styles from "./page.module.css";
import { cn } from "@/lib/utils";
import {
    Card,
    CardContent,
    CardTitle,
  } from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  username: z.string().min(6).max(6),
  message: "Access code must be 6 characters long.",
})

export default function Home() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    console.log(values);
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      R & C
      </h1>
      <Card className={cn("w-[380px] h-[380px]")}>
        <CardTitle>Welcome</CardTitle>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      </main>
      
    </div>
  );
}
