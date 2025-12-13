import type { TaskItem } from "@/types/TaskItem";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import BadgesContainer from "./BadgesContainer";
import TimeTaskComponent from "./TimeTaskComponent";
import { GrTask } from "react-icons/gr";
import { chooseColor } from "@/utils/getPriorityColor";
import { Link } from "@tanstack/react-router";

export default function TaskComponent({
  title,
  dueDate,
  priority,
  description,
  status,
  id,
}: TaskItem) {
  const color = chooseColor(priority);

  return (
    <Card
      className={`transition-all sm:w-5/6 duration-200 hover:shadow-md hover:scale-[1.01] cursor-pointer border border-border/60 rounded-xl ${color.shadow}`}
    >
      <Link to="/tasks/$id" params={{ id }} className="block">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-3">
            <GrTask className={`h-5 w-5 ${color.text}`} />
            <CardTitle className="text-base font-semibold tracking-tight break-all">
              {title}
            </CardTitle>
          </div>

          {description && (
            <CardDescription className="text-sm text-muted-foreground mt-1 line-clamp-2 break-all">
              {description}
            </CardDescription>
          )}
        </CardHeader>

        <CardContent className="pt-4 flex flex-col gap-4">
          {/* Status + Prioridade */}
          <BadgesContainer status={status} priority={priority} />

          {/* Informações */}
          <div className="w-full flex flex-wrap justify-between items-center gap-6">
            <TimeTaskComponent dueDate={dueDate} color={color.text} />
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
