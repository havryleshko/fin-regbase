import { generatedSiteMetrics } from "./site-metrics.generated";

export const siteMetrics = {
  ...generatedSiteMetrics,
  jurisdictionsLabel: "UK and US",
} as const;
