import { writeFile } from "node:fs";
import { access } from "node:fs/promises";
import path from "node:path";

const folderPath = "src/fs/files";
const fileName = "fresh.txt";
const data = "I am fresh and young";

const filePath = path.resolve(folderPath, fileName);

const checkPath = async (destPath) => {
  try {
    await access(path.resolve(destPath));
    return true;
  } catch (e) {
    return false;
  }
};

const create = async () => {
  const isFileExist = await checkPath(filePath);
  if (isFileExist) throw new Error("FS operation failed");

  writeFile(filePath, data, () => {
    console.log("File has been created successfully!");
  });
};

await create();
