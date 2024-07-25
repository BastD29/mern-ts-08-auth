import express from "express";
import { getPrivate, login } from "../controllers/auth";

const router = express.Router();

router.post("/login", login);
router.get("/private", getPrivate);

export default router;
