import { createRoute } from "@tanstack/react-router";
import { TaskRoute } from ".";
import TaskDetails from "@/pages/Tasks/TasksDetails";

export const TaskDetailsRoute = createRoute({
  getParentRoute: () => TaskRoute,
  path: "$id",
  component: TaskDetails,
});
