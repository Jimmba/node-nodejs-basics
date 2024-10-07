import { createReadStream } from "node:fs";
import { createHash } from "node:crypto";
import { stdout } from "node:process";

const filePath = "src/hash/files/fileToCalculateHashFor.txt";

const calculateHash = async () => {
  const hash = createHash("sha256");
  hash.on("finish", () => {
    stdout.write("\n");
  });

  const input = createReadStream(filePath);
  input.pipe(hash).setEncoding("hex").pipe(stdout);
};

await calculateHash();
