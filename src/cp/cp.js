import { spawn } from "node:child_process";

const spawnChildProcess = async (args) => {
  spawn("node", ["src/cp/files/script.js", args], {
    stdio: ["inherit", "inherit", "inherit"],
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess("test");
