import { access, rename as renamePromise } from "node:fs/promises";
import path from "node:path";

const folderPath = "src/fs/files";
const wrongFileName = "wrongFilename.txt";
const properFileName = "properFilename.md";

const checkPath = async (destPath) => {
  try {
    await access(path.resolve(destPath));
    return true;
  } catch (e) {
    return false;
  }
};

const rename = async () => {
  const wrongFilePath = path.join(folderPath, wrongFileName);
  const isWrongFileExist = await checkPath(wrongFilePath);

  if (!isWrongFileExist) throw new Error("FS operation failed");

  const properFilePath = path.join(folderPath, properFileName);
  const isProperFileExist = await checkPath(properFilePath);
  if (isProperFileExist) throw new Error("FS operation failed");

  await renamePromise(wrongFilePath, properFilePath);
};

await rename();
