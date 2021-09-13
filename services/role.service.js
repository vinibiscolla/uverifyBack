import RoleRepository from "../repositories/role.repository.js";

async function getRoles() {
  return await RoleRepository.getRoles();
}

async function getRoleById(roleId) {
  return await RoleRepository.getRoleById(roleId);
}

async function createRole(role) {
  return await RoleRepository.insertRole(role);
}

async function updateRole(role) {
  return await RoleRepository.updateRole(role);
}

async function deleteRole(roleId) {
  return await RoleRepository.deleteRole(roleId);
}

export default {
  getRoles,
  getRoleById,
  createRole,
  updateRole,
  deleteRole,
};
