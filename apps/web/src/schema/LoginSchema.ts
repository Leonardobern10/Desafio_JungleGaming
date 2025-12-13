import { errrorsMsg } from "@/errors/errors.message";
import z from "zod";

export const LoginSchema = z.object({
  email: z.email(errrorsMsg.emailInvalid),
  password: z.string().min(8, errrorsMsg.lengthPassword),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
