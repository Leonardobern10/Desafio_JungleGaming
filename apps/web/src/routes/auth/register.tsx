import { createRoute } from "@tanstack/react-router";
import Register from "@/pages/Register";
import { AuthRoute } from ".";

export const RegisterRoute = createRoute({
  getParentRoute: () => AuthRoute,
  path: "/register",
  component: Register,
});
