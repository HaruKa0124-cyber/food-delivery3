"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ChevronLeftSquareIcon } from "lucide-react";

const formSchema = z.object({
  email: z.string().email("Invalid email. Use a format like example@email.com."),
  password: z.string().min(8, "Incorrect password. Please try again."),
});

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="h-screen bg-white">
      <div className="flex h-full">
        <div className="h-screen flex justify-center items-center w-1/2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 w-416px max-w-md"
            >
              <div className="text-gray-500 w-9 h-9">
                <ChevronLeftSquareIcon />
              </div>

              <div>
                <h1 className="font-semibold text-[24px] text-[#09090b]">Login</h1>
                <p className="text-[16px] text-[#71717a]">
                  Log in to enjoy your favorite dishes.
                </p>
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                      className="text-[#71717a]"
                        placeholder="Enter your email address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        className="text-[#71717a]"
                        placeholder="Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="text-[14px] text-[#18181b]">Forgot password ?</div>

              <Button
                type="submit"
                style={{ backgroundColor: "#18181b", width: "416px", height: "36px"}}
              >
                Let's Go
              </Button>

              <div className="flex justify-center gap-2">
                <h1 className="text-[#71717a]">Don’t have an account?</h1>
                <h1 className="text-[#2563eb]">Sign up</h1>
              </div>
            </form>
          </Form>
        </div>

        <div className="flex justify-end items-center h-screen w-1/2 pr-20">
          <img
            src="/login.png"
            className="w-856px h-904px rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
