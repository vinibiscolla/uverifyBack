import { promises as fs } from "fs";
const { readFile, writeFile } = fs;

async function getRoles() {
  const data = JSON.parse(await readFile(roleJSONFile));

  return data.role;
}

async function getRoleById(roleId) {
  const roles = await getRoles();
  const role = roles.find(role => role.id == roleId);

  return role;
}

async function insertRole(role) {
  const data = JSON.parse(await readFile(roleJSONFile));

  role = {
    id: data.nextId++,
    name: role.name,
  };
  data.role.push(role);

  await writeFile(roleJSONFile, JSON.stringify(data, null, 2));

  return role;
}

async function updateRole(role) {
  const data = JSON.parse(await readFile(roleJSONFile));
  const roleIndex = data.role.findIndex(findRole => findRole.id == role.id);

  if (roleIndex < 0) {
    throw new Error("Not Found");
  }

  data.role[roleIndex] = role;

  await writeFile(roleJSONFile, JSON.stringify(data, null, 2));

  return data.role[roleIndex];
}

async function deleteRole(roleId) {
  const data = JSON.parse(await readFile(roleJSONFile));
  data.role = data.role.filter(role => role.id != roleId);

  await writeFile(roleJSONFile, JSON.stringify(data, null, 2));
}

export default {
  getRoles,
  getRoleById,
  insertRole,
  updateRole,
  deleteRole,
};
