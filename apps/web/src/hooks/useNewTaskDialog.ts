import {
  CreateTaskSchema,
  type CreateTaskSchemaType,
} from "@/schema/CreateTaskSchema";
import { saveTask } from "@/services/tasksService";
import { PriorityTaskType } from "@/types/PriorityTaskType";
import { StatusTaskType } from "@/types/StatusTaskType";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

export const useNewTaskDialog = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<CreateTaskSchemaType>({
    defaultValues: {
      title: "",
      description: "",
      status: StatusTaskType.TODO,
      priority: PriorityTaskType.LOW,
      assignedEmails: [],
      dueDate: new Date(),
    },
    resolver: zodResolver(CreateTaskSchema),
  });

  const onSubmit: SubmitHandler<CreateTaskSchemaType> = async (
    data: CreateTaskSchemaType
  ) => {
    await saveTask(data);
    reset();
    toast.success("Tarefa adicionada com sucesso!");
  };

  return { handleSubmit, onSubmit, control, errors, reset };
};
