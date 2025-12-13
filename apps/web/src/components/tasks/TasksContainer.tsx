import { Card, CardContent } from "../ui/card";
import TaskComponent from "../tasks/TaskComponent";
import type { TaskItem } from "@/types/TaskItem";
import PaginationComponent from "./PaginationComponent";
import { useTasksContainer } from "@/hooks/useTasksContainer";
import TaskComponentSkeleton from "../skeletons/TaskComponentSkeleton";
import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";
import { useAuthStore } from "@/store/useAuthStore";
import { useForm } from "react-hook-form";
import { StatusTaskType } from "@/types/StatusTaskType";
import { PriorityTaskType } from "@/types/PriorityTaskType";
import { ControllerSelect } from "../form/ControllerSelectForm";
import { Separator } from "@radix-ui/react-separator";
import ButtonCardAction from "../dialog/ButtonCardAction";
import { statusOptions } from "@/data/selectStatus.data";
import { priorityOptions } from "@/data/selectPriority.data";

interface FilterFormValues {
  status: StatusTaskType | "";
  priority: PriorityTaskType | "";
}

export default function TasksContainer({
  searchTitle,
}: {
  searchTitle: string;
}) {
  const {
    tasks,
    loading,
    fetchTasks,
    fetchTasksByStatus,
    fetchTasksByTitle,
    fetchTasksByPriority,
  } = useTasksContainer();

  const { isLogged } = useAuthStore();
  const router = useRouter();

  const { control, watch, reset } = useForm<FilterFormValues>({
    defaultValues: { status: "", priority: "" },
  });

  const selectedStatus = watch("status");
  const selectedPriority = watch("priority");

  const notAccess = () => {
    if (!isLogged) router.navigate({ from: "/auth/login" });
  };

  useEffect(() => {
    notAccess();
    const delay = setTimeout(() => {
      if (searchTitle.trim().length > 0) fetchTasksByTitle(searchTitle);
      else fetchTasks();
    }, 400);
    return () => clearTimeout(delay);
  }, [searchTitle]);

  // Effect para status e prioridade
  useEffect(() => {
    if (selectedStatus) fetchTasksByStatus(selectedStatus);
    else fetchTasks();
  }, [selectedStatus]);

  useEffect(() => {
    if (selectedPriority) fetchTasksByPriority(selectedPriority);
    else fetchTasks();
  }, [selectedPriority]);

  const handleReset = () => {
    reset({ status: "", priority: "" });
    fetchTasks();
  };

  return (
    <div className="w-full h-full flex flex-col shadow-sm rounded-xl bg-card">
      {/* Filtros */}
      <Card className="w-full">
        <div className="p-4 rounded-t-lg flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:w-5/6">
          {/* Botão Reset */}
          <ButtonCardAction
            onClick={handleReset}
            buttonName={"Redefinir busca"}
            size="lg"
            full
          />

          {/* Selects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ControllerSelect
              name="status"
              control={control}
              label="Status"
              placeholder="Selecione o status"
              values={statusOptions}
            />
            <ControllerSelect
              name="priority"
              control={control}
              label="Prioridade"
              placeholder="Selecione a prioridade"
              values={priorityOptions}
            />
          </div>
        </div>

        <Separator
          orientation="horizontal"
          className="my-4 w-5/6 bg-neutral-500/20 h-0.5"
        />

        {/* Conteúdo */}
        <CardContent className="flex-1 w-full py-6 px-4">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Array.from({ length: 15 }, (_, i) => (
                <TaskComponentSkeleton key={i} />
              ))}
            </div>
          ) : tasks.length === 0 ? (
            <div className="flex justify-center items-center h-40 text-muted-foreground">
              Nenhuma tarefa encontrada.
            </div>
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {tasks.map((task: TaskItem) => (
                <TaskComponent key={task.id} {...task} />
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      {/* Paginação */}
      <div className="py-4 px-4">
        <PaginationComponent />
      </div>
    </div>
  );
}
