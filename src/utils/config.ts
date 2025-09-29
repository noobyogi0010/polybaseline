import dotenv from "dotenv";

// Load .env file once at startup
dotenv.config();

type Config = {
  DEBUG: boolean;
  BASELINE_API_URL: string;
  POLYFILL_SERVICE_URL: string;
  DEFAULT_SCAN_PATH: string;
  DEFAULT_GENERATE_MODE: "cdn" | "npm";
  DEFAULT_DRY_RUN: boolean;
};

const config: Config = {
  DEBUG: process.env.DEBUG === "true" || process.env.DEBUG === "1",

  // External APIs
  BASELINE_API_URL: process.env.BASELINE_API_URL || "https://api.webstatus.dev/v1/features",
  POLYFILL_SERVICE_URL: process.env.POLYFILL_SERVICE_URL || "https://polyfill.io/v3/polyfill.min.js",

  // CLI Defaults
  DEFAULT_SCAN_PATH: process.env.DEFAULT_SCAN_PATH || "./src",
  DEFAULT_GENERATE_MODE:
    (process.env.DEFAULT_GENERATE_MODE as "cdn" | "npm") || "cdn",
  DEFAULT_DRY_RUN: process.env.DEFAULT_DRY_RUN === "true" || false,
};

export default {config};
