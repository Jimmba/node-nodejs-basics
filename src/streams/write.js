import { createWriteStream } from "node:fs";
import { stdin } from "node:process";

const filePath = "src/streams/files/fileToWrite.txt";

const write = async () => {
  const stream = createWriteStream(filePath);
  stdin.pipe(stream);
};

await write();
