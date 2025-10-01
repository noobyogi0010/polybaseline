import axios from "axios";
import {config} from "./config";
import * as logger from "./logger";

// Simple in-memory cache
const cache: Record<string, any> = {};

/**
 * Fetch features from Baseline API (with query)
 * Example: /?q=Array.prototype.includes
 */
export async function fetchFeatures(query: string) {
  const url = `${config.BASELINE_API_URL}?q=${encodeURIComponent(query)}`;

  // Cache check
  if (cache[url]) {
    logger.debug(`Cache hit for: ${url}`);
    return cache[url];
  }

  try {
    logger.debug(`Fetching features from: ${url}`);
    const response = await axios.get(url);

    // Cache result
    cache[url] = response.data;
    return response.data;
  } catch (err: any) {
    logger.error(`Failed to fetch features for query "${query}": ${err.message}`);
    return null;
  }
}

/**
 * Fetch all baseline features (no query)
 */
export async function fetchAllFeatures() {
  const url = `${config.BASELINE_API_URL}`;

  if (cache[url]) {
    logger.debug("Cache hit for all features");
    return cache[url];
  }

  try {
    logger.debug("Fetching all baseline features...");
    const response = await axios.get(url);
    cache[url] = response.data;
    return response.data;
  } catch (err: any) {
    logger.error(`Failed to fetch all features: ${err.message}`);
    return null;
  }
}
