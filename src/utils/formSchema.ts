import { TypeOf, z } from "zod";

export const formSchema = z
  .object({
    firstName: z.string().min(3, { message: "Minimum 3 Characters" }),
    lastName: z.string().min(3, { message: "Minimum 3 Characters" }),
    email: z.string().email({ message: "Please provide a valid email Id" }),
    number: z
      .string()
      .min(3, { message: "Please provide a valid phone number" }),
    password: z.string().min(4, "Atleast 4 characters"),
    confirmPassword: z.string().min(4, { message: "Atleast 4 characters" }),
    gender: z.string().min(1, { message: "Kindly select your gender" }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Password did not match",
      });
    }
  });

export type FormType = z.infer<typeof formSchema>;
export type ArrayType = FormType[];
