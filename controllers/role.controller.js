import RoleService from "../services/role.service.js";

async function getRoles(req, res, next) {
  try {
    res.send(await RoleService.getRoles());
  } catch (error) {
    next(error);
  }
}

async function getRoleById(req, res, next) {
  try {
    const role = await RoleService.getRoleById(req.params.id);

    if (!role) {
      throw new Error("Role Not Found");
    }

    res.send(role);
  } catch (error) {
    next(error);
  }
}

async function createRole(req, res, next) {
  try {
    let role = req.body;

    if (!role.name) {
      throw new Error("Missing Params");
    }

    role = await RoleService.createRole(role);

    res.send(role);
  } catch (error) {
    next(error);
  }
}

async function updateRole(req, res, next) {
  try {
    let role = req.body;

    if (!role.name) {
      throw new Error("Missing Params");
    }

    role = res.send(await RoleService.updateRole(role));
  } catch (error) {
    next(error);
  }
}

async function deleteRole(req, res, next) {
  try {
    const role = await RoleService.getRoleById(req.params.id);

    if (!role) {
      throw new Error("Role Not Found");
    } else {
      await RoleService.deleteRole(req.params.id);

      res.status(410).end();
    }
  } catch (error) {
    next(error);
  }
}

export default {
  getRoles,
  getRoleById,
  createRole,
  updateRole,
  deleteRole,
};
