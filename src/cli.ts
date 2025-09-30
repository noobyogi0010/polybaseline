import * as logger from "./utils/logger";
import dotenv from "dotenv";

// Load .env file once at startup
dotenv.config();

logger.info(`My world is pretty good ${process.env.DEFAULT_GENERATE_MODE}`);
