import WorkerService from "../services/worker.service.js";

async function getCarga(req, res, next) {
  try {
    res.send(await WorkerService.getCarga());
  } catch (error) {
    next(error);
  }
}

async function getWorkers(req, res, next) {
  try {
    res.send(await WorkerService.getWorkers());
  } catch (error) {
    next(error);
  }
}

async function getWorkerById(req, res, next) {
  try {
    const worker = await WorkerService.getWorkerById(req.params.id);

    if (!worker) {
      throw new Error("Worker Not Found");
    }

    res.send(worker);
  } catch (error) {
    next(error);
  }
}

export default {
  getCarga,
  getWorkers,
  getWorkerById
};
