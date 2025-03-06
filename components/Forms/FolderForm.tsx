"use client";

import { Form, FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFolder } from "@/app/actions";
import { Input } from "../ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { folderSchema } from "@/app/utils/zodSchemas";
import { Button } from "../ui/button";

export function FolderForm() {
  const form = useForm<z.infer<typeof folderSchema>>({
    resolver: zodResolver(folderSchema),
    defaultValues: {
      name: "",
      category: undefined,
      description: "",
    },
  });
  console.log("Validation errors:", form.formState.errors);

  const [pending, setPending] = useState(false);
  async function onSubmit(values: z.infer<typeof folderSchema>) {
    try {
      setPending(true);
      await createFolder(values);
      toast.success(`Du har nu skapat ny mapp som heter ${values.name}`);

    } catch (error) {
      if (error instanceof Error && error.message !== "NEXT_REDIRECT") {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setPending(false);
    }
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full descriptio " {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Kategori</FormLabel>
              <FormControl>
                <select
                  {...field}
                  className="border rounded-md p-2 w-full"
                  onChange={(e) => field.onChange(e.target.value || undefined)} // 🔥 Viktigt för att hantera undefined
                >
                  <option value="">Välj kategori</option>
                  <option value="NATURE">NATURE</option>
                  <option value="PORTRAIT">PORTRAIT</option>
                  <option value="CITYSCAPE">CITYSCAPE</option>
                  <option value="ABSTRACT">ABSTRACT</option>
                  <option value="OTHER">OTHER</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={pending}>
          {pending ? "Submitting..." : "Continue"}
        </Button>
      </form>
    </FormProvider>
  );
}
