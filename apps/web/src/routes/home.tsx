import { createRoute } from "@tanstack/react-router";
import { RootRoute } from "./__root";
import Home from "@/pages/Home";

export const HomeRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/",
  component: Home,
});
