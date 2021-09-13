import express from "express";
import SupplierController from "../controllers/supplier.controller.js";

const router = express.Router();

router.get("/", SupplierController.getSupplier);
router.get("/:id", SupplierController.getSupplierById);
router.get("/fg", SupplierController.getSupplierFG);
router.get("/carga", SupplierController.getCarga);

export default router;
