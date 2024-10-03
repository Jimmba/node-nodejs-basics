import { access, copyFile, mkdir, readdir } from "node:fs/promises";
import path from "node:path";

const copyFrom = "src/fs/files";
const copyTo = "src/fs/files_copy";

const checkPath = async (destPath) => {
  try {
    await access(path.resolve(destPath));
    return true;
  } catch (e) {
    return false;
  }
};

const copyDirectory = async () => {
  const files = await readdir(copyFrom);
  for (let file of files) {
    const fromPath = path.join(copyFrom, file);
    const toPath = path.join(copyTo, file);

    await copyFile(fromPath, toPath);
  }
};

const copy = async () => {
  const isCopyFromExist = await checkPath(copyFrom);
  if (!isCopyFromExist) throw new Error("FS operation failed");

  const isCopyToExist = await checkPath(copyTo);
  if (isCopyToExist) throw new Error("FS operation failed");

  await mkdir(copyTo);

  await copyDirectory();
};

await copy();
