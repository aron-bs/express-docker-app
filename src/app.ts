import type { Request, Response } from "express";
import express from "express";

import { AFPRouter, GrantRecRouter } from "~routers";

const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get("/health", (_: Request, res: Response) => {
  const data = { uptime: process.uptime(), message: "Ok", date: new Date() };
  res.status(200).send(data);
});

app.use("/afp", AFPRouter);
app.use("/gr", GrantRecRouter);

export { app };
