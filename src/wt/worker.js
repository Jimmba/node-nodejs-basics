import { parentPort } from "node:worker_threads";

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = (n) => {
  parentPort.on("message", (n) => {
    const calculatedResult = nthFibonacci(n);
    parentPort.postMessage(calculatedResult);
  });
};

sendResult();
