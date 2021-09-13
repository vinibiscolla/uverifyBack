import { promises as fs } from "fs";
const { readFile, writeFile } = fs;

async function getWorkers() {
  const data = JSON.parse(await readFile(roleJSONFile));

  return data.role;
}

async function getRoleById(roleId) {
  const roles = await getWorkers();
  const role = roles.find(role => role.id == roleId);

  return role;
}



export default {
  getWorkers,
  getRoleById,
};
