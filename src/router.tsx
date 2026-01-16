import { createRouter, createRoute, createRootRoute, Outlet } from "@tanstack/react-router";
import { lazy } from "react";
import { ThemeProvider } from "./components/theme-provider";
import AppShell from "./shell";

const RootRoute = createRootRoute({
  component: () => (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <AppShell>
        <Outlet />
      </AppShell>
    </ThemeProvider>
  ),
});

const HomeRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/",
  component: lazy(() => import("./routes/home")),
});

const ProjekteRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/projekte",
  component: lazy(() => import("./routes/projekte")),
});

const FounderRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/founder",
  component: lazy(() => import("./routes/founder")),
});

const routeTree = RootRoute.addChildren([
  HomeRoute,
  ProjekteRoute,
  FounderRoute,
]);

export const router = createRouter({ routeTree });

export type AppRouter = typeof router;

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
