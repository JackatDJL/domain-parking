import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "djl.foundation",
      "atheblues.de",
      "hackclub-stade.de",
      "ewf-stade.de",
      "eu.i.posthog.com",
      "eu-assets.i.posthog.com",
    ],
  },
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://eu-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://eu.i.posthog.com/:path*",
      },
    ];
  },
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
