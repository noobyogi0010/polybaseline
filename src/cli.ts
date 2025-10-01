import * as logger from "./utils/logger";
import dotenv from "dotenv";
import {fetchAllFeatures} from "./utils/api";

// Load .env file once at startup
dotenv.config();

logger.info(`My world is pretty good ${process.env.DEFAULT_GENERATE_MODE}`);

fetchAllFeatures().then((res) => {
    logger.success(res);
})
