import express from "express";
import { login, verify } from "../controllers/auth";

const router = express.Router();

router.post("/login", login);
router.post("/verify", verify);

export default router;
