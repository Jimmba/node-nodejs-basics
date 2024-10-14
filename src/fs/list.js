import { access, readdir } from "node:fs/promises";
import path from "node:path";

const folderPath = "src/fs/files";

const checkPath = async (destPath) => {
  try {
    await access(path.resolve(destPath));
    return true;
  } catch (e) {
    return false;
  }
};

const list = async () => {
  const isFolderExist = await checkPath(folderPath);
  if (!isFolderExist) throw new Error("FS operation failed");

  const files = await readdir(folderPath);
  console.log(files);
};

await list();
