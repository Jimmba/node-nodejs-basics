import { access, rm } from "node:fs/promises";
import path from "node:path";

const folderPath = "src/fs/files";
const fileToRemove = "fileToRemove.txt";

const checkPath = async (destPath) => {
  try {
    await access(path.resolve(destPath));
    return true;
  } catch (e) {
    return false;
  }
};

const remove = async () => {
  const pathToRemove = path.join(folderPath, fileToRemove);
  const isFileExist = await checkPath(pathToRemove);
  if (!isFileExist) throw new Error("FS operation failed");

  await rm(pathToRemove);
};

await remove();
