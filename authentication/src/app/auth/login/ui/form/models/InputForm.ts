import { z } from "zod";

export const formSchema = z.object({
  email: z.string().email("Email is invalid").min(1, "Email is invalid"),
  password: z.string().min(5, "Password must be at least 6 characters"),
});

export type FormValues = z.infer<typeof formSchema>;
