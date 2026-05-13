import { generatedSiteMetrics } from "./site-metrics.generated";

export const siteMetrics = {
  ...generatedSiteMetrics,
  jurisdiction: "UK",
} as const;
