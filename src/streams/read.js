import { createReadStream } from "fs";
import { stdout } from "process";

const filePath = "src/streams/files/fileToRead.txt";

const read = async () => {
  const stream = createReadStream(filePath);
  stream.pipe(stdout);
};

await read();
