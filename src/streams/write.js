import { createWriteStream } from "fs";
import { stdin } from "process";

const filePath = "src/streams/files/fileToWrite.txt";

const write = async () => {
  const stream = createWriteStream(filePath);
  stdin.pipe(stream);
};

await write();
