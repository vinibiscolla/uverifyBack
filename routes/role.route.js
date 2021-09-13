import express from "express";
import RoleController from "../controllers/role.controller.js";

const router = express.Router();

router.get("/", RoleController.getRoles);
router.get("/:id", RoleController.getRoleById);
router.post("/", RoleController.createRole);
router.put("/", RoleController.updateRole);
router.delete("/:id", RoleController.deleteRole);

export default router;
