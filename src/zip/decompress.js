import { createReadStream, createWriteStream, read } from "fs";
import { createGunzip } from "zlib";

const inputFile = "src/zip/files/archive.gz";
const outputFile = "src/zip/files/fileToCompress.txt";

const decompress = async () => {
  const readStream = createReadStream(inputFile);
  const gzipStream = createGunzip();
  const writeStream = createWriteStream(outputFile);
  readStream.pipe(gzipStream).pipe(writeStream);
};

await decompress();
