import type { NextFunction, Request, Response } from "express";
import express from "express";

import { logger as loggerInstance } from "~utils";

const logger = loggerInstance.child({ service: "application-for-payment" });

const router = express.Router();

router.use((_: Request, __: Response, next: NextFunction) => {
  logger.info(`Time of request: ${Date.now()}`);
  next();
});

export { router as AFPRouter };
