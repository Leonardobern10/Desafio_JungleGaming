import { errrorsMsg } from "@/errors/errors.message";
import z from "zod";

export const CreateCommentSchema = z.object({
  text: z.string().min(1, errrorsMsg.required("comentário")),
});

export type CreateCommentSchemaType = z.infer<typeof CreateCommentSchema>;
