import { PriorityTaskType } from "@/types/PriorityTaskType";
import { StatusTaskType } from "@/types/StatusTaskType";
import z from "zod";

export const CreateTaskSchema = z.object({
  title: z.string().min(1, "Informe um titulo."),
  description: z.string().min(1, "Informa uma descrição."),
  status: z.enum(StatusTaskType),
  priority: z.enum(PriorityTaskType),
  assignedEmails: z.array(z.string()).optional(),
  dueDate: z.date().nullable(),
});

export type CreateTaskSchemaType = z.infer<typeof CreateTaskSchema>;
