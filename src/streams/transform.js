import { stdin, stdout } from "process";
import { Transform } from "stream";

const transform = async () => {
  const transform = new Transform({
    transform(chunk, encoding, callback) {
      const data = chunk.toString().split("").reverse().join("");
      callback(null, data);
    },
  });

  stdin.pipe(transform).pipe(stdout);
};

await transform();
