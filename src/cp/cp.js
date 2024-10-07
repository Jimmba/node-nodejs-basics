import { spawn } from "node:child_process";

const spawnChildProcess = async (args) => {
  const child = spawn("node", ["src/cp/files/script.js", args], {
    stdio: ["inherit", "inherit", "inherit"],
  });

  console.log(`Child process created with PID: ${child.pid}`);

  child.on("exit", (code) => {
    console.log(`Child process exited with code: ${code}`);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess("test");
