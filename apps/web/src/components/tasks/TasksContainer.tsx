import { Card, CardContent } from "../ui/card";
import TaskComponent from "../tasks/TaskComponent";
import type { TaskItem } from "@/types/TaskItem";
import PaginationComponent from "./PaginationComponent";
import { useTasksContainer } from "@/hooks/useTasksContainer";
import TaskComponentSkeleton from "../skeletons/TaskComponentSkeleton";
import { ControllerSelect } from "../form/ControllerSelectForm";
import { Separator } from "@radix-ui/react-separator";
import ButtonCardAction from "../dialog/ButtonCardAction";
import { statusOptions } from "@/data/selectStatus.data";
import { orderOptions, priorityOptions } from "@/data/selectPriority.data";

type SearchTitle = {
  searchTitle: string;
};

export default function TasksContainer({ searchTitle }: SearchTitle) {
  const { tasks, loading, control, handleReset } = useTasksContainer({
    searchTitle,
  });

  return (
    <div className="w-full h-full flex flex-col shadow-sm rounded-xl">
      {/* Filtros */}
      <Card className="w-full">
        <div className="px-10 rounded-t-lg flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:w-full">
          {/* Botão Reset */}
          <ButtonCardAction
            onClick={handleReset}
            buttonName={"Redefinir busca"}
            size="lg"
          />

          {/* Selects */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-20">
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
            <ControllerSelect
              name="order"
              control={control}
              label="Ordenar por"
              placeholder="Ordenar"
              values={orderOptions}
            />
          </div>
        </div>

        <Separator
          orientation="horizontal"
          className="my-2 w-full bg-neutral-500/20 h-0.5"
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
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
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
