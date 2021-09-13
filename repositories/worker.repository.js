import { promises as fs } from "fs";
const { readFile, writeFile } = fs;

async function getCarga() {
  const data = JSON.parse(await readFile(roleJSONFile));

  return data.role;
}

async function getRoleById(roleId) {
  const roles = await getRoles();
  const role = roles.find(role => role.id == roleId);

  return role;
}



export default {
  getRoles,
  getRoleById,
};
