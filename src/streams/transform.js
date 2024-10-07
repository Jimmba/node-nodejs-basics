import { stdin, stdout } from "node:process";
import { Transform } from "node:stream";

const transform = async () => {
  const transform = new Transform({
    transform(chunk, encoding, callback) {
      const data = chunk.toString().trim().split("").reverse().join("") + "\n";
      callback(null, data);
    },
  });

  stdin.pipe(transform).pipe(stdout);
};

await transform();
