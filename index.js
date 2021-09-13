import express from "express";
import winston from "winston";
import swaggerUi from "swagger-ui-express";

import { swaggerSetupDocument } from "./swagger.js";

import roleRouter from "./routes/role.route.js";
import roleWorker from "./routes/worker.route.js";

const app = express();
app.use(express.json());

const { combine, timestamp, label, printf } = winston.format;
const logFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

global.roleJSONFile = "./role.json";
global.worker = []
global.supplier = []

global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "base-api.log" }),
  ],
  format: combine(label({ label: "base-api" }), timestamp(), logFormat),
});

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSetupDocument));

app.use("/role", roleRouter);

app.use("/worker", roleWorker)

app.use((error, req, res, next) => {
  var stack = error.stack;
  logger.error(
    `[${req.method}${req.baseUrl}] ${error.message} at ${stack.split(":")[3]}:${
      stack.split(":")[4]
    }`
  );
  res.status(400).send({ error: error.message });
});

app.listen(4000, async () => {
  logger.info("API Started");
});
