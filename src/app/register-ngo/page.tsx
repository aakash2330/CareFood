"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
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
import axios from "axios";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  headquarter: z.string().min(2, {
    message: "Neadquarter must be at least 2 characters.",
  }),
  trustName: z.string().min(2, {
    message: "TrustName must be at least 2 characters.",
  }),
  registeredOfficeAddress: z.string().min(5, {
    message: "RegisteredOfficeAddress must be at least 5 characters.",
  }),
  contact: z.coerce.number().min(10, {
    message: "Contact must be at least 10 characters.",
  }),
});
export default function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      headquarter: "",
      trustName: "",
      registeredOfficeAddress: "",
      contact: 0,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { data } = await axios.post(
      "http://localhost:3000/api/ngo/register",
      {
        ...values,
        contact: values.contact.toString(),
      },
    );
    console.log({ data });
  }

  return (
    <div className="flex flex-col justify-center items-center pt-40 mb-40">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-col justify-center items-center gap-10">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="headquarter"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Headquarter</FormLabel>
                  <FormControl>
                    <Input placeholder="City" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="trustName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Trust Name</FormLabel>
                  <FormControl>
                    <Input placeholder="trust-name" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="registeredOfficeAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Registered Office Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact</FormLabel>
                  <FormControl>
                    <Input placeholder="XXXXXXXXXX" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="bg-[#65d453]" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
