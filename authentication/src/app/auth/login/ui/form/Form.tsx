"use client";

import { InputForm } from "@/components/forms";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormValues, formSchema } from "./models";
import { Form } from "@/components/ui/form";

export const FormLogin = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-y-3"
        >
          <InputForm control={form.control} name="email" label="Email" />
          <InputForm control={form.control} name="password" label="Password" />

          <Button type="submit" className="rounded">
            Sign in
          </Button>
        </form>
      </Form>

      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">OR SIGN IN WITH</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>
      <Button variant="outline" className="w-full">
        Google
      </Button>
    </>
  );
};
