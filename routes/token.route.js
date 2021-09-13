import express from "express";
import TokenController from "../controllers/token.controller.js";

const router = express.Router();

router.post("/", TokenController.getToken);

export default router;
