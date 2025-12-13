import { errrorsMsg } from "@/errors/errors.message";
import { z } from "zod";

export const RegisterSchema = z
  .object({
    name: z.string().min(1, errrorsMsg.required("name")),
    email: z.email(errrorsMsg.emailInvalid),
    password: z.string().min(8, errrorsMsg.lengthPassword),
    confirmPassword: z.string().min(8, errrorsMsg.lengthPassword),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: errrorsMsg.passwordsDif,
    path: ["confirmPassword"],
  });

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
