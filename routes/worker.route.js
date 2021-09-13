import express from "express";
import WorkerController from "../controllers/worker.controller.js";

const router = express.Router();

router.get("/carga", WorkerController.getCarga);
router.get("/", WorkerController.getWorkers);
router.get("/:id", WorkerController.getWorkerById);
// router.post("/", WorkerController.createRole);
// router.put("/", WorkerController.updateRole);
// router.delete("/:id", WorkerController.deleteRole);

export default router;
