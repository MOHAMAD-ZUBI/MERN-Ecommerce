import { z } from "zod";

export const SignInValidator = z.object({
  email: z
    .string({ required_error: "email filed is required" })
    .email({ message: "please enter a valid email" }),

  password: z
    .string({ required_error: "password field is required" })
    .min(6, { message: "password must be at least 6 digits" }),
});

export type SignInCredentials = z.infer<typeof SignInValidator>;
