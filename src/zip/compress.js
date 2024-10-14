import { createReadStream, createWriteStream, read } from "fs";
import { createGzip } from "zlib";

const inputFile = "src/zip/files/fileToCompress.txt";
const outputFile = "src/zip/files/archive.gz";

const compress = async () => {
  const readStream = createReadStream(inputFile);
  const gzipStream = createGzip();
  const writeStream = createWriteStream(outputFile);
  readStream.pipe(gzipStream).pipe(writeStream);
};

await compress();
