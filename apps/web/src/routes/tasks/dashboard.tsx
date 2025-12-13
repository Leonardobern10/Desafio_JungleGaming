// routes/tasks/dashboard.ts
import { createRoute } from "@tanstack/react-router";
import Dashboard from "@/pages/Tasks/Dashboard";
import { TaskRoute } from "./index";

export const TasksDashboardRoute = createRoute({
  getParentRoute: () => TaskRoute,
  path: "dashboard",
  component: Dashboard,
});
