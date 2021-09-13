import { promises as fs } from "fs";
const { readFile, writeFile } = fs;

async function getToken() {
  const data = JSON.parse(await readFile(roleJSONFile));

  return data.role;
}



export default {
  getToken
};
