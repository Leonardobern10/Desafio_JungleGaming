import { createRoute } from "@tanstack/react-router";
import { RootRoute } from "../__root";
import Auth from "@/pages/Auth";

export const AuthRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/auth",
  component: Auth,
});
