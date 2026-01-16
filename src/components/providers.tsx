import { useEffect, useMemo } from "react";
import { PostHogProvider as PHProvider, usePostHog } from "posthog-js/react";
import posthog from "posthog-js";
import { Router } from "@tanstack/react-router";

export function PostHogProvider({
  children,
  router,
}: {
  children: React.ReactNode;
  router: Router<any, any>;
}) {
  useEffect(() => {
    posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_KEY ?? "", {
      api_host: "/ingest",
      ui_host: "https://eu.posthog.com",
      capture_exceptions: true,
      debug: import.meta.env.DEV,
    });
  }, []);

  const phClient = useMemo(() => posthog, []);

  return (
    <PHProvider client={phClient}>
      <PostHogPageView router={router} />
      {children}
    </PHProvider>
  );
}

function PostHogPageView({ router }: { router: Router<any, any> }) {
  const posthogClient = usePostHog();

  useEffect(() => {
    const unsub = router.subscribe("onResolved", () => {
      const url = window.location.href;
      posthogClient?.capture("$pageview", { $current_url: url });
    });
    return () => unsub?.();
  }, [router, posthogClient]);

  return null;
}
