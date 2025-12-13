import { createRoute } from "@tanstack/react-router";
import Login from "@/pages/Login";
import { AuthRoute } from ".";

export const LoginRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/login",
  component: Login,
});
