import WorkerRepository from "../repositories/worker.repository.js";

async function getCarga() {
return await WorkerRepository.getCarga();
}

async function getWorkers() {
  return await WorkerRepository.getWorkers();
}

async function getWorkerById(workerId) {
  return await WorkerRepository.getWorkerById(workerId);
}

export default {
    getCarga,
    getWorkers,
    getWorkerById
};
