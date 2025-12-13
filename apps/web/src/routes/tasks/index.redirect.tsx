// routes/tasks/index.redirect.ts
import { createRoute, redirect } from "@tanstack/react-router";
import { TaskRoute } from "./index";

export const TasksIndexRoute = createRoute({
  getParentRoute: () => TaskRoute,
  path: "/",

  beforeLoad: () => {
    throw redirect({
      to: "/tasks/dashboard",
    });
  },
});
