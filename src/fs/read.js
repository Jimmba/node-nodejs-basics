import { access, readFile } from "node:fs/promises";
import path from "node:path";

const folderPath = "src/fs/files";
const fileToRead = "fileToRead.txt";

const checkPath = async (destPath) => {
  try {
    await access(path.resolve(destPath));
    return true;
  } catch (e) {
    return false;
  }
};

const read = async () => {
  const filePath = path.join(folderPath, fileToRead);
  const isFileExist = await checkPath(filePath);
  if (!isFileExist) throw new Error("FS operation failed");

  const data = await readFile(filePath, "utf8");
  console.log(data);
};

await read();
