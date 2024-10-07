import { cpus } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Worker } from "node:worker_threads";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const workerPath = path.resolve(dirname, "worker.js");

const startNumber = 10;

const createWorker = (n) => {
  return new Promise((res) => {
    const worker = new Worker(path.resolve(workerPath));
    worker.postMessage(n);

    worker.on("message", (data) => {
      res({ status: "resolved", data });
      worker.terminate();
    });

    worker.on("error", (e) => {
      res({ status: "error", data: null });
    });
  });
};

const performCalculations = async () => {
  const coresNumber = cpus().length;
  const tasks = [];

  for (let i = 0; i < coresNumber; i += 1) {
    const sendNumber = startNumber + i;
    tasks.push(createWorker(sendNumber));
  }

  const results = await Promise.all(tasks);
  console.log(results);
};

await performCalculations();
