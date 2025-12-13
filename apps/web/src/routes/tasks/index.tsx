// routes/tasks/index.ts
import { createRoute, redirect, Outlet } from "@tanstack/react-router";
import { RootRoute } from "../__root";
import { useAuthStore } from "@/store/useAuthStore";
import { useNotifications } from "@/hooks/useNotifications";

export const TaskRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "tasks",

  beforeLoad: () => {
    const logged = useAuthStore.getState().isLogged; // ✔️ correto

    if (!logged) {
      throw redirect({
        to: "/auth/login",
      });
    }
  },

  component: () => {
    useNotifications();
    return <Outlet />;
  },
});
