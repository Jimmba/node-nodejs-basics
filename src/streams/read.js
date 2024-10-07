import { createReadStream } from "node:fs";
import { stdout } from "node:process";

const filePath = "src/streams/files/fileToRead.txt";

const read = async () => {
  const stream = createReadStream(filePath);
  stream.on("end", () => {
    stdout.write("\n");
  });
  stream.pipe(stdout);
};

await read();
