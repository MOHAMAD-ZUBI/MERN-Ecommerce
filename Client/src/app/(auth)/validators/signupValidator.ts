import { z } from "zod";

export const SignUpValidator = z.object({
  email: z
    .string({ required_error: "email filed is required" })
    .email({ message: "please enter a valid email" }),

  firstName: z
    .string({ required_error: "First Name filed is required" })
    .min(3, { message: "name should have at least 3 characters" }),

  lastName: z
    .string({ required_error: "Last Name filed is required" })
    .min(3, { message: "name should have at least 3 characters" }),

  password: z
    .string({ required_error: "password field is required" })
    .min(6, { message: "password must be at least 6 digits" }),
});

export type SignUpCredentials = z.infer<typeof SignUpValidator>;
