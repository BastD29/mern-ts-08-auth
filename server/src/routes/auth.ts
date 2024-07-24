import express from "express";
import { getMe, login, verify } from "../controllers/auth";

const router = express.Router();

router.post("/login", login);
router.get("/verify", verify);
router.get("/me", getMe);

export default router;
